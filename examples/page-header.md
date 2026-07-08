# Page Header

> ПРИМЕР ФОРМАТА, НЕ ИСТОЧНИК.
> Файл показывает, **как** описывать паттерн. Композиция ниже — `Starter`, не проверена по Figma Patterns.

Status: Starter  
Type: pattern  
Figma: [Patterns project](https://www.figma.com/files/920787649869095992/project/542725198) — needs node source  
Storybook: [HRDS Storybook](https://hrds.yandex-team.ru) — direct story needs verification  
Code: Unknown

---

# Purpose

Page Header задаёт контекст страницы: название, краткое описание, навигационный путь и основные действия на уровне всей страницы.

---

# When to Use

- Верхняя область страницы (list, detail, settings).
- Нужны title и page-level primary action.
- Нужны breadcrumbs или product context.
- Страница — самостоятельный пользовательский flow.

# When Not to Use

- Заголовок внутри card или секции — Content Header.
- Только текст без действий — typography style / H2.

---

# Anatomy

```text
Page Header
├── breadcrumbs (optional)
├── title (h1)
├── description (optional)
└── actions (optional)
```

---

# Пример композиции: «Список сотрудников»

```text
Page Header
├── Breadcrumbs: Главная / Команда / Сотрудники
├── Title (h1): Сотрудники
├── Description: Управление составом команды и ролями
└── Actions:
    └── Button primary «Добавить сотрудника»
```

Ниже Page Header — отдельные секции (фильтр, таблица), не часть паттерна.

---

# Components

| Компонент | Роль в паттерне | Статус в index |
|-----------|-----------------|----------------|
| Content Header | title + description + actions в header-зоне | Confirmed (имя) |
| Button | primary page action | Confirmed (имя) |
| Breadcrumbs | навигационный путь | Starter |
| H2 | альтернатива title в простых экранах | Confirmed (имя) |

---

# Behavior

- Primary action — одно главное действие страницы (не конкурирует с row actions в таблице).
- Secondary actions — ghost или secondary, не перебивают primary.
- Mobile: actions могут уходить в overflow menu или stack под title.
- Breadcrumbs кликабельны, текущая страница не ссылка.

---

# States

| Состояние страницы | Поведение header |
|--------------------|------------------|
| default | title + primary action |
| loading | skeleton или disabled primary до загрузки данных |
| no permission | primary disabled + tooltip «Нет прав» |
| empty list ниже | header без изменений, Empty State в контенте |

---

# Accessibility

- Title — `h1` на странице (один на view).
- Actions доступны с клавиатуры, порядок tab логичен.
- Breadcrumbs — `nav` с `aria-label="Breadcrumb"`.

---

# Related

- `knowledge/patterns-index.md`
- `rules/patterns.md`
- `templates/page-template.md`
- `examples/button.md` — для action в header

---

# Gaps (что проверить)

- Точная композиция в Figma Patterns project — нужен node URL.
- Responsive layout actions — не подтверждён.
- Breadcrumbs component — Starter, нет Confirmed в components-index.
