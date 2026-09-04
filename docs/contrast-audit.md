# Color contrast audit — AA against WCAG 2.x

Every foreground/background pair actually used by the components on a `#ffffff`
surface (and on the `#f7f7f5` canvas) was computed with the WCAG relative
luminance formula and re-derived to pass. This document records what failed,
why, and the rules the fixes follow, so future token changes can be checked the
same way.

## The rules

All three criteria are from [WCAG 2.2](https://www.w3.org/TR/WCAG22/) (same
thresholds as 2.1/2.0; SC numbers unchanged):

| Criterion | Requirement |
|---|---|
| [SC 1.4.3 Contrast (Minimum), Level A](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) | Text ≥ **4.5:1**; large text (≥ 24px, or ≥ 18.66px bold) ≥ 3:1 |
| [SC 1.4.11 Non-text Contrast, Level AA](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html) | Visual information required to identify a UI component or its state (input boundaries, focus indicators, status markers) ≥ **3:1** |
| [SC 1.4.1 Use of Color, Level A](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html) | Color is never the only means of conveying information — our badges/statuses always pair color with a text label |

Contrast is computed from relative luminance
`L = 0.2126·R + 0.7152·G + 0.0722·B` (sRGB channels linearized), ratio
`(L1 + 0.05) / (L2 + 0.05)`. See
[Understanding Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html#contrast-ratio)
for the derivation. Tooling note: axe-core (used by Storybook's a11y addon and
Chromatic) automates SC 1.4.3/1.4.11 checks — the failures this audit fixes are
the ones it reports.

## Before → after

| Token | Before | After | Why |
|---|---|---|---|
| `primary` | `#5e90db` | `#2a65bd` | Used three ways: ghost/secondary button text on white (was 3.24:1), white label on primary buttons (was 3.24:1), accent badge text on `accent-soft` (was 2.88:1) |
| `accent-soft` | `rgba(94,144,219,.12)` | `rgba(42,101,189,.12)` | Follows the new primary hue |
| `success` | `#4d9d6b` | `#366f4c` | Text was 3.31:1 |
| `warning` | `#c28f2c` | `#7f5e1d` | Text was 2.89:1 |
| `danger` | `#c25450` | `#ab403c` | Text was 4.49:1 — a hair under 4.5:1 |
| `border-strong` | — | `#91917d` (new) | `#e4e4df` measured 1.28:1, far below the 3:1 SC 1.4.11 floor for functional boundaries |
| `text`, `text-muted`, `surface`, `surface-canvas`, `border`, `text-on-primary` | unchanged | unchanged | Already passing (text-muted 5.36:1 on white, 4.99:1 on canvas) |

## Component changes that follow from the tokens

**Functional boundaries move to `border-strong`** — SC 1.4.11's "required to
identify the component or its state" test:

- `Input` / `Textarea` field borders (a text field's only identifying boundary)
- `Button` secondary and `IconButton` secondary borders
- `Timeline` marker borders (they encode done/active/pending state)

**Decorative hairlines stay on `border`** — SC 1.4.11 does not require 3:1 for
separators and container edges that aren't needed to identify anything: `Card`
borders, `Tabs` list separator, neutral `Badge` outline, `Timeline` connector
line. Keeping them light is what preserves the quiet look; promoting them would
visually re-weight every surface.

## The subtlety that pure-token fixes miss: tints

`Badge` text sits on a 12–14% tint of its own color, not on white. A color that
passes 4.5:1 on white can still fail on its tint — the first round of darkened
values measured 4.06–4.24:1 on the tinted backgrounds. So the acceptance
condition for each accent color is **both**:

- color on `#ffffff` ≥ 4.5:1 (links, ghost buttons, inline errors), and
- color on `tint(color, 12–14%)` ≥ 4.5:1 (badge text).

`badge.css` hardcodes the tint RGB values to match their token colors; when a
color token changes, the matching rgba tint in `badge.css` must change with it.

## Resulting ratios

| Pair | Ratio | Needs |
|---|---|---|
| text on surface | 17.43:1 | 4.5 |
| text on canvas | 16.25:1 | 4.5 |
| text-muted on surface | 5.36:1 | 4.5 |
| text-muted on canvas | 4.99:1 | 4.5 |
| primary as text on surface | 5.68:1 | 4.5 |
| primary text on accent-soft | 4.81:1 | 4.5 |
| white on primary (button label) | 5.68:1 | 4.5 |
| primary focus ring / UI boundary | 5.68:1 | 3.0 |
| border-strong as input boundary | 3.21:1 | 3.0 |
| success text on surface | 5.94:1 | 4.5 |
| success on success tint | 4.89:1 | 4.5 |
| warning text on surface | 5.96:1 | 4.5 |
| warning on warning tint | 4.89:1 | 4.5 |
| danger text on surface | 5.95:1 | 4.5 |
| danger on danger tint | 4.82:1 | 4.5 |
| danger as error border | 5.95:1 | 3.0 |

## Regenerating these numbers

The audit is a ~40-line Python script (relative luminance + the pair list
above); no dependency needed. Keep hue and saturation and lower HSL lightness
until both acceptance conditions pass with ≥ 0.3:1 margin (headroom for
anti-aliasing and slightly tinted backgrounds in the product). Amber hues pay
the largest price — yellow-family text on white has inherently low luminance
headroom, which is why `warning` moves the furthest toward brown.

## Further reading

- [WebAIM: Contrast Checker](https://webaim.org/resources/contrastchecker/) — quick pair checks
- [WebAIM: Dodge the 3:1 pitfall](https://webaim.org/blog/wcag-2-and-color-contrast/) — what 1.4.11 does and doesn't cover
- [NASA / USWDS color and contrast guidance](https://designsystem.digital.gov/color/) — token-level approaches to maintaining AA palettes
