# Storybook Rules

Status: Starter  
Purpose: правила работы со Storybook и code-facing API компонентов.

---

# Source

HRDS Storybook: [https://hrds.yandex-team.ru](https://hrds.yandex-team.ru)

Storybook доступен как общий источник документации и API. Если нужна точная проверка конкретного компонента, агент должен найти конкретную story/page в Storybook или попросить прямую ссылку.

До проверки конкретной story агент должен:

- не придумывать story ids;
- не утверждать, что prop существует;
- помечать непроверенный API как `Unknown` или `Proposed`;
- просить direct Storybook link или code reference для точной проверки.

---

# Source of Truth

Storybook отвечает за:

- examples использования;
- available props;
- states;
- controls;
- documentation для разработчиков;
- visual regression references, если они настроены.

Code отвечает за фактическое поведение.

---

# Story Requirements

Для каждого компонента желательно иметь stories:

- Default;
- Variants;
- Sizes;
- States;
- With Icon / Without Icon, если применимо;
- Disabled;
- Loading, если применимо;
- Error, если применимо;
- Accessibility / Keyboard, если применимо.

---

# API Documentation Rules

Компонентная документация должна включать:

```md
## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | ... | ... | ... |
```

Не заполнять типы props без code/Storybook source.

---

# Mapping Rules

Storybook должен помогать связать:

```text
Figma component property
        ↓
React prop / Web component attribute
        ↓
Storybook control
```

Если Figma property не имеет code prop, нужно указать:

- это визуальное состояние;
- это layout-only настройка;
- это устаревшая Figma property;
- это gap между Figma и Code.

---

# AI Rules

AI должен:

- использовать Storybook как источник API;
- проверять examples перед генерацией кода;
- не создавать props "по смыслу";
- указывать uncertainty, если Storybook недоступен;
- предлагать story coverage gaps.

AI не должен:

- заменять Storybook screenshot на API source;
- считать Figma variants равными code props без mapping;
- генерировать breaking API без migration note.
