# Arquitectura del sitio

Landing de una sola página (SPA en React + Vite). La navegación es por anclas dentro de la misma página.

## Secciones

Orden de aparición en `src/App.jsx`:

| Ancla | Sección | Feature | Contenido |
|---|---|---|---|
| `#home` | Hero | `features/hero` | Presentación, H1 y redes sociales |
| `#about` | Sobre mí | `features/about` | Quién soy y qué hago |
| `#services` | Servicios | `features/services` | Carrusel de servicios |
| `#contact` | Contacto | `features/contact` | Formulario (envía por Resend vía `api/contact.js`) |

Los items del menú salen de `src/shared/config/nav.js`. Las redes, de `src/shared/config/socials.js`.

## Idiomas

Español e inglés. `LangContext` guarda el idioma activo y actualiza `<html lang>`.
Cada feature tiene sus textos en `<feature>.i18n.js`; no se escriben textos sueltos en los componentes.

## Estructura de carpetas

```
api/
  contact.js              Función serverless de Vercel: valida el formulario y envía el mail con Resend
contexto-marca/           Marca, arquitectura y checklist de calidad (este archivo)
public/                   logo, og-image, robots.txt, sitemap.xml
src/
  App.jsx                 Arma la página: Navbar + secciones + Footer
  index.css               Entrada de estilos: Tailwind + tokens + estilos base
  styles/tokens.css       Tokens de Tailwind 4 (colores, fuentes, easing)
  features/<nombre>/      Una carpeta por sección
    <Nombre>Section.jsx   Contenedor: estado, hooks e i18n
    components/<Nombre>View.jsx   Presentacional: solo props, sin lógica
    use<Algo>.js          Hooks propios de la feature
    <nombre>.i18n.js      Textos ES/EN
  layout/                 Navbar y Footer (aparecen en toda la página)
  shared/
    components/           Componentes usados por 2+ features (CtaButton, BackgroundGrid, LanguageSwitch)
    config/               Datos compartidos (nav, socials)
    context/              LangContext
```

## Reglas de ubicación (Scope Rule)

- Si lo usa **una** feature, vive dentro de esa feature.
- Si lo usan **dos o más**, va a `shared/`.
- Una feature nunca importa de otra feature.
