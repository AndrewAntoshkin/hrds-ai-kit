function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function inlineFormat(text) {
  return escapeHtml(text).replace(/`([^`]+)`/g, "<code>$1</code>");
}

function splitTableRow(row) {
  return row
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function isTableSeparator(line) {
  return /^\|[\s\-:|]+\|$/.test(line.trim());
}

function renderTable(headers, rows) {
  const thead = `<tr>${headers.map((h) => `<th>${inlineFormat(h)}</th>`).join("")}</tr>`;
  const tbody = rows
    .map((row) => `<tr>${row.map((cell) => `<td>${inlineFormat(cell)}</td>`).join("")}</tr>`)
    .join("");
  return `<div class="scenario-md-table-wrap"><table class="scenario-md-table"><thead>${thead}</thead><tbody>${tbody}</tbody></table></div>`;
}

function isListLine(line) {
  return /^- /.test(line);
}

function isContinuation(line) {
  return /^\s{2,}\S/.test(line);
}

function parseList(lines, startIndex) {
  const items = [];
  let i = startIndex;

  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) break;
    if (isListLine(line)) {
      const parts = [inlineFormat(line.slice(2))];
      i += 1;
      while (i < lines.length && isContinuation(lines[i])) {
        parts.push(inlineFormat(lines[i].trim()));
        i += 1;
      }
      items.push(`<li>${parts.join("<br>")}</li>`);
      continue;
    }
    if (line.startsWith("#")) break;
    if (line.includes("|") && i + 1 < lines.length && isTableSeparator(lines[i + 1])) break;
    break;
  }

  return { html: `<ul>${items.join("")}</ul>`, nextIndex: i };
}

function parseParagraph(lines, startIndex) {
  const parts = [];
  let i = startIndex;

  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) break;
    if (line.startsWith("#")) break;
    if (isListLine(line)) break;
    if (line.includes("|") && i + 1 < lines.length && isTableSeparator(lines[i + 1])) break;
    parts.push(inlineFormat(line));
    i += 1;
  }

  return { html: parts.length ? `<p>${parts.join("<br>")}</p>` : "", nextIndex: i };
}

export function renderScenarioMarkdown(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) {
      i += 1;
      continue;
    }

    if (line.startsWith("## ")) {
      blocks.push(`<h2>${inlineFormat(line.slice(3))}</h2>`);
      i += 1;
      continue;
    }

    if (line.startsWith("### ")) {
      blocks.push(`<h3>${inlineFormat(line.slice(4))}</h3>`);
      i += 1;
      continue;
    }

    if (line.includes("|") && i + 1 < lines.length && isTableSeparator(lines[i + 1])) {
      const headers = splitTableRow(line);
      i += 2;
      const rows = [];
      while (i < lines.length && lines[i].includes("|") && lines[i].trim()) {
        rows.push(splitTableRow(lines[i]));
        i += 1;
      }
      blocks.push(renderTable(headers, rows));
      continue;
    }

    if (isListLine(line)) {
      const list = parseList(lines, i);
      blocks.push(list.html);
      i = list.nextIndex;
      continue;
    }

    const paragraph = parseParagraph(lines, i);
    if (paragraph.html) blocks.push(paragraph.html);
    i = paragraph.nextIndex;
  }

  return blocks.join("\n");
}
