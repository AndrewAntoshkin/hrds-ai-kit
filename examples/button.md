# Button

> ПРИМЕР ФОРМАТА, НЕ ИСТОЧНИК.
> Файл показывает, **как** описывать компонент. Конкретные variants, states и props ниже —
> `proposed`, а не подтверждённый API HRDS. Не копировать значения в код без проверки в Storybook/коде.

Status: Starter (имя Confirmed в Figma metadata, API не подтверждён)  
Type: component  
Figma: [HRDS · Компоненты](https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?m=auto)  
Storybook: [HRDS Storybook](https://hrds.yandex-team.ru) — direct story needs verification  
Code: Unknown

---

# Purpose

Button запускает действие. Основной компонент для submit, save, continue, cancel и других пользовательских действий.

---

# When to Use

- Основное действие на странице или в форме («Сохранить», «Продолжить»).
- Вторичное действие рядом с основным («Отмена»).
- Подтверждение или отмена в Dialog.
- Запуск процесса: создать, сохранить, отправить.

# When Not to Use

- Навигационная ссылка внутри текста — Link.
- Статус или метка — Badge/Tag, если есть в ДС.
- Декоративный элемент без действия.

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

Точные variants — проверить по Figma/Storybook.

| Variant | Purpose | Пример на экране |
|---------|---------|------------------|
| primary | Главное действие | «Сохранить» в форме |
| secondary | Вторичное действие | «Отмена» рядом с primary |
| ghost | Низкий visual emphasis | «Подробнее» в toolbar |
| danger | Деструктивное действие | «Удалить» в Confirmation Flow |

---

# States

| State | Поведение | Обязательно в макете |
|-------|-----------|----------------------|
| default | Базовое отображение | да |
| hover | Подсветка при наведении | да |
| focus | Visible focus ring для keyboard | да |
| disabled | Недоступное действие | если есть сценарий |
| loading | Действие выполняется | для async submit |

---

# Properties / Props

Точный API неизвестен.

| Figma Property | Code Prop | Status | Пример значения |
|----------------|-----------|--------|-----------------|
| Variant | `variant` | proposed | `primary` |
| Size | `size` | proposed | `md` |
| State | `state` / pseudo-state | proposed | `loading` |
| Icon | `startIcon` / `endIcon` | proposed | `PlusIcon` |

---

# Accessibility

- Visible label или `aria-label` для icon-only.
- Loading state сохраняет смысл действия (не менять label на «Загрузка» без контекста).
- Focus state обязателен.
- Disabled не заменяет объяснение, почему действие недоступно (tooltip / inline message).

---

# Сценарий (пример использования)

Экран «Редактирование профиля»:

```text
Footer формы:
  Button secondary «Отмена»  →  закрыть без сохранения
  Button primary «Сохранить» →  submit, state loading при отправке
```

---

# Related

- `knowledge/components-index.md`
- `rules/components.md`
- `rules/accessibility.md`
- Dialog
- Page Header

---

# Assumptions

- Variants и props — starter model до проверки Storybook/Code.
- Figma metadata подтверждает имя `Button`, не полный API.
