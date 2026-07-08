# Patterns Index

Status: Starter — паттерны не подтверждены по Figma  
Purpose: индекс UX-паттернов HRDS. Паттерн — переиспользуемая композиция под задачу, не отдельный компонент.

---

> Все записи ниже — `Starter`. Композиция компонентов правдоподобна, но не проверена по Figma Patterns.
> Для точного анализа нужен node-specific URL конкретного frame. Project-ссылка источником не является.

---

# Как использовать

1. Определить задачу пользователя.
2. Найти подходящий паттерн ниже.
3. Проверить `rules/patterns.md`.
4. Сверить компоненты с `knowledge/components-index.md`.
5. Для формата вывода — `templates/page-template.md` или пример.

Canonical links: `knowledge/sources.md`.

---

# Starter Patterns

| Паттерн | Задача пользователя | Ключевые компоненты | Пример |
|---------|---------------------|---------------------|--------|
| Page Header | Начало страницы: title, description, page-level actions, breadcrumbs | Content Header, Button, Breadcrumbs | `examples/page-header.md` |
| Data Table | Просмотр таблицы: sort, filter, bulk / row actions | Table, Button, Filter, Pagination, Empty State | Needs source |
| Empty State | Пустой список, первый запуск, нет результатов фильтра | Illustration, Text, Button | Needs source |
| Confirmation Flow | Подтверждение необратимого / критичного действия | Dialog, Button, Alert | Needs source |
| Form Flow | Создание / редактирование сущности с валидацией и submit | Input, Select, Checkbox, Button, Inline Message | Needs source |

Компоненты `Table`, `Filter`, `Pagination`, `Empty State`, `Illustration`, `Input`, `Select`, `Checkbox`, `Alert`, `Inline Message` пока не в `components-index.md` как Confirmed — проверять отдельно.

---

# Agent Rules

- Паттерн не подменяет компонент: он описывает композицию.
- Задача решается одним компонентом → не создавать паттерн.
- Паттерн повторяется в нескольких продуктах → добавить в индекс.
- Паттерн зависит от одного продукта → пометить в notes, не выдавать за общий HRDS pattern.
