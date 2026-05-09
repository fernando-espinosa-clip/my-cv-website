# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server (localhost:3000)
pnpm build      # Production build
pnpm start      # Run production build
pnpm lint       # ESLint via next lint
```

No test suite is configured. TypeScript build errors are suppressed (`ignoreBuildErrors: true` in `next.config.mjs`) — type-check manually with `tsc --noEmit` if needed.

## Environment Variables

```
RESEND_API_KEY   # Required for the contact form email API (Resend service)
```

## Architecture

**Single-page portfolio** built with Next.js 16 App Router. The layout is a fixed sidebar (`components/sidebar.tsx`) on the left plus scrollable main content on the right. Each section corresponds to a nav anchor (`#home`, `#about`, `#skills`, `#achievements`, `#experience`, `#contact`).

### Key directories

- `app/` — App Router root: `layout.tsx`, `page.tsx`, `globals.css`, `robots.ts`, `sitemap.ts`
- `app/api/send-email/route.ts` — Contact form POST handler using Resend API
- `components/` — One file per page section (hero, about, skills, achievements, experience, contact, sidebar) plus `theme-provider.tsx`
- `lib/dictionaries.ts` — All UI copy in `en` and `es` exports (single source of truth for content)
- `lib/i18n-context.tsx` — `LanguageProvider` + `useLanguage()` hook; language auto-detected from `navigator.language`, toggleable at runtime

### i18n pattern

Every component calls `const { t } = useLanguage()` to get translated strings. **All content additions require updating both `en` and `es` in `lib/dictionaries.ts`.** The `Dictionary` type is inferred from `en`, so TypeScript enforces parity between both locales.

### Styling

Tailwind CSS v4 with custom theme tokens defined in `app/globals.css` via `@theme`:
- `--color-primary`: `#ff6600` (orange accent)
- `--color-dark-bg`: `#1a1a1a` (page background)
- `--color-dark-sidebar`: `#000000`
- `--color-dark-card`: `#252525`

shadcn/ui components use the **new-york** style variant. Path alias `@/` maps to the project root.

### Hydration note

`LanguageProvider` renders children inside `<div className="invisible">` until the component mounts (to avoid SSR/client language mismatch). This means the page flashes invisible on first load — intentional behavior, not a bug.

## Deployment

Hosted on Vercel, auto-synced from [v0.app](https://v0.app/chat/h2biaNy6X0l). Direct pushes to `main` trigger a Vercel deploy.
