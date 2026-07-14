# MACS-MS00 — Public Website Foundation

## Objective

Create the governing architecture, product, design, and implementation foundation for the new MACS Digital Media website without changing production behavior.

## Scope

- Confirm product positioning and offer structure
- Establish repository and integration boundaries
- Establish the logo-derived design foundation
- Define builder rules for GLM 5.2
- Select the initial application architecture
- Build the first homepage vertical slice

## Application direction

- Next.js App Router
- TypeScript
- React
- CSS variables and component styles derived from the approved MACS palette
- Server-rendered semantic public pages
- Client components only where interaction requires them
- Content stored in typed local modules first, with a future CMS adapter boundary
- Server-side gateway for the future restricted MAXX demo API
- Vercel for the public frontend
- Motion added only when it communicates sequence, state, hierarchy, or cause and effect

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

## Implemented in this sprint

- Governing context, status, builder, brand, and Krug usability rules
- Next.js application scaffold
- Responsive site header and footer
- Homepage positioning and offer vertical slice
- Existing father-and-son hero video
- Synthetic inquiry-to-follow-up demonstration
- Website rescue framework
- 90-day installation sequence
- Validation-cohort pricing section
- Application form preview with submission disabled until secure intake exists
- Structured data, sitemap, robots, llms.txt, and public company/service endpoints
- Reduced-motion and keyboard-access foundations
- GitHub Actions typecheck and production-build workflow

## Acceptance criteria

- Governing context and status files exist.
- Logo-derived design rules are documented and implemented.
- Public and private system boundaries are explicit.
- GLM 5.2 builder constraints are explicit.
- Homepage purpose, audience, outcome, and calls to action are self-evident.
- No secrets, real client data, or production agent endpoints are added.
- Dependency installation, typecheck, build, responsive review, and preview inspection pass before merge.

## Next sprint

`MACS-MS01 — Verify, visually review, connect secure intake, and complete the core public routes`
