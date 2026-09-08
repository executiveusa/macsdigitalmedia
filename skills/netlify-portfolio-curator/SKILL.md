---
name: netlify-portfolio-curator
description: Discover existing Netlify projects, reconcile them with MACS Work and Built Here, and prepare or publish a proof-led editorial portfolio without inventing claims or changing unrelated sites.
version: 1.0.0
owner: MACS Digital Media
status: ready-for-review
---

# Netlify Portfolio Curator

## Purpose
Turn existing, authorized Netlify projects into a maintained MACS portfolio. Netlify supplies deployment evidence and useful media; MACS owns the editorial selection, approved copy, case-study records, and public presentation. A deployed site is a candidate, not automatically a client, a completed project, or a proven business result.

## Activation
Use when asked to scan Netlify, find work for MACS, update the portfolio/gallery, add a case study, refresh a project link or image, or show what is being built. Start with: `Refresh the MACS portfolio from Netlify. Reconcile existing entries, show candidates and evidence gaps, and prepare only approved changes.`

## Authority and boundaries
Read the repository AGENTS.md, docs/icm/HUMAN_MACHINE_CONTRACT.md, docs/icm/ICM_CORE.md, and the relevant design guards before editing. ICM means Interpretable Context Methodology; the canonical backend is executiveusa/maxx-migrations-agentic-systems. MACS public site is executiveusa/macsdigitalmedia; Agent MAXX's operator/control plane is executiveusa/macs-agent-portal. Do not create a competing business truth store or expose provider credentials to the browser. Follow the canonical site-transformation protocol when the work becomes an audit, redesign, rebuild, migration or relaunch.

A request to discover projects or create a skill authorizes read-only inventory and the requested documentation, not publishing every site, changing client deployments, or redesigning the public gallery. Public claims, client approval, consequential publication, production changes and secrets remain subject to the governing human contract. Preserve a verified rollback. Never use credentials from chat, .env files, or source-controlled fixtures.

## Workflow

### 01 — Discover
Use the connected Netlify project reader to list accessible projects. Preserve exact site IDs, names, primary URLs and reported deploy IDs. Follow pagination if supplied. For each plausible project, read its project and deploy details. Check deploy state, context (production versus preview), source repository, commit SHA, publication time, and screenshot availability. Use GitHub to resolve an actual source repository and current MACS source before editing. Do not guess repository names from Netlify slugs.

Netlify's ready state proves the deployment completed; it does not prove the application works, the result is current, or the business claim is true. A preview is not production. A project may have multiple sites or aliases; deduplicate by canonical project identity, not matching names alone. Keep ambiguous sites separate until resolved.

### 02 — Reconcile
Read the existing Work, case-study and Built Here records. Preserve approved copy and all existing entry IDs/slugs. Compare each discovered site with the current portfolio. Produce one of: MATCHED, NEW_CANDIDATE, DUPLICATE_CANDIDATE, NEEDS_IDENTITY, or NOT_FOR_PORTFOLIO. Never create a duplicate case study because two Netlify sites exist.

Route each approved public entry to exactly one primary bucket: Reset, Momentum, Scale, or Launch. Internal lab and pipeline labels are statuses or collections, not fifth public service buckets. A site's existence never establishes who commissioned it, who owns it, who developed it, or whether it achieved results.

### 03 — Establish truth
For each candidate record: stable project ID; display name; exact Netlify site ID; canonical production URL; source repo and commit; deploy evidence; owner/relationship; approved public role; primary bucket; stage; one-line description; media slots; proof sources; permission to publish; last checked time; and outstanding questions.

Stages: DISCOVERED, REVIEWED, APPROVED, PUBLISHED, ARCHIVED. Separately track work maturity: CONCEPT, IN_PROGRESS, BETA, LIVE, DOCUMENTED. These are not interchangeable. Only mark a business result verified when its evidence supports that exact claim. Use null or a literal descriptive placeholder for missing facts, never manufactured metrics, testimonials, attribution, images, or URLs.

### 04 — Curate the gallery
Think COLLINS: a deliberate editorial sequence, not an inventory dashboard. Lead with the strongest real work and most useful image; let scale, typography, whitespace and contrast establish hierarchy. Use asymmetrical compositions only when they improve the story. A small number of strong projects is better than every deployment as identical cards. No generic SaaS grids, AI-brain art, fake statistics, ornamental badges, or animation for its own sake.

