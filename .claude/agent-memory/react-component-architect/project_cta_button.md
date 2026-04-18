---
name: CtaButton shared component
description: CtaButton lives in shared/ as the canonical CTA primitive, used by Hero first and expected to be reused across landing sections.
type: project
---

`src/shared/components/CtaButton.jsx` es el CTA canónico del portfolio — `<a>` si recibe `href`, `<button type="button">` si recibe `onClick`. Variantes `sm | md | lg` vía `sizeClasses`. Named export.

**Why:** El diseño aprobado tiene un CTA con gradiente, inner highlight y múltiples shadows que va a repetirse en Hero, About, Services y Contact. Centralizarlo en `shared/` cumple la Scope Rule (2+ features) y evita replicar la misma torre de clases en cada sección.

**How to apply:** Cualquier CTA de marca debe usar este componente. No reimplementar el gradiente ni las shadows inline en features. Si aparece una variante nueva (ghost, outline), agregarla acá como prop `variant` antes que crear otro componente paralelo.
