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

**Page assembly** (`components/landing-page.tsx`): `HeroSection` → `AboutSection` → `ServicesSection` → `ProjectsSection` (`id="projects"`, target of the hero's "see my projects" link) → closing section (`id="contact"`, dark like the rest: title, Malt button, call link, text list of channels). There is no skills section: the stack and languages live in the About facts list.

**i18n**: `next-intl` v4, locales `en/fr/es`, defaultLocale `en`. Middleware in `middleware.ts` handles locale detection and redirects. Messages in `messages/{locale}.json`. Layout at `app/[locale]/layout.tsx` wraps content with `NextIntlClientProvider`. Root layout (`app/layout.tsx`) uses `getLocale()` from `next-intl/server` to set the `<html lang>` attribute dynamically.

**Hero layout** (`components/hero-section/hero-section.tsx`, after the "product engineer" and LangGraph landing references the user supplied): from `lg`, a `min-h-[100svh]` section under the fixed menu bar with two rows. Row 1 is a 12-column grid centered vertically: the text column (7 cols) and the figure are both centered on the page's vertical axis (not top-aligned: rejected); the column follows the LangGraph reference's compact rhythm: a signature line (the blue `AmateLogo` at 40px + `a-mate.tech` in small blue mono), a small gap, `hero.headline` ("product engineer.", signature blue `text-primary`, 7.2vw, 7.6vw from `2xl`; the name is in the `<h1>` as `sr-only`), about one headline line of air, the accroche in `text-primary-soft` (`--primary-soft` #B8E0FF, a lighter shade of the signature blue; Inter light 300 at `lg:text-xl`, no bold, after the LangGraph paragraph; "Je transforme vos processus métier complexes en produits clairs, fiables et maintenables."), then `#hero-actions`: two equal buttons from `lib/button-styles.ts` (no background fill: `buttonPrimary` = light-blue text + blue outline for Malt, `buttonSecondary` = neutral outline for the call, mono labels). The `<figure>` (cols 9-12, right-aligned) holds the portrait at 4:5 as a blue duotone (highlights = 48% `--primary` mixed into the ground, shadows = the ground), its width following the viewport height (`min(400px, (100svh - 24rem) × 0.8)`), then under its border the `<figcaption>`: the name in the bracket grammar `[ jean-charles barq ]` (mono, lowercase via CSS, blue `aria-hidden` brackets), the subphrase (Full Stack + stack), and the `#projects` / locale CV links. Row 2: the `[01] → [02] → [03]` steps as a strip on a hairline. Below `lg`: signature + role, the accroche, the steps (three columns side by side, index above each label), the actions, then the figure (the row wrapper and the text column are `contents` on mobile and the items use `order-*`). No abstract background shape (a line beam was tried and rejected as too copied), no photo stretched to the full height (rejected as too tall). No "freelance", city or "remote" label in the hero (user request). The photo source is only 500×500. All external URLs live in `lib/links.ts`.

**Visual system**: the banner's restraint. Blue (`#7FC8FF`) is ink and accent (headline, steps, periods, labels, logo), never a solid fill: calls to action use `lib/button-styles.ts` (outlines only, no fill: the user rejects any blue or light background on buttons), also in the closing section and the mobile bar: a poster version with blue bands and a blue closing field was rejected in 2026-09 as too loud. Section heads use `SectionTitle`: a hairline, then a bold lowercase h2 ending with a colored period (no `[0x]` kicker). Radius stays `0.375rem` (`rounded-md` cards, `rounded-sm` buttons and tags). `DESIGN.md` / `.impeccable/design.json` were written for the rejected poster version and are out of date.

**SEO / metadata**: the real metadata comes from `generateMetadata` in `app/[locale]/layout.tsx`, which reads `seo.title` / `seo.description` from the messages and builds the canonical URL, hreflang alternates, OpenGraph and Twitter tags. The same layout injects a JSON-LD `Person` (`jobTitle` = `hero.label`). The static `metadata` in `app/layout.tsx` only supplies `metadataBase`, since its title and description are overridden. `app/sitemap.ts` and `app/robots.ts` use `SITE_URL` from `lib/constants.ts` (`https://www.a-mate.tech`).

**Content data**: the messages contain only translatable text. The project data in `ProjectsSection` (title, tech list, logo, Notion link) is hardcoded in the TSX (optional `subtitle`, `period`, `darkLogo`, `wideLogo` for wide wordmarks; the first project is rendered as the featured case), and only descriptions go through `t()`. The About facts (`about.facts[]`: `label`/`value`) and the contact labels (`contact.*`, shared by hero, CTA, header and bottom bar) are in the messages. CV and portfolio links point to Notion pages, and the "hire me" CTAs point to Malt.

**Theming**: single dark theme (brand colors from the a-mate.tech LinkedIn banner). All color tokens are CSS variables in `app/globals.css` under `:root` (with `color-scheme: dark`); there is no `.dark` class and no toggle. Key values: `--background: #060910`, `--foreground: #E6EDF5`, `--card: #0B111B`, signature color `--primary` = `--accent` = `#7FC8FF` (text `#060910` on top), `--muted-foreground: #8795A8`, `--border: rgba(127,200,255,0.14)`. Tailwind v4 maps them via `@theme inline`. Use `text-primary` / `border-primary/xx` for blue, never a hardcoded hex.

**Font**: Inter (sans) + IBM Plex Mono (mono), injected as `--font-inter` and `--font-ibm-plex-mono`. Mono is for indices (`[01]`), meta labels (locale switcher, channels, fact labels), periods and stack/tag lines; prose stays in Inter.

**Services** (`services-section.tsx`): 3 rows, one per step of the hero (`hero.steps` labels, reused as-is): step label in mono in a card on the left, card on the right with a question, an italic note and tags (`services.items[]`: `question`, `note`, `highlights` shown in blue, `tags` in gray). The user wants this section kept as it is.

**Projects** (`projects-section.tsx`): the first project (Scaleway) is a featured case in a `bg-card` panel; the others form an index of rows between hairlines (number, logo cell, title/subtitle, description + mono stack, arrow), with a `bg-card` hover and the title turning blue. Logos sit on a light tile (`bg-foreground`); `darkLogo` for a white logo, `wideLogo` for a wide wordmark.

**Providers** (`app/providers.tsx`): TanStack `QueryClientProvider`, Radix `TooltipProvider`, Sonner `Toaster`. Add global providers here.

**Analytics**: Google Analytics GA4 (`G-8YPSNKYLHY`) via `<GoogleAnalytics>` from `@next/third-parties/google`, placed in `app/layout.tsx` after `</body>`.

## Key conventions

- Shadcn/ui primitives live in `components/ui/` — add new ones via `npx shadcn@latest add <component>`.
- The `@` path alias resolves to the repo root (`tsconfig.json`).
- The mobile/desktop switch is pure CSS at Tailwind `lg` (1024px). The header is the user's fixed menu bar and must stay: a locale pill on the left and a pill of channel icons (tooltips) ending with the a-mate logo in blue (`AmateLogo`: `logo-2026.png` used as a CSS mask over `bg-primary`), which scrolls back to top. Below `lg` the channel pill is replaced by `MobileMenu`: the blue logo next to a hamburger that opens a right-hand `Sheet` listing every channel with its label (an icon row squeezed onto a phone was rejected as ugly and impractical). The logo must always be there and blue. Below `lg`, `BottomBar` shows `MobileContactBar` (Malt as the blue cell + the call), hidden while `#hero-actions` or `#contact` is on screen (IntersectionObserver). The closing section lists the channels as mono text (`ChannelList`). Never switch layout with a JS media-query hook: it renders the wrong layout on the server and flashes on phones.
- `package.json` contains many dependencies inherited from the shadcn scaffold that the page does not use (recharts, zod, react-hook-form, react-day-picker…). Their presence does not mean they are used.
- Avoid Tailwind arbitrary gradient stops (`from-[30%]`) — they don't work reliably in v4. Use inline `style` with `linear-gradient` instead.
- All page-level components are client components (imported from `"use client"` `landing-page.tsx`), so use `useTranslations()` throughout. Only use `await getTranslations()` from `next-intl/server` for truly isolated server components not in the client tree.
- `t.raw("key")` returns arrays/objects from messages — use it for translatable lists (hero steps, About facts, service items).

## Positioning

**Jean-Charles Barq — Product Engineer · Développeur Full Stack · Intégration IA**

**2026-09 update — "product engineer." first**: the role is the visual centerpiece of the hero (`hero.headline`, not translated, identical in all 3 locales) followed by the 3 steps from the banner (`hero.steps`: understand the business / design the product / ship it solid, translated). `hero.label` is no longer displayed but is still used for the JSON-LD `jobTitle`. So that "Développeur Full Stack" stays visible text (SEO FR), it now opens `hero.subphrase`. `seo.title` is unchanged.

Full Stack / Product Engineer (6+ years) who bridges business complexity and product clarity for B2B SaaS and companies with complex internal tools — from requirements gathering through prototyping to shipped product, with or without AI. AI feature integration (search over internal docs, business assistants, workflow automation) is a secondary, deliberately modest specialty — it converts well on Malt, but is not yet backed by shipped AI work, so it appears only as a gray mono tag ("AI integration") in step [02] of the services, never as the primary label. The hero label/subphrase carry the AI mention; the accroche stays unchanged from the original generalist pitch. The former opinion line ("maintain without you") was removed in 2026-09: the three steps carry that message. Stack: React, TypeScript, Next.js, React Native, Node.js, NestJS. Mobile and UX/branding capability moved out of dedicated service cards into the `AboutSection` bio (`messages.about`) (the services show the 3-step process, not a list of offerings).

**2026-07 SEO update**: added "Développeur Full Stack" / "Full Stack Developer" alongside "Product Engineer" in `hero.label` (all locales) — "Product Engineer" alone under-indexes in France, where "développeur full stack" is a far more searched term. Kept out of `seo.title` (the `<title>` tag, highest-weight SERP signal) to avoid truncation past ~60-70 chars — title keeps just "Product Engineer & Full Stack Developer", AI Integration deliberately stays out of the title too (consistent with it being the secondary specialty) but still appears in `hero.label`, `subphrase`, and `seo.description`, so it still feeds ranking/snippet text without being the headline.

---

## Backlog

### ✅ Google Analytics — done
GA4 via `@next/third-parties/google` in `app/layout.tsx`.

### ✅ Style global — done (refonte 2026-09)
- Thème sombre `#060910` + couleur signature `#7FC8FF`, polices Inter + IBM Plex Mono — aligné sur la bannière LinkedIn a-mate.tech
- Cartes monochromes, titres de section `[0x] titre.`

### ✅ Photo landing page — done
- `public/images/avatar.png` — photo principale hero
- Hero desktop : ligne « bannière » (a-mate.tech + « product engineer. »), puis photo + contenu

### ✅ Positionnement — done
- Label : "Product Engineer · Développeur Full Stack · Intégration IA" (mis à jour en 2026-07 pour s'aligner sur le positionnement Malt, qui convertit mieux, puis pour le SEO — voir la section Positioning ci-dessus)
- Accroche : "I help B2B teams turn complex business workflows into clear, reliable and maintainable web products." (inchangée, volontairement — voir section Positioning ci-dessus)
- Section `AboutSection` ajoutée après le Hero pour le bio/parcours (mobile, UX, branding)

### ✅ Expérience Scaleway — done
- Ajoutée en première carte dans `ProjectsSection`
- Logo : `public/images/scaleway-violet-logo.png`
- Période : Sept 2025 — Apr 2026

### ✅ Internationalisation (i18n) — FR / EN / ES — done
- `next-intl` v4, routing `/en` `/fr` `/es`, middleware-based
- Messages complets dans `messages/{en,fr,es}.json`
- Traduits : hero, about (dont la liste de faits clés et les langues), services, titre de section et descriptions des projets, CTA, libellés de contact (la section skills a été supprimée en 2026-09)
- Non traduits (volontairement) : noms des projets, stacks techniques et périodes, écrits en dur dans `ProjectsSection`
- `<html lang>` dynamique via `getLocale()` dans le root layout

### Assistant IA (bonus — showcase)
- Chatbot répondant aux questions sur l'expérience/stack
- Stack envisagé : **TanStack AI**
- Intégration : widget flottant ou section dédiée en bas de page
