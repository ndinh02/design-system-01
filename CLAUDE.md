# CLAUDE.md — design-system

## What this project is
A component library (Storybook + Vite + React) published to the GitHub
Packages registry (`@ndinh02/design-system`) and consumed by `web-app`.
Because other projects install this package, any change here can affect
downstream apps — treat public APIs (component props, exported tokens)
as things other people depend on, not just internal code.

Status: early-stage. The Storybook starter template files (Button,
Card, Header, Page, HomePage under `src/stories/`) are placeholders,
not real design-system components, and should be deleted rather than
built on or extended.

## Workflow
- All changes go through a pull request and get reviewed before
  merging to `main` — no direct commits to `main`, even for small
  fixes.
- A component's public API (props, exported names, visual behavior
  that other code relies on) should be treated as a contract with
  `web-app`. If a change would break how `web-app` currently uses a
  component, call it out explicitly and mark the changeset as a major
  change — don't let a breaking change slip in disguised as a small
  fix.

## Folder structure
- Real components live in `src/components/`, organized by Atomic Design
  tier: `Atoms/`, `Molecules/`, `Organisms/`, `Templates/`, `Pages/`.
- When building the first real component, migrate away from
  `src/stories/` — either move it into `src/components/` or replace it;
  don't keep adding real components next to the leftover starter files.
- Each component gets its own folder or file group: component file,
  its `.stories` file, and its styles together.

## Design tokens
- `src/tokens.json` (DTCG format) is the **single source of truth** for
  all design values — colors, spacing, font sizes, radii, shadows, etc.
- `src/tokens.ts` imports directly from `tokens.json` and re-exports
  named constants — it stays in sync automatically. When you add a new
  token to `tokens.json`, add a matching export in `tokens.ts`.
- `src/tokens.css` is a **hand-maintained** mirror of `tokens.json` as
  CSS custom properties — there is currently no build step that
  generates it automatically. Any change to `tokens.json` must be
  manually reflected in `tokens.css` in the same change, or the two
  will drift out of sync.
- Never hardcode colors, spacing, font sizes, radii, or shadows in a
  component. Always reference a token (via the CSS custom property or
  the `tokens.ts` export).

## Rules for any new component
- Never hardcode colors, spacing, or font sizes — always use a token
  (see Design tokens above).
- Every new component needs a Storybook story.
- Any component used alongside others needs a Template-level story
  showing it in context (composition).
- Follow Atomic Design naming — `Atoms/`, `Molecules/`, `Organisms/`,
  `Templates/`, `Pages/` — in both the folder structure and the
  Storybook sidebar (the story `title`).
- Type component props with a TypeScript `interface`.

## Rules for any new page or template
- Run a UX/UI check before considering it done: consistency, visible
  system status, error prevention, recognition over recall, Jakob's
  Law, Fitts's Law, Law of Proximity.

## Definition of done — checks before calling anything finished
Run the full set before considering a component or change complete:
1. `npm run lint` — no lint errors (oxlint).
2. `npm run build` — TypeScript + Vite build succeeds.
3. `npm run build-storybook` — Storybook builds and the component
   renders correctly in its story/stories.
4. Accessibility — the story passes the Storybook a11y addon with no
   violations: sufficient color contrast (WCAG AA), full keyboard
   navigation, and proper screen-reader labeling (roles/labels/alt
   text).
5. Tests — if the component has or needs Vitest browser tests, they
   pass.
6. If `tokens.json` changed, confirm `tokens.css` was updated to match
   in the same change (see Design tokens above) — this doesn't happen
   automatically.
Don't report a task as done if any of these haven't been checked.

## Publishing
- Never publish manually. Every change that affects the published
  package needs a changeset (`npm run changeset`) — no exceptions,
  even for small fixes. Publishing happens only through the CI
  pipeline, never by running `npm publish` locally.

## Dependencies
- Always ask the user before adding a new npm dependency (including
  peer/dev dependencies). Since this package is installed by other
  projects, new dependencies affect everyone downstream — don't add
  packages unilaterally, even small or well-known ones.
