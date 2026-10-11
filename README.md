# Construction AI — research website

The public website for *Construction AI: Intelligent AI-Driven Pre-Construction
Feasibility Analyzer*, an undergraduate research project.

It carries the seven tabs the project web guidelines require — Home, Domain,
Milestones, Documents, Presentations, About us, Contact us — and nothing else.
The platform itself (sign-in, dashboards, the Python services) lives in a
separate repository.

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
```

Other scripts: `npm run build`, `npm run start`, `npm run typecheck`.

## Deploying

The repository root **is** the Next.js app, so Vercel needs no configuration:

1. [vercel.com/new](https://vercel.com/new) → import this repository.
2. Deploy.

Leave **Root Directory** blank. There is no monorepo here and nothing to point
at — this is the whole reason the site was split out of the platform
repository, where the app sat in a `frontend/` subdirectory and every deploy
needed that setting.

### Linking to the platform

`NEXT_PUBLIC_PLATFORM_URL` is the origin where the platform is hosted, for
example `https://app.example.com`.

**Leave it unset and every link into the platform disappears** — the nav
button, the hero call to action, the footer column and the per-component
links. That is deliberate: the platform is not deployed, and a button that
opens a broken page is worse than no button. With it unset the hero promotes
*Read the research* to the primary action instead, so the page is never left
without one.

It is inlined at build time, so setting it later needs a redeploy, not just a
restart.

## What to edit

All content is data, under `src/components/landing/data/`:

| To change | Edit |
| --- | --- |
| Team names, index numbers, e-mails, photos | `team.ts` |
| Assessment dates and marks | `milestones.ts` |
| Document and slide links | `documents.ts` |
| Literature survey, problem, objectives, methodology | `domain.ts` |
| Contact numbers and addresses | `contact.ts` |
| Component titles, capabilities, metrics | `engines.ts` |
| Hero figures | `stats.ts` |
| Research contribution claims | `novelty.ts` |
| Stack diagram and data flow | `architecture.ts` |
| Tab labels and order | `site.ts` |

**Several of these still hold placeholders** and must be filled before the site
is submitted: researcher names and index numbers, supervisor names, the
university, assessment dates and marks, document and slide links, and the
contact details. Each file says so at the top.

`src/components/landing/README.md` documents the design system, the colour and
contrast rules, and the accessibility guarantees.

## Structure

```
src/
  app/              one route per tab, plus the shared layout
  components/
    landing/
      data/         all content
      previews/     the four component illustrations
      primitives/   Section, PageHeader, Reveal
  lib/utils.ts      cn()
```

Dependencies are deliberately few: Next.js, React, `lucide-react` for icons,
and `clsx` + `tailwind-merge` for `cn`. The platform's heavier libraries —
Three.js, Leaflet, axios, jsPDF — are not needed here and are not installed.
