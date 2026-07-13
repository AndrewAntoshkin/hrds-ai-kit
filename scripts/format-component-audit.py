#!/usr/bin/env python3
"""Format HRDS component audit XLSX for fast triage.

This intentionally uses only Python stdlib because the local environment may
not have openpyxl/xlsxwriter installed.
"""

from __future__ import annotations

import html
import posixpath
import shutil
from collections import Counter
from pathlib import Path
from tempfile import NamedTemporaryFile
from zipfile import ZIP_DEFLATED, ZipFile
from xml.etree import ElementTree as ET


ROOT = Path(__file__).resolve().parent.parent
WORKBOOK = ROOT / "exports" / "hrds-components-audit.xlsx"

NS = {
    "a": "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
    "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
}
REL_NS = "http://schemas.openxmlformats.org/officeDocument/2006/relationships"


def col_name(index: int) -> str:
    out = ""
    while index:
        index, rem = divmod(index - 1, 26)
        out = chr(65 + rem) + out
    return out


def col_num(ref: str) -> int:
    letters = "".join(ch for ch in ref if ch.isalpha())
    value = 0
    for ch in letters:
        value = value * 26 + ord(ch.upper()) - 64
    return value


def cell_ref(row: int, col: int) -> str:
    return f"{col_name(col)}{row}"


def xml_text(value: object) -> str:
    return html.escape("" if value is None else str(value), quote=True)


def load_shared_strings(zip_file: ZipFile) -> list[str]:
    try:
        root = ET.fromstring(zip_file.read("xl/sharedStrings.xml"))
    except KeyError:
        return []
    values: list[str] = []
    for item in root.findall("a:si", NS):
        values.append("".join(t.text or "" for t in item.findall(".//a:t", NS)))
    return values


def cell_value(cell: ET.Element, shared_strings: list[str]) -> str:
    if cell.attrib.get("t") == "inlineStr":
        return "".join(t.text or "" for t in cell.findall(".//a:t", NS))
    value = cell.find("a:v", NS)
    if value is None:
        return ""
    raw = value.text or ""
    if cell.attrib.get("t") == "s":
        return shared_strings[int(raw)]
    return raw


def workbook_sheet_paths(zip_file: ZipFile) -> list[tuple[str, str]]:
    workbook = ET.fromstring(zip_file.read("xl/workbook.xml"))
    rels = ET.fromstring(zip_file.read("xl/_rels/workbook.xml.rels"))
    rel_map = {rel.attrib["Id"]: rel.attrib["Target"] for rel in rels}
    sheets: list[tuple[str, str]] = []
    sheets_node = workbook.find("a:sheets", NS)
    if sheets_node is None:
        return sheets
    for sheet in sheets_node:
        name = sheet.attrib["name"]
        rel_id = sheet.attrib[f"{{{REL_NS}}}id"]
        target = rel_map[rel_id].lstrip("/")
        if not target.startswith("xl/"):
            target = posixpath.normpath("xl/" + target)
        sheets.append((name, target))
    return sheets


def read_sheet(zip_file: ZipFile, path: str, shared_strings: list[str]) -> list[list[str]]:
    root = ET.fromstring(zip_file.read(path))
    rows: list[list[str]] = []
    for row in root.findall(".//a:sheetData/a:row", NS):
        values: dict[int, str] = {}
        for cell in row.findall("a:c", NS):
            values[col_num(cell.attrib["r"])] = cell_value(cell, shared_strings)
        if values:
            rows.append([values.get(i, "") for i in range(1, max(values) + 1)])
    return rows


def load_workbook_rows(path: Path) -> dict[str, list[list[str]]]:
    with ZipFile(path) as zip_file:
        shared_strings = load_shared_strings(zip_file)
        return {
            name: read_sheet(zip_file, sheet_path, shared_strings)
            for name, sheet_path in workbook_sheet_paths(zip_file)
        }


