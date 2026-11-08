# Portfolio — Fernanda Rodriguez

## Brand Manual

Antes de diseñar o proponer cualquier elemento visual, leer @BRAND.md

## Proyecto

Landing page + portfolio personal. Marca propia.
Servicios: Desarrollo Web + Marketing Digital/CM.

## Stack

- Frontend: React + Vite + JavaScript + Tailwind 4
- Backend: función serverless de Vercel en `api/contact.js` (solo formulario de contacto).
  Valida y envía el mail con **Resend**. Variables de entorno: `RESEND_API_KEY`,
  `CONTACT_FROM`, `CONTACT_EMAIL`, `ALLOWED_ORIGIN` (opcional, CORS)
- Deploy: Vercel (frontend + función serverless). Probar local con `vercel dev`
- Seguridad: headers y CSP en `vercel.json`

## Arquitectura: Scope Rule (Gentleman)

- Global (shared/): usado por 2+ features
- Local (features/[nombre]/): usado por 1 feature

## Subagentes disponibles

| Acción                 | Agente                      | Modelo |
| ---------------------- | --------------------------- | ------ |
| Diseñar sección        | ux-landing-designer         | Sonnet |
| Crear componente React | react-component-architect   | Opus   |
| Revisar accesibilidad  | wcag-accessibility-reviewer | Haiku  |
| Hacer commit           | commit-pr-specialist        | Haiku  |

## Skills activas

- React 19 → ~/.claude/skills/react-19/SKILL.md
- Tailwind 4 → ~/.claude/skills/tailwind-4/SKILL.md
- TypeScript → ~/.claude/skills/typescript/SKILL.md

## Convenciones de código

- Componentes: PascalCase (Button.jsx)
- Hooks: camelCase con prefijo use (useScrollspy.js)
- Archivos de feature: lowercase (hero.jsx)
- Solo named exports en shared/
- No importar entre features/

## Patrones

- Container/Presentacional obligatorio
- Container = mismo nombre que la feature
- Presentacional = solo props, sin lógica

## Prohibiciones

- No inline styles, solo Tailwind
- No hardcodear emails ni credenciales
- No importar desde features/ entre sí
- No escribir código sin diseño aprobado primero

## Flujo de trabajo por componente

### Fase 1 — Diseño

Use ux-landing-designer to propose visual design
→ Esperar aprobación explícita antes de continuar

### Fase 2 — Implementación

Use react-component-architect to implement the approved design
→ Read ~/.claude/skills/react-19/SKILL.md
→ Read ~/.claude/skills/tailwind-4/SKILL.md

### Fase 3 — Accesibilidad

Use wcag-accessibility-reviewer to check WCAG compliance
→ Si hay problemas: use react-component-architect to fix them

### Fase 4 — Commit

Use commit-pr-specialist to commit
→ Formato: feat|fix|style|refactor|docs(scope): descripción
→ Nunca mencionar Claude ni IA

## Commits

feat|fix|style|refactor|docs(scope): descripción
Nunca mencionar Claude ni IA en commits.
