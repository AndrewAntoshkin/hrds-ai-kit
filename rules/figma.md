# Figma Rules

Status: Starter  
Purpose: правила работы AI-агентов с Figma-источниками HRDS.

---

# Sources

Use canonical links from `../knowledge/sources.md`.

---

# Link Rules

- Design-to-code требует node-specific URL.
- Project URL можно использовать как navigation source, но не как точный source для компонента.
- Если дана project-ссылка, агент должен попросить ссылку на конкретный file/frame/node.
- Если дана Figma design URL без `node-id`, агент может получить metadata, но для реализации нужен node.

---

# Figma Naming

Рекомендуемая структура имен:

```text
Component / Variant / State
Pattern / Name
Foundation / Category / Name
```

Не использовать:

- `Copy of ...`;
- `Frame 123`;
- `New component`;
- имена без purpose.

---

# Component Properties

Figma component properties должны мапиться на code props, когда это возможно.

Пример:

```text
Figma: Variant=Primary
Code: variant="primary"
Storybook: controls.variant = primary
```

Если mapping неочевиден, агент должен создать note, а не придумывать prop.

---

# Variants and States

Figma variants должны описывать:

- visual variants;
- sizes;
- states;
- icon presence;
- layout direction, если применимо.

States не должны быть спрятаны только в detached frames.

---

# Design Review Checklist

- [ ] Используются components, а не detached копии.
- [ ] Используются variables/tokens, а не raw values.
- [ ] Component names понятны.
- [ ] Variants не дублируют друг друга.
- [ ] States представлены.
- [ ] Focus state есть для interactive components.
- [ ] Icons/illustrations берутся из HRDS source.
- [ ] Есть ссылка на related documentation или guide.

---

# AI Rules

AI не должен:

- считать screenshot source of truth для API;
- создавать component mapping без проверки;
- менять Figma-структуру без явного запроса;
- использовать project URL как доказательство конкретного component property.

AI должен:

- ссылаться на Figma source;
- просить node URL при необходимости;
- фиксировать расхождения с Storybook/Code;
- обновлять knowledge indexes после подтверждения новых сущностей.
