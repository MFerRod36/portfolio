# Portfolio — Fernanda Rodriguez

## Brand Manual

Antes de diseñar o proponer cualquier elemento visual, leer @../contexto-marca/marca.md

## Contexto del proyecto

- `contexto-marca/marca.md`: manual de marca (paleta, tipografía, estilo, componentes)
- `contexto-marca/arquitectura.md`: secciones, navegación y estructura de carpetas
- `contexto-marca/list-optimization.md`: checklist de calidad; revisarla antes de cada deploy
- `AGENTS.md`: reglas de revisión de código que usa gga en cada commit

## Proyecto

Landing page + portfolio personal. Marca propia.
Servicios: Desarrollo Web + Marketing Digital/CM.

## Stack

- Frontend: React 19 + Vite + JavaScript + Tailwind 4 (tokens en `src/styles/tokens.css`)
- Backend: función serverless de Vercel en `api/contact.js` (solo formulario de contacto).
  Valida y envía el mail con **Resend**. Variables de entorno documentadas en `.env.example`
- Deploy: Vercel (frontend + función serverless). Probar el formulario en local con `vercel dev`
- Seguridad: headers y CSP en `vercel.json`

## Arquitectura: Scope Rule (Gentleman)

- Global (`shared/`): usado por 2+ features
- Local (`features/<nombre>/`): usado por 1 feature
- Detalle y árbol de carpetas en `contexto-marca/arquitectura.md`

## Subagentes disponibles

| Acción                 | Agente                      | Modelo |
| ---------------------- | --------------------------- | ------ |
| Diseñar sección        | ux-landing-designer         | Sonnet |
| Crear componente React | react-component-architect   | Opus   |
| Revisar accesibilidad  | wcag-accessibility-reviewer | Haiku  |
| Hacer commit           | commit-pr-specialist        | Haiku  |

Las skills `react-19` y `tailwind-4` se cargan solas en `react-component-architect` (campo `skills`).
La memoria de los agentes es `local`: vive en `.claude/agent-memory-local/` y no se sube a git.

## Convenciones de código

- Container: `features/<nombre>/<Nombre>Section.jsx`
- Presentacional: `features/<nombre>/components/<Nombre>View.jsx`
- Hooks: camelCase con prefijo use (`useCarousel.js`), en la raíz de la feature
- Textos ES/EN en `features/<nombre>/<nombre>.i18n.js`
- Solo named exports en `shared/`
- No importar entre features/

## Patrones

- Container/Presentacional obligatorio
- Presentacional = solo props, sin lógica

## Prohibiciones

- No inline styles, solo Tailwind
- No colores fuera de los tokens de marca (nada de `red-400`, `zinc-900` ni hex sueltos)
- No hardcodear credenciales ni claves
- No importar desde features/ entre sí
- No escribir código de una sección nueva o un rediseño sin diseño aprobado

## Flujo de trabajo

### Secciones nuevas y rediseños visuales → 4 fases

1. **Diseño**: `ux-landing-designer` propone. Esperar aprobación explícita antes de seguir.
2. **Implementación**: `react-component-architect` implementa el diseño aprobado.
3. **Accesibilidad**: `wcag-accessibility-reviewer` revisa WCAG 2.1 AA. Si hay problemas, `react-component-architect` los corrige.
4. **Commit**: `commit-pr-specialist`, un commit por cambio lógico.

### Arreglos chicos, limpieza y mantenimiento → directo

Sin agentes. Se hace el cambio, se corren `npm run lint` y `npm run build`, y se commitea.
Si el cambio toca algo visual (contraste, foco, alt, estructura de headings), igual se revisa contra WCAG.
Ante la duda de si algo es chico, preguntar a la usuaria.

## Git

- Commits: Conventional Commits con scope, en inglés. Tipos: `feat`, `fix`, `style`, `refactor`, `docs`, `chore`, `test`, `perf`, `ci`, `revert`
- Nunca mencionar Claude ni IA en commits
- Nunca hacer push sin que la usuaria lo pida
- Todo lo que está en `.gitignore` no se sube: verificar con `git ls-files -ci --exclude-standard` (no debe mostrar nada)
