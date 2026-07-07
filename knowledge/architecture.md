# Architecture

Status: Starter  
Purpose: как HRDS AI Kit связывает Figma, Storybook, код и решения агента.

---

# Приоритет источников

При расхождении — в таком порядке:

1. Code / Storybook API — поведение, props, controls, examples.
2. Figma component — структура, variants, properties, композиция.
3. Rules — ограничения, accessibility, naming, review.
4. Examples / templates — формат вывода, не source of truth.
5. Decision log — принятые исключения.

Агент фиксирует конфликт, а не разрешает молча.

---

# Модель записи

Каждая полезная запись в knowledge стремится к виду:

```yaml
type: component | pattern | token
name: Button
status: confirmed | starter | proposed | unknown | deprecated
figma:
  name: ""
  nodeUrl: ""
storybook:
  url: ""
  storyId: ""
code:
  import: ""
  package: ""
props: {}
rules:
  - rules/components.md
examples:
  - examples/button.md
notes:
  - ""
```

Поля без источника не заполнять. Использовать `Unknown` или `Needs source`.

---

# Component mapping

Компонент полезен для AI, когда mapping явный:

```text
Figma component/property
        ↓
Storybook story/control
        ↓
Code import/prop
        ↓
Usage example
```

Минимум для записи компонента:

- purpose и when to use;
- Figma source;
- Storybook или code source, если есть;
- известные variants и states;
- accessibility notes;
- related components;
- confidence/status.

---

# Маршрут агента

1. `knowledge/sources.md`
2. Сущность в `knowledge/*-index.md`
3. Нужный файл в `rules/`
4. `examples/` и `templates/` — только для формата вывода
5. Нет источника — запросить node URL, Storybook link или code reference

Для Figma-задач node-specific URL обязателен для design-to-code.

---

# Чем это не является

- Не полный каталог HRDS.
- Не сгенерированный token registry.
- Не доказательство существования prop или story.
- Не замена human design-system review.

Ценность — снижение неопределённости и решения на основе источников.
