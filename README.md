# Fernando Espinosa Salido — Portfolio / CV Website

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/fernando-espinosa-salidos-projects/v0-cv-website)
[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js%2016-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![Built with Claude Code](https://img.shields.io/badge/Built%20with-Claude%20Code-orange?style=for-the-badge)](https://claude.ai/code)

---

## 🇬🇧 English

### Overview

Personal portfolio and CV website for **Fernando Espinosa Salido**, Senior Full Stack Engineer & Tech Lead with 14+ years of experience. The site showcases professional experience, skills, key achievements, and a contact form.

### Features

- **Bilingual** — Full English / Spanish support with automatic browser language detection (via `Accept-Language` header) and runtime toggle persisted in a cookie
- **Single-page layout** — Fixed sidebar navigation + smooth-scroll sections (Home, About, Skills, Achievements, Experience, Contact)
- **Dark theme** — Custom dark palette with orange (`#ff6600`) accent color
- **Contact form** — Validated client-side with react-hook-form + zod, sends emails via [Resend](https://resend.com) API with server-side sanitization
- **SEO ready** — OpenGraph image (auto-generated), Twitter cards, JSON-LD structured data, sitemap, robots.txt
- **Secure** — CSP, HSTS, X-Frame-Options, Referrer-Policy headers; server input sanitization; HTML escaping in emails
- **Responsive** — Mobile-first with collapsible sidebar on small screens

### Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, RSC) |
| Language | TypeScript 6 |
| UI Library | React 19 |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui (new-york style) |
| Form validation | react-hook-form + zod |
| Icons | Lucide React |
| Email | Resend API |
| Deployment | Vercel |
| Package manager | pnpm |

### Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Run production build locally
pnpm start

# Type-check manually
pnpm tsc --noEmit

# Lint
pnpm lint
```

### Environment Variables

Create a `.env.local` file at the project root:

```env
RESEND_API_KEY=your_resend_api_key_here
```

> The contact form will not send emails without this key.

### Project Structure

```
middleware.ts                 # Language detection (cookie + Accept-Language → x-lang header)
app/
  layout.tsx                  # Async RSC — reads x-lang for <html lang>, metadata
  page.tsx                    # Async RSC — calls getDictionary(), composes all sections
  globals.css                 # Tailwind v4 theme tokens (colors, etc.)
  opengraph-image.tsx         # Auto-generated OG image (1200×630, dark theme)
  error.tsx                   # Error boundary page
  not-found.tsx               # 404 page
  api/send-email/route.ts     # Contact form API (Resend) with zod + HTML escaping
components/
  sidebar.tsx                 # Client — nav, language toggle (cookie + router.refresh()), social links
  hero.tsx                    # Client — image slideshow
  about.tsx / skills.tsx / achievements.tsx / experience.tsx  # RSC sections
  contact.tsx                 # Client — react-hook-form + zod form
lib/
  dictionaries.ts             # All UI copy in `en` and `es`
  get-dictionary.ts           # Server helper — reads x-lang header, returns typed Dictionary
  utils.ts                    # Tailwind class helpers (cn)
public/
  Fernando-Espinosa-Resume.pdf
  avatar.jpg
```

### i18n Architecture

Language detection runs in `middleware.ts` on every request:
1. Reads the `lang` cookie (set on first visit or toggle)
2. Falls back to `Accept-Language` header if no cookie exists
3. Writes the resolved language to the `x-lang` request header

Server components call `getDictionary()` which reads `x-lang` and returns the typed dictionary. The `Sidebar` component (client) toggles language by writing a new `lang` cookie and calling `router.refresh()` to re-render the RSC tree.

All content lives in `lib/dictionaries.ts`. Both `en` and `es` exports must be updated together — TypeScript enforces parity via the `Dictionary` type inferred from `en`.

---

## 🇲🇽 Español

### Descripción

Sitio web de portafolio y CV personal de **Fernando Espinosa Salido**, Ingeniero Full Stack Senior & Tech Lead con más de 14 años de experiencia. El sitio presenta experiencia profesional, habilidades, logros clave y un formulario de contacto.

### Características

- **Bilingüe** — Soporte completo inglés / español con detección automática del idioma (cabecera `Accept-Language`) y cambio en tiempo real persistido en cookie
- **Diseño de una sola página** — Navegación lateral fija + secciones con scroll suave (Inicio, Sobre mí, Habilidades, Logros, Experiencia, Contacto)
- **Tema oscuro** — Paleta oscura personalizada con color de acento naranja (`#ff6600`)
- **Formulario de contacto** — Validado en el cliente con react-hook-form + zod, envía correos vía [Resend](https://resend.com) API con sanitización del lado servidor
- **SEO optimizado** — Imagen OpenGraph auto-generada, Twitter cards, JSON-LD, sitemap, robots.txt
- **Seguro** — Cabeceras CSP, HSTS, X-Frame-Options; sanitización de entradas; escape HTML en emails
- **Responsivo** — Mobile-first con sidebar colapsable en pantallas pequeñas

### Stack Tecnológico

| Capa | Tecnología |
|---|---|
| Framework | Next.js 16 (App Router, RSC) |
| Lenguaje | TypeScript 6 |
| UI Library | React 19 |
| Estilos | Tailwind CSS v4 |
| Componentes | shadcn/ui (estilo new-york) |
| Validación de formularios | react-hook-form + zod |
| Iconos | Lucide React |
| Email | Resend API |
| Despliegue | Vercel |
| Gestor de paquetes | pnpm |

### Inicio rápido

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev

# Compilar para producción
pnpm build

# Ejecutar build de producción localmente
pnpm start
```

### Variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
RESEND_API_KEY=tu_clave_de_resend_aqui
```

> El formulario de contacto no enviará correos sin esta clave.

### Arquitectura i18n

La detección de idioma corre en `middleware.ts` en cada petición:
1. Lee la cookie `lang` (establecida en la primera visita o al cambiar idioma)
2. Usa la cabecera `Accept-Language` como respaldo si no hay cookie
3. Escribe el idioma resuelto en la cabecera `x-lang`

Los componentes de servidor llaman a `getDictionary()` que lee `x-lang` y retorna el diccionario tipado. El componente `Sidebar` (cliente) cambia el idioma escribiendo una nueva cookie `lang` y llamando a `router.refresh()` para re-renderizar el árbol RSC.

### Agregar contenido

Todo el texto de la interfaz vive en `lib/dictionaries.ts`. Los exports `en` y `es` deben actualizarse juntos — TypeScript garantiza la paridad mediante el tipo `Dictionary` inferido de `en`.

---

## Deployment

El proyecto está desplegado en Vercel. Cualquier push a `main` dispara un nuevo despliegue automático.

**URL de producción:** [https://vercel.com/fernando-espinosa-salidos-projects/v0-cv-website](https://vercel.com/fernando-espinosa-salidos-projects/v0-cv-website)

---

> Developed with the assistance of [Claude Code](https://claude.ai/code) by Anthropic.
