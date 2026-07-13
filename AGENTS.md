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
