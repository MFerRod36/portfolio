# Brand Manual — Fernanda Rodriguez

## Identidad

**Nombre:** Fernanda Rodriguez
**Rol:** Desarrolladora Web & Diseñadora UX/UI
**Tagline:** Desarrolladora Web & Diseñadora UX/UI
**Tono:** Profesional, directo, cercano. Sin frases genéricas.

## Paleta de colores

| Token      | Hex       | CSS Variable     | Uso                          |
| ---------- | --------- | ---------------- | ---------------------------- |
| Background | `#2a3336` | `--color-bg`     | Fondo principal              |
| Accent     | `#ff8053` | `--color-accent` | CTA, resaltes, links activos |
| Text       | `#f5f5f7` | `--color-text`   | Títulos, texto principal     |

**Reglas:**

- Nunca reemplazar estos colores por utilidades genéricas de Tailwind (zinc, amber, slate, etc.)
- Siempre usar las CSS variables definidas en `src/index.css`
- Degradés permitidos usando `#2a3336` como base

## Tipografía

| Rol           | Fuente        | Peso          | Uso                     |
| ------------- | ------------- | ------------- | ----------------------- |
| Display       | Space Grotesk | 700 (bold)    | H1, H2, CTAs            |
| UI            | Space Grotesk | 500 (medium)  | H3, labels, nav         |
| Body          | Inter         | 400 (regular) | Párrafos, descripciones |
| Body emphasis | Inter         | 500 (medium)  | Destacados en cuerpo    |

**Reglas:**

- Máximo 3 tamaños tipográficos por sección
- H1 hero: mínimo `text-5xl` en desktop
- Nunca usar serif ni fuentes del sistema

## Estilo visual

- **Dirección:** Oscuro, minimal, editorial
- **Elemento visual:** Abstracción geométrica. Sin fotos ni ilustraciones figurativas
- **Decoración:** Grid sutil, formas geométricas simples, composición tipográfica
- **Espaciado:** Generoso. `py-24` mínimo en secciones, `gap-8` mínimo entre elementos
- **Bordes:** Sutiles, usando `#f5f5f7` con opacidad baja o `border-white/10`

## Componentes UI

- **Botón primario:** `bg-[#ff8053] text-[#2a3336] font-semibold` con Space Grotesk
- **Botón secundario:** `border border-[#f5f5f7]/30 text-[#f5f5f7]`
- **Badge/label:** `text-xs tracking-widest uppercase text-[#ff8053]`

## Lo que NUNCA se hace

- No usar colores de Tailwind genéricos en lugar de la paleta definida
- No proponer fotos o ilustraciones figurativas
- No usar más de 2 fuentes
- No crampar elementos — el espacio es parte del diseño
- No CTAs vagos ("Click aquí", "Ver más") — siempre acción específica
