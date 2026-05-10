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

Single-page portfolio. The only route is `/` → `app/page.tsx` → `pages/landing-page.tsx`.

**Page assembly** (`pages/landing-page.tsx`): client component that detects mobile via `useIsMobile()` and renders either `HeroSectionDesktop` or `HeroSectionMobile`, then `ServicesSection` → `SkillsSection` → `ProjectsSection` → inline CTA.

**Hero layout** (`components/hero-section/hero-section-desktop.tsx`): `position: relative` section with `h-screen`. Photo is an `<Image fill>` in an `absolute left-0 w-[60%]` container. Gradient overlay is a sibling `div` placed **inside** the photo container (not on the section) using an inline CSS `linear-gradient` — Tailwind v4 does not support arbitrary gradient stop percentages. Text occupies an `absolute right-0 w-[40%]` container with `z-10`.

**Theming**: dark theme, all color tokens are CSS variables in `app/globals.css` under `:root`. Key values: `--background: #0D0D0F`, accent `--accent: #9333EA` (violet). Tailwind v4 maps them via `@theme inline`. Custom keyframes (`shine`, `gradient`) live in `tailwind.config.ts` at the repo root.

**Font**: Space Grotesk (Google Fonts), injected as `--font-space-grotesk`, applied globally via `font-sans`.

**Gradient cards**: both `ServiceCard` and project cards in `ProjectsSection` use a `color` prop to drive an inline `linear-gradient(135deg, ${color}18 0%, #0D0D0F 65%)` background and a tinted border. To add or change a card color, update the `color` field in the data array.

**Providers** (`app/providers.tsx`): TanStack `QueryClientProvider`, Radix `TooltipProvider`, Sonner `Toaster`. Add global providers here.

**Analytics**: Google Analytics GA4 (`G-8YPSNKYLHY`) via `<GoogleAnalytics>` from `@next/third-parties/google`, placed in `app/layout.tsx` after `</body>`.

## Key conventions

- Shadcn/ui primitives live in `components/ui/` — add new ones via `npx shadcn@latest add <component>`.
- The `@` path alias resolves to the repo root (`tsconfig.json`).
- Mobile breakpoint is handled by `useIsMobile()` at the page level — desktop and mobile hero are separate components.
- Avoid Tailwind arbitrary gradient stops (`from-[30%]`) — they don't work reliably in v4. Use inline `style` with `linear-gradient` instead.

## Positioning

**Jean-Charles Barq — Freelance Product Engineer**

Not a "fullstack generalist". The positioning is: bridge between business complexity and product clarity, for B2B SaaS and companies with complex internal tools. React / TypeScript is the primary stack but the label intentionally omits the tech to avoid the pure-dev silo. Backend (Node / NestJS / PostgreSQL) is a supporting capability, not the main pitch.

---

## Backlog

### ✅ Google Analytics — done
GA4 via `@next/third-parties/google` in `app/layout.tsx`.

### ✅ Style global — done
- Dark theme `#0D0D0F`, violet accent `#9333EA`, Space Grotesk font
- Gradient cards (services + projects)

### ✅ Photo landing page — done
- `public/images/avatar.png` — photo principale hero
- Hero desktop : photo gauche 60% + gradient inline + texte droite 40%

### ✅ Positionnement — done
- Label : "Freelance Product Engineer"
- Accroche : "I bridge the gap between business complexity and product clarity — from feature definition to reliable, maintainable implementation."

### ✅ Expérience Scaleway — done
- Ajoutée en première carte dans `ProjectsSection`
- Logo : `public/images/scaleway-logo.png` (ou `scaleway-violet-logo.png`)
- Période : Sept 2025 — Apr 2026

### Internationalisation (i18n) — FR / EN / ES
- Traduire tout le contenu du site en français, anglais et espagnol
- Évaluer next-intl (recommandé pour Next.js App Router) vs next-i18next
- Gérer le routing par locale (`/fr`, `/en`, `/es`) ou via un cookie/préférence
- Les 3 CVs sont déjà disponibles par langue dans le hero — cohérent avec l'ajout du i18n

### Assistant IA (bonus — showcase)
- Chatbot répondant aux questions sur l'expérience/stack
- Stack envisagé : **TanStack AI**
- Intégration : widget flottant ou section dédiée en bas de page
