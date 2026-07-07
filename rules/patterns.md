# Pattern Rules

Status: Starter  
Purpose: rules for choosing and describing HRDS UX patterns.

---

# Principle

A pattern is a repeatable composition for a user task. It is not a single component and not a product-specific screen copied into the design system.

---

# Selection Rules

Before proposing a pattern, the agent must:

1. Define the user task.
2. Check `../knowledge/patterns-index.md`.
3. Check related components in `../knowledge/components-index.md`.
4. Confirm whether the pattern is reusable across products.
5. If the solution is one component, use the component instead of creating a pattern.

---

# Pattern Description

A useful pattern record includes:

- user task;
- when to use;
- when not to use;
- required components;
- optional components;
- states and empty/error/loading cases;
- accessibility notes;
- Figma or Storybook references;
- gaps and assumptions.

Use `../templates/page-template.md` for page-level patterns.

---

# Review Rules

Stop and request human review if:

- the pattern depends on unconfirmed components;
- the flow changes accessibility behavior;
- the pattern introduces new API requirements;
- the pattern is product-specific but proposed as a shared HRDS pattern.
