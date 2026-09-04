---
'@ndinh02/design-system': minor
---

Rebuild component library on the DTCG token layer and restore a broken build.

**Breaking changes (0.x minor):**
- `Button` rewritten: token-based `ds-` classes, `variant` (primary/secondary/ghost) + `size` + `loading`; old `primary` boolean still works but is deprecated. No more `storybook-button` classes.
- `Card` is now composable: `title`, `eyebrow`, `media`, `meta`, `footer`, `children`. The product-specific `imageSrc`/`imageAlt`/`price` props are gone (pass an `<img>` via `media`).
- `Header` removed (was the default Storybook example).

**New:** `Input`, `Textarea`, `Badge`, `Avatar`, `IconButton`, `EmptyState` (atoms) and `Tabs`, `Timeline` (molecules) — each with stories.

**Tokens:** semantic additions — `color.accent-soft`, `color.surface`, `color.surface-canvas`, `color.text`, `color.text-muted`, `color.text-on-primary`, `color.border`, `color.success|warning|danger`, `font-size.sm|lg`, `spacing.xs…xl`, `radius.sm|pill`. Exported from `tokens.ts` as typed constants.
