# VAILIS Website

AI Execution Partner — We turn AI into business results.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **i18n:** next-intl (EN, KA, RU)
- **Hosting:** Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The site redirects to `/en` by default.

## Structure

- `src/app/[locale]/` — Localized pages
- `src/components/` — Reusable components
- `src/data/` — Case studies, tweets
- `src/i18n/` — i18n config and messages

## Pages

- `/` — Home (Hero, Problem, Services, Case Studies, ROI teaser, Twitter feed, CTA)
- `/case-studies` — Case study listing with filters
- `/case-studies/[slug]` — Individual case study
- `/services` — Service catalog
- `/approach` — Methodology
- `/about` — Company info
- `/insights` — Blog/thought leadership
- `/contact` — Lead capture form
- `/roi-calculator` — Interactive ROI tool
- `/privacy` — Privacy policy
- `/terms` — Terms of service

## Locales

- `en` — English (default)
- `ka` — Georgian
- `ru` — Russian

## Deploy

```bash
vercel
```

Or connect GitHub repo to Vercel for auto-deploy.
