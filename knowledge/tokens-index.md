# Tokens Index

Status: Starter — реальные токены не подтверждены  
Purpose: карта категорий токенов и правило именования. Список конкретных токенов заполняется по мере проверки в Figma Variables / коде.

---

> ВНИМАНИЕ
> В этом файле НЕТ подтверждённых токенов HRDS.
> Ни одно имя ниже нельзя выдавать в код как существующий токен.
> Пока категория пуста — агент запрашивает Figma Variables или code reference и помечает значение `Unknown / Needs source`.

---

# Источники

Canonical links: `knowledge/sources.md`. Точный список Figma Variables пока не извлечён.

---

# Категории токенов

Это ожидаемые категории. Реальные имена и значения — только после проверки в источнике.

| Категория | Для чего | Статус |
|-----------|----------|--------|
| Color | background, text, border, icon, status, interactive states | Needs source |
| Typography | headings, body, caption, label, button text | Needs source |
| Spacing | layout gaps, padding, stack, section spacing | Needs source |
| Radius | buttons, inputs, cards, overlays | Needs source |
| Elevation | popovers, dialogs, dropdowns, floating panels | Needs source |
| Motion | transitions, overlays, loading, feedback | Needs source |

---

# Confirmed Tokens

Пусто. Подтверждённые токены добавляются сюда по одному через `Mapping Template`.

---

# Правило именования

Формат имени — по назначению, а не по значению. Точный синтаксис (dot / slash) выбирается по коду HRDS после проверки.

```text
<категория>.<назначение>.<модификатор>
```

Иллюстрация формата (НЕ реальные токены HRDS):

```text
color.text.<...>        # не #111827
spacing.<step>          # не 16px
radius.<size>           # не 8px
```

Правила именования и запреты: `rules/tokens.md`.

---

# Mapping Template

Заполнять только по подтверждённому источнику:

```yaml
name: ""              # напр. color.text.primary — из Figma/кода, не выдумывать
figma:
  variable: ""        # имя Figma Variable
code:
  cssVariable: ""     # напр. --color-text-primary
  package: ""
usage:
  - ""
status: proposed      # proposed → confirmed после проверки
```

---

# Agent Rules

- При генерации UI использовать токены, а не raw values (`rules/tokens.md`).
- Если реального токена нет — предложить `proposed` и объяснить gap, но не выдавать за существующий.
- Semantic token предпочтительнее primitive.
- После подтверждения Figma Variables добавлять токен в `Confirmed Tokens` и фиксировать изменение taxonomy в `knowledge/decision-log.md`.
