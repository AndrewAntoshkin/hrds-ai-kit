(function () {
  const data = window.HRDS_AUDIT_DATA;
  if (!data) return;

  const state = {
    priority: "all",
    issue: "all",
    search: "",
  };

  const table = document.querySelector("[data-audit-table]");
  const issueFilter = document.querySelector("[data-issue-filter]");
  const search = document.querySelector("[data-audit-search]");
  const summary = document.querySelector("[data-filter-summary]");
  const metrics = document.querySelector("[data-audit-metrics]");

  initReveal();
  initMobileMenu();
  initSmoothLinks();
  initMetrics();
  initIssueOptions();
  initFilters();
  render();

  function initReveal() {
    const revealItems = document.querySelectorAll(".reveal");
    if (!revealItems.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
        });
      },
      { threshold: 0.12 }
    );
    revealItems.forEach((item) => observer.observe(item));
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
  }

  function initSmoothLinks() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (event) => {
        const target = document.querySelector(link.getAttribute("href"));
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  function initMetrics() {
    if (!metrics) return;
    const priority = data.summary.priority;
    metrics.innerHTML = [
      metric("Всего задач", data.summary.total),
      metric("P0", priority.P0 || 0),
      metric("P1", priority.P1 || 0),
      metric("P2", priority.P2 || 0),
    ].join("");
  }

  function metric(label, value) {
    return `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`;
  }

  function initIssueOptions() {
    if (!issueFilter) return;
    const issues = [...new Set(data.items.map((item) => item.issueType))].sort();
    issueFilter.innerHTML = `<option value="all">Все типы</option>${issues
      .map((issue) => `<option value="${escapeAttr(issue)}">${issueLabel(issue)}</option>`)
      .join("")}`;
  }

  function initFilters() {
    document.querySelectorAll("[data-priority-filter]").forEach((button) => {
      button.addEventListener("click", () => {
        state.priority = button.dataset.priorityFilter || "all";
        document.querySelectorAll("[data-priority-filter]").forEach((el) => el.classList.remove("is-active"));
        button.classList.add("is-active");
        render();
      });
    });

    issueFilter?.addEventListener("change", () => {
      state.issue = issueFilter.value;
      render();
    });

    search?.addEventListener("input", () => {
      state.search = search.value.trim().toLowerCase();
      render();
    });
  }

  function filteredItems() {
    return data.items.filter((item) => {
      if (state.priority !== "all" && item.priority !== state.priority) return false;
      if (state.issue !== "all" && item.issueType !== state.issue) return false;
      if (!state.search) return true;
      const haystack = [
        item.component,
        item.issueType,
        item.fixArea,
        item.reason,
        item.action,
        item.details,
        item.figma.page,
        item.storybook.title,
        item.storybook.codeFolder,
      ].join(" ").toLowerCase();
      return haystack.includes(state.search);
    });
  }

  function render() {
    if (!table) return;
    const rows = filteredItems();
    if (summary) summary.textContent = `Показано ${rows.length} из ${data.items.length}`;
    table.innerHTML = `
      <div class="audit-row audit-row-head" role="row">
        <div role="columnheader">Приоритет</div>
        <div role="columnheader">Компонент</div>
        <div role="columnheader">Что не так</div>
        <div role="columnheader">Что сделать</div>
        <div role="columnheader">Версии / источники</div>
      </div>
      ${rows.map(renderRow).join("")}
    `;
  }

  function renderRow(item) {
    const figmaLink = item.figma.link
      ? `<a href="${escapeAttr(item.figma.link)}" target="_blank" rel="noreferrer">Figma</a>`
      : `<span>Figma нет</span>`;
    const storyLink = item.storybook.link
      ? `<a href="${escapeAttr(item.storybook.link)}" target="_blank" rel="noreferrer">Storybook</a>`
      : `<span>Storybook нет</span>`;

    return `
      <article class="audit-row priority-${escapeAttr(item.priority.toLowerCase())}" role="row">
        <div class="audit-priority" role="cell">
          <span>${escapeHtml(item.priority)}</span>
          <small>${priorityLabel(item.priority)}</small>
        </div>
        <div class="audit-component" role="cell">
          <strong>${escapeHtml(item.component)}</strong>
          <span>${escapeHtml(issueLabel(item.issueType))}</span>
        </div>
        <div class="audit-copy" role="cell">
          <p>${escapeHtml(item.reason)}</p>
          <small>${escapeHtml(compactDetails(item.details))}</small>
        </div>
        <div class="audit-copy" role="cell">
          <p>${escapeHtml(item.action)}</p>
          <small>${escapeHtml(item.fixArea)}</small>
        </div>
        <div class="audit-sources-cell" role="cell">
          <p><span>Figma</span> ${escapeHtml(item.figma.status)}${item.figma.page ? ` · ${escapeHtml(item.figma.page)}` : ""}</p>
          <p><span>Storybook</span> ${escapeHtml(item.storybook.version)} · ${escapeHtml(item.storybook.status)}</p>
          <p><span>Code</span> ${escapeHtml(item.storybook.codeFolder || "нет пары")}</p>
          <div class="audit-row-links">${figmaLink}${storyLink}</div>
        </div>
      </article>
    `;
  }

  function priorityLabel(priority) {
    if (priority === "P0") return "сначала";
    if (priority === "P1") return "важно";
    if (priority === "P2") return "после P1";
    return "проверить";
  }

  function issueLabel(issue) {
    const labels = {
      "status conflict": "конфликт статуса",
      "code only": "только в коде",
      "figma only": "только в Figma",
      "missing code props": "нет code props",
      "status drift": "дрейф статуса",
      "props drift": "дрейф props",
      verify: "проверить",
    };
    return labels[issue] || issue;
  }

  function compactDetails(value) {
    if (!value) return "Детали см. в XLSX / Fix Plan.";
    return value.length > 220 ? `${value.slice(0, 220)}...` : value;
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function escapeAttr(value) {
    return escapeHtml(value).replace(/`/g, "&#096;");
  }
})();
