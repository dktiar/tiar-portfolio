# Project Structure

```
tiar-website/
├── .kiro/steering/             # AI guidance files
├── public/
│   ├── cv/                     # Downloadable CV PDF (place tiar-cv.pdf here)
│   └── images/                 # Static images (profile photo, etc.)
├── sanity/
│   ├── schemas/                # Sanity CMS document schemas
│   │   ├── index.ts            # Schema registry
│   │   ├── profile.ts          # Profile schema
│   │   ├── experience.ts       # Work experience
│   │   ├── project.ts          # Portfolio projects
│   │   ├── certification.ts    # Certifications
│   │   ├── skill.ts            # Skill groups
│   │   └── stat.ts             # Stats counters
│   └── sanity.config.ts        # Sanity Studio config
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout (Inter font, Header/Footer, LanguageProvider)
│   │   ├── page.tsx            # Homepage — composes all sections
│   │   └── globals.css         # Tailwind base + component layer
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx      # Fixed nav with mobile menu + lang toggle
│   │   │   └── Footer.tsx      # Links + copyright
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── CertificationsSection.tsx
│   │   │   └── ContactSection.tsx
│   │   └── ui/
│   │       └── AnimatedCounter.tsx
│   ├── context/
│   │   └── LanguageContext.tsx  # ID/EN locale toggle
│   ├── lib/
│   │   ├── sanity/
│   │   │   ├── client.ts       # Sanity client + urlFor helper
│   │   │   ├── config.ts       # Project ID, dataset, apiVersion
│   │   │   └── queries.ts      # GROQ queries
│   │   └── utils/
│   │       └── data.ts         # Static fallback/seed data
│   └── types/
│       └── index.ts            # TypeScript interfaces
├── .env.local.example          # Environment variable template
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── package.json
```

## Naming Conventions

- **Folders:** kebab-case
- **Components:** PascalCase (`HeroSection.tsx`)
- **Utilities/Hooks:** camelCase (`data.ts`, `LanguageContext.tsx`)
- **Sanity schemas:** camelCase (`experience.ts`)

## Data Flow

```
Static fallback data (lib/utils/data.ts) → Client Components → Rendered HTML
```

When Sanity is configured:
```
Sanity CMS → GROQ queries (lib/sanity/queries.ts) → Server Components → HTML
```

## Section Pattern

Each section follows this structure:
1. `"use client"` directive (for framer-motion animations)
2. `useLanguage()` for bilingual text
3. `useInView()` for scroll-triggered animations
4. Fallback data import from `@/lib/utils/data`
5. `motion.div` wrappers with `initial`/`animate` props
