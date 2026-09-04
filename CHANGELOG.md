# @ndinh02/design-system

## 0.2.0

### Minor Changes

- fc2a685: Fix WCAG AA color contrast on white surfaces (SC 1.4.3 / 1.4.11).
  
  - Darken `primary` (`#5e90db` → `#2a65bd`), `success` (`#4d9d6b` → `#366f4c`), `warning` (`#c28f2c` → `#7f5e1d`), `danger` (`#c25450` → `#ab403c`) so every text pair on `#ffffff` and on badge tints reaches ≥ 4.5:1; `accent-soft` follows the new primary hue.
  - Add `border-strong` (`#91917d`) for functional UI boundaries: input/textarea field borders, secondary button/icon-button borders, timeline markers. Decorative hairlines stay on `border`.
  - Badge tint backgrounds updated to match the new accent colors.
  - Full audit with ratios and WCAG citations in `docs/contrast-audit.md`.
- 3c6a9f3: Rebuild component library on the DTCG token layer and restore a broken build.
  
  **Breaking changes (0.x minor):**
  - `Button` rewritten: token-based `ds-` classes, `variant` (primary/secondary/ghost) + `size` + `loading`; old `primary` boolean still works but is deprecated. No more `storybook-button` classes.
  - `Card` is now composable: `title`, `eyebrow`, `media`, `meta`, `footer`, `children`. The product-specific `imageSrc`/`imageAlt`/`price` props are gone (pass an `<img>` via `media`).
  - `Header` removed (was the default Storybook example).
  
  **New:** `Input`, `Textarea`, `Badge`, `Avatar`, `IconButton`, `EmptyState` (atoms) and `Tabs`, `Timeline` (molecules) — each with stories.
  
  **Tokens:** semantic additions — `color.accent-soft`, `color.surface`, `color.surface-canvas`, `color.text`, `color.text-muted`, `color.text-on-primary`, `color.border`, `color.success|warning|danger`, `font-size.sm|lg`, `spacing.xs…xl`, `radius.sm|pill`. Exported from `tokens.ts` as typed constants.

## 0.1.1

### Patch Changes

- a9e6aff: Fix package so it's actually importable: add `main`/`module`/`types`/`exports` fields, a `src/index.ts` barrel export for `Button`, `Card`, and `Header`, and a proper library build (externalizing React so it isn't bundled, and bundling `tokens.css` so component styles resolve their CSS custom properties).
