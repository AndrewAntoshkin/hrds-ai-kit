#!/usr/bin/env python3
"""Build browser data for the HRDS audit landing page."""

from __future__ import annotations

import json
from collections import Counter
from pathlib import Path
from zipfile import ZipFile
from xml.etree import ElementTree as ET


ROOT = Path(__file__).resolve().parent.parent
WORKBOOK = ROOT / "exports" / "hrds-components-audit.xlsx"
OUTPUT = ROOT / "site" / "audit-data.js"
STORYBOOK_VERSION = "13.3.0"
FIGMA_LIBRARY = "HRDS Components"
FIGMA_FILE_KEY = "BodHDPKvwUYhWM5XDahMja"

NS = {"a": "http://schemas.openxmlformats.org/spreadsheetml/2006/main"}


def col_num(ref: str) -> int:
    value = 0
    for ch in "".join(c for c in ref if c.isalpha()):
        value = value * 26 + ord(ch.upper()) - 64
    return value


def cell_value(cell: ET.Element) -> str:
    return "".join(t.text or "" for t in cell.findall(".//a:t", NS))


def read_fix_plan() -> list[dict[str, str]]:
    with ZipFile(WORKBOOK) as zip_file:
        workbook = ET.fromstring(zip_file.read("xl/workbook.xml"))
        sheets_node = workbook.find("a:sheets", NS)
        if sheets_node is None:
            raise RuntimeError("Workbook has no sheets")
        names = [sheet.attrib["name"] for sheet in sheets_node]
        sheet_index = names.index("Fix Plan") + 1
        root = ET.fromstring(zip_file.read(f"xl/worksheets/sheet{sheet_index}.xml"))

    rows: list[list[str]] = []
    for row in root.findall(".//a:sheetData/a:row", NS):
        cells = {
            col_num(cell.attrib["r"]): cell_value(cell)
            for cell in row.findall("a:c", NS)
        }
        if cells:
            rows.append([cells.get(i, "") for i in range(1, max(cells) + 1)])
    headers = rows[0]
    return [
        dict(zip(headers, row + [""] * (len(headers) - len(row))))
        for row in rows[1:]
    ]


def short_reason(row: dict[str, str]) -> str:
    issue = row["issue_type"]
    component = row["component"]
    if issue == "status conflict":
        return "В Figma компонент помечен как устаревший, но в Storybook/code он продолжает жить как активный."
    if issue == "code only":
        return "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок."
    if issue == "figma only":
        return "В Figma есть компонент или вариант, но нет понятной связи со Storybook/code."
    if issue == "status drift":
        return "Figma говорит, что компонент ещё in progress, а код уже выглядит доступным для использования."
    if issue == "missing code props":
        return "У Figma есть свойства, но в индексе не хватает code props для проверки соответствия."
    if issue == "props drift":
        return "Названия свойств или значения вариантов расходятся между Figma и code props."
    return f"{component}: нужна ручная проверка соответствия источников."


def human_action(row: dict[str, str]) -> str:
    issue = row["issue_type"]
    if issue == "status conflict":
        return "Принять одно решение по lifecycle: либо вернуть компонент в актуальную Figma-библиотеку, либо пометить Storybook/code как deprecated и дать путь миграции."
    if issue == "code only":
        return "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS."
    if issue == "figma only":
        return "Связать с существующим компонентом в коде или Storybook. Если это только variant, записать mapping; если отдельный компонент — создать story/API или пометить как WIP."
    if issue == "status drift":
        return "Обновить статус в Figma до active или явно оставить WIP с заметкой, почему production API уже есть."
    if issue == "missing code props":
        return "Дописать props/API в индекс или Storybook docs, чтобы Figma variants можно было сверить с кодом."
    if issue == "props drift":
        return "Сверить property/value naming: переименовать Figma variant, добавить code prop или зафиксировать явный mapping."
    return row["recommended_action"]


def source_note(row: dict[str, str]) -> str:
    figma = row["figma_status"] or "нет пары"
    code = row["code_status"] or "нет пары"
    if row["storybook_title"]:
        return f"Figma: {figma}; Storybook/code: {code}; story: {row['storybook_title']}."
    return f"Figma: {figma}; Storybook/code: {code}."


def main() -> None:
    rows = read_fix_plan()
    issue_counts = Counter(row["issue_type"] for row in rows)
    priority_counts = Counter(row["priority"] for row in rows)
    items = [
        {
            "priority": row["priority"],
            "component": row["component"],
            "issueType": row["issue_type"],
            "fixArea": row["fix_area"],
            "reason": short_reason(row),
            "action": human_action(row),
            "details": row["details"],
            "figma": {
                "library": FIGMA_LIBRARY,
                "fileKey": FIGMA_FILE_KEY,
                "status": row["figma_status"] or "not matched",
                "page": row["figma_page"],
                "link": row["figma_link"],
                "props": row["figma_props"],
            },
            "storybook": {
                "version": STORYBOOK_VERSION,
                "status": row["code_status"] or "not matched",
                "title": row["storybook_title"],
                "link": row["storybook_link"],
                "codeFolder": row["code_folder"],
                "props": row["code_props"],
            },
            "matchStatus": row["match_status"],
            "sourceNote": source_note(row),
        }
        for row in rows
    ]
    payload = {
        "generatedFrom": str(WORKBOOK.relative_to(ROOT)),
        "figma": {
            "library": FIGMA_LIBRARY,
            "fileKey": FIGMA_FILE_KEY,
            "url": f"https://www.figma.com/design/{FIGMA_FILE_KEY}",
        },
        "storybook": {
            "version": STORYBOOK_VERSION,
            "url": "https://hrds.yandex-team.ru",
        },
        "summary": {
            "total": len(items),
            "priority": dict(priority_counts),
            "issues": dict(issue_counts),
        },
        "items": items,
    }
    OUTPUT.write_text(
        "window.HRDS_AUDIT_DATA = "
        + json.dumps(payload, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )
    print(f"Wrote {OUTPUT} with {len(items)} items")


if __name__ == "__main__":
    main()
