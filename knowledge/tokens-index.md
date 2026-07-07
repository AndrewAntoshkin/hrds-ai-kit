# Tokens Index

Status: Starter  
Purpose: быстрый индекс design tokens для AI-агентов.

---

# Источники

Canonical links: `knowledge/sources.md`.

Точный список Figma variables пока не подтвержден. Этот файл задает starter taxonomy.

---

# Token Categories

## Color

Use for:

- background;
- text;
- border;
- icon;
- status;
- interactive states.

Starter examples:

```text
color.background.primary
color.background.secondary
color.text.primary
color.text.secondary
color.border.default
color.icon.primary
color.action.primary
color.status.error
color.status.warning
color.status.success
```

## Typography

Use for:

- headings;
- body text;
- captions;
- labels;
- button text.

Starter examples:

```text
font.heading.lg
font.heading.md
font.body.md
font.body.sm
font.label.md
font.caption.md
```

## Spacing

Use for:

- layout gaps;
- component padding;
- stack spacing;
- section spacing.

Starter examples:

```text
spacing.0
spacing.1
spacing.2
spacing.3
spacing.4
spacing.6
spacing.8
spacing.12
```

## Radius

Use for:

- buttons;
- inputs;
- cards;
- overlays.

Starter examples:

```text
radius.none
radius.sm
radius.md
radius.lg
radius.full
```

## Elevation

Use for:

- popovers;
- dialogs;
- dropdowns;
- floating panels.

Starter examples:

```text
elevation.none
elevation.sm
elevation.md
elevation.lg
```

## Motion

Use for:

- transitions;
- overlays;
- loading;
- feedback.

Starter examples:

```text
motion.duration.fast
motion.duration.base
motion.easing.standard
```

---

# Token Decision Rules

- Не использовать raw hex, px, shadow values как финальное решение.
- Raw value можно использовать только для поиска ближайшего токена.
- Если токен не найден, агент должен предложить candidate token и отметить его как `proposed`.
- Semantic token предпочтительнее primitive token.
- Component-specific token допустим только если semantic token недостаточен.

---

# Mapping Template

```yaml
token: color.text.primary
figma:
  variable: ""
code:
  cssVariable: "--color-text-primary"
  package: ""
usage:
  - body text
  - default labels
status: proposed
```

---

# Agent Rules

- При генерации UI использовать токены, а не raw values.
- При описании компонента перечислять ключевые tokens.
- При изменении token taxonomy фиксировать решение в `knowledge/decision-log.md`.
- После подтверждения реальных Figma variables заменить starter examples на confirmed tokens.
