# Accessibility Rules

Status: Starter  
Purpose: базовые accessibility rules для HRDS.

---

# Основной принцип

Accessibility — не optional enhancement. Любой interactive component должен быть доступен с клавиатуры, понятен screen reader и иметь видимый focus.

---

# General Requirements

- Интерактивные элементы должны иметь accessible name.
- Focus state должен быть видимым.
- Keyboard navigation должна быть предсказуемой.
- Disabled state должен быть понятен визуально и семантически.
- Error state должен быть связан с полем или областью, где возникла ошибка.
- Цвет не должен быть единственным способом передачи информации.
- Контраст должен соответствовать WCAG AA, если нет другого стандарта HRDS.

---

# Component Requirements

## Button

- Должен иметь текст или accessible label.
- Icon-only button требует `aria-label`.
- Loading state не должен терять смысл действия.
- Disabled button не должен быть единственным способом объяснить, почему действие недоступно.

## Dialog

- Должен иметь role/dialog semantics.
- Focus должен переходить внутрь dialog.
- Focus должен возвращаться к trigger после закрытия.
- Escape behavior должен быть определен.
- Должен быть title или accessible name.

## Popover / Tooltip

- Tooltip не должен содержать critical information.
- Popover должен иметь понятный trigger.
- Поведение hover/focus должно быть согласовано.

## Table

- Заголовки колонок должны быть связаны с ячейками.
- Sorting state должен быть доступен screen reader.
- Row actions должны быть доступны с клавиатуры.

---

# AI Review Checklist

- [ ] Есть keyboard access.
- [ ] Есть focus state.
- [ ] Есть accessible name.
- [ ] Error/disabled/loading states описаны.
- [ ] Цвет не является единственным носителем смысла.
- [ ] Icon-only controls имеют label.
- [ ] Dialog/Popover focus behavior описан.
- [ ] Table semantics сохранены.

---

# AI Rules

AI должен считать accessibility finding важным, даже если визуально дизайн выглядит корректно.

Если accessibility behavior неизвестен, агент должен написать:

```text
Accessibility behavior: Needs review
```

AI не должен утверждать WCAG compliance без проверки.
