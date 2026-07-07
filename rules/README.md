# Rules

Правила для AI-агентов. Не читать все файлы сразу — открывать по задаче.

| Задача | Файл |
|--------|------|
| Общее поведение агента | `ai.md` |
| Компоненты ДС + версии | `components.md` → `../skills/component-checker/SKILL.md` |
| UX-паттерны | `patterns.md` → `../skills/pattern-checker/SKILL.md` |
| Frame spec для разработки | `documentation.md` → `../skills/technical-analyst/SKILL.md` |
| Токены | `tokens.md` |
| Figma | `figma.md` |
| Storybook / API | `storybook.md` |
| Доступность | `accessibility.md` |

Canonical links: `../knowledge/sources.md`.

## Приоритет при конфликте

1. Безопасность и accessibility.
2. Code / Storybook API.
3. Figma component structure.
4. HRDS rules.
5. Examples и templates.

## Обязательно

- Проверить индекс перед генерацией.
- Не выдумывать props, variants, stories, token names.
- Неподтверждённое → `Starter`, `Unknown`, `Needs source` или `Needs review`.
- Нет node URL / Storybook link / code reference — запросить.
