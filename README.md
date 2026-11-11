# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

## Design tokens

Tokens come from the **Game-PlayVerse** Figma Variables (`WZ3qBtK18DsqhF1ep9AKfs`):

- `src/tokens/tokens.json` – W3C DTCG export of all Figma Variables (Colors, Component Colors, Spacing, Radius, Typography). Do not edit by hand.
- `src/tokens/tokens.css` – generated CSS variables. Run `npm run tokens` after `tokens.json` changes.
- Storybook loads `tokens.css` globally (`.storybook/preview.tsx`); the **PlayVerse / Foundations** page documents every token.

Use the variables in components (`var(--text-primary)`, `var(--spacing-16)`), never raw hex or px values.