def row_dicts(rows: list[list[str]]) -> list[dict[str, str]]:
    if not rows:
        return []
    headers = rows[0]
    out: list[dict[str, str]] = []
    for row in rows[1:]:
        padded = row + [""] * (len(headers) - len(row))
        out.append(dict(zip(headers, padded)))
    return out


def priority_and_action(row: dict[str, str]) -> tuple[str, str, str, str]:
    match_status = row.get("match_status", "")
    status_drift = row.get("status_drift", "")
    props_drift = row.get("props_drift", "")
    figma_status = row.get("figma_status", "")
    code_status = row.get("code_status", "")

    if "deprecated" in status_drift:
        return (
            "P0",
            "status conflict",
            "Figma + Storybook/code",
            "Синхронизировать lifecycle: либо вернуть компонент в Figma как active, либо пометить/мигрировать Storybook/code как deprecated.",
        )
    if match_status == "figma_only":
        priority = "P1" if figma_status == "active" else "P2"
        return (
            priority,
            "figma only",
            "Storybook/code mapping",
            "Решить судьбу компонента из Figma: добавить реализацию/story, связать с существующим кодом или явно пометить как WIP/deprecated.",
        )
    if match_status == "code_only":
        priority = "P1" if code_status in {"active", "current"} else "P2"
        return (
            priority,
            "code only",
            "Figma library",
            "Проверить, нужен ли компонент в дизайн-библиотеке: добавить/связать Figma component или отметить как code-only/internal.",
        )
    if status_drift:
        return (
            "P1",
            "status drift",
            "Figma + Storybook/code",
            "Синхронизировать статусы: Figma WIP/active должен совпадать с тем, что уже доступно в Storybook/code.",
        )
    if props_drift == "Figma props present, code props missing in index":
        return (
            "P1",
            "missing code props",
            "Storybook/code docs",
            "Дописать props/API в индекс или документацию, иначе нельзя проверить соответствие Figma variants к code props.",
        )
    if props_drift and props_drift not in {"ok", "no props on either side"}:
        return (
            "P2",
            "props drift",
            "Figma props / code API",
            "Сверить варианты и значения: переименовать Figma property/value, добавить code prop или зафиксировать mapping как исключение.",
        )
    return (
        "P3",
        "verify",
        "manual review",
        "Быстро проверить вручную, явного критичного расхождения в индексе нет.",
    )


def build_fix_plan(all_rows: list[dict[str, str]]) -> list[dict[str, str]]:
    plan: list[dict[str, str]] = []
    for row in all_rows:
        priority, issue_type, fix_area, action = priority_and_action(row)
        actionable = (
            row.get("match_status") != "matched"
            or bool(row.get("status_drift"))
            or row.get("props_drift") not in {"", "ok", "no props on either side"}
        )
        if not actionable:
            continue
        details = "; ".join(
            part
            for part in [row.get("status_drift", ""), row.get("props_drift", ""), row.get("notes", "")]
            if part
        )
        plan.append(
            {
                "priority": priority,
                "component": row.get("component", ""),
                "issue_type": issue_type,
                "fix_area": fix_area,
                "recommended_action": action,
                "details": details,
                "figma_status": row.get("figma_status", ""),
                "code_status": row.get("code_status", ""),
                "match_status": row.get("match_status", ""),
                "figma_page": row.get("figma_page", ""),
                "figma_link": row.get("figma_link", ""),
                "storybook_title": row.get("storybook_title", ""),
                "storybook_link": row.get("storybook_link", ""),
                "code_folder": row.get("code_folder", ""),
                "figma_props": row.get("figma_props", ""),
                "code_props": row.get("code_props", ""),
            }
        )
    priority_order = {"P0": 0, "P1": 1, "P2": 2, "P3": 3}
    return sorted(
        plan,
        key=lambda r: (
            priority_order.get(r["priority"], 9),
            r["issue_type"],
            r["component"].lower(),
        ),
    )


