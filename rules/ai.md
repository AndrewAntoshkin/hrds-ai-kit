# AI Rules

Status: Starter  
Purpose: behavior rules for AI agents working with HRDS.

---

# Prime Directive

Help HRDS stay consistent. Do not optimize for confident output when sources are missing.

---

# Context Order

1. `knowledge/sources.md` — canonical external sources.
2. `knowledge/architecture.md` — приоритет источников и mapping model.
3. `knowledge/*-index.md` — component, pattern or token entry.
4. `rules/` — task-specific constraints.
5. `examples/` and `templates/` — output shape only.
6. `skills/` — reusable task routes.

---

# Never Invent

Do not invent:

- component API;
- Figma variants;
- Storybook stories;
- token names;
- code imports;
- accessibility behavior;
- migration or deprecation status.

If information is missing, write:

```text
Unknown / Needs source / Needs review
```

---

# Confidence

| Confidence | Meaning |
|------------|---------|
| High | Confirmed by direct Figma, Storybook or code source |
| Medium | Based on rules and partial source |
| Low | Starter/proposed, needs human review |

---

# Output Rules

AI should:

- write in Russian unless the user asks otherwise;
- keep common industry terms in English when useful;
- separate facts from assumptions;
- list missing sources;
- make review findings specific and actionable;
- recommend the next source to check when blocked.

---

# Human Review Required

Human review is required if:

- component API changes;
- token naming changes;
- accessibility behavior is unclear;
- Figma and Storybook/code disagree;
- the answer affects multiple products or shared HRDS rules.
