# MACS Digital Media

Production public website for MACS Digital Media: managed, client-owned AI operating systems for Washington organizations.

## Production state

- Production branch: `main`
- Frontend: Next.js App Router on Vercel
- Persistence: self-hosted Supabase on the Hostinger VPS
- Languages: English and Mexican Spanish
- Themes: system, light, and dark
- Primary conversion: Washington Founding Launch application
- Safe operator: Agent MAXX through a narrow authenticated site-operations API

## Stack

- Next.js 16
- React 19
- TypeScript
- Framer Motion with reduced-motion support
- Plain CSS design system derived from the approved MACS logo
- Supabase service-role access from server-only modules
- Playwright browser verification
- Node built-in unit coverage with enforced 80% thresholds on critical agent-operation modules
- Vercel deployment target

## Local development

```bash
npm install
npm run dev
```

Verification:

```bash
npm run lint
npm run typecheck
npm run test:coverage
npm run build
npm run test:e2e
```

## Database operations

The schema is managed through ordered SQL migrations in `supabase/migrations/`.

From a trusted environment with `SUPABASE_DB_URL` loaded:

```bash
npm run db:apply:hostinger
npm run db:verify:hostinger
```

Never commit filled environment files or secret values.

## Agent-readable operations

Public capability discovery:

```text
/.well-known/agent.json
```

Authenticated operations:

```text
GET /api/agent/status
GET /api/agent/content
PUT /api/agent/content
```

The authenticated API manages only allowlisted public content. It does not expose unrestricted execution, provider credentials, real client records, production mission state, or browser-control access.

Read `ops/runbooks/AGENT_SITE_OPERATIONS.md` before connecting an agent runtime.

## Design rules

Every builder must read:

- `AGENTS.md`
- `docs/design/brand-foundation.md`
- `docs/design/krug-usability-gates.md`
- `docs/design/pauli-design-guardrails.md`

The public website must remain clear, scannable, accessible, mobile-first, honest, and recognizably MACS. Award-level visual craft never overrides task completion or comprehension.

## Repository boundary

This repository owns public marketing, content, application UX, public data endpoints, safe synthetic demonstrations, SEO, structured data, and Vercel deployment.

Unrestricted agent execution, real client records, provider credentials, browser-control credentials, and production mission state belong in `executiveusa/macs-agent-portal`.
