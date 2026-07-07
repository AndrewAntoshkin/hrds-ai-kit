---
name: design-review
description: >-
  Проверяет Figma-дизайн или UI-спеку по компонентам, паттернам, токенам,
  доступности и правилам HRDS. Design review, ревью дизайна, DS review, проверка
  консистентности, аудит Figma. Use when the user asks for a design review, DS
  review, consistency check, or Figma audit.
---

# Design Review

## Быстрый старт

1. Прочитай `../../rules/ai.md`.
2. Прочитай `../../rules/figma.md`.
3. Компоненты и версии — `../component-checker/SKILL.md`.
4. Паттерны — `../pattern-checker/SKILL.md`.
5. Токены — `../../knowledge/tokens-index.md` + `../../rules/tokens.md`.
6. Доступность — `../../rules/accessibility.md`.

## Области проверки

- переиспользование компонентов;
- соответствие паттерна;
- использование токенов;
- консистентность layout;
- naming;
- states;
- accessibility;
- gaps в mapping Figma ↔ Storybook ↔ Code.

## Формат вывода

Отвечай на русском. Findings по severity:

```md
## Findings

### Critical

- ...

### Major

- ...

### Minor

- ...

## Questions

- ...

## Summary

...
```

Если проблем нет — скажи явно и укажи оставшуюся неопределённость.
