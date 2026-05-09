# Fernando Espinosa Salido — Portfolio / CV Website

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/fernando-espinosa-salidos-projects/v0-cv-website)
[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js%2016-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![Built with Claude Code](https://img.shields.io/badge/Built%20with-Claude%20Code-orange?style=for-the-badge)](https://claude.ai/code)

---

## 🇬🇧 English

### Overview

Personal portfolio and CV website for **Fernando Espinosa Salido**, Senior Full Stack Engineer & Tech Lead with 14+ years of experience. The site showcases professional experience, skills, key achievements, and a contact form.

### Features

- **Bilingual** — Full English / Spanish support with automatic browser language detection and runtime toggle
- **Single-page layout** — Fixed sidebar navigation + smooth-scroll sections (Home, About, Skills, Achievements, Experience, Contact)
- **Dark theme** — Custom dark palette with orange (`#ff6600`) accent color
- **Contact form** — Sends emails via [Resend](https://resend.com) API with server-side validation
- **SEO ready** — OpenGraph, Twitter cards, JSON-LD structured data, sitemap, robots.txt
- **Responsive** — Mobile-first with collapsible sidebar on small screens

### Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| UI Library | React 19 |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui (new-york style) |
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
```

### Environment Variables

Create a `.env.local` file at the project root:

```env
RESEND_API_KEY=your_resend_api_key_here
```

> The contact form will not send emails without this key.

### Project Structure

```
app/
  api/send-email/route.ts   # Contact form API (Resend)
  layout.tsx                # Root layout, metadata, LanguageProvider
  page.tsx                  # Single page — composes all sections
  globals.css               # Tailwind v4 theme tokens
components/
  sidebar.tsx               # Fixed nav + language toggle + social links
  hero.tsx / about.tsx / skills.tsx / achievements.tsx / experience.tsx / contact.tsx
lib/
  dictionaries.ts           # All UI copy in `en` and `es`
  i18n-context.tsx          # useLanguage() hook + LanguageProvider
  utils.ts                  # Tailwind class helpers
public/
  Fernando-Espinosa-Resume.pdf
  avatar.jpg
```

### Adding Content

All copy lives in `lib/dictionaries.ts`. Both `en` and `es` exports must be updated together — TypeScript enforces parity via the `Dictionary` type inferred from `en`.

---

## 🇲🇽 Español

### Descripción

Sitio web de portafolio y CV personal de **Fernando Espinosa Salido**, Ingeniero Full Stack Senior & Tech Lead con más de 14 años de experiencia. El sitio presenta experiencia profesional, habilidades, logros clave y un formulario de contacto.

### Características

- **Bilingüe** — Soporte completo inglés / español con detección automática del idioma del navegador y cambio en tiempo real
- **Diseño de una sola página** — Navegación lateral fija + secciones con scroll suave (Inicio, Sobre mí, Habilidades, Logros, Experiencia, Contacto)
- **Tema oscuro** — Paleta oscura personalizada con color de acento naranja (`#ff6600`)
- **Formulario de contacto** — Envía correos vía [Resend](https://resend.com) API con validación del lado del servidor
- **SEO optimizado** — OpenGraph, Twitter cards, datos estructurados JSON-LD, sitemap, robots.txt
- **Responsivo** — Mobile-first con sidebar colapsable en pantallas pequeñas

### Stack Tecnológico

| Capa | Tecnología |
|---|---|
| Framework | Next.js 16 (App Router) |
| Lenguaje | TypeScript 5 |
| UI Library | React 19 |
| Estilos | Tailwind CSS v4 |
| Componentes | shadcn/ui (estilo new-york) |
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

### Agregar contenido

Todo el texto de la interfaz vive en `lib/dictionaries.ts`. Los exports `en` y `es` deben actualizarse juntos — TypeScript garantiza la paridad mediante el tipo `Dictionary` inferido de `en`.

---

## Deployment

El proyecto está desplegado en Vercel y sincronizado automáticamente desde [v0.app](https://v0.app/chat/h2biaNy6X0l). Cualquier push a `main` dispara un nuevo despliegue.

**URL de producción:** [https://vercel.com/fernando-espinosa-salidos-projects/v0-cv-website](https://vercel.com/fernando-espinosa-salidos-projects/v0-cv-website)

---

> Developed with the assistance of [Claude Code](https://claude.ai/code) by Anthropic.
