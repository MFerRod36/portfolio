# Reglas de calidad y optimización

Checklist que el sitio tiene que cumplir. Se revisa en cada cambio importante y antes de cada deploy.
Estado verificado el 2026-11-08.

## Lo que NO

| Regla | Cómo se cumple |
|---|---|
| Sin claves hardcodeadas ni secretos filtrados | La clave de Resend vive en las variables de entorno de Vercel y solo la lee `api/contact.js` en el servidor. `.env.local` está en `.gitignore`; las variables están documentadas en `.env.example`. |
| Sin `console.log` en producción | No hay ninguno en `src/`. La regla también está en `AGENTS.md`, así que gga lo revisa en cada commit. |
| Sin sourcemaps expuestos | Vite no genera `.map` en el build de producción (se verifica en `dist/`). |
| Sin dependencias sin uso | Se revisan los imports antes de agregar o actualizar paquetes. |
| Sin vulnerabilidades conocidas | `npm audit` en 0 antes de cada deploy. |
| Sin colores fuera de la paleta | Solo tokens de `src/styles/tokens.css`; nada de colores genéricos de Tailwind (`red-400`, `gray-500`, etc.). |
| Sin texto naranja sobre crema | Da 2,07:1 y falla WCAG. Sobre crema se usa la variante oscura del naranja. |
| Sin robots.txt que bloquee buscadores o crawlers de IA | `public/robots.txt` permite todo y apunta al sitemap. |

## Lo que SÍ

| Regla | Cómo se cumple |
|---|---|
| Favicon | `public/logo.png`, enlazado en `index.html`. |
| Título y meta descripción | En `index.html`. |
| Imagen OG | `public/og-image.jpg` (1200x630). |
| Tag canónico | `https://fernanda-rodriguez.dev/` en `index.html`. |
| Un solo H1 | En el Hero; las demás secciones usan H2 en adelante. |
| Atributo de idioma | `<html lang>` se actualiza con el idioma activo (`LangContext`). |
| Texto alternativo | Toda imagen lleva `alt`; las decorativas, `alt=""`. |
| Datos estructurados | JSON-LD de tipo `Person` en `index.html`. |
| Sitemap | `public/sitemap.xml`. |
| Contraste WCAG AA | 4.5:1 para texto normal y 3:1 para texto grande y componentes de UI. **Pendiente:** se verifica con la paleta nueva. |
| Link para saltar al contenido | "Skip to main content" en `index.html`. |
| Cabeceras de seguridad y CSP | En `vercel.json`. Si se agrega una fuente o script externo, hay que sumarlo a la CSP. |
| HTTPS | Vercel lo fuerza automáticamente. |
| Lint sin errores | `npm run lint` en 0 antes de cada deploy. **Pendiente:** hoy hay 5 errores. |

## No aplica

| Regla | Por qué |
|---|---|
| Proteger rutas por defecto | El sitio es público: no hay panel, login ni rutas privadas. |
