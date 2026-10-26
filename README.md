# Thirunarayanan Raman: cinematic career portfolio

A light, editorial, scroll-driven portfolio that tells a career in data as a short film:
a title sequence, five chapters, and end credits. Vibrant America is the main feature.

## Stack

- Next.js 15 (App Router), React 18, TypeScript
- Tailwind CSS 3 with a custom design system (`tailwind.config.ts`, `app/globals.css`)
- Framer Motion for scroll-linked animation, counters and pinned scenes
- Lucide icons, EmailJS for the contact form

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
npx eslint .
```

## Where things live

| Path | What it is |
| --- | --- |
| `data/story.ts` | **All copy, numbers and links.** Edit this to change the story. |
| `components/Intro.tsx` | Title card, typewriter tagline, "now showing" poster, film strip |
| `components/Origin.tsx` | Chapter 1: origin and portrait |
| `components/Journey.tsx` | Chapter 2: stacking role cards (Cognizant, Newell, UT Dallas, UST, FHLB) |
| `components/VibrantAmerica.tsx` | Chapter 3: pinned scenes, problem / action / result |
| `components/vibrant/Visuals.tsx` | The animated "screen" for each Vibrant America scene |
| `components/Impact.tsx` | Chapter 4: animated counters |
| `components/Toolkit.tsx` | Chapter 5: tools marquee and side projects |
| `components/Credits.tsx` | Contact form, links, end credits |
| `app/opengraph-image.tsx`, `app/icon.tsx` | Generated social image and favicon |

## Contact form

EmailJS public identifiers have working defaults in `components/Credits.tsx`.
To override them, set these in `.env.local` (and in Vercel):

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

## Design notes

- Layout never relies on fixed text heights; type is fluid (`clamp()`), and the pinned
  "stage" only activates on screens that are wide and tall enough (`stage` / `tall` screens).
- `prefers-reduced-motion` is honoured globally (`MotionConfig` plus a CSS fallback).
- Metrics are written exactly as claimed: tracked revenue is not described as incremental revenue.

## Deploy

Push to GitHub and import the repo in Vercel. No extra configuration is needed.
