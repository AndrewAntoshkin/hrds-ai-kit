import { REPO_DATA } from "./repo-data.js";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const FOLDER_ICON = `<svg viewBox="0 0 16 16" class="repo-tree-icon" aria-hidden="true"><path d="M2.2 5.3c0-.77.53-1.4 1.3-1.4h2.7c.4 0 .77.18 1.02.5l.5.65c.25.32.62.5 1.02.5h3.5c.77 0 1.3.63 1.3 1.4v4.5c0 .77-.53 1.4-1.3 1.4H3.5c-.77 0-1.3-.63-1.3-1.4V5.3Z" fill="none" stroke="currentColor" stroke-width="1.1"/></svg>`;
const FILE_ICON = `<svg viewBox="0 0 16 16" class="repo-tree-icon" aria-hidden="true"><path d="M4.3 2.6h4.8L12 5.5V13a.6.6 0 0 1-.6.6H4.3a.6.6 0 0 1-.6-.6V3.2a.6.6 0 0 1 .6-.6Z" fill="none" stroke="currentColor" stroke-width="1.1"/><path d="M9 2.8v2.8h2.8" fill="none" stroke="currentColor" stroke-width="1.1"/><path d="M5.7 8.6h4.1M5.7 10.6h4.1" fill="none" stroke="currentColor" stroke-width="0.95"/></svg>`;
const CHEVRON = `<svg viewBox="0 0 16 16" class="repo-tree-chevron" aria-hidden="true"><path d="M6 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

safeInit("lenis", initLenis);
safeInit("nav", initNav);
safeInit("mobile-menu", initMobileMenu);
safeInit("scroll-cue", initScrollCue);
safeInit("problems", initProblemsPanel);
safeInit("repo", initRepo);
safeInit("scenario-tabs", initScenarioTabs);
safeInit("carousels", initCarousels);
safeInit("floating-cta", initFloatingCta);
safeInit("faq", initFaq);

function safeInit(name, fn) {
  try {
    fn();
  } catch (error) {
    console.warn(`${name} init failed:`, error);
  }
}

function initLenis() {
  if (reduceMotion || typeof Lenis === "undefined") return;

  const lenis = new Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    autoRaf: false,
  });

  window.__lenisVelocity = 0;
  lenis.on("scroll", ({ velocity }) => {
    window.__lenisVelocity = velocity;
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -80 });
    });
  });

  window.__lenis = lenis;
}

function initNav() {
  const links = document.querySelectorAll("[data-nav-link]");
  const sections = document.querySelectorAll("[data-section]");
  if (!links.length || !sections.length) return;

  const map = new Map();
  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (href?.startsWith("#")) map.set(href.slice(1), link);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((l) => l.classList.remove("is-active"));
        const active = map.get(entry.target.id);
        if (active) active.classList.add("is-active");
      });
    },
    { threshold: 0.35, rootMargin: "-20% 0px -55% 0px" }
  );

  sections.forEach((section) => {
    if (section.id) observer.observe(section);
  });
}

function initMobileMenu() {
  const menu = document.querySelector("[data-mobile-menu]");
  const toggle = document.querySelector("[data-menu-toggle]");
  const closeEls = document.querySelectorAll("[data-menu-close]");
  if (!menu || !toggle) return;

  function open() {
    menu.hidden = false;
    requestAnimationFrame(() => menu.classList.add("is-open"));
    toggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("is-menu-open");
  }

  function close() {
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("is-menu-open");
    window.setTimeout(() => {
      if (!menu.classList.contains("is-open")) menu.hidden = true;
    }, 350);
  }

  toggle.addEventListener("click", open);
  closeEls.forEach((el) => el.addEventListener("click", close));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("is-open")) close();
  });
}

function initScrollCue() {
  const cue = document.querySelector("[data-scroll-cue]");
  const target = document.querySelector("#problems");
  if (!cue || !target) return;

  cue.addEventListener("click", () => {
    if (window.__lenis) window.__lenis.scrollTo(target, { offset: -40 });
    else target.scrollIntoView({ behavior: "smooth" });
  });

  const observer = new IntersectionObserver(
    ([entry]) => cue.classList.toggle("is-hidden", !entry.isIntersecting),
    { threshold: 0.1 }
  );
  observer.observe(document.querySelector(".hero-split"));
}

function initProblemsPanel() {
  const panel = document.querySelector("[data-problems-panel]");
  const lines = [...document.querySelectorAll("[data-problems-list] .problems-line")];
  if (!panel || !lines.length) return;

  if (reduceMotion) {
    panel.classList.add("is-active");
    lines.forEach((line) => line.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        panel.classList.add("is-active");
        lines.forEach((line, i) => {
          window.setTimeout(() => line.classList.add("is-visible"), i * 90);
        });
        observer.disconnect();
      });
    },
    { threshold: 0.25 }
  );

  observer.observe(panel);
}

function initRepo() {
  const treeEl = document.querySelector("[data-repo-tree]");
  const codeEl = document.querySelector("[data-repo-code] code");
  const codePanel = document.querySelector("[data-repo-code]");
  const gutterEl = document.querySelector("[data-repo-gutter]");
  const filenameEl = document.querySelector("[data-repo-filename]");
  const counter = document.querySelector("[data-minimap-counter]");
  const thumb = document.querySelector("[data-minimap-thumb]");
  const minimap = document.querySelector("[data-repo-minimap]");
  const sidebar = document.querySelector("[data-repo-sidebar]");
  const terminal = document.querySelector("[data-repo-terminal]");
  const terminalToggle = document.querySelector("[data-terminal-toggle]");
  const terminalForm = document.querySelector("[data-terminal-form]");
  const terminalInput = document.querySelector("[data-terminal-input]");
  const terminalOutput = document.querySelector("[data-terminal-output]");
  const resizeRow = document.querySelector("[data-terminal-resize]");
  const resizeCorner = document.querySelector("[data-sidebar-resize]");
  const commitsBtn = document.querySelector("[data-repo-commits]");

  if (!treeEl || !codeEl) return;

  const { tree, files, defaultFile } = REPO_DATA;
  const fileList = Object.values(files);
  let activeKey = defaultFile;

  function flattenTree(nodes, prefix = "") {
    const out = [];
    for (const node of nodes) {
      if (node.type === "file") {
        const path = prefix ? `${prefix}/${node.name}` : node.name;
        out.push({ key: node.key, path, name: node.name });
      } else {
        const next = prefix ? `${prefix}/${node.name}` : node.name;
        out.push(...flattenTree(node.children || [], next));
      }
    }
    return out;
  }

  const allPaths = flattenTree(tree);
  if (commitsBtn) commitsBtn.textContent = `${allPaths.length} files`;
  commitsBtn?.addEventListener("click", () => openFile(defaultFile));

  function renderTree(nodes, depth = 0) {
    const ul = document.createElement("ul");
    for (const node of nodes) {
      const li = document.createElement("li");
      const pad = 10 + depth * 14;

      if (node.type === "folder") {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `repo-tree-btn is-folder${node.open ? " is-open" : ""}`;
        btn.style.setProperty("--tree-pad", `${pad}px`);
        btn.innerHTML = `${CHEVRON}${FOLDER_ICON}<span>${node.name}</span>`;
        btn.addEventListener("click", () => {
          node.open = !node.open;
          btn.classList.toggle("is-open", node.open);
          wrap.classList.toggle("is-open", node.open);
        });

        const wrap = document.createElement("div");
        wrap.className = `repo-tree-children${node.open ? " is-open" : ""}`;
        const inner = document.createElement("div");
        inner.appendChild(renderTree(node.children || [], depth + 1));
        wrap.appendChild(inner);
        li.append(btn, wrap);
      } else {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "repo-tree-btn";
        btn.dataset.fileKey = node.key;
        btn.style.setProperty("--tree-pad", `${pad}px`);
        btn.innerHTML = `<span class="repo-tree-spacer"></span>${FILE_ICON}<span>${node.name}</span>`;
        btn.addEventListener("click", () => openFile(node.key));
        li.appendChild(btn);
      }

      ul.appendChild(li);
    }
    return ul;
  }

  treeEl.appendChild(renderTree(tree));

  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function highlightMarkdown(line) {
    const esc = escapeHtml(line);
    if (/^#{1,3}\s/.test(line)) return `<span class="tok-h2">${esc}</span>`;
    if (/^\s*-\s/.test(line)) {
      const m = esc.match(/^(\s*-\s)(.*)$/);
      return `<span class="tok-bullet">${m[1]}</span>${highlightInline(m[2])}`;
    }
    if (/^\s*\|/.test(line) || /^\s*```/.test(line)) return `<span class="tok-muted">${esc}</span>`;
    return highlightInline(esc);
  }

  function highlightInline(text) {
    return text
      .replace(/\*\*([^*]+)\*\*/g, '<span class="tok-bold">$1</span>')
      .replace(/`([^`]+)`/g, '<span class="tok-code">$1</span>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<span class="tok-link">[$1]($2)</span>');
  }

  function highlightJson(line) {
    const esc = escapeHtml(line);
    if (/^\s*"/.test(line)) {
      return esc
        .replace(/^(\s*)"([^"]+)"(\s*:\s*)/, '$1<span class="tok-h2">"$2"</span>$3')
        .replace(/:\s*"([^"]*)"/, ': <span class="tok-code">"$1"</span>')
        .replace(/:\s*(\d+|true|false|null)/, ': <span class="tok-code">$1</span>');
    }
    return esc;
  }

  function highlightYaml(line) {
    const esc = escapeHtml(line);
    if (/^\s*-\s/.test(line)) return `<span class="tok-bullet">- </span>${highlightInline(esc.replace(/^\s*-\s/, ""))}`;
    if (/^[\w-]+:/.test(line)) return esc.replace(/^([\w-]+)(:)(.*)/, '<span class="tok-h2">$1</span>$2<span class="tok-code">$3</span>');
    return highlightInline(esc);
  }

  function highlightHtml(line) {
    const esc = escapeHtml(line);
    return esc
      .replace(/(&lt;\/?)([\w-]+)/g, '$1<span class="tok-h2">$2</span>')
      .replace(/([\w-]+)=/g, '<span class="tok-code">$1</span>=');
  }

  function highlightLine(line, path) {
    if (path.endsWith(".json")) return highlightJson(line);
    if (path.endsWith(".yml") || path.endsWith(".yaml")) return highlightYaml(line);
    if (path.endsWith(".html")) return highlightHtml(line);
    if (path.endsWith(".sh") || path.endsWith(".js") || path.endsWith(".css")) return highlightInline(escapeHtml(line));
    return highlightMarkdown(line);
  }

  function openFile(key) {
    activeKey = key;
    const file = files[key];
    const path = file?.path || allPaths.find((f) => f.key === key)?.path || key;
    const lines = file?.lines || [
      "# File preview unavailable",
      "",
      `${path}`,
      "",
      "Preview not bundled for this file type.",
      "Open the repository locally to view full contents.",
    ];

    if (filenameEl) filenameEl.textContent = path;
    const gutter = lines.map((_, i) => String(i + 1)).join("\n");
    const body = lines.map((line) => highlightLine(line, path)).join("\n");

    if (gutterEl) gutterEl.textContent = gutter;
    codeEl.innerHTML = body;
    if (codePanel) codePanel.scrollTop = 0;
    if (gutterEl) gutterEl.scrollTop = 0;
    updateMinimap();

    treeEl.querySelectorAll("[data-file-key]").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.fileKey === key);
    });
  }

  function updateMinimap() {
    if (!codePanel || !counter || !thumb) return;
    const max = codePanel.scrollHeight - codePanel.clientHeight || 1;
    const pct = codePanel.scrollTop / max;
    const total = files[activeKey]?.lines?.length || 1;
    const line = Math.min(total, Math.max(1, Math.round(pct * total) + 1));
    counter.textContent = String(line).padStart(2, "0");
    const travel = Math.max(0, 100 - 28);
    thumb.style.transform = `translateY(${pct * travel}%)`;
  }

  openFile(defaultFile);

  [codePanel, gutterEl, treeEl, document.querySelector(".repo-terminal-body")]
    .filter(Boolean)
    .forEach((el) => lockNestedScroll(el));

  if (codePanel) {
    codePanel.addEventListener("scroll", () => {
      if (gutterEl) gutterEl.scrollTop = codePanel.scrollTop;
      updateMinimap();
    });
  }

  if (gutterEl && codePanel) {
    gutterEl.addEventListener("scroll", () => {
      codePanel.scrollTop = gutterEl.scrollTop;
      updateMinimap();
    });
  }

  if (minimap && codePanel) {
    minimap.addEventListener("click", (e) => {
      const rect = minimap.getBoundingClientRect();
      const pct = (e.clientY - rect.top) / rect.height;
      const max = codePanel.scrollHeight - codePanel.clientHeight;
      codePanel.scrollTop = pct * max;
    });
  }

  if (terminalToggle && terminal) {
    terminalToggle.addEventListener("click", () => {
      const hidden = terminal.classList.toggle("is-hidden");
      terminalToggle.classList.toggle("is-active", !hidden);
      terminalToggle.setAttribute("aria-pressed", String(!hidden));
    });
  }

  function printTerminal(text) {
    if (!terminalOutput) return;
    terminalOutput.hidden = false;
    terminalOutput.textContent += `${terminalOutput.textContent ? "\n" : ""}${text}`;
  }

  function runTerminal(cmdRaw) {
    const cmd = cmdRaw.trim();
    if (!cmd) return;
    if (cmd === "clear") {
      if (terminalOutput) {
        terminalOutput.textContent = "";
        terminalOutput.hidden = true;
      }
      return;
    }
    if (cmd === "help") {
      printTerminal("try: ls, tree, cat README.md, skills, clear");
      return;
    }
    if (cmd === "ls") {
      printTerminal(tree.map((n) => n.name).join("  "));
      return;
    }
    if (cmd === "tree") {
      const walk = (nodes, indent = "") => nodes.map((n) => {
        if (n.type === "folder") return `${indent}${n.name}/\n${walk(n.children || [], `${indent}  `)}`;
        return `${indent}${n.name}`;
      }).join("\n");
      printTerminal(walk(tree));
      return;
    }
    if (cmd === "skills") {
      printTerminal([
        "component-checker",
        "pattern-checker",
        "technical-analyst",
        "design-review",
        "prototype-builder",
      ].map((s) => `skills/${s}/SKILL.md`).join("\n"));
      return;
    }
    if (cmd.startsWith("cat ")) {
      const wanted = cmd.slice(4).trim().toLowerCase();
      const match = allPaths.find((f) => f.path.toLowerCase() === wanted || f.path.toLowerCase().endsWith(`/${wanted}`));
      if (!match) {
        printTerminal(`cat: ${wanted}: No such file`);
        return;
      }
      openFile(match.key);
      printTerminal((files[match.key]?.lines || []).join("\n"));
      return;
    }
    printTerminal(`command not found: ${cmd}`);
  }

  terminalForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!terminalInput) return;
    const value = terminalInput.value;
    terminalInput.value = "";
    runTerminal(value);
  });

  document.addEventListener("keydown", (e) => {
    const mod = e.metaKey || e.ctrlKey;
    if (!mod || e.key.toLowerCase() !== "j") return;
    e.preventDefault();
    terminalToggle?.click();
  });

  function dragResize(target, onMove, axis) {
    if (!target) return;
    let start = 0;
    let startSize = 0;

    const onPointerDown = (e) => {
      e.preventDefault();
      start = axis === "x" ? e.clientX : e.clientY;
      const rect = axis === "x" ? sidebar?.getBoundingClientRect() : terminal?.getBoundingClientRect();
      startSize = axis === "x" ? rect?.width || 240 : rect?.height || 200;
      document.addEventListener("pointermove", onPointerMove);
      document.addEventListener("pointerup", onPointerUp, { once: true });
    };

    const onPointerMove = (e) => {
      const delta = (axis === "x" ? e.clientX : e.clientY) - start;
      onMove(startSize + delta);
    };

    const onPointerUp = () => {
      document.removeEventListener("pointermove", onPointerMove);
    };

    target.addEventListener("pointerdown", onPointerDown);
  }

  dragResize(resizeRow, (h) => {
    if (!terminal) return;
    terminal.style.height = `${Math.min(Math.max(h, 96), window.innerHeight * 0.7)}px`;
    positionCorner();
  }, "y");

  dragResize(resizeCorner, (w) => {
    if (!sidebar) return;
    sidebar.style.width = `${Math.min(Math.max(w, 160), window.innerWidth * 0.6)}px`;
    positionCorner();
  }, "x");

  function positionCorner() {
    if (!resizeCorner || !sidebar || !terminal) return;
    const sideW = sidebar.offsetWidth;
    const termH = terminal.offsetHeight;
    resizeCorner.style.left = `${sideW}px`;
    resizeCorner.style.bottom = `${termH}px`;
  }

  positionCorner();
  window.addEventListener("resize", positionCorner);
}

function lockNestedScroll(el) {
  el.addEventListener(
    "wheel",
    (event) => {
      const max = el.scrollHeight - el.clientHeight;
      if (max <= 0) return;
      const goingUp = event.deltaY < 0;
      const goingDown = event.deltaY > 0;
      const atTop = el.scrollTop <= 0;
      const atBottom = el.scrollTop >= max - 1;
      if ((goingUp && !atTop) || (goingDown && !atBottom)) {
        event.stopPropagation();
      }
    },
    { passive: true }
  );
}

function initScenarioTabs() {
  document.querySelectorAll("[data-scenario-tabs]").forEach((root) => {
    const tabs = [...root.querySelectorAll("[data-scenario-tab]")];
    const panels = [...root.querySelectorAll("[data-scenario-panel]")];
    if (!tabs.length || !panels.length) return;

    function activate(tab, shouldFocus = false) {
      const panelId = tab.getAttribute("aria-controls");

      tabs.forEach((item) => {
        const isActive = item === tab;
        item.classList.toggle("is-active", isActive);
        item.setAttribute("aria-selected", String(isActive));
        item.tabIndex = isActive ? 0 : -1;
      });

      panels.forEach((panel) => {
        const isActive = panel.id === panelId;
        panel.hidden = !isActive;
        panel.classList.toggle("is-active", isActive);
      });

      if (shouldFocus) tab.focus();
    }

    tabs.forEach((tab, index) => {
      tab.tabIndex = tab.classList.contains("is-active") ? 0 : -1;
      tab.addEventListener("click", () => activate(tab));
      tab.addEventListener("keydown", (event) => {
        if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
        event.preventDefault();

        const lastIndex = tabs.length - 1;
        let nextIndex = index;
        if (event.key === "ArrowLeft") nextIndex = index === 0 ? lastIndex : index - 1;
        if (event.key === "ArrowRight") nextIndex = index === lastIndex ? 0 : index + 1;
        if (event.key === "Home") nextIndex = 0;
        if (event.key === "End") nextIndex = lastIndex;
        activate(tabs[nextIndex], true);
      });
    });
  });
}

function initCarousels() {
  document.querySelectorAll("[data-carousel]").forEach((root) => {
    const track = root.querySelector("[data-carousel-track]");
    const prev = root.querySelector("[data-carousel-prev]");
    const next = root.querySelector("[data-carousel-next]");
    const counter = root.querySelector("[data-carousel-counter]");
    if (!track) return;

    const cards = [...track.children];
    let index = 0;

    function update() {
      cards.forEach((card, i) => card.classList.toggle("is-active", i === index));
      const card = cards[index];
      if (card) {
        track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: reduceMotion ? "auto" : "smooth" });
      }
      if (counter) {
        counter.textContent = `${String(index + 1).padStart(2, "0")} / ${String(cards.length).padStart(2, "0")}`;
      }
    }

    prev?.addEventListener("click", () => {
      index = (index - 1 + cards.length) % cards.length;
      update();
    });

    next?.addEventListener("click", () => {
      index = (index + 1) % cards.length;
      update();
    });

    update();
  });
}

function initFloatingCta() {
  const cta = document.querySelector("[data-floating-cta]");
  const footer = document.querySelector(".site-footer");
  if (!cta || !footer) return;

  const observer = new IntersectionObserver(
    ([entry]) => cta.classList.toggle("is-hidden", entry.isIntersecting),
    { threshold: 0.08 }
  );

  observer.observe(footer);
}

function initFaq() {
  const items = document.querySelectorAll(".faq-item");
  items.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;
      items.forEach((other) => {
        if (other !== item) other.open = false;
      });
    });
  });
}
