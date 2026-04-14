# Portfolio — Fernanda Rodriguez

## Proyecto

Landing page + portfolio personal. Marca propia.
Servicios: Desarrollo Web + Marketing Digital/CM.

## Stack

- Frontend: React + Vite + JavaScript + Tailwind 4
- Backend: Node.js + Express (solo formulario de contacto)
- Deploy: Vercel (frontend) + Render (backend)

## Arquitectura: Scope Rule (Gentleman)

- Global (shared/): usado por 2+ features
- Local (features/[nombre]/): usado por 1 feature

## Subagentes disponibles

| Acción                 | Agente                  | Modelo |
| ---------------------- | ----------------------- | ------ |
| Diseñar sección        | ux-landing-designer     | Sonnet |
| Crear componente React | react-component-builder | Opus   |
| Revisar accesibilidad  | accessibility-auditor   | Haiku  |
| Hacer commit           | git-workflow-manager    | Haiku  |

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

## Flujo de trabajo por sección

1. ux-landing-designer → diseña y aprueba
2. react-component-builder → construye
3. accessibility-auditor → revisa WCAG
4. git-workflow-manager → commit

## Commits

feat|fix|style|refactor|docs(scope): descripción
Nunca mencionar Claude ni IA en commits.
