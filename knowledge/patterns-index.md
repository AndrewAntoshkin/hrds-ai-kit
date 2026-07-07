# Patterns Index

Status: Starter  
Purpose: быстрый индекс UX-паттернов HRDS.

---

# Источники

Canonical links: `knowledge/sources.md`.

Project-ссылка не является node-specific source. Для точного анализа агент должен запросить ссылку на конкретный frame или component.

---

# Как использовать

1. Определить пользовательскую задачу.
2. Найти подходящий pattern.
3. Проверить `rules/patterns.md`.
4. Проверить компоненты в `knowledge/components-index.md`.
5. Использовать `templates/page-template.md` или relevant example.

---

# Starter Patterns

## Page Header

Status: Starter  
Example: `examples/page-header.md`

Use for:

- начало страницы;
- title + description;
- page-level actions;
- breadcrumbs.

Components:

- Content Header
- Button
- Breadcrumbs

Related:

- Content Header
- Navigation

## Data Table

Status: Starter  
Example: `Unknown / Needs source`

Use for:

- просмотр табличных данных;
- сортировка;
- фильтрация;
- bulk actions;
- row actions.

Components:

- Table
- Button
- Filter
- Pagination
- Empty State

Related:

- Empty State
- Toolbar

## Empty State

Status: Starter

Use for:

- пустой список;
- первый запуск;
- нет результатов после фильтрации;
- нет прав доступа, если это не error state.

Components:

- Illustration
- Text
- Button

Related:

- Data Table
- Search

## Confirmation Flow

Status: Starter

Use for:

- destructive action;
- irreversible decision;
- critical confirmation.

Components:

- Dialog
- Button
- Alert / Message

Related:

- Dialog
- Notification

## Form Flow

Status: Starter

Use for:

- создание или редактирование сущности;
- сбор данных;
- validation;
- submit/cancel flow.

Components:

- Input
- Select
- Checkbox
- Button
- Inline Message

Related:

- Dialog
- Page Header

---

# Agent Rules

- Pattern не должен подменять компонент. Pattern описывает композицию.
- Если задача решается одним компонентом, не создавать pattern.
- Если pattern повторяется в нескольких продуктах, добавить его в индекс.
- Если pattern зависит только от одного продукта, пометить это в notes и не выдавать за общий HRDS pattern.
