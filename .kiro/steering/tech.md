# Tech Stack

## Architecture

JAMstack — Static Site Generation (SSG) with Next.js App Router. Sanity.io as headless CMS. Currently uses static fallback data; switch to live Sanity queries once CMS is configured.

## Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Frontend | Next.js (App Router) | 14.2.x |
| Language | TypeScript | 5.4.x |
| Styling | Tailwind CSS | 3.4.x |
| Animation | Framer Motion | 11.x |
| Headless CMS | Sanity.io (next-sanity) | 9.x |
| Form Handler | Formspree (@formspree/react) | 2.5.x |
| Deployment | Vercel (planned) | — |

## Package Manager

npm

## Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start local dev server |
| `npm run build` | Production build (SSG) |
| `npm run start` | Serve production build locally |
| `npm run lint` | Run ESLint (next lint) |

## Performance Targets

- LCP < 2 seconds
- Lighthouse ≥ 90 all categories
- Responsive ≥ 320px breakpoint

## Code Conventions

- TypeScript strict mode
- ESLint extends `next/core-web-vitals`
- Tailwind CSS utility classes (globals.css has `@layer components` for shared patterns: `.section-container`, `.card`, `.btn-primary`, `.btn-outline`, `.badge`)
- Server Components by default, `"use client"` only for interactivity
- Image optimization via `next/image` (Sanity CDN whitelisted)
- Bilingual support via `useLanguage()` context hook — `t(idText, enText)` pattern
- Semantic HTML for accessibility (WCAG 2.1 AA target)
- Framer Motion for scroll-based animations (`useInView` pattern)
