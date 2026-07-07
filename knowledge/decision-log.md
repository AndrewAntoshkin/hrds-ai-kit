# Decision Log

Status: Starter  
Purpose: журнал решений, которые влияют на HRDS knowledge base.

---

# Как использовать

Агент должен читать этот файл, если:

- встречает противоречие Figma / Storybook / Code;
- нужно понять, почему выбрана архитектура;
- предлагается breaking change;
- меняется naming, token taxonomy или component API.

---

# Формат записи

```md
## YYYY-MM-DD — Title

Status: proposed | accepted | deprecated
Area: component | pattern | token | architecture | workflow | ai

### Context

...

### Decision

...

### Consequences

...

### Links

- Figma:
- Storybook:
- Code:
```

---

## 2026-07-06 — HRDS as LLM Ready Knowledge Base

Status: accepted  
Area: architecture

### Context

Изначальная задача была связана со сценарием Figma → Code → доработка → обратно в Figma.

Для качественной работы такого сценария агенту нужен не только prompt, а полноценный контекст: компоненты, паттерны, токены, правила, examples, templates и mapping между Figma / Storybook / Code.

### Decision

Развивать HRDS AI Kit как **HRDS LLM Ready Design System** — семантический слой знаний над дизайн-системой.

### Consequences

- Добавлена структура `knowledge/`, `rules/`, `examples/`, `templates/`, `skills/`.
- `skills/` считается верхним уровнем, а не начальной точкой.
- Агент должен начинать с knowledge/rules, а не с генерации.

### Links

- Components: https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?m=auto
- Components + Guides: https://www.figma.com/files/920787649869095992/project/94309239
- Icons + Illustrations: https://www.figma.com/files/920787649869095992/project/94308883
- Patterns: https://www.figma.com/files/920787649869095992/project/542725198
- Storybook: https://hrds.yandex-team.ru

---

## 2026-07-06 — Starter Knowledge Must Be Marked

Status: accepted  
Area: ai

### Context

Часть данных уже подтверждена через Figma metadata, но полный каталог компонентов, токенов и паттернов пока не извлечен.

### Decision

Любые неподтвержденные элементы помечаются как `Starter`, `Proposed` или `Unknown`.

### Consequences

- AI не должен выдавать starter entries за source of truth.
- После подтверждения по Figma/Storybook/Code статус нужно обновлять.