def build_summary(plan: list[dict[str, str]], all_rows: list[dict[str, str]]) -> list[list[str]]:
    by_priority = Counter(row["priority"] for row in plan)
    by_issue = Counter(row["issue_type"] for row in plan)
    by_match = Counter(row.get("match_status", "") for row in all_rows)
    rows = [
        ["HRDS Components Audit — что фиксить", ""],
        ["Как читать", "Начинай с листа Fix Plan: он отсортирован по priority и показывает область фикса."],
        ["P0", "Lifecycle конфликт: deprecated/active расходятся между Figma и Storybook/code."],
        ["P1", "Блокирующие пробелы: компонент есть только с одной стороны, WIP уже active, нет API props."],
        ["P2", "Расхождения props/variants или менее срочные Figma-only элементы."],
        ["P3", "Ручная проверка, низкий риск."],
        ["", ""],
        ["Actionable rows", str(len(plan))],
        ["All components", str(len(all_rows))],
        ["Matched", str(by_match.get("matched", 0))],
        ["Figma only", str(by_match.get("figma_only", 0))],
        ["Code only", str(by_match.get("code_only", 0))],
        ["", ""],
        ["By priority", ""],
    ]
    rows.extend([[key, str(by_priority.get(key, 0))] for key in ["P0", "P1", "P2", "P3"]])
    rows.append(["", ""])
    rows.append(["By issue type", ""])
    rows.extend([[key, str(count)] for key, count in by_issue.most_common()])
    return rows


STYLE_NORMAL = 0
STYLE_HEADER = 1
STYLE_P0 = 2
STYLE_P1 = 3
STYLE_P2 = 4
STYLE_P3 = 5
STYLE_TITLE = 6


def style_for_row(sheet_name: str, row: list[str], row_index: int, headers: list[str]) -> int:
    if row_index == 1:
        return STYLE_HEADER
    if sheet_name != "Fix Plan" or "priority" not in headers:
        return STYLE_NORMAL
    priority = row[headers.index("priority")] if len(row) > headers.index("priority") else ""
    return {
        "P0": STYLE_P0,
        "P1": STYLE_P1,
        "P2": STYLE_P2,
        "P3": STYLE_P3,
    }.get(priority, STYLE_NORMAL)


def sheet_xml(sheet_name: str, rows: list[list[str]], widths: dict[int, float]) -> str:
    max_col = max((len(row) for row in rows), default=1)
    max_row = max(len(rows), 1)
    dimension = f"A1:{cell_ref(max_row, max_col)}"
    headers = rows[0] if rows else []

    col_xml = []
    for col in range(1, max_col + 1):
        width = widths.get(col, 18)
        col_xml.append(f'<col min="{col}" max="{col}" width="{width}" customWidth="1"/>')

    row_xml = []
    for row_index, row in enumerate(rows, 1):
        height = 28 if row_index == 1 else 54
        cells = []
        row_style = style_for_row(sheet_name, row, row_index, headers)
        for col_index in range(1, max_col + 1):
            value = row[col_index - 1] if col_index <= len(row) else ""
            style = row_style
            if sheet_name == "Summary" and row_index == 1:
                style = STYLE_TITLE
            if value:
                cells.append(
                    f'<c r="{cell_ref(row_index, col_index)}" t="inlineStr" s="{style}">'
                    f"<is><t>{xml_text(value)}</t></is></c>"
                )
            else:
                cells.append(f'<c r="{cell_ref(row_index, col_index)}" s="{style}"/>')
        row_xml.append(f'<row r="{row_index}" ht="{height}" customHeight="1">{"".join(cells)}</row>')

    panes = ""
    if rows:
        panes = (
            '<sheetViews><sheetView workbookViewId="0">'
            '<pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/>'
            '<selection pane="bottomLeft" activeCell="A2" sqref="A2"/>'
            "</sheetView></sheetViews>"
        )
    auto_filter = f'<autoFilter ref="{dimension}"/>' if max_row > 1 and sheet_name != "Summary" else ""
    return (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
        '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" '
        'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">'
        f"<dimension ref=\"{dimension}\"/>"
        f"{panes}"
        f"<cols>{''.join(col_xml)}</cols>"
        f"<sheetData>{''.join(row_xml)}</sheetData>"
        f"{auto_filter}"
        "</worksheet>"
    )


