# Agent Operating Rules

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
- Keep public website responsibilities in this repository and agent execution responsibilities in `macs-agent-portal`.
- Do not merge user-facing work that fails any mandatory gate in `docs/design/krug-usability-gates.md` or `docs/design/pauli-design-guardrails.md`.
