# Agent Operating Rules

## Governing authority

Before any meaningful work, read `docs/icm/HUMAN_MACHINE_CONTRACT.md` and `docs/icm/ICM_CORE.md`. They define the Human ↔ Machine Contract, ICM truth model, sovereignty rules, approval gates, proactivity requirement, and voice-first/disappearing-interface north star. Repository execution conventions must not weaken those controls.

## Canonical site-transformation protocol

For any audit, repositioning, redesign, rebuild, migration, or relaunch of this public site, load the canonical protocol from `executiveusa/maxx-migrations-agentic-systems/icm/site-transformation-protocol/00_router/CONTEXT.md` and the MACS Client Zero instance at `icm/clients/macs-digital-media/06_transform/` in that repository. A write-capable agent must pass the canonical `WALK_TEST.md` before transformation work. Do not use chat history as a substitute for ICM routing or evidence.

## ICM federation

ICM means **Interpretable Context Methodology**. This public storefront is one member of the three-repository MACS system:

- `executiveusa/macsdigitalmedia` — public storefront and public proof;
- `executiveusa/macs-agent-portal` — Agent MAXX operator surface, control plane, approvals, CLI/MCP entry points and Hermes runtime;
- `executiveusa/maxx-migrations-agentic-systems` — canonical ICM, commercial routing and execution backend.

For cross-repository work, cold-walk the canonical backend through `docs/icm/FEDERATION_CONTRACT.md`, `icm/federation/CONTEXT.md`, and the smallest relevant ICM stage. The storefront must not duplicate backend authority or hold `MAXX_MIGRATIONS_API_KEY`. Application-facing Agent MAXX calls go through the Agent MAXX control plane; that control plane is the credentialed bridge to MAXX Migrations.

**Motion is required before a federation walk test can PASS.** Files, builds, route declarations, mocks and documentation are not motion. At least one intended transport must reach the canonical owner and return observable evidence. Keep `TESTED` separate from `VERIFIED` until deployed runtime evidence exists.

## Roles

- Architect: owns product requirements, repository boundaries, architecture decisions, acceptance criteria, and review.
- Builder: executes approved macro-sprints, tests the work, records evidence, and stops at production or secret-management gates.

## Execution model

This project uses large coherent coding sprints rather than small BMAD edits. A sprint may change many files, but it must produce one testable vertical outcome.

The Builder may work continuously only after receiving:

`APPROVED: START MACS-MSXX`

At completion, the Builder must report:

- Changed files
- Commands executed
- Build, typecheck, lint, and test results
- Security and accessibility checks
- Commit SHA
- Preview or deployment result
- Known blockers
- Rollback instructions

Finish with:

`MACS-MSXX COMPLETE — REQUEST ARCHITECT REVIEW`

## Mandatory design covenant

Before creating or modifying any user-facing interface, read and obey:

- `docs/design/brand-foundation.md`
- `docs/design/krug-usability-gates.md`
- `docs/design/pauli-design-guardrails.md`
- `docs/design/transformation-visual-system.md` when present on an active transformation branch

No page or component passes review merely because it is visually impressive. It must remain self-evident or immediately self-explanatory, scannable, predictable, accessible, task-oriented, and specific to the MACS brand.

A design change must be rejected when it introduces avoidable cognitive load, hides expected navigation, makes clickability ambiguous, weakens hierarchy, creates visual noise, blocks mobile access, uses animation without functional meaning, or falls back to a generic AI-generated visual pattern.

Clarity overrides novelty. Usability overrides cinematic presentation. Accessibility is part of design quality, not a later repair.

## Non-negotiable rules

- Inspect files before editing; never hallucinate paths.
- Never commit secrets or filled environment files.
- Never use real client information in public demos.
- Never expose provider credentials or unrestricted agent endpoints to the browser.
- Never claim a test or deployment succeeded without executing it.
- Never weaken approval controls to make a workflow pass.
- Keep customer-facing vendor names out of core product copy unless explicitly approved.
- Preserve the supplied MACS logo as the brand source of truth.
- Follow reduced-motion, keyboard, contrast, semantic HTML, and mobile requirements.
- Keep public website responsibilities in this repository and agent execution/ICM responsibilities in `executiveusa/maxx-migrations-agentic-systems`. Do not introduce another competing control plane without an explicit architecture decision.
- Do not turn the human into middleware. Safe, authorized, reversible machine work should be executed or prepared proactively; humans are reserved for truth, priorities, judgment, relationships, authority, and acceptance.
- Voice-first means fewer interface demands, not weaker controls. Voice commands pass through the same authentication, policy, approval, evidence, and rollback gates as text.
- Do not merge user-facing work that fails any mandatory gate in `docs/design/krug-usability-gates.md` or `docs/design/pauli-design-guardrails.md`.
