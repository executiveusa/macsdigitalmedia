# MACS Digital Media — Status

Last updated: 2026-07-16

## Repository state

- Project type: public Next.js website with a separate brownfield MAXX control-plane integration target
- Production branch: `main`
- Current release: `v0.3.0`
- Current milestone: `MACS-MS03` merged through pull request #7
- Current `main` head before this audit branch: `91ef2654b163018e79407cde8d04789874293b46`
- Vercel commit check on that head: successful
- Audit branch: `audit/macs-2026-07-16-release-gate`

## Implemented

- MACS logo and brand tokens
- Clear client-owned AI operating system positioning
- Conventional desktop navigation and focus-contained mobile navigation
- Existing father-and-son office video with a static poster fallback
- English and Mexican Spanish public journeys
- System, light, and dark theme preferences
- Reduced-motion behavior
- Responsive layouts and overflow checks from 360px through 1920px
- MACS AI Operating System explanation
- Synthetic inquiry-to-follow-up demonstration
- Website preserve/rescue/replace framework
- 90-day Washington Founding Launch
- Transparent $7,500 validation-cohort offer
- Accessible application form with inline validation and first-error focus
- Server-side Supabase application intake contract with validation, honeypot handling, fingerprint-based rate control, and safe error responses
- Structured data, sitemap, robots, llms.txt, and public JSON endpoints
- Playwright coverage for primary usability paths

## Locked decisions

- Primary audience: Washington nonprofit and social-purpose organizations, approximately 3–50 staff
- Main CTA: Apply for a Washington Founding Spot
- Secondary CTA: See the System Work
- Validation cohort: first five organizations at $7,500
- Website policy: AI Front Door for usable sites; standardized five-page rescue when the current site damages trust
- Standard workflows: Inquiry to Follow-up and Meeting to Action
- Product name: MACS AI Operating System
- Mascot/operator: Agent MAXX
- Client model: separate client-owned deployments
- Public website and MAXX control plane remain separate repositories

## Release-gate findings

1. The custom production domain still serves the legacy WordPress website. The new Next.js release has not been verified as the active site at `www.macsdigitalmedia.com`.
2. The hero video still loads from the legacy WordPress media URL. The local poster prevents an empty hero, but the remote video remains a delivery dependency and does not satisfy the approved local-media gate.
3. The application API requires an isolated MACS Supabase URL, service-role key, and application hash secret. Production health and a synthetic submission have not been verified in this audit session.
4. Fresh post-merge desktop, mobile, theme, locale, keyboard, console, network, accessibility, and form screenshots could not be captured because the available Vercel connector is not authorized for the project team scope.
5. A secrets vault supplied outside the repository contains numerous apparent live credentials and private keys. None were copied into this repository. Those credentials must be treated as exposed and rotated by their owners.
6. Baseline response security headers are added on the audit branch. A strict Content Security Policy remains deferred until all required media and script origins are inventoried and tested.

## Required before production cutover

1. Rotate or revoke every credential contained in the supplied consolidated vault and create project-scoped replacements.
2. Point the production domain to the verified Vercel production deployment and confirm redirects/canonical behavior.
3. Move the hero WebM into `public/media`, generate a real optimized WebP poster, update tests to reject external hero-media dependencies, and verify playback plus fallback behavior.
4. Configure isolated MACS Supabase environment variables in Vercel.
5. Verify `/api/health/supabase`, then submit one clearly synthetic application and confirm the stored row and safe client response.
6. Run lint, typecheck, production build, Playwright, keyboard, console, network, accessibility, and responsive screenshot checks against the exact production candidate.
7. Confirm the new global security headers and add a tested Content Security Policy in report-only mode before enforcement.
8. Complete DNS cutover only after the rollback path to the previous deployment is documented and tested.

## Current release decision

- Source quality: strong
- Vercel build signal: passing on the last merged `main` commit
- Production release gate: **not yet passed**
- Primary blockers: credential exposure, custom-domain cutover, remote hero dependency, unverified intake environment, and missing fresh live-browser evidence
