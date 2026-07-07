# Token Rules

Status: Starter  
Purpose: правила именования, выбора и применения design tokens.

---

# Основной принцип

AI не должен использовать raw values как финальное решение.

Неправильно:

```text
color: #111827
padding: 16px
border-radius: 8px
```

Правильно:

```text
color: token(color.text.primary)
padding: token(spacing.4)
border-radius: token(radius.md)
```

Точный синтаксис зависит от codebase.

---

# Token Types

## Primitive Tokens

Базовые значения: palette, scale, raw sizes.

Пример:

```text
color.gray.900
spacing.4
```

## Semantic Tokens

Значения по назначению.

Пример:

```text
color.text.primary
color.background.surface
```

## Component Tokens

Значения, привязанные к компоненту.

Пример:

```text
button.background.primary
button.text.primary
```

Component tokens использовать только когда semantic tokens недостаточны.

---

# Naming Rules

- Использовать lowercase.
- Использовать dot notation или slash notation последовательно.
- Имя должно описывать назначение, а не цвет.
- Не использовать `blue1`, `gray2`, `big`, `small` без taxonomy.
- Для status использовать понятные имена: success, warning, error, info.

---

# Usage Rules

Агент должен:

1. Найти token category в `../knowledge/tokens-index.md`.
2. Использовать semantic token, если он есть.
3. Не создавать новый токен без причины.
4. Если нужен новый токен — предложить `proposed` token и объяснить gap.
5. При изменении token taxonomy зафиксировать решение в `../knowledge/decision-log.md`.

---

# Figma / Code Mapping

Для каждого подтвержденного токена желательно иметь:

```yaml
name: color.text.primary
figmaVariable: ""
cssVariable: "--color-text-primary"
platform:
  web: ""
  ios: ""
  android: ""
status: confirmed
```

---

# AI Red Flags

AI должен остановиться и запросить review, если:

- в дизайне много raw colors;
- одинаковый цвет используется с разным meaning;
- один token используется для разных semantic purposes;
- spacing не соответствует scale;
- Figma variable и code token называются по-разному без mapping.