def styles_xml() -> str:
    return """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <fonts count="3">
    <font><sz val="11"/><name val="Arial"/></font>
    <font><b/><color rgb="FFFFFFFF"/><sz val="11"/><name val="Arial"/></font>
    <font><b/><sz val="14"/><name val="Arial"/></font>
  </fonts>
  <fills count="7">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FF1F2937"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FFFEE2E2"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FFFFEDD5"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FFFEF9C3"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FFEFF6FF"/></patternFill></fill>
  </fills>
  <borders count="2">
    <border><left/><right/><top/><bottom/><diagonal/></border>
    <border>
      <left style="thin"><color rgb="FFE5E7EB"/></left>
      <right style="thin"><color rgb="FFE5E7EB"/></right>
      <top style="thin"><color rgb="FFE5E7EB"/></top>
      <bottom style="thin"><color rgb="FFE5E7EB"/></bottom>
      <diagonal/>
    </border>
  </borders>
  <cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>
  <cellXfs count="7">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyAlignment="1"><alignment vertical="top" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="1" fillId="2" borderId="1" xfId="0" applyFill="1" applyAlignment="1"><alignment vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="0" fillId="3" borderId="1" xfId="0" applyFill="1" applyAlignment="1"><alignment vertical="top" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="0" fillId="4" borderId="1" xfId="0" applyFill="1" applyAlignment="1"><alignment vertical="top" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="0" fillId="5" borderId="1" xfId="0" applyFill="1" applyAlignment="1"><alignment vertical="top" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="0" fillId="6" borderId="1" xfId="0" applyFill="1" applyAlignment="1"><alignment vertical="top" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="2" fillId="0" borderId="0" xfId="0" applyAlignment="1"><alignment vertical="center" wrapText="1"/></xf>
  </cellXfs>
  <cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>
</styleSheet>"""


def workbook_xml(sheet_names: list[str]) -> str:
    sheets = []
    for idx, name in enumerate(sheet_names, 1):
        sheets.append(
            f'<sheet name="{xml_text(name)}" sheetId="{idx}" r:id="rId{idx}"/>'
        )
    return (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
        '<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" '
        'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">'
        '<bookViews><workbookView xWindow="0" yWindow="0" windowWidth="20000" windowHeight="12000"/></bookViews>'
        f"<sheets>{''.join(sheets)}</sheets>"
        "</workbook>"
    )


def workbook_rels_xml(sheet_names: list[str]) -> str:
    rels = []
    for idx, _ in enumerate(sheet_names, 1):
        rels.append(
            f'<Relationship Id="rId{idx}" '
            'Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" '
            f'Target="worksheets/sheet{idx}.xml"/>'
        )
    style_id = len(sheet_names) + 1
    rels.append(
        f'<Relationship Id="rId{style_id}" '
        'Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" '
        'Target="styles.xml"/>'
    )
    return (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
        '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
        f"{''.join(rels)}"
        "</Relationships>"
    )


def content_types_xml(sheet_names: list[str]) -> str:
    overrides = [
        '<Override PartName="/xl/workbook.xml" '
        'ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>',
        '<Override PartName="/xl/styles.xml" '
        'ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>',
        '<Override PartName="/docProps/core.xml" '
        'ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>',
        '<Override PartName="/docProps/app.xml" '
        'ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/>',
    ]
    for idx, _ in enumerate(sheet_names, 1):
        overrides.append(
            f'<Override PartName="/xl/worksheets/sheet{idx}.xml" '
            'ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>'
        )
    return (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
        '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">'
        '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>'
        '<Default Extension="xml" ContentType="application/xml"/>'
        f"{''.join(overrides)}"
        "</Types>"
    )


def root_rels_xml() -> str:
    return """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/>
</Relationships>"""


