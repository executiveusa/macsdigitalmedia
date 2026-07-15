# MACS-MS01 — Production Hardening and Conversion Path

## Objective

Turn the merged public foundation into a production-ready founding application journey while expanding the approved public routes and preserving the boundary with `macs-agent-portal`.

## Included

- Resolve first-build review findings except the binary logo relocation, which requires a separate binary-asset commit path
- Add Next.js ESLint configuration and CI linting
- Add a visible hero-video playback control
- Restore native browser validation
- Add server-side application validation
- Add private Supabase application storage schema
- Add request fingerprinting, honeypot protection, and short-window abuse controls
- Add privacy and accessibility notices
- Add `/maxx`, `/founding-launch`, `/website-rescue`, and `/small-business`
- Update navigation, footer, and sitemap
- Add Pauli design guardrails

## Supabase security model

- Application submission uses a server-only route.
- The service-role key remains in server-side environment variables.
- The table has Row Level Security enabled.
- `anon` and `authenticated` receive no table privileges.
- The browser cannot read application records.
- Raw IP addresses are not stored in the intake table.

## Acceptance gates

- Lint passes.
- Typecheck passes.
- Production build passes.
- Vercel preview deploys.
- Application route returns a clear unavailable state when environment variables are absent.
- Application inserts a valid record after the migration and environment variables are applied.
- Invalid, too-fast, honeypot, and repeated submissions are rejected or safely absorbed as designed.
- Keyboard, mobile, reduced-motion, and five-second comprehension checks pass.
- No secrets are committed.

## Live activation blocker

A dedicated Supabase project or explicitly approved existing Supabase project must be selected before the migration and Vercel environment variables are applied.
