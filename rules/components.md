# Component Rules

Status: Starter  
Purpose: правила выбора, описания и проверки компонентов HRDS.

---

# Основной принцип

Компонент — это не картинка из Figma. Компонент существует только если у него есть:

- назначение;
- anatomy;
- variants;
- states;
- правила использования;
- accessibility behavior;
- Figma reference;
- Storybook/API reference или planned API;
- code implementation или план реализации.

---

# Selection Rules

Перед созданием нового компонента агент обязан:

1. Проверить `../knowledge/components-index.md`.
2. Проверить связанные паттерны в `../knowledge/patterns-index.md`.
3. Проверить Figma sources.
4. Проверить Storybook/API, если ссылка доступна.
5. Если существующий компонент подходит — использовать его.
6. Если не подходит — объяснить gap и предложить new component candidate.

---

# Component Description Rules

Описание компонента должно включать:

- purpose;
- when to use;
- when not to use;
- anatomy;
- variants;
- states;
- props / component properties;
- tokens;
- accessibility;
- content guidelines;
- related components;
- Figma / Storybook / Code links;
- migration notes, если есть.

Использовать шаблон: `../templates/component-template.md`.

---

# Naming Rules

- Имя компонента должно быть существительным или устойчивым UI-термином.
- Не использовать продуктовые названия в базовом имени компонента.
- Не создавать `NewButton`, `Button2`, `CustomCard`.
- Если компонент отличается только вариантом — это variant, а не новый component.
- Если компонент решает композиционную задачу — возможно, это pattern.

---

# Variant Rules

Variant допустим, если:

- сохраняется тот же purpose;
- меняется visual emphasis или size;
- API остается частью той же сущности.

Новый компонент нужен, если:

- меняется пользовательская задача;
- меняется interaction model;
- меняется accessibility role;
- меняется структура настолько, что variants становятся неуправляемыми.

---

# State Rules

Минимальный набор states для interactive components:

- default;
- hover;
- focus;
- active / pressed;
- disabled;
- loading, если действие async;
- error, если есть validation.

AI не должен описывать state как существующий, если он не подтвержден в Figma/Storybook/Code.

---

# Mapping Rules

Для каждого component property нужно стремиться к mapping:

```text
Figma property → Code prop → Storybook control
```

Пример:

```text
Variant → variant → controls.variant
Size → size → controls.size
State → state / pseudo-state → story
```

---

# Quality Bar

Компонент готов для knowledge base, если:

- понятно, какую задачу он решает;
- есть не менее одного source link;
- описаны ограничения;
- указаны related components;
- есть accessibility notes;
- есть owner или зона ответственности.
