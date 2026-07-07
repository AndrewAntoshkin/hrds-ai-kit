# Page Header

Status: Starter  
Type: pattern  
Figma: Patterns project / needs node source  
Storybook: [HRDS Storybook](https://hrds.yandex-team.ru), direct story needs verification  
Code: Unknown

---

# Purpose

Page Header задает контекст страницы: название, краткое описание, навигационный путь и основные действия.

---

# When to Use

- Верхняя область страницы.
- Нужны title и primary action.
- Нужно показать breadcrumbs или product context.
- Страница содержит самостоятельный пользовательский flow.

# When Not to Use

- Для заголовка внутри карточки — использовать Content Header.
- Для отдельного текста без действий — использовать typography component/style.

---

# Anatomy

```text
Page Header
├── breadcrumbs (optional)
├── title
├── description (optional)
└── actions (optional)
```

---

# Components

- Content Header
- Button
- Breadcrumbs
- H2 / heading style

---

# Behavior

- Primary action размещается справа или после title area в зависимости от layout.
- Secondary actions не должны визуально конкурировать с primary action.
- На mobile actions могут уходить в menu или stack.

---

# Accessibility

- Title должен быть `h1` для страницы.
- Actions должны быть доступны с клавиатуры.
- Breadcrumbs должны иметь navigation semantics.

---

# Related

- `knowledge/patterns-index.md`
- `rules/patterns.md`
- `templates/page-template.md`