A gallery item should need only its name, an approved one-line statement, a strong image/video and a clear destination. Let the case-study page carry the problem, work, change and evidence. Preserve the four MACS buckets and the approved CTA, `Tell us what's important`. Do not rewrite existing approved copy as part of an inventory refresh.

Keep placeholders concrete: `[PLACEHOLDER — TASTE OF NAWLINS HERO: approved food/brand image or launch film]`, `[PLACEHOLDER — VERIFIED RESULT: source, period and approved metric]`. Missing media must never silently become a stock image or generated client representation. Preview imagery is a candidate asset, not automatically an approved hero. Ask for media permission where needed. Prefer repository-owned, optimized public assets; do not hotlink private deployments or expose internal screens. Image generation/editing, when requested, is a separate approved asset workflow.

### 05 — Prepare the smallest change
Use the existing MACS case-study model and routes. Propose a minimal schema extension only if the current model cannot hold the required evidence/status/media fields. Keep an owner-controlled, versioned content record as the storefront's publication source; use canonical ICM for client/business truth. If a future automatic sync is needed, obtain approved server-only Netlify access through the existing control-plane/security architecture. Do not add a browser token, direct client database access, a new backend, or live secret-bearing API calls to a public page.

Prepare a reviewable diff containing only the intended inventory, case-study, media or gallery changes. Do not modify the source projects or trigger their deployments merely to collect portfolio material. Never automatically publish all discovered sites. A new public case or consequential claim requires the applicable owner approval. Do not replace an approved media slot with an arbitrary screenshot.

### 06 — Verify and publish
Check the exact target branch/commit and run the repository's required lint, typecheck, build and tests. Verify all gallery destinations, canonical live-versus-preview URLs, image loading, responsive composition, keyboard access, focus, alt text, contrast and reduced motion. Check that legal/permission boundaries and existing routes remain intact. A successful build is TESTED, not VERIFIED.

Before reporting a runtime PASS, exercise the intended transport and capture an observable result. For a public gallery, inspect the deployed preview and follow at least one project link to the correct destination; confirm that the displayed media and copy match the approved record. If the host blocks deployment, report the blocker and leave the change reviewable. Publish only with the required approval and rollback. Record commit, deploy ID, evidence, and remaining gaps.

### 07 — Maintain
On request, rescan Netlify, reconcile by site ID, detect changed commits or URLs, and report only meaningful changes. Never overwrite approved copy or a manually selected image during refresh. Archive or mark stale entries deliberately; do not delete a case study because a deployment disappears. Keep source evidence and publication status separate. The owner should only need to resolve material identity, permission, claim or creative decisions.

## Output contract
Return: inventory count; matched entries; new candidates; duplicate/identity conflicts; approved additions; missing media/proof; exact files changed; tests and runtime evidence; preview/live status; rollback. State clearly whether the result is a discovery, documentation change, prepared gallery update, or verified publication.

## Current MACS editorial map
Home: Reset has a case-study slot with no tagline; Momentum features Buffer Blaster; Scale can feature Pare’ and Posta Studio; Launch includes ASC3ND and the owner-approved Taste of Nawlins case-study candidate. Work remains the proof-led gallery. Built Here contains internal products and experiments, not automatically client work. Notes may expose beta/pipeline work with truthful stage labels.

Keep the approved global spelling Stavarai. Preserve `Developed by Stavarai` where already approved. Do not infer a Pare’ description from a vague reference to a playbook. Do not promote an internal product to a client success story without evidence.

## Inventory seed
See `inventory.json` in this skill folder. It is a read-only snapshot of connected Netlify discovery, not a publication manifest. Re-read Netlify before acting; current deployment IDs, URLs and source commits can change. A `ready` deploy is not a verified business result. Missing source or identity fields remain unknown.

## Acceptance
A cold agent can find the correct MACS repo, identify the four buckets, distinguish Netlify deployment evidence from business proof, map Taste of Nawlins without duplicating it, leave unrelated projects untouched, and produce a reviewable update. The workflow is not complete merely because files exist: the actual gallery-to-destination path must work before publication is called verified.
