# Components Index

Status: mixed — часть Confirmed, часть Starter  
Purpose: индекс компонентов HRDS для AI-агента. Confirmed — можно опираться, Starter — только гипотеза, требует проверки.

---

# Как использовать

1. Найти компонент под задачу.
2. Проверить `rules/components.md`.
3. Нужен пример формата описания — `examples/button.md`.
4. Нет данных или компонент `Starter` — запросить Figma / Storybook / code reference, не выдумывать.

Canonical links: `knowledge/sources.md`.

---

# Статусы

| Статус | Значение |
|--------|----------|
| Confirmed | Имя найдено в источниках HRDS (Figma metadata) |
| Starter | Гипотеза, источник не проверен — не выдавать за факт |
| Deprecated | Не использовать, причина и замена в `decision-log.md` |
| Unknown | Нужен human review |

> Confirmed относится только к **имени** компонента. Variants, props и states не подтверждены, пока не проверены в Storybook/коде.

---

# Confirmed Components

Имена найдены в metadata основного Figma-файла компонентов.

| Компонент | Назначение | Figma |
|-----------|------------|-------|
| Button | Запуск действия (primary / secondary / destructive, submit-flow) | [HRDS · Компоненты](https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?m=auto) |
| Card | Группировка связанного контента, preview сущности, блок dashboard | Needs node URL |
| List Item | Строка списка, navigation / selectable row, компактный preview | Needs node URL |
| Content Header | Заголовок контентного блока (title, description, actions). Figma: `Content · Header` | Needs node URL |
| H2 | Заголовок второго уровня, section title | Needs node URL |

Не использовать как навигационную ссылку в тексте (Button → см. Link) и для нефункциональных меток.

---

# Starter Components

Гипотезы для структуры базы. Проверить по Figma/Storybook перед использованием как source of truth.

| Компонент | Предполагаемое назначение |
|-----------|---------------------------|
| Dialog | Блокирующее решение, подтверждение необратимого действия |
| Popover | Неблокирующий overlay, контекстная информация/действия |
| Tooltip | Короткая подсказка, пояснение icon-only контрола |
| Table | Структурированные данные: sort, filter, row actions |
| Page Header | Заголовок страницы, page-level actions, breadcrumbs |

---

# Agent Rules

- Не считать `Starter` подтверждённым без источника.
- Компонент найден в Figma → добавить точное имя и node URL.
- Компонент найден в Storybook → добавить story id.
- Компонент найден в коде → добавить import path.
- Компонент deprecated → зафиксировать причину и замену в `knowledge/decision-log.md`.
- «Related» и точный API появляются в карточке компонента (`examples/` или отдельный файл) только после проверки — в индексе не выдумывать.
