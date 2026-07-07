(function () {
  const nav = document.querySelector(".site-nav");
  const reveals = document.querySelectorAll(".reveal, .text-reveal, .stagger-parent");
  const textReveals = document.querySelectorAll(".text-reveal");

  function onScroll() {
    if (!nav) return;
    const scrolled = window.scrollY > 24;
    nav.classList.toggle("is-scrolled", scrolled);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
  );

  reveals.forEach((el) => observer.observe(el));
  textReveals.forEach((el) => observer.observe(el));

  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;
      faqItems.forEach((other) => {
        if (other !== item) other.open = false;
      });
    });
  });

  initPipeline();
  initEngineChart();
  initSkillDrawer();

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  function initEngineChart() {
    const canvas = document.querySelector("[data-engine-canvas]");
    if (!canvas) return;

    const statConfirmed = document.querySelector('[data-engine-stat="confirmed"]');
    const statStarter = document.querySelector('[data-engine-stat="starter"]');
    const statUnknown = document.querySelector('[data-engine-stat="unknown"]');
    const statsPanel = document.querySelector("[data-engine-stats]");
    const statRows = statsPanel
      ? Array.from(statsPanel.querySelectorAll(".stat-row"))
      : [];
    const labelsPanel = document.querySelector("[data-engine-labels]");
    const labelRows = labelsPanel
      ? Array.from(labelsPanel.querySelectorAll(".engine-label"))
      : [];
    const labelKeys = ["prompt", "component", "rules"];

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const waves = [
      { speed: 0.02, amp: 40, offset: 0 },
      { speed: 0.03, amp: 30, offset: 100 },
      { speed: 0.015, amp: 50, offset: 200 },
      { speed: 0.04, amp: 20, offset: 50 },
      { speed: 0.025, amp: 35, offset: 150 },
    ];

    const state = {
      time: 0,
      pulses: [],
      running: false,
      spotlight: 0,
      labelSpot: 0,
      lastShuffle: 0,
      lastLabelShuffle: 0,
    };

    function setLabelSpotlight(key) {
      labelRows.forEach((label) => {
        const isActive = label.dataset.labelKey === key;
        label.classList.toggle("is-active", isActive);
        label.classList.toggle("is-dim", !isActive);
      });
    }

    function shuffleLabels() {
      if (!labelsPanel || labelRows.length < 2 || reduceMotion) return;

      const slots = ["12%", "22%", "85%"];
      const shuffled = slots.slice().sort(() => Math.random() - 0.5);
      const positions = new Map(
        labelRows.map((label) => [label, label.getBoundingClientRect()])
      );

      labelRows.forEach((label, i) => {
        label.style.top = shuffled[i];
      });

      labelRows.forEach((label) => {
        const prev = positions.get(label);
        const next = label.getBoundingClientRect();
        const dy = prev.top - next.top;
        if (Math.abs(dy) < 1) return;

        label.style.transition = "none";
        label.style.transform = `translateY(${dy}px)`;
        requestAnimationFrame(() => {
          label.style.transition =
            "color 0.35s ease, opacity 0.35s ease, transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)";
          label.style.transform = "";
        });
      });
    }

    function tickStat(el, value) {
      if (!el || el.textContent === value) return;
      el.textContent = value;
      el.classList.add("is-tick");
      window.setTimeout(() => el.classList.remove("is-tick"), 180);
    }

    function pickHotKey() {
      const roll = Math.random();
      if (roll < 0.55) return "unknown";
      if (roll < 0.8) return "starter";
      return "confirmed";
    }

    function setSpotlight(key) {
      statRows.forEach((row) => {
        const isHot = row.dataset.statKey === key;
        row.classList.toggle("is-hot", isHot);
        row.classList.toggle("is-dim", !isHot);
      });
    }

    function shuffleStatRows() {
      if (!statsPanel || statRows.length < 2 || reduceMotion) return;

      const positions = new Map(
        statRows.map((row) => [row, row.getBoundingClientRect()])
      );

      const shuffled = statRows.slice();
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }

      shuffled.forEach((row) => statsPanel.appendChild(row));

      shuffled.forEach((row) => {
        const prev = positions.get(row);
        const next = row.getBoundingClientRect();
        const dy = prev.top - next.top;
        if (Math.abs(dy) < 1) return;

        row.style.transition = "none";
        row.style.transform = `translateY(${dy}px)`;
        requestAnimationFrame(() => {
          row.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
          row.style.transform = "";
        });
      });
    }

    function bumpStats(hotKey) {
      tickStat(statConfirmed, String(3 + Math.floor(Math.random() * 5)));
      tickStat(statStarter, String(8 + Math.floor(Math.random() * 18)));
      tickStat(statUnknown, String(1 + Math.floor(Math.random() * 12)));
      setSpotlight(hotKey || pickHotKey());
      shuffleStatRows();
    }
    let accent = "#ff4d00";
    let accentGlow = "rgba(255, 77, 0, 0.15)";

    function readColors() {
      const root = getComputedStyle(document.documentElement);
      accent = root.getPropertyValue("--accent").trim() || "#ff4d00";
      accentGlow = root.getPropertyValue("--accent-glow").trim() || "rgba(255, 77, 0, 0.15)";
    }

    function draw() {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      readColors();

      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      if (w === 0 || h === 0) return;

      const cw = Math.round(w * dpr);
      const ch = Math.round(h * dpr);
      if (canvas.width !== cw || canvas.height !== ch) {
        canvas.width = cw;
        canvas.height = ch;
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      const midY = h / 2;
      const midX = w / 2;
      state.time += 1;

      waves.forEach((wave, i) => {
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = `rgba(0, 0, 0, ${0.2 + 0.1 * Math.sin(0.05 * state.time + i)})`;
        for (let x = 0; x < midX; x += 5) {
          const fade = 1 - Math.pow(x / midX, 3);
          const y =
            midY +
            (Math.sin(x * wave.speed + state.time * wave.speed + wave.offset) * wave.amp +
              (Math.random() - 0.5) * 30 * fade) *
              fade +
            (i - 2) * 40 * fade;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      });

      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = accent;
      ctx.moveTo(midX, midY);
      ctx.lineTo(w, midY);
      ctx.stroke();

      if (!reduceMotion && Math.random() < 0.01) {
        const gapNum = 10 + Math.floor(Math.random() * 90);
        state.pulses.push({ x: midX, label: `GAP_${gapNum}` });
        bumpStats("unknown");
      }

      if (!reduceMotion && state.time % 120 === 0) {
        const keys = ["confirmed", "starter", "unknown"];
        state.spotlight = (state.spotlight + 1) % keys.length;
        setSpotlight(keys[state.spotlight]);
      }

      if (!reduceMotion && state.time % 90 === 0 && !state.pulses.length) {
        state.labelSpot = (state.labelSpot + 1) % labelKeys.length;
        setLabelSpotlight(labelKeys[state.labelSpot]);
      }

      if (!reduceMotion && state.time - state.lastShuffle > 420) {
        state.lastShuffle = state.time;
        shuffleStatRows();
      }

      if (!reduceMotion && state.time - state.lastLabelShuffle > 520) {
        state.lastLabelShuffle = state.time;
        shuffleLabels();
      }

      state.pulses = state.pulses.filter((pulse) => {
        pulse.x += 3;
        if (pulse.x > w + 40) return false;

        ctx.beginPath();
        ctx.strokeStyle = accent;
        ctx.lineWidth = 2;
        for (let x = pulse.x - 40; x < pulse.x + 40; x += 2) {
          if (x < midX || x > w) continue;
          const t = (x - pulse.x) / (40 / 3);
          const spike = -40 * Math.exp(-(t * t));
          if (x === pulse.x - 40) ctx.moveTo(x, midY);
          ctx.lineTo(x, midY + spike);
        }
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = accentGlow;
        ctx.moveTo(pulse.x, midY);
        ctx.lineTo(pulse.x, midY + 40);
        ctx.stroke();

        ctx.fillStyle = accent;
        ctx.font = "10px 'Fragment Mono', Courier New, monospace";
        ctx.fillText(pulse.label, pulse.x - 24, midY - 50);
        return true;
      });

      if (!reduceMotion && state.pulses.length) {
        const lead = state.pulses[state.pulses.length - 1];
        const progress = (lead.x - midX) / Math.max(w - midX, 1);
        if (progress < 0.35) setLabelSpotlight("prompt");
        else if (progress < 0.72) setLabelSpotlight("component");
        else setLabelSpotlight("rules");
      }

      ctx.beginPath();
      ctx.setLineDash([4, 4]);
      ctx.strokeStyle = "#b0b0b0";
      ctx.lineWidth = 1;
      ctx.moveTo(midX, 0);
      ctx.lineTo(midX, h);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.beginPath();
      ctx.strokeStyle = accent;
      ctx.lineWidth = 1;
      ctx.arc(midX, midY, 6, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.strokeStyle = "rgba(0, 0, 0, 0.03)";
      ctx.arc(midX, midY, 100, 0, Math.PI * 2);
      ctx.arc(midX, midY, 200, 0, Math.PI * 2);
      if (midX > 150) ctx.arc(midX, midY, 300, 0, Math.PI * 2);
      ctx.stroke();
    }

    function loop() {
      if (!state.running) return;
      draw();
      requestAnimationFrame(loop);
    }

    const host = canvas.closest(".engine-body") || canvas;
    const runObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !reduceMotion) {
            state.running = true;
            setSpotlight("confirmed");
            setLabelSpotlight("prompt");
            requestAnimationFrame(loop);
          } else {
            state.running = false;
            statRows.forEach((row) => {
              row.classList.remove("is-hot", "is-dim");
              row.style.transform = "";
              row.style.transition = "";
            });
            labelRows.forEach((label) => {
              label.classList.remove("is-active", "is-dim");
              label.style.transform = "";
              label.style.transition = "";
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    runObserver.observe(host);

    if (reduceMotion) draw();

    window.addEventListener(
      "resize",
      () => {
        if (state.running || reduceMotion) draw();
      },
      { passive: true }
    );
  }

  function initPipeline() {
    const pipeline = document.querySelector("[data-pipeline]");
    if (!pipeline) return;

    const steps = Array.from(pipeline.querySelectorAll(".pipe-step"));
    const line = pipeline.querySelector(".pipeline-line");
    const progress = pipeline.querySelector(".pipeline-progress");
    const dot = pipeline.querySelector(".pipeline-dot");
    if (!steps.length) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      steps.forEach((step) => step.classList.add("is-done"));
      return;
    }

    const STEP_MS = 1100;
    let active = -1;
    let timer = null;

    // Position the dot + progress fill at the center of a given step marker.
    function moveTo(index) {
      if (!line || !progress || !dot) return;
      // Skip on stacked mobile layout where the line is hidden.
      if (getComputedStyle(line).display === "none") return;

      const marker = steps[index].querySelector(".pipe-num");
      if (!marker) return;

      const lineRect = line.getBoundingClientRect();
      const markerRect = marker.getBoundingClientRect();
      const center = markerRect.left + markerRect.width / 2 - lineRect.left;
      const clamped = Math.max(0, Math.min(center, lineRect.width));

      dot.style.left = clamped + "px";
      progress.style.width = clamped + "px";
    }

    function activate(index) {
      steps.forEach((step, i) => {
        step.classList.toggle("is-active", i === index);
        step.classList.toggle("is-done", i < index);
      });
      moveTo(index);
    }

    function tick() {
      active = (active + 1) % (steps.length + 1);
      if (active === steps.length) {
        // Brief "all complete" beat: keep the last step checked.
        steps.forEach((step, i) => {
          step.classList.toggle("is-done", true);
          step.classList.toggle("is-active", false);
        });
        if (progress && line) {
          progress.style.width = line.getBoundingClientRect().width + "px";
        }
        if (dot && line) {
          dot.style.left = line.getBoundingClientRect().width + "px";
        }
      } else {
        activate(active);
      }
    }

    function start() {
      if (timer) return;
      pipeline.classList.add("is-running");
      tick();
      timer = setInterval(tick, STEP_MS);
    }

    function stop() {
      if (!timer) return;
      clearInterval(timer);
      timer = null;
    }

    // Run only while the pipeline is on screen.
    const runObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) start();
          else stop();
        });
      },
      { threshold: 0.35 }
    );
    runObserver.observe(pipeline);

    // Keep dot/progress aligned when the layout changes.
    window.addEventListener(
      "resize",
      () => {
        if (active >= 0 && active < steps.length) moveTo(active);
      },
      { passive: true }
    );
  }

  function initSkillDrawer() {
    const drawer = document.querySelector("[data-skill-drawer]");
    const body = document.querySelector("[data-skill-drawer-body]");
    const panel = drawer?.querySelector(".skill-drawer-panel");
    const cards = document.querySelectorAll("[data-skill]");
    if (!drawer || !body || !panel || !cards.length) return;

    const SKILLS = {
      "component-checker": {
        title: "Component Checker",
        file: "skills/component-checker/SKILL.md",
        invoke: "/component-checker",
        lead: "Находит компоненты HRDS на экране и проверяет каждый инстанс: тот ли компонент, variant, state и актуальна ли версия библиотеки.",
        does: [
          "Составляет inventory компонентов на frame",
          "Ловит detached, deprecated и foreign instances",
          "Сверяет variant и state с задачей экрана",
          "Отмечает version drift и needs review",
          "Связывает Figma instance → Storybook → code import",
        ],
        stack: [
          "rules/ai.md",
          "knowledge/components-index.md",
          "rules/components.md",
          "rules/figma.md",
          "rules/storybook.md",
        ],
        tags: ["inventory", "version drift", "detached", "deprecated", "variant", "Figma node"],
        output: "## Component Inventory\n\n| Элемент | Компонент | Variant | Version issue |\n|---------|-----------|---------|---------------|\n| ...     | Button    | primary | detached      |",
        pair: { skill: "pattern-checker", label: "Pattern Checker", note: "проверяет UX-паттерны, не версии компонентов" },
      },
      "pattern-checker": {
        title: "Pattern Checker",
        file: "skills/pattern-checker/SKILL.md",
        invoke: "/pattern-checker",
        lead: "Определяет, верный ли UX-паттерн HRDS на экране, и подсказывает правильный — Page Header vs Content Header, Empty State vs Error и т.д.",
        does: [
          "Определяет пользовательскую задачу экрана",
          "Находит используемый и нужный паттерн из patterns-index",
          "Сравнивает: correct / wrong / custom / needs review",
          "Подсказывает, что заменить и почему",
          "Отделяет pattern от одиночного component",
        ],
        stack: [
          "rules/ai.md",
          "knowledge/patterns-index.md",
          "rules/patterns.md",
          "knowledge/components-index.md",
          "examples/",
        ],
        tags: ["page header", "empty state", "data table", "flow", "wrong pattern", "when to use"],
        output: "## Pattern Fit\n\n**Используется:** Content Header\n**Нужно:** Page Header\n**Почему:** контекст уровня страницы + primary action",
        pair: { skill: "component-checker", label: "Component Checker", note: "проверяет инстансы, не паттерны" },
      },
      "technical-analyst": {
        title: "Technical Analyst",
        file: "skills/technical-analyst/SKILL.md",
        invoke: "/technical-analyst",
        lead: "Готовит handoff-спеку Figma frame для разработки: структура, компоненты, props, states, tokens, поведение и gaps.",
        does: [
          "Описывает экран сверху вниз: layout, patterns, sections",
          "Для каждого инстанса — props, states, роль на экране",
          "Фиксирует токены и сырые значения",
          "Документирует поведение и a11y без выдуманной логики",
          "Собирает open questions и needs source",
        ],
        stack: [
          "rules/figma.md",
          "rules/documentation.md",
          "knowledge/components-index.md",
          "knowledge/patterns-index.md",
          "knowledge/tokens-index.md",
          "templates/page-template.md",
        ],
        tags: ["handoff", "frame spec", "props", "states", "tokens", "gaps", "design-to-code"],
        output: "## Frame Spec\n\n### Структура\n...\n\n### Компоненты\n| Компонент | Props | States |\n|-----------|-------|--------|\n| Button    | primary | default, loading |",
        pair: { skill: "design-review", label: "Design Review", note: "аудит и findings, не handoff-спека" },
      },
      "design-review": {
        title: "Design Review",
        file: "skills/design-review/SKILL.md",
        invoke: "/design-review",
        lead: "Полный аудит Figma или UI-спеки: components, patterns, tokens, layout, naming, states, accessibility и mapping gaps.",
        does: [
          "Запускает component-checker и pattern-checker внутри",
          "Проверяет токены и консистентность layout",
          "Оценивает accessibility по rules/accessibility.md",
          "Классифицирует findings: Critical / Major / Minor",
          "Собирает questions и summary для команды",
        ],
        stack: [
          "rules/ai.md",
          "rules/figma.md",
          "component-checker",
          "pattern-checker",
          "knowledge/tokens-index.md",
          "rules/accessibility.md",
        ],
        tags: ["audit", "critical", "major", "minor", "a11y", "consistency", "DS review"],
        output: "## Findings\n\n### Critical\n- detached Button в primary action\n\n### Major\n- wrong pattern: Content Header\n\n## Questions\n- ...",
        pair: { skill: "technical-analyst", label: "Technical Analyst", note: "спека для разработки, не чек-лист ревью" },
      },
      "prototype-builder": {
        title: "Prototype Builder",
        file: "skills/prototype-builder/SKILL.md",
        invoke: "/prototype-builder",
        lead: "Собирает план прототипа из компонентов и паттернов HRDS — цель, композиция, states и шаги, без production-кода.",
        does: [
          "Формулирует цель пользователя и сценарий",
          "Выбирает pattern и список components",
          "Описывает states и нужные токены",
          "Фиксирует missing sources",
          "Даёт шаги реализации, не финальный код",
        ],
        stack: [
          "knowledge/architecture.md",
          "knowledge/components-index.md",
          "knowledge/patterns-index.md",
          "rules/components.md",
          "rules/patterns.md",
          "rules/accessibility.md",
        ],
        tags: ["prototype plan", "composition", "low-fi", "states", "implementation plan", "no prod code"],
        output: "## Prototype Plan\n\n### Цель\n...\n\n### Композиция\nPage Header + Data Table + Empty State\n\n### Нужна проверка\n- props Button из Storybook",
        pair: { skill: "technical-analyst", label: "Technical Analyst", note: "детальная спека frame, не план прототипа" },
      },
    };

    let lastFocus = null;

    function renderSkill(id) {
      const skill = SKILLS[id];
      if (!skill) return;

      body.innerHTML = `
        <div class="drawer-kicker">
          <span class="skill-dot" aria-hidden="true"></span>
          <span class="drawer-file">${skill.file}</span>
        </div>
        <h2 class="drawer-title" id="skill-drawer-title">${skill.title}</h2>
        <p class="drawer-lead">${skill.lead}</p>
        <div class="drawer-invoke">Вызов в Cursor: <strong>${skill.invoke}</strong></div>

        <div class="drawer-section">
          <h4>Что умеет</h4>
          <ul class="drawer-list">${skill.does.map((item) => `<li>${item}</li>`).join("")}</ul>
        </div>

        <div class="drawer-section">
          <h4>Состав маршрута</h4>
          <div class="drawer-stack">${skill.stack.map((item) => `<span class="drawer-stack-item">${item}</span>`).join("")}</div>
        </div>

        <div class="drawer-section">
          <h4>Теги</h4>
          <div class="drawer-tags">${skill.tags.map((tag) => `<span class="drawer-tag">${tag}</span>`).join("")}</div>
        </div>

        <div class="drawer-section">
          <h4>Формат вывода</h4>
          <pre class="drawer-output">${skill.output}</pre>
        </div>

        <div class="drawer-section">
          <h4>Связанный skill</h4>
          <button type="button" class="drawer-pair" data-skill-pair="${skill.pair.skill}">
            <strong>${skill.pair.label}</strong> — ${skill.pair.note}
          </button>
        </div>
      `;
    }

    function openDrawer(id) {
      const skill = SKILLS[id];
      if (!skill) return;

      lastFocus = document.activeElement;
      renderSkill(id);
      drawer.hidden = false;
      requestAnimationFrame(() => {
        drawer.classList.add("is-open");
        document.body.classList.add("is-drawer-open");
        panel.focus();
      });
    }

    function closeDrawer() {
      drawer.classList.remove("is-open");
      document.body.classList.remove("is-drawer-open");
      window.setTimeout(() => {
        if (!drawer.classList.contains("is-open")) {
          drawer.hidden = true;
          body.innerHTML = "";
        }
      }, 380);
      if (lastFocus && typeof lastFocus.focus === "function") {
        lastFocus.focus();
      }
    }

    cards.forEach((card) => {
      card.addEventListener("click", () => openDrawer(card.dataset.skill));
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openDrawer(card.dataset.skill);
        }
      });
    });

    drawer.querySelectorAll("[data-skill-drawer-close]").forEach((el) => {
      el.addEventListener("click", closeDrawer);
    });

    body.addEventListener("click", (event) => {
      const pair = event.target.closest("[data-skill-pair]");
      if (!pair) return;
      openDrawer(pair.dataset.skillPair);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && drawer.classList.contains("is-open")) {
        closeDrawer();
      }
    });
  }
})();
