# Button

Status: Starter / Confirmed in Figma metadata  
Type: component  
Figma: [HRDS · Компоненты](https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?m=auto)  
Storybook: [HRDS Storybook](https://hrds.yandex-team.ru), direct story needs verification  
Code: Unknown

---

# Purpose

Button запускает действие. Это основной компонент для submit, save, continue, cancel и других пользовательских действий.

---

# When to Use

- Основное действие на странице или в форме.
- Вторичное действие рядом с основным.
- Подтверждение или отмена в Dialog.
- Запуск процесса: создать, сохранить, отправить, продолжить.

# When Not to Use

- Для навигационной ссылки внутри текста — использовать Link.
- Для статуса или метки — использовать Badge/Tag, если есть.
- Для декоративного элемента без действия.

---

# Anatomy

```text
Button
├── optional leading icon
├── label
└── optional trailing icon
```

---

# Variants

Точные variants нужно подтвердить по Figma/Storybook.

Starter model:

| Variant | Purpose |
|---------|---------|
| primary | Главное действие |
| secondary | Вторичное действие |
| ghost | Низкий visual emphasis |
| danger | Деструктивное действие |

---

# States

Starter model:

- default;
- hover;
- focus;
- active;
- disabled;
- loading.

---

# Properties / Props

Точный API неизвестен.

| Figma Property | Code Prop | Status |
|----------------|-----------|--------|
| Variant | `variant` | proposed |
| Size | `size` | proposed |
| State | `state` / pseudo-state | proposed |
| Icon | `icon` / `startIcon` / `endIcon` | proposed |

---

# Accessibility

- Button должен иметь visible label или `aria-label`.
- Icon-only button требует accessible name.
- Loading state должен сохранять смысл действия.
- Focus state обязателен.
- Disabled state не должен быть единственным объяснением недоступности действия.

---

# Related

- `knowledge/components-index.md`
- `rules/components.md`
- `rules/accessibility.md`
- Dialog
- Page Header

---

# Assumptions

- Variants и props являются starter model, пока не подтверждены Storybook/Code.
- Figma metadata подтверждает наличие `Button`, но не полный API.
