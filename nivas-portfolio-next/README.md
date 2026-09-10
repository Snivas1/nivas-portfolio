# Nivas — Developer Portfolio

Premium, dark-mode-first developer portfolio for **Shanaboina Nivas**, built with Next.js 15 (App Router), React, TypeScript, Tailwind CSS, Framer Motion and lucide-react.

## Stack

- **Next.js 15** (App Router, Server + Client Components)
- **React 18** + **TypeScript**
- **Tailwind CSS** — design tokens in `tailwind.config.ts` match the brief's color system exactly
- **Framer Motion** — page-load sequence, scroll reveals, modal/panel transitions
- **lucide-react** — icon set

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
```

## Project structure

```
app/
  layout.tsx        Root layout: fonts, metadata, Navbar/Footer/Recruiter/AI mounted globally
  page.tsx           Assembles all sections in order
  globals.css         Tailwind + hand-written utilities (gradient text, aurora, grid overlay, glow border)
components/
  Hero.tsx            Heading, particle canvas, aurora, spotlight, floating icons, CTAs
  ParticleField.tsx    Canvas particle network with mouse-proximity line brightening
  CursorSpotlight.tsx  Fixed radial cursor spotlight
  About.tsx
  ProjectExplorer.tsx  Filter chips + grid + modal state
  ProjectCard.tsx       Tilt + glow hover card
  ProjectModal.tsx       Problem / Solution / Features / Tech / Architecture / links
  Timeline.tsx
  TechEvolution.tsx
  CurrentFocus.tsx
  Skills.tsx
  Contact.tsx           Copy-to-clipboard contact cards
  Footer.tsx
  RecruiterMode.tsx      Floating button + slide-over summary panel
  AIAssistant.tsx         Floating chat widget with canned Q&A
  SectionReveal.tsx       Reusable scroll-reveal wrapper (Framer Motion whileInView)
lib/
  data.ts             Single source of truth for all copy — projects, timeline, skills, contact, chatbot answers
```

## Editing content

Everything text-based (project descriptions, timeline entries, skills, contact details, chatbot answers) lives in **`lib/data.ts`**. Update it there and it propagates everywhere automatically — no need to touch component files for copy changes.

## Known placeholders to fill in before shipping

- **Download Resume** buttons currently open a pre-filled `mailto:` request. Once you have a resume PDF, replace the `requestResume` handlers (in `Navbar.tsx`, `Hero.tsx`, `RecruiterMode.tsx`) with a direct link to the file (e.g. place it in `public/resume.pdf` and link to `/resume.pdf` with a `download` attribute).
- **Live Demo** buttons are disabled ("Coming Soon") until real demo URLs exist — set `demo` on each project in `lib/data.ts`.
- **GitHub** links point to the profile (`https://github.com/Snivas1`) for every project — update `github` per project once individual repos exist.
- **LinkedIn** is shown as "coming soon" — add the URL in `lib/data.ts`'s `contact` object and wire it into `Contact.tsx` / `Footer.tsx` when available.

## Accessibility & performance notes

- Respects `prefers-reduced-motion` (canvas animation and Framer Motion transitions are skipped/shortened).
- Visible focus rings via `:focus-visible`.
- Fonts loaded via `next/font/google` (self-hosted, no layout shift).
- All sections are responsive down to small mobile widths.
