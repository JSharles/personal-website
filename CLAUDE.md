# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev     # dev server with Turbopack
npm run build   # production build
npm run lint    # ESLint (Next.js config)
```

No test suite is configured.

## Architecture

Single-page portfolio with i18n. Routes: `app/[locale]/page.tsx` → `components/landing-page.tsx`.

**Page assembly** (`components/landing-page.tsx`): client component that detects mobile via `useIsMobile()` and renders either `HeroSectionDesktop` or `HeroSectionMobile`, then `ServicesSection` → `SkillsSection` → `ProjectsSection` → inline CTA.

**i18n**: `next-intl` v4, locales `en/fr/es`, defaultLocale `en`. Middleware in `middleware.ts` handles locale detection and redirects. Messages in `messages/{locale}.json`. Layout at `app/[locale]/layout.tsx` wraps content with `NextIntlClientProvider`. Root layout (`app/layout.tsx`) uses `getLocale()` from `next-intl/server` to set the `<html lang>` attribute dynamically.

**Hero layout** (`components/hero-section/hero-section-desktop.tsx`): `position: relative` section with `h-screen`. Photo is an `<Image fill>` in an `absolute left-0 w-[60%]` container. Text occupies an `absolute right-0 w-[40%]` container with `z-10`.

**Theming**: light theme, all color tokens are CSS variables in `app/globals.css` under `:root`. Key values: `--background: #F4F5F7`, `--foreground: #1C1917`, `--accent: #1C1917`. Tailwind v4 maps them via `@theme inline`. A `.dark` class exists in globals.css but is not currently activated.

**Font**: Inter (sans) + EB Garamond (serif), injected as `--font-inter` and `--font-eb-garamond`, applied globally via `font-sans` / `font-serif`.

**Gradient cards**: both `ServiceCard` and project cards in `ProjectsSection` use a `color` prop to drive an inline `linear-gradient(135deg, ${color}18 0%, #F4F5F7 65%)` background and a tinted border. To add or change a card color, update the `color` field in the data array.

**Providers** (`app/providers.tsx`): TanStack `QueryClientProvider`, Radix `TooltipProvider`, Sonner `Toaster`. Add global providers here.

**Analytics**: Google Analytics GA4 (`G-8YPSNKYLHY`) via `<GoogleAnalytics>` from `@next/third-parties/google`, placed in `app/layout.tsx` after `</body>`.

## Key conventions

- Shadcn/ui primitives live in `components/ui/` — add new ones via `npx shadcn@latest add <component>`.
- The `@` path alias resolves to the repo root (`tsconfig.json`).
- Mobile breakpoint is handled by `useIsMobile()` at the page level — desktop and mobile hero are separate components.
- Avoid Tailwind arbitrary gradient stops (`from-[30%]`) — they don't work reliably in v4. Use inline `style` with `linear-gradient` instead.
- All page-level components are client components (imported from `"use client"` `landing-page.tsx`), so use `useTranslations()` throughout. Only use `await getTranslations()` from `next-intl/server` for truly isolated server components not in the client tree.
- `t.raw("key")` returns arrays/objects from messages — use it for translatable lists (soft skills, language list).

## Positioning

**Jean-Charles Barq — Freelance Product Engineer**

Not a "fullstack generalist". The positioning is: bridge between business complexity and product clarity, for B2B SaaS and companies with complex internal tools. React / TypeScript is the primary stack but the label intentionally omits the tech to avoid the pure-dev silo. Backend (Node / NestJS / PostgreSQL) is a supporting capability, not the main pitch.

---

## Backlog

### ✅ Google Analytics — done
GA4 via `@next/third-parties/google` in `app/layout.tsx`.

### ✅ Style global — done
- Light theme `#F4F5F7`, foreground `#1C1917`, Inter + EB Garamond fonts
- Gradient cards (services + projects)

### ✅ Photo landing page — done
- `public/images/avatar.png` — photo principale hero
- Hero desktop : photo gauche 60% + texte droite 40%

### ✅ Positionnement — done
- Label : "Freelance Product Engineer"
- Accroche : "I help B2B teams turn complex business workflows into clear, reliable and maintainable web products."

### ✅ Expérience Scaleway — done
- Ajoutée en première carte dans `ProjectsSection`
- Logo : `public/images/scaleway-violet-logo.png`
- Période : Sept 2025 — Apr 2026

### ✅ Internationalisation (i18n) — FR / EN / ES — done
- `next-intl` v4, routing `/en` `/fr` `/es`, middleware-based
- Messages complets dans `messages/{en,fr,es}.json`
- Hero, services, skills (titres + listes soft/languages), projects (titres + descriptions), CTA — tout traduit
- `<html lang>` dynamique via `getLocale()` dans le root layout

### Assistant IA (bonus — showcase)
- Chatbot répondant aux questions sur l'expérience/stack
- Stack envisagé : **TanStack AI**
- Intégration : widget flottant ou section dédiée en bas de page
