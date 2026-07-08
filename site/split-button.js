const SCRAMBLE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

initSplitButtons();

function initSplitButtons() {
  document.querySelectorAll("[data-split-button]").forEach(enhanceButton);
}

function enhanceButton(link) {
  if (link.dataset.splitReady === "true") return;

  const parts = (link.dataset.parts || "")
    .split("|")
    .map((part) => part.trim())
    .filter(Boolean);

  if (parts.length < 2) {
    const legacy = [...link.querySelectorAll(":scope > span")].map((el) => el.textContent.trim());
    if (legacy.length >= 2) parts.push(...legacy.slice(0, 2));
  }

  if (parts.length < 2) return;

  link.textContent = "";
  link.dataset.splitReady = "true";
  link.insertAdjacentHTML("beforeend", renderPart(parts[0], 0));
  link.insertAdjacentHTML("beforeend", `<svg class="btn-tca__connector" width="4" height="26" viewBox="0 0 4 26" aria-hidden="true" focusable="false" data-connector>
    <path fill="currentColor" d="M0 0C0 1.1046 0.8954 2 2 2 3.1046 2 4 1.1046 4 0V4H0Z"/>
    <rect x="0" y="4" width="4" height="18" fill="currentColor"/>
    <path fill="currentColor" d="M0 22H4V26C4 24.8954 3.1046 24 2 24 0.8954 24 0 24.8954 0 26Z"/>
  </svg>`);
  link.insertAdjacentHTML("beforeend", renderPart(parts[1], 1));
}

function renderPart(label, partIndex) {
  const visible = reduceMotion ? escapeHtml(label) : buildOdometerLabel(label);
  return `<span class="btn-tca__part" data-text>
    <span class="sr-only">${escapeHtml(label)}</span>
    <span class="btn-tca__visible" aria-hidden="true">${visible}</span>
  </span>`;
}

function buildOdometerLabel(text) {
  return [...text].map((char, index) => buildOdometerChar(char, index)).join("");
}

function buildOdometerChar(char, index) {
  const frames = [char];
  for (let i = 0; i < 4; i += 1) {
    frames.push(scrambleChar(char.charCodeAt(0) + index, i));
  }
  frames.push(char);

  const lines = frames
    .map((value) => `<span class="btn-tca__char-line">${escapeHtml(value)}</span>`)
    .join("");

  return `<span class="btn-tca__char" style="--char-delay:${index * 28}ms" aria-hidden="true">
    <span class="btn-tca__char-spacer">${escapeHtml(char)}</span>
    <span class="btn-tca__char-strip">${lines}</span>
  </span>`;
}

function scrambleChar(seed, offset) {
  return SCRAMBLE[Math.abs((seed * 17 + offset * 31) % SCRAMBLE.length)];
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
