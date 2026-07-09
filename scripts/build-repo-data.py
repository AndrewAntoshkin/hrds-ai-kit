#!/usr/bin/env python3
"""Generate site/repo-data.js from the current repository tree and file previews."""

from __future__ import annotations

import json
import pathlib

ROOT = pathlib.Path(__file__).resolve().parents[1]
OUT = ROOT / "site" / "repo-data.js"
OPEN_FOLDERS = {"skills", "knowledge", "examples"}
SKIP_PREFIXES = (".git/",)
SKIP_SEGMENTS = {"node_modules", ".vite", "dist"}
SKIP_PATH_PREFIXES = ("site/studio/",)
SKIP_FILES = {"site/hrds-ai-kit.zip", "site/preview-dark.png"}


def should_skip(rel: str) -> bool:
    if rel in SKIP_FILES:
        return True
    if any(rel.startswith(prefix) for prefix in SKIP_PREFIXES):
        return True
    if any(rel.startswith(prefix) for prefix in SKIP_PATH_PREFIXES):
        return True
    return any(f"/{segment}/" in f"/{rel}/" or rel.startswith(f"{segment}/") for segment in SKIP_SEGMENTS)


def read_lines(path: pathlib.Path, max_lines: int | None = None, skip_frontmatter: bool = False) -> list[str]:
    text = path.read_text(encoding="utf-8")
    if skip_frontmatter and text.startswith("---"):
        parts = text.split("---", 2)
        if len(parts) >= 3:
            text = parts[2].lstrip("\n")
    lines = text.splitlines()
    return lines[:max_lines] if max_lines else lines


def collect_files() -> list[str]:
    files: list[str] = []
    for path in sorted(ROOT.rglob("*")):
        if not path.is_file():
            continue
        rel = path.relative_to(ROOT).as_posix()
        if should_skip(rel):
            continue
        files.append(rel)
    return files


def insert(tree: list[dict], parts: list[str], key: str) -> None:
    if not parts:
        return
    name = parts[0]
    if len(parts) == 1:
        tree.append({"type": "file", "name": name, "key": key})
        return
    for node in tree:
        if node.get("type") == "folder" and node["name"] == name:
            insert(node.setdefault("children", []), parts[1:], key)
            return
    folder = {"type": "folder", "name": name, "children": []}
    tree.append(folder)
    insert(folder["children"], parts[1:], key)


def mark_open(nodes: list[dict]) -> None:
    for node in nodes:
        if node["type"] == "folder":
            node["open"] = node["name"] in OPEN_FOLDERS
            mark_open(node.get("children", []))


def main() -> None:
    files = collect_files()
    tree: list[dict] = []
    file_keys: dict[str, str] = {}

    for rel in files:
        key = rel.replace("/", "-").replace(".", "_").lower()
        file_keys[rel] = key
        insert(tree, rel.split("/"), key)

    mark_open(tree)

    previews = {
        "README.md": (None, False),
        "package.json": (None, False),
        "knowledge/sources.md": (None, False),
        "knowledge/architecture.md": (35, False),
        "knowledge/components-index.md": (30, False),
        "knowledge/patterns-index.md": (25, False),
        "knowledge/tokens-index.md": (25, False),
        "knowledge/decision-log.md": (25, False),
        "rules/ai.md": (45, False),
        "rules/README.md": (20, False),
        "rules/components.md": (25, False),
        "rules/figma.md": (20, False),
        "rules/storybook.md": (20, False),
        "skills/README.md": (30, False),
        "skills/component-checker/SKILL.md": (55, True),
        "skills/pattern-checker/SKILL.md": (35, True),
        "skills/technical-analyst/SKILL.md": (35, True),
        "skills/design-review/SKILL.md": (35, True),
        "skills/prototype-builder/SKILL.md": (35, True),
        "examples/button.md": (40, False),
        "examples/page-header.md": (30, False),
        "templates/component-template.md": (25, False),
        "templates/page-template.md": (25, False),
        "scripts/build-archive.sh": (20, False),
        ".github/workflows/pages.yml": (25, False),
        "site/index.html": (25, False),
        "site/site.js": (20, False),
        "site/styles.css": (20, False),
    }

    repo_files: dict[str, dict] = {}
    for rel, (max_lines, skip_frontmatter) in previews.items():
        key = file_keys.get(rel)
        if not key:
            continue
        repo_files[key] = {
            "path": rel,
            "lines": read_lines(ROOT / rel, max_lines, skip_frontmatter),
        }

    payload = {"tree": tree, "files": repo_files, "defaultFile": file_keys["README.md"]}
    OUT.write_text(f"export const REPO_DATA = {json.dumps(payload, ensure_ascii=False, indent=2)};\n", encoding="utf-8")
    print(f"Wrote {OUT} ({len(files)} files, {len(repo_files)} previews)")


if __name__ == "__main__":
    main()