def app_xml(sheet_names: list[str]) -> str:
    vector = "".join(f"<vt:lpstr>{xml_text(name)}</vt:lpstr>" for name in sheet_names)
    return (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
        '<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" '
        'xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes">'
        "<Application>Codex</Application>"
        f"<TitlesOfParts><vt:vector size=\"{len(sheet_names)}\" baseType=\"lpstr\">{vector}</vt:vector></TitlesOfParts>"
        "</Properties>"
    )


def core_xml() -> str:
    return """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties"
 xmlns:dc="http://purl.org/dc/elements/1.1/"
 xmlns:dcterms="http://purl.org/dc/terms/"
 xmlns:dcmitype="http://purl.org/dc/dcmitype/"
 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <dc:creator>Codex</dc:creator>
  <dc:title>HRDS Components Audit</dc:title>
</cp:coreProperties>"""


def widths_for(sheet_name: str, headers: list[str]) -> dict[int, float]:
    fixed = {
        "priority": 10,
        "component": 24,
        "issue_type": 20,
        "fix_area": 24,
        "recommended_action": 56,
        "details": 64,
        "figma_link": 42,
        "storybook_link": 42,
        "figma_props": 64,
        "code_props": 64,
    }
    if sheet_name == "Summary":
        return {1: 28, 2: 90}
    return {idx: fixed.get(header, 22) for idx, header in enumerate(headers, 1)}


def write_xlsx(path: Path, sheets: list[tuple[str, list[list[str]]]]) -> None:
    sheet_names = [name for name, _ in sheets]
    with NamedTemporaryFile(delete=False, suffix=".xlsx", dir=path.parent) as tmp:
        tmp_path = Path(tmp.name)
    try:
        with ZipFile(tmp_path, "w", ZIP_DEFLATED) as zip_file:
            zip_file.writestr("[Content_Types].xml", content_types_xml(sheet_names))
            zip_file.writestr("_rels/.rels", root_rels_xml())
            zip_file.writestr("docProps/app.xml", app_xml(sheet_names))
            zip_file.writestr("docProps/core.xml", core_xml())
            zip_file.writestr("xl/workbook.xml", workbook_xml(sheet_names))
            zip_file.writestr("xl/_rels/workbook.xml.rels", workbook_rels_xml(sheet_names))
            zip_file.writestr("xl/styles.xml", styles_xml())
            for idx, (name, rows) in enumerate(sheets, 1):
                headers = rows[0] if rows else []
                zip_file.writestr(
                    f"xl/worksheets/sheet{idx}.xml",
                    sheet_xml(name, rows, widths_for(name, headers)),
                )
        shutil.move(str(tmp_path), path)
    finally:
        if tmp_path.exists():
            tmp_path.unlink()


def main() -> None:
    workbook = load_workbook_rows(WORKBOOK)
    all_components = row_dicts(workbook["All Components"])
    fix_plan = build_fix_plan(all_components)
    fix_headers = [
        "priority",
        "component",
        "issue_type",
        "fix_area",
        "recommended_action",
        "details",
        "figma_status",
        "code_status",
        "match_status",
        "figma_page",
        "figma_link",
        "storybook_title",
        "storybook_link",
        "code_folder",
        "figma_props",
        "code_props",
    ]
    fix_rows = [fix_headers] + [[row.get(header, "") for header in fix_headers] for row in fix_plan]
    summary_rows = build_summary(fix_plan, all_components)

    ordered_sheets: list[tuple[str, list[list[str]]]] = [
        ("Summary", summary_rows),
        ("Fix Plan", fix_rows),
    ]
    for name in ["README", "All Components", "Drift", "Figma Only", "Code Only"]:
        if name in workbook:
            ordered_sheets.append((name, workbook[name]))

    write_xlsx(WORKBOOK, ordered_sheets)
    print(f"Formatted {WORKBOOK}")
    print(f"Fix Plan rows: {len(fix_plan)}")
    print("Priority:", dict(Counter(row["priority"] for row in fix_plan)))
    print("Issue type:", dict(Counter(row["issue_type"] for row in fix_plan)))


if __name__ == "__main__":
    main()
