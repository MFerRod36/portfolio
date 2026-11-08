# Code Review Rules — Portfolio Fernanda Rodriguez

## General

- Use const/let, never var
- Named exports only in shared/
- No inline styles, only Tailwind classes
- No hardcoded credentials, API keys or secrets; server secrets are read from `process.env` in `api/` only
- No console.log in committed code
- No dead code: unused imports, variables, components or commented-out blocks

## React

- Functional components only
- Container/Presentational pattern mandatory
- Container: `features/<name>/<Name>Section.jsx`; presentational: `features/<name>/components/<Name>View.jsx`
- Presentational components receive only props, no logic, no side effects
- Scope Rule: global (shared/) if used by 2+ features, local if used by 1
- Features never import from other features
- Visible text lives in `<feature>.i18n.js` with both ES and EN; no hardcoded copy in JSX

## JavaScript

- Prefer early returns over nested conditionals
- Destructure props and objects

## Tailwind 4

- Mobile-first always (start with base, add sm: md: lg:)
- Colors, fonts and easing only from the tokens in `src/styles/tokens.css`
- No generic Tailwind palette colors (e.g. `red-400`, `zinc-900`, `gray-500`) and no raw hex values in classes
- No `bg-[var(--token)]`; use the token utility (e.g. `bg-accent`)
- No arbitrary values unless absolutely necessary
- Use semantic HTML elements (section, article, header, nav, footer)

## Accessibility

- All images must have alt attributes (decorative: `alt=""`)
- Buttons must have descriptive text or aria-label
- Heading levels must be sequential (h1 → h2 → h3); only one h1 (Hero)
- Sufficient color contrast (WCAG AA: 4.5:1 normal text, 3:1 large text and UI components)
- The orange accent must never be used as text or focus ring on a light (cream) background: it fails contrast
- Visible focus styles on every interactive element

## Git

- Conventional commits with scope: `<type>(<scope>): description`; types: feat, fix, style, refactor, docs, chore, test, perf, ci, revert
- Never mention Claude or AI in commit messages
