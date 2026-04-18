---
name: Tailwind 4 theme tokens defined in index.css
description: Canonical @theme tokens available as Tailwind utility classes across the portfolio (color-bg, color-accent, color-text, fonts, gradient-hero).
type: project
---

`src/index.css` define en `@theme`:

- Colores: `--color-bg` (#2a3336), `--color-accent` (#ff8053), `--color-text` (#f5f5f7) → disponibles como `bg-bg`, `bg-accent`, `text-text`, `outline-accent`, etc.
- Fonts: `--font-display` (Space Grotesk), `--font-mencken` (mencken-text), `--font-sans` (Inter) → `font-display`, `font-mencken`, `font-sans`.
- Gradientes: `--gradient-hero` → se aplica con `[background-image:var(--gradient-hero)]` (el patrón actual del Hero).
- Tracking: `--tracking-wide-display` → `tracking-display`.

**Why:** Tailwind v4 usa `@theme` en CSS (no `tailwind.config.js`). Los tokens se consumen directo como utility classes — nunca `bg-[var(--color-bg)]` en className.

**How to apply:** Preferir siempre la utility semántica (`text-bg`) antes que arbitrary values con `var()`. Solo usar arbitrary hex (`[#xxxxxx]`) para shades intermedios que no existen como token (ej: los stops del gradiente del CTA).
