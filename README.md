# Fernanda Rodriguez — Portfolio

> Desarrolladora Web & Diseñadora UX/UI · Córdoba, Argentina · Operando a nivel global

Sitio personal que reúne mis servicios de desarrollo web y estrategia digital. Diseñado con foco en la paridad entre diseño de alta fidelidad y calidad de código.

## Servicios

- **Desarrollo Web** — Interfaces modulares, escalables y accesibles
- **Marketing Digital & CM** — Identidades visuales y estrategia de crecimiento en redes

## Stack

| Capa | Tecnología |
|---|---|
| Frontend | React 19 + Vite + JavaScript |
| Estilos | Tailwind CSS 4 |
| Backend | Vercel Serverless Functions + Resend |
| Deploy | Vercel |

## Redes

[![GitHub](https://img.shields.io/badge/GitHub-MFerRod36-1e3b2f?style=flat&logo=github&logoColor=ff8053)](https://github.com/MFerRod36)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-fernanda--rodriguez036-1e3b2f?style=flat&logo=linkedin&logoColor=ff8053)](https://www.linkedin.com/in/fernanda-rodriguez036/)
[![Instagram](https://img.shields.io/badge/Instagram-codencontent-1e3b2f?style=flat&logo=instagram&logoColor=ff8053)](https://www.instagram.com/codencontent/)

## Contacto

[rodriguezfer2811@gmail.com](mailto:rodriguezfer2811@gmail.com)

---

## Desarrollo

### Scripts

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo (solo el front; el formulario no envía) |
| `vercel dev` | Front + función `api/contact.js`, para probar el formulario en local |
| `npm run lint` | ESLint sobre todo el proyecto |
| `npm run build` | Corre el lint y, si no hay errores, genera el build de producción en `dist/` |
| `npm run preview` | Sirve `dist/` para revisarlo antes de publicar |

### Variables de entorno

Copiá `.env.example` a `.env.local` y completá los valores. `.env.local` nunca se sube a git.
En producción se cargan en Vercel → Project → Settings → Environment Variables.

| Variable | Para qué |
|---|---|
| `RESEND_API_KEY` | Clave de Resend para enviar los mails del formulario |
| `CONTACT_FROM` | Remitente; tiene que ser de un dominio verificado en Resend |
| `CONTACT_EMAIL` | Casilla que recibe los mensajes |
| `ALLOWED_ORIGIN` | Opcional. Origen permitido por CORS (por defecto `https://fernanda-rodriguez.dev`) |

### Documentación del proyecto

| Archivo | Contenido |
|---|---|
| `contexto-marca/marca.md` | Manual de marca: paleta, tipografía, estilo y componentes |
| `contexto-marca/arquitectura.md` | Secciones, idiomas y estructura de carpetas |
| `contexto-marca/list-optimization.md` | Checklist de calidad; se revisa antes de cada deploy |
| `AGENTS.md` | Reglas de código que siguen los agentes al escribir y revisar |
