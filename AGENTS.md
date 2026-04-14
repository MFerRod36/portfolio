# Code Review Rules — Portfolio Ferna

## General

- Use const/let, never var
- Named exports only in shared/
- No inline styles, only Tailwind classes
- No hardcoded credentials or emails

## React

- Functional components only
- Container/Presentational pattern mandatory
- Container name = feature name
- Presentational components receive only props, no logic
- Scope Rule: global (shared/) if used by 2+ features, local if used by 1

## JavaScript

- Prefer early returns over nested conditionals
- Destructure props and objects
- No console.log in committed code

## Tailwind 4

- Mobile-first always (start with base, add sm: md: lg:)
- Use semantic HTML elements (section, article, header, nav, footer)
- No arbitrary values unless absolutely necessary

## Accessibility

- All images must have alt attributes
- Buttons must have descriptive text or aria-label
- Heading levels must be sequential (h1 → h2 → h3)
- Sufficient color contrast (WCAG AA minimum)

## Git

- Conventional commits: feat|fix|style|refactor|docs(scope): description
- Never mention Claude or AI in commit messages
- One concern per commit
