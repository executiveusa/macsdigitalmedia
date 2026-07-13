# MACS-MS00 — Public Website Foundation

## Objective

Create the governing architecture, product, design, and implementation foundation for the new MACS Digital Media website without changing production behavior.

## Scope

- Confirm product positioning and offer structure
- Establish repository and integration boundaries
- Establish the logo-derived design foundation
- Define builder rules for GLM 5.2
- Select the initial application architecture
- Prepare the first implementation sprint

## Proposed application direction

- Next.js App Router
- TypeScript
- Tailwind CSS
- Radix primitives where needed
- Motion for interface transitions
- GSAP only for deliberate cinematic sequences
- Server-rendered semantic public pages
- Content stored in typed local modules first, with a CMS adapter boundary
- Server-side gateway for the future restricted MAXX demo API
- Vercel for the public frontend

## Required v1 routes

- `/`
- `/maxx`
- `/founding-launch`
- `/website-rescue`
- `/small-business`
- `/insights`
- `/insights/[slug]`
- `/apply`
- `/privacy`
- `/accessibility`

## Required public machine-readable surfaces

- `/sitemap.xml`
- `/robots.txt`
- `/feed.xml`
- `/feed.json`
- `/llms.txt`
- `/llms-full.txt`
- `/api/public/company`
- `/api/public/services`
- `/api/public/articles`

## Acceptance criteria

- Governing context and status files exist.
- Logo-derived design rules are documented.
- Public and private system boundaries are explicit.
- GLM 5.2 builder constraints are explicit.
- The next sprint can scaffold and build without inventing product decisions.
- No secrets, real client data, or production agent endpoints are added.

## Next sprint

`MACS-MS01 — Application scaffold, design system, and homepage vertical slice`
