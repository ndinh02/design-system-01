---
'@ndinh02/design-system': minor
---

Fix WCAG AA color contrast on white surfaces (SC 1.4.3 / 1.4.11).

- Darken `primary` (`#5e90db` → `#2a65bd`), `success` (`#4d9d6b` → `#366f4c`), `warning` (`#c28f2c` → `#7f5e1d`), `danger` (`#c25450` → `#ab403c`) so every text pair on `#ffffff` and on badge tints reaches ≥ 4.5:1; `accent-soft` follows the new primary hue.
- Add `border-strong` (`#91917d`) for functional UI boundaries: input/textarea field borders, secondary button/icon-button borders, timeline markers. Decorative hairlines stay on `border`.
- Badge tint backgrounds updated to match the new accent colors.
- Full audit with ratios and WCAG citations in `docs/contrast-audit.md`.
