#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/site/hrds-ai-kit.zip"

cd "$ROOT"
rm -f "$OUT"

zip -r "$OUT" . \
  -x ".git/*" \
  -x ".git/**/*" \
  -x "site/hrds-ai-kit.zip" \
  -x "node_modules/*" \
  -x "node_modules/**/*" \
  -x "studio/node_modules/*" \
  -x "studio/node_modules/**/*" \
  -x "site/studio/*" \
  -x "site/studio/**/*" \
  -x "**/.DS_Store" \
  -x "**/__pycache__/*" \
  > /dev/null

echo "Архив: $OUT ($(du -h "$OUT" | cut -f1))"
