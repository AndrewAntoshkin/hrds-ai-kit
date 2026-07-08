# Сценарии применения

> ПРИМЕРЫ ПРОМПТОВ, НЕ ИСТОЧНИК.
> Замени `…` на реальный Figma node URL. Ответ агента всегда проверяй по Storybook 13.3.0.

---

# Сценарий 01 · Review макета перед передачей

**Кто:** дизайнер  
**Когда:** макет готов, нужен список замечаний по ДС  
**Skill:** `/design-review`

```text
/design-review

Аудит frame перед handoff:
https://figma.com/design/…?node-id=12-345

Проверь: components, patterns, tokens, a11y.
Findings: Critical / Major / Minor.
Без выдуманных props — Needs review, если нет story.
```

**Ожидаемый вывод:**

- таблица findings с severity;
- ссылки на `rules/` и canonical sources;
- блок Questions для неясных мест.

**Дальше:** исправить Critical/Major → повторить или передать в `/technical-analyst`.

---

# Сценарий 02 · Handoff разработчику

**Кто:** дизайнер или аналитик  
**Когда:** макет согласован, нужен spec для кода  
**Skill:** `/technical-analyst`

```text
/technical-analyst

Frame для разработки:
https://figma.com/design/…?node-id=12-345

Нужно: layout, components (props, states), tokens, behavior, a11y.
Gaps и open questions — явно.
Сверь с components-index и Storybook 13.3.0.
```

**Ожидаемый вывод:**

- структура экрана;
- таблица components с props (Confirmed / Proposed / Needs review);
- states, tokens, поведение;
- open questions — что проверить в Storybook.

**Дальше:** разработчик сверяет props в Storybook; закрывает Needs review.

---

# Сценарий 03 · Detached и version drift

**Кто:** дизайнер или DS  
**Когда:** подозрение на устаревшие инстансы в файле  
**Skill:** `/component-checker`

```text
/component-checker

Проверь инстансы на frame:
https://figma.com/design/…?node-id=12-345

Сверь с components-index.md и библиотекой 13.3.0.
Отметь: detached, deprecated, wrong variant, foreign instance.
```

**Ожидаемый вывод:**

- inventory компонентов на frame;
- version / drift issues;
- что заменить на актуальный инстанс.

**Дальше:** swap instances в Figma → повторная проверка.

---

# Сценарий 04 · Неправильный паттерн

**Кто:** дизайнер или продукт  
**Когда:** экран «не похож на HRDS», путают header / table / empty  
**Skill:** `/pattern-checker`

```text
/pattern-checker

Экран «Список сотрудников»:
https://figma.com/design/…?node-id=12-345

Какой паттерн использован? Подходит ли для задачи?
Если misfit — какой паттерн из patterns-index заменить?
```

**Ожидаемый вывод:**

- used pattern vs recommended;
- fit / misfit с обоснованием;
- что поменять в структуре.

**Дальше:** переделать композицию → `/prototype-builder` для плана.

---

# Сценарий 05 · Сборка нового экрана

**Кто:** дизайнер или разработчик (прототип)  
**Когда:** есть требования, нет готового макета  
**Skill:** `/prototype-builder`

```text
/prototype-builder

Задача: экран «Создание заявки на отпуск».
Поля: тип отпуска, даты, комментарий, primary «Отправить», secondary «Отмена».

Собери план из HRDS components и patterns.
Без production-кода. Gaps — если нет в индексе.
```

**Ожидаемый вывод:**

- Prototype Plan: цель, дерево components + patterns;
- states и tokens (где известны);
- missing sources — что запросить у DS.

**Дальше:** макет в Figma → `/technical-analyst` для handoff.

---

# Цепочка · От review до кода

Типовой pipeline на одном frame:

```text
1. /design-review     → список замечаний
2. правки в Figma
3. /component-checker → инстансы актуальны
4. /pattern-checker   → паттерн верный
5. /technical-analyst → handoff spec
6. human review props в Storybook
7. код в продуктовом репо
```

Kit покрывает шаги 1–5. Шаги 6–7 — ответственность команды.

---

# Формат examples

Эталон описания компонента: [examples/button.md](button.md)  
Эталон описания паттерна: [examples/page-header.md](page-header.md)

Оба файла — **формат**, не source of truth. Конкретные props помечены `Proposed` / `Needs review`.
