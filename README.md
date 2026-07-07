# HRDS AI Kit

Контекст HRDS для AI-агентов: источники, индексы, правила и skills. Не замена Figma, Storybook или кода — слой, который направляет агента к проверяемым данным и не даёт выдумывать API.

**Статус:** `v0.2 / compact pilot`. Часть записей в индексах — `Starter`, требуют проверки по Figma, Storybook и коду.

---

## Быстрый старт

1. Положи `hrds-ai-kit` рядом с продуктовым репозиторием.
2. **File → Add Folder to Workspace** — обе папки в одном workspace.
3. Вызывай skills через `/` в Cursor: `component-checker`, `pattern-checker`, `technical-analyst`.
4. Для Figma — node-specific URL. Для API — ссылка на Storybook или код.

```bash
npm run dev   # локальный лендинг → http://127.0.0.1:5173
```

---

## Skills

| Skill | Задача | Вызов |
|-------|--------|-------|
| `component-checker` | Компоненты ДС на экране + версии инстансов | `/component-checker` |
| `pattern-checker` | Верный ли паттерн, что подставить вместо | `/pattern-checker` |
| `technical-analyst` | Описание frame для разработки | `/technical-analyst` |
| `design-review` | Полный аудит: components, patterns, tokens, a11y | `/design-review` |
| `prototype-builder` | План прототипа из компонентов и паттернов | `/prototype-builder` |

Источник инструкций: `skills/<name>/SKILL.md`.  
Обёртки для Cursor: `.cursor/skills/<name>/SKILL.md`.

Подробнее: [skills/README.md](skills/README.md).

---

## Как агент работает с kit

1. `knowledge/sources.md` — canonical links.
2. `knowledge/architecture.md` — приоритет источников (Figma ↔ Storybook ↔ Code).
3. `knowledge/*-index.md` — component, pattern или token.
4. `rules/` — ограничения под задачу.
5. `skills/` — готовый маршрут.
6. Нет данных → `Unknown / Needs source / Needs review`, не додумывать.

---

## Структура

```text
.
├── README.md
├── knowledge/
│   ├── sources.md
│   ├── architecture.md
│   ├── components-index.md
│   ├── patterns-index.md
│   ├── tokens-index.md
│   └── decision-log.md
├── rules/
├── skills/
├── examples/
├── templates/
├── .cursor/skills/     # обёртки для / в Cursor
├── site/               # лендинг
└── scripts/
```

---

## Что готово / что нет

**Готово:** подключение как AI context, design review, выбор components/patterns, frame spec для разработки, фиксация gaps.

**Не готово:** production UI без human review, точные props без Storybook/code, полный каталог HRDS.

---

## Следующий шаг

Довести 5–10 компонентов end-to-end:

```text
Figma node URL → Storybook story → code import → props → example
```

Подтверждённые записи переводить из `Starter` в `Confirmed`.
