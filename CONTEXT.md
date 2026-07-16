# MACS Digital Media — Project Context

## Product direction

MACS Digital Media installs and manages client-owned AI operating systems for Washington organizations.

Primary audience: nonprofit and social-purpose organization leaders with approximately 3–50 staff who are losing time to administrative work, scattered knowledge, missed follow-up, and disconnected software.

## Governing product sentence

MACS installs and manages the AI operating system behind an organization—its knowledge, agents, website, communications, and workflows working together in one controlled system.

## Public product hierarchy

- Company: MACS Digital Media
- Offer: Washington Founding Launch
- Installed system: MACS AI Operating System
- Knowledge layer: Company Brain
- Managed operator and mascot: Agent MAXX
- Website interface: AI Front Door

## Founding offer

The first five accepted Washington organizations enter at $7,500. Later cohorts enter at published higher prices as the system becomes more proven and standardized. Pricing and cohort rules must remain transparent.

The first package includes:

- Operational and AI-readiness audit
- Company Brain
- One managed operator
- Inquiry-to-follow-up workflow
- Meeting-to-action workflow
- Up to four supported integrations
- Human approval controls
- Either an AI Front Door added to a usable website or a standardized five-page website rescue
- Training, documentation, ownership handoff, and a 90-day launch period

## Repository boundary

This repository owns the public MACS website, content, application journey, safe synthetic MAXX demonstration, SEO, structured data, machine-readable capability manifests, bounded site-operations endpoints, and Vercel deployment.

It must not contain unrestricted agent execution, real client records, provider secrets, browser-control credentials, or production mission state. Those belong in the separate `macs-agent-portal` repository.

## Agent-operated public site

Agent MAXX may operate the public site only through allowlisted server-side capabilities:

- inspect bounded deployment and dependency readiness
- read allowlisted managed public content
- update allowlisted managed public content with authentication, idempotency, validation, and revision history

The first allowlisted content capability is the optional bilingual homepage announcement. The public site remains fully functional when managed content or the agent API is unavailable.

## Current phase

- Production baseline: PR #7 final bilingual design polish and motion system
- Active bead: `ZTE-20260716-0001`
- Active objective: authenticated, observable, reversible Agent MAXX site operations
- Production promotion remains subject to the explicit Bambu approval gate
