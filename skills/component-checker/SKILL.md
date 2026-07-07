---
name: component-checker
description: >-
  Определяет компоненты дизайн-системы HRDS на экране и проверяет, верно ли
  использован инстанс: тот ли компонент, вариант и актуальная ли версия
  библиотеки. Component check, проверка компонентов, аудит Figma frame, version
  drift, detached / deprecated instances, design-to-code. Use when auditing a
  Figma frame or UI spec for component identity and version drift.
---

# Component Checker

## Назначение

Найти, какие **компоненты HRDS** используются на экране, и проверить каждый инстанс на корректность:

- тот ли компонент из дизайн-системы (а не detached-копия или неверная замена);
- правильные ли **variant** и **state**;
- актуальная ли **версия библиотеки / компонента** (не устаревший и не deprecated инстанс).

Этот скилл **не** выбирает UX-паттерны — для этого `../pattern-checker/SKILL.md`.

---

## Быстрый старт

1. Прочитай `../../rules/ai.md`.
2. Прочитай `../../knowledge/components-index.md`.
3. Прочитай `../../rules/components.md` и `../../rules/figma.md`.
4. Если нужна проверка API — прочитай `../../rules/storybook.md`.
5. Для анализа frame требуется **node-specific Figma URL**. Project-ссылки недостаточно.
6. Для каждого элемента определи компонент HRDS и проверь версию.

---

## Что определить

Для каждого интерактивного или структурного блока зафиксируй:

| Поле | Что проверить |
|------|----------------|
| **Элемент** | Что видит пользователь (label, роль, расположение) |
| **Компонент HRDS** | Имя из `components-index.md` или `Unknown` |
| **Инстанс в Figma** | Имя main-компонента + свойства варианта |
| **Variant** | например primary / secondary / ghost |
| **State** | default, hover, focus, disabled, loading, error |
| **Источник** | library instance / detached / local copy / custom frame |

---

## Проверка версии

Инстанс **корректен**, только если проходят все применимые проверки.

### 1. Идентичность

- Инстанс связан с компонентом библиотеки HRDS, а не detached-копия.
- Имя мапится на компонент в `knowledge/components-index.md`.
- Похожий по виду frame не считается нужным компонентом без связи с библиотекой.

### 2. Variant и state

- Variant соответствует задаче (primary action → Button primary, а не ghost).
- Нужные states есть или задокументированы (focus, disabled, loading где нужно).
- Это именно **variant**, а не ошибочно выбранный **другой компонент** (Button vs Link).

### 3. Дрейф версии / библиотеки

Проверь и отметь:

- **Detached** — был компонентом, оторван от библиотеки → `version issue: detached`
- **Устаревший инстанс** — в Figma доступно обновление библиотеки → `version issue: update available`
- **Deprecated** — помечен как Deprecated в индексе или `decision-log.md` → `version issue: deprecated`
- **Чужая библиотека** — не из published-файла HRDS → `version issue: foreign / local`
- **Не подтверждён** — Starter в индексе, версию не проверить → `needs review`

Не выдумывай номера версий. Если Figma не отдаёт метаданные библиотеки — пиши `Unknown / Needs source`.

### 4. Figma ↔ Storybook ↔ Code (когда релевантно)

- Свойство Figma мапится на известный prop (см. `rules/storybook.md`).
- Если есть ссылка на Storybook/код — отметь соответствие или конфликт.
- Непроверенные props → `Unknown`, не выдумывать.

---

## Типы решений

| Решение | Когда |
|---------|-------|
| `correct` | Верный компонент HRDS, variant, state и версия |
| `wrong component` | Нужен другой компонент ДС |
| `wrong variant` | Тот же компонент, неверный variant/state |
| `version issue` | Detached, устаревший, deprecated или чужой инстанс |
| `not from DS` | Кастом/detached — заменить на library instance |
| `needs review` | Данных недостаточно или Starter-компонент |

---

## Формат вывода

Отвечай на русском, если пользователь не попросил иначе.

```md
## Component Check

Frame / scope:
Figma:
Confidence:

### Инвентарь

| Элемент | Компонент HRDS | Инстанс Figma | Variant | State | Решение |
|---------|----------------|---------------|---------|-------|---------|
| ... | ... | ... | ... | ... | ... |

### Проблемы версий

- ...

### Неверный компонент / вариант

- ...

### Корректное использование

- ...

### Источники

- Figma:
- Storybook:
- Code:
- Записи индекса:

### Пробелы / нужна проверка

- ...
```

---

## Правила

- Перечисляй **все** компонентные элементы на frame, а не только проблемные.
- Разделяй **wrong component** / **wrong variant** / **version issue**.
- Не выдумывай имена компонентов, props и версии библиотеки.
- Если на frame нет library-инстансов — скажи об этом явно.
- Рекомендуй **замену** при решении `wrong component` или `not from DS`.
