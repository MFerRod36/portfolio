# Brand Manual — Fernanda Rodriguez

## Identidad

**Nombre:** Fernanda Rodriguez
**Rol:** Desarrolladora Web & Diseñadora UX/UI
**Tagline:** Desarrolladora Web & Diseñadora UX/UI
**Tono:** Profesional, directo, cercano. Sin frases genéricas.

## Paleta de colores (60 / 30 / 10)

| Token          | Hex       | Utility de Tailwind      | Proporción | Uso                                                        |
| -------------- | --------- | ------------------------ | ---------- | ---------------------------------------------------------- |
| Paper          | `#f4ead5` | `bg-paper`, `text-paper` | Dominante  | Navbar, Hero, Services y Footer; texto sobre verde         |
| Forest         | `#1e3b2f` | `bg-forest`, `text-forest` | Secundario | About y Contact; texto principal sobre crema             |
| Accent         | `#ff8053` | `bg-accent`, `text-accent` | 10%      | Botones, detalles decorativos; texto solo sobre verde      |
| Accent strong  | `#b23f18` | `text-accent-strong`     | —          | Naranja para texto chico y links **sobre crema**           |
| Danger         | `#b42318` | `text-danger`            | —          | Mensajes de error sobre crema (sobre verde se usa `text-accent`) |

**Distribución de secciones:** se alternan para que cada una se separe de la siguiente:
Hero (crema) → About (verde) → Services (crema) → Contact (verde) → Footer (crema). El Navbar flota en crema con borde verde sutil.

Los tokens viven en `src/styles/tokens.css`. Cada color nuevo se agrega ahí y en esta tabla.

### Contraste verificado (WCAG 2.1 AA)

| Texto              | Fondo   | Ratio  | Uso permitido                         |
| ------------------ | ------- | ------ | ------------------------------------- |
| forest             | paper   | 10.2:1 | Todo                                  |
| paper              | forest  | 10.2:1 | Todo                                  |
| forest/75          | paper   | ~5.1:1 | Texto secundario (mínimo `/75`)       |
| paper/70           | forest  | ~5.9:1 | Texto secundario sobre verde          |
| accent             | forest  | 4.92:1 | Texto de cualquier tamaño             |
| forest             | accent  | 4.92:1 | Texto de botones naranjas             |
| accent-strong      | paper   | 4.86:1 | Etiquetas, links y resaltes sobre crema |
| **accent**         | **paper** | **2.07:1** | **Nunca como texto ni foco sobre crema** |

**Reglas:**

- Nunca reemplazar estos colores por utilidades genéricas de Tailwind (zinc, amber, slate, red, white, etc.)
- Usar siempre las utilities de los tokens (`bg-forest`), nunca hex sueltos ni `bg-[var(--color-x)]`
- Sobre crema, el naranja `accent` solo va como relleno (botones) o decoración; el texto naranja usa `accent-strong`. Única excepción, decidida por la marca: la línea en Mencken del H1 del Hero usa `accent` (2.07:1, no cumple WCAG)
- Texto secundario con opacidad: mínimo `forest/75` sobre crema y `paper/70` sobre verde
- Fondos planos, sin degradés
- Anillo de foco: `outline-forest` sobre crema, `outline-accent` sobre verde

## Tipografía

| Rol           | Fuente        | Peso          | Uso                                         |
| ------------- | ------------- | ------------- | ------------------------------------------- |
| Display       | Space Grotesk | 700 (bold)    | H1, H2, títulos de cards                     |
| UI            | Space Grotesk | 500 / 600     | Labels, nav, botones                        |
| Acento        | Mencken (Typekit) | 700 italic | Segunda línea del H1 del Hero (única excepción serif) |
| Body          | Inter         | 400 (regular) | Párrafos, descripciones                     |
| Body emphasis | Inter         | 500 (medium)  | Destacados en cuerpo                        |

**Reglas:**

- Máximo 3 tamaños tipográficos por sección
- H1 hero: mínimo `text-5xl` en desktop
- Mencken solo en el acento del Hero; el resto del sitio es sans-serif

## Estilo visual

- **Dirección:** Claro y cálido con bloques verdes, minimal, editorial
- **Elemento visual:** Abstracción geométrica. Única foto: un retrato de Fernanda en el Hero, dentro de un arco verde (`rounded-t-full`)
- **Decoración:** Grid sutil (`BackgroundGrid`), formas geométricas simples, composición tipográfica
- **Espaciado:** Generoso. `py-24` mínimo en secciones, `gap-8` mínimo entre elementos
- **Bordes:** `border-forest/15` sobre crema, `border-paper/15` sobre verde

## Componentes UI

- **Botón primario (`CtaButton`):** `bg-forest text-paper font-semibold` con Space Grotesk, redondeado completo. Sobre secciones verdes lleva borde `border-paper/60`
- **Botón secundario:** `border border-forest/30 text-forest` sobre crema, `border border-paper/30 text-paper` sobre verde
- **Badge/label:** `text-xs tracking-wide-display uppercase`, `text-accent-strong` sobre crema y `text-accent` sobre verde

## Lo que NUNCA se hace

- No usar colores de Tailwind genéricos en lugar de la paleta definida
- No usar texto naranja `accent` sobre crema
- No sumar otras fotos ni ilustraciones figurativas fuera del retrato del Hero
- No sumar fuentes fuera de Space Grotesk, Inter y el acento Mencken
- No crampar elementos — el espacio es parte del diseño
- No CTAs vagos ("Click aquí", "Ver más") — siempre acción específica

## Copy:

A los 30 años recalibré mi carrera por completo. Dejé atrás los call centers para profesionalizarme en la construcción de productos digitales, una decisión de crecimiento enfocada en la intersección entre la lógica técnica y la estrategia visual. Hoy, desde Córdoba y operando a nivel global, mi trabajo se centra en garantizar la paridad absoluta entre el diseño de alta fidelidad y la integridad del código, eliminando cualquier fricción que comprometa la escalabilidad de un proyecto. En paralelo, desarrollo identidades y estrategias de comunicación para profesionales que necesitan que su presencia digital tenga un sustento real y no solo una estética prolija. Entiendo la tecnología y el branding como herramientas de negocio: si una solución no es funcional o no cumple un objetivo de impacto, no forma parte de mi proceso.
