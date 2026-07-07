# Skills

Готовые маршруты для AI-агентов. Каждый skill — папка с `SKILL.md`.

## Вызов в Cursor

Skills подключены через `.cursor/skills/`. В чате:

```text
/pattern-checker
/component-checker
/technical-analyst
```

Или в тексте: «Проверь паттерн по `skills/pattern-checker/SKILL.md`».

## Список

| Skill | Назначение |
|-------|------------|
| [component-checker](component-checker/SKILL.md) | Какие компоненты HRDS на экране, актуальны ли инстансы (detached, deprecated, wrong variant) |
| [pattern-checker](pattern-checker/SKILL.md) | Верный ли UX-паттерн, какой подставить вместо неправильного |
| [technical-analyst](technical-analyst/SKILL.md) | Описание Figma frame для разработки (handoff spec) |
| [design-review](design-review/SKILL.md) | Полная проверка: components + patterns + tokens + accessibility |
| [prototype-builder](prototype-builder/SKILL.md) | План прототипа, не production-код |

## Два слоя

```text
skills/<name>/SKILL.md          ← полные инструкции (источник правды)
.cursor/skills/<name>/SKILL.md  ← обёртка для Cursor /
```

Редактируй `skills/`. Обёртка в `.cursor/skills/` только ссылается на источник.
