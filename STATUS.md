# MACS Digital Media — Status

Last updated: 2026-07-16

## Repository state

- Production branch: `main`
- Current production baseline: PR #7 merge commit `91ef2654b163018e79407cde8d04789874293b46`
- Active engineering branch: `zte/ZTE-20260716-0001/agent-site-operations`
- Current bead: `ZTE-20260716-0001`
- Deployment target: Vercel
- Persistence target: self-hosted Supabase on the Hostinger VPS

## Production baseline

- Approved MACS logo and brand tokens
- Responsive navigation and mobile focus containment
- Full-page documentary hero with video, branded poster, failure fallback, and reduced-motion behavior
- English and Mexican Spanish public journeys
- System, light, and dark themes
- Framer Motion route transitions and restrained reveal/feedback motion
- Founding application with inline validation and server-side Supabase intake
- Public company, service, sitemap, robots, structured-data, and `llms.txt` endpoints
- Browser coverage from 360px through 1920px
- CI lint, typecheck, build, Playwright, screenshots, Vercel preview, and code-review gates

## Active site-operations sprint

`ZTE-20260716-0001` adds a narrow Agent MAXX control surface for the public website while preserving the repository boundary.

Implemented on the active branch:

- Public `/.well-known/agent.json` capability manifest
- Server-only bearer authentication with constant-time token comparison
- Authenticated `/api/agent/status`
- Authenticated read/write `/api/agent/content`
- Allowlisted `home-announcement` content in `en` and `es-MX`
- Idempotent content writes with immutable revision history
- Forced-RLS Supabase schema and service-role-only transactional function
- Homepage failure isolation when managed content is unavailable
- Critical-path unit coverage with enforced 80% thresholds
- Agent operations runbook

## Locked decisions

- Primary audience: Washington nonprofit and social-purpose organizations, approximately 3–50 staff
- Main CTA: Apply for a Washington Founding Spot
- Secondary CTA: See the System Work
- Validation cohort: first five organizations at $7,500
- Product name: MACS AI Operating System
- Mascot/operator: Agent MAXX
- Client model: separate client-owned deployments
- Public website and unrestricted MAXX control plane remain separate repositories

## Remaining activation gates

1. CI and code review must pass on the active branch.
2. The Hostinger Supabase migration must be applied from the protected workflow or trusted shell.
3. `SITE_AGENT_TOKEN` must be generated and stored in the external vault and Vercel.
4. Preview smoke tests must verify unauthorized and authorized operations.
5. Production merge or promotion requires explicit Bambu approval during the production-gate window.

## Known blockers

- This session cannot directly inject Vercel secrets or execute the self-hosted database migration.
- Live authenticated verification cannot occur until `SITE_AGENT_TOKEN` and the new migration are installed in the preview environment.
- Unrestricted site management remains intentionally out of scope for this repository and belongs in `executiveusa/macs-agent-portal`.
