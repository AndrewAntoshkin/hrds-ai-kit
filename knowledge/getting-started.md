# Getting Started

Status: Confirmed  
Purpose: ответы на «что это», «зачем», «как пользоваться», «что куда писать».

---

# Что это

**HRDS AI Kit** — контекстный слой для AI-агентов над дизайн-системой HR Tech.

Это **не** Figma, **не** Storybook и **не** продуктовый код. Kit хранит:

- canonical links на источники;
- индексы components / patterns / tokens;
- правила, которые запрещают агенту выдумывать API;
- skills — готовые маршруты под типовые задачи.

**Аналогия:** Storybook отвечает «какой API у Button». Kit отвечает «как агенту дойти до этого API, что проверить и что пометить, если данных нет».

---

# Зачем нужно

Без kit агент на каждом экране заново:

- придумывает variants и props;
- путает Page Header и Content Header;
- не видит detached / deprecated инстансы;
- выдаёт hex вместо semantic tokens;
- пишет handoff без states и open questions.

Kit не убирает human review. Он **снижает догадки** и **фиксирует маршрут**: Figma node → Storybook → code → метки статуса.

---

# Кому

- **Дизайнеры** — review макета, проверка инстансов и паттернов.
- **Разработчики** — handoff spec из Figma frame.
- **DS / платформа** — пополнение индексов, перевод Starter → Confirmed.
- **Любой с Cursor** — вызов skill + node-specific Figma URL.

---

# Как подключить

```text
1. Скачай архив или клонируй hrds-ai-kit
2. Положи рядом с продуктовым репо (не внутрь)
3. File → Add Folder to Workspace — обе папки в одном workspace
4. В чате Cursor: /component-checker (или другой skill)
5. Вставь Figma URL с ?node-id=...
6. Проверь строки Needs review / Starter в ответе
```

Локальный лендинг: `npm run dev` → http://127.0.0.1:5173

MCP Figma / Storybook — **плюс**, не обязательны для rules и индексов.

---

# Как пользоваться (5 skills)

| Задача | Skill | Что дать агенту |
|--------|-------|-----------------|
| Какие компоненты на экране, актуальны ли версии | `/component-checker` | Figma node URL |
| Верный ли UX-паттерн | `/pattern-checker` | Figma URL или описание экрана |
| Spec для разработки | `/technical-analyst` | Figma node URL |
| Полный аудит ДС | `/design-review` | Figma URL или UI spec |
| План сборки экрана | `/prototype-builder` | Требования или Figma frame |

Подробные сценарии с промптами: [examples/scenarios.md](../examples/scenarios.md).

---

# Что куда писать

| Что добавляешь | Куда | Когда |
|----------------|------|-------|
| Canonical URL (Figma, Storybook, npm) | `knowledge/sources.md` | Новый или изменившийся источник |
| Имя компонента в каталоге | `knowledge/components-index.md` | Компонент появился в scope kit |
| Имя паттерна | `knowledge/patterns-index.md` | Паттерн в scope kit |
| Категории / именование токенов | `knowledge/tokens-index.md` | Только после верификации в коде |
| Архитектурное решение, исключение | `knowledge/decision-log.md` | Принятое командой решение |
| Приоритеты, модель записи | `knowledge/architecture.md` | Меняется маршрут агента |
| Запрет или ограничение для агента | `rules/<topic>.md` | Новое правило поведения |
| Готовый маршрут под задачу | `skills/<name>/SKILL.md` | Новый типовой workflow |
| Обёртка для `/` в Cursor | `.cursor/skills/<name>/SKILL.md` | После skill — ссылка на источник |
| Развёрнутое описание компонента | `examples/<name>.md` | По `templates/component-template.md` |
| Развёрнутое описание паттерна | `examples/<name>.md` | По `templates/page-template.md` |
| Пустой шаблон | `templates/` | Не трогать — копировать в examples |

**Не писать в examples как в source of truth.** Examples — формат вывода. Факты — в индексах + ссылка на Figma/Storybook/code.

---

# Starter → Confirmed

1. Есть **Figma node URL** с metadata компонента.
2. Есть **Storybook story** или **code import** для props.
3. Запись в `*-index.md` обновлена со статусом `Confirmed`.
4. `examples/<name>.md` заполнен; proposed-поля заменены на подтверждённые.
5. Gaps явно перечислены, если что-то ещё неизвестно.

---

# Метки в выводе агента

| Метка | Значение |
|-------|----------|
| **Confirmed** | Есть источник (Figma metadata, story, code) |
| **Starter** | Данные из kit, не верифицированы |
| **Proposed** | Гипотеза по формату example |
| **Needs review** | Prop / variant без подтверждённого источника |
| **Unknown** | Данных нет — запросить ссылку |

---

# Чего kit не делает

- Не полный каталог HRDS (pilot v0.2: 5 Confirmed components, 5 Starter patterns, 0 confirmed tokens).
- Не автопилот production-кода.
- Не замена human DS review.
- Не доказательство prop без Storybook или code.
