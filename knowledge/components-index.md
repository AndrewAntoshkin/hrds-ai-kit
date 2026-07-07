# Components Index

Status: Starter  
Purpose: быстрый индекс компонентов для AI-агентов.

---

# Как использовать

Если нужно понять, какой компонент применить, агент должен:

1. Найти задачу в этом индексе.
2. Проверить `rules/components.md`.
3. Если нужен пример описания — открыть `examples/button.md`.
4. Если данных недостаточно — запросить Figma/Storybook/Code reference.

---

# Источники

Canonical links: `knowledge/sources.md`.

---

# Component Status

| Status | Meaning |
|--------|---------|
| Confirmed | Найден в источниках HRDS |
| Starter | Добавлен как стартовая модель, требует проверки |
| Deprecated | Не использовать в новых решениях |
| Unknown | Нужен human review |

---

# Confirmed Components

Эти сущности обнаружены в metadata основного Figma-файла компонентов.

## Button

Status: Confirmed  
Figma source: [HRDS · Компоненты](https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?m=auto)

Use for:

- primary actions;
- secondary actions;
- destructive actions, если есть соответствующий variant;
- submit / save / continue flows.

Do not use for:

- navigation links внутри текста;
- non-action labels;
- purely decorative elements.

Related:

- Link
- Button Group
- Icon Button

## Card

Status: Confirmed

Use for:

- группировка связанного контента;
- preview сущности;
- блоки dashboard;
- краткие summary sections.

Related:

- List Item
- Page Section
- Data Table

## List Item

Status: Confirmed

Use for:

- элементы списков;
- navigation rows;
- selectable rows;
- compact entity preview.

Related:

- Card
- Table Row
- Menu Item

## Content Header

Status: Confirmed  
Figma name: `Content · Header`

Use for:

- заголовок контентного блока;
- section header;
- header с title, description и actions.

Related:

- Page Header
- Button
- Breadcrumbs

## H2

Status: Confirmed

Use for:

- заголовок второго уровня;
- section title;
- логическая структура страницы.

Related:

- Typography tokens
- Page Header

---

# Starter Components

Эти компоненты добавлены как стартовые references для структуры knowledge base. Их нужно проверить по Figma/Storybook перед использованием как source of truth.

## Dialog

Status: Starter

Use for:

- blocking decisions;
- confirmations;
- destructive action confirmation;
- flows that require user attention before continuing.

Related:

- Popover
- Drawer
- Button

## Popover

Status: Starter

Use for:

- non-blocking overlays;
- contextual information;
- compact contextual actions.

Related:

- Tooltip
- Dialog
- Dropdown

## Tooltip

Status: Starter

Use for:

- short helper text;
- clarification of icon-only controls;
- non-critical information.

Related:

- Popover
- Icon Button

## Table

Status: Starter

Use for:

- structured data;
- sorting and filtering;
- row actions;
- comparison across columns.

Related:

- Pagination
- Filter
- Empty State

## Page Header

Status: Starter

Use for:

- page title;
- page-level actions;
- breadcrumbs;
- summary metadata.

Related:

- Content Header
- Breadcrumbs
- Button

---

# Agent Rules

- Не считать Starter components подтвержденными без источника.
- Если компонент найден в Figma, добавить точное имя и ссылку.
- Если компонент найден в Storybook, добавить story id.
- Если компонент найден в code, добавить import path.
- Если компонент deprecated, зафиксировать причину и замену в `knowledge/decision-log.md`.
