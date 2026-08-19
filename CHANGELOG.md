# @ndinh02/design-system

## 0.1.1

### Patch Changes

- a9e6aff: Fix package so it's actually importable: add `main`/`module`/`types`/`exports` fields, a `src/index.ts` barrel export for `Button`, `Card`, and `Header`, and a proper library build (externalizing React so it isn't bundled, and bundling `tokens.css` so component styles resolve their CSS custom properties).
