# HRDS AI Kit

Контекст HRDS для AI-агентов: источники, индексы, правила и skills. Не замена Figma, Storybook или кода — слой, который направляет агента к проверяемым данным и не даёт выдумывать API.

**Статус:** `v0.2 / compact pilot`. Часть записей в индексах — `Starter`, требуют проверки по Figma, Storybook и коду.

**Полный гайд:** [knowledge/getting-started.md](knowledge/getting-started.md) — что это, зачем, как пользоваться, что куда писать.  
**Сценарии с промптами:** [examples/scenarios.md](examples/scenarios.md).

---

## Что это (коротко)

| | |
|---|---|
| **Это** | Контекстный слой: links, indexes, rules, skills для Cursor |
| **Не это** | Figma, Storybook, npm-пакет, автогенерация prod-кода |
| **Зачем** | Агент без kit каждый раз выдумывает props, путает паттерны, пропускает drift |
| **Кому** | Дизайнеры (review), разработчики (handoff), DS (пополнение индексов) |

---

## Быстрый старт

1. Положи `hrds-ai-kit` рядом с продуктовым репозиторием.
2. **File → Add Folder to Workspace** — обе папки в одном workspace.
3. Вызывай skills через `/` в Cursor: `component-checker`, `pattern-checker`, `technical-analyst`.
4. Для Figma — node-specific URL (`?node-id=`). Для API — ссылка на Storybook или код.
5. Проверяй в ответе метки `Starter`, `Needs review`, `Proposed`.

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

## Что куда писать

| Добавляешь | Файл |
|------------|------|
| Canonical URL | `knowledge/sources.md` |
| Имя компонента / паттерна | `knowledge/components-index.md`, `patterns-index.md` |
| Архитектурное решение | `knowledge/decision-log.md` |
| Запрет для агента | `rules/<topic>.md` |
| Новый workflow | `skills/<name>/SKILL.md` |
| Развёрнутое описание | `examples/<name>.md` (по `templates/`) |

Examples — **формат вывода**, не source of truth. Подробная таблица: [getting-started.md](knowledge/getting-started.md#что-куда-писать).

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
│   ├── getting-started.md   ← гайд для людей
│   ├── sources.md
│   ├── architecture.md
│   ├── components-index.md
│   ├── patterns-index.md
│   ├── tokens-index.md
│   └── decision-log.md
├── rules/
├── skills/
├── examples/
│   ├── scenarios.md         ← промпты под задачи
│   ├── button.md
│   └── page-header.md
├── templates/
├── .cursor/skills/          # обёртки для / в Cursor
├── site/                    # лендинг
└── scripts/
```

---

## Что готово / что нет

**Готово:** подключение как AI context, design review, выбор components/patterns, frame spec для разработки, фиксация gaps.

**Не готово:** production UI без human review, точные props без Storybook/code, полный каталог HRDS (5 Confirmed components, 5 Starter patterns, 0 confirmed tokens).

---

## Следующий шаг

Довести 5–10 компонентов end-to-end:

```text
Figma node URL → Storybook story → code import → props → example
```

Подтверждённые записи переводить из `Starter` в `Confirmed`.
