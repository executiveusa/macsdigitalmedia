# MACS Digital Media

Public website for MACS Digital Media: managed, client-owned AI operating systems for Washington organizations.

## Current branch

`architect/macs-ms00-foundation`

This branch contains the first real application scaffold and homepage vertical slice. It is not approved for production until the application intake, privacy language, testing, and preview review are complete.

## Stack

- Next.js App Router
- React
- TypeScript
- Plain CSS design system derived from the supplied MACS logo
- Vercel deployment target

## Local development

```bash
npm install
npm run dev
```

Verification:

```bash
npm run typecheck
npm run build
```

## Design rules

Every builder must read:

- `AGENTS.md`
- `docs/design/brand-foundation.md`
- `docs/design/krug-usability-gates.md`

The public website must remain clear, scannable, accessible, mobile-first, and honest about demo or integration states.

## Repository boundary

This repository owns public marketing, content, application UX, public data endpoints, and a synthetic MAXX demonstration. Unrestricted agent execution, real client records, provider credentials, and production mission state belong in `executiveusa/macs-agent-portal`.
