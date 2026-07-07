# Documentation Rules

Status: Starter  
Purpose: rules for writing HRDS docs and AI-generated specs.

---

# Language

Use Russian for explanations. Keep standard terms in English when they are clearer:

- component;
- pattern;
- token;
- variant;
- prop;
- state;
- source of truth;
- accessibility;
- Storybook.

---

# Writing Rules

- Write short, direct sentences.
- Start from the user task, not from abstract theory.
- Separate facts, assumptions and gaps.
- Do not use marketing language.
- Do not document unconfirmed props, tokens or states as facts.
- Use `Unknown`, `Needs source` or `Needs review` when sources are missing.

---

# Required Content

Component documentation should answer:

1. What is it?
2. When should it be used?
3. When should it not be used?
4. Which variants and states are confirmed?
5. How does it map to Figma, Storybook and code?
6. What accessibility behavior matters?
7. What gaps remain?

Page or pattern documentation should answer:

1. What user task does it solve?
2. Which components are used?
3. What states exist?
4. What needs human review?

---

# Templates

Use only:

- `../templates/component-template.md`;
- `../templates/page-template.md`.

If the template asks for unavailable data, keep the field and mark it as `Unknown`.
