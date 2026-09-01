# MACS Editorial Protocol

Status: governed publication contract
Canonical business/runtime authority: `executiveusa/maxx-migrations-agentic-systems`
Public renderer: this repository

## Purpose

MACS Insights turns approved business truth into durable public stories without making any model, CMS, or vendor the source of truth.

Agents are replaceable workers. ICM is durable organizational memory. The publication layer is a renderer and distribution surface.

## Cold-agent walk test

A new agent must be able to answer these questions before editing or proposing publication:

1. What organization am I representing?
2. What source material is authoritative for this story?
3. Which statements are FACT, INFERENCE, HYPOTHESIS, DECISION, or EVIDENCE?
4. What public claim is the article making?
5. Who is the intended reader?
6. What proof supports the claim?
7. What may not be disclosed publicly?
8. What stage is the article in?
9. What exact next action is permitted?
10. What evidence is required before publication is complete?

If any consequential answer is unknown, stop and request the missing truth rather than invent it.

## Editorial pipeline

`01_intake -> 02_research -> 03_thesis -> 04_draft -> 05_art_direction -> 06_review -> 07_publish -> 08_distribute -> 09_measure -> 10_learn`

## Article contract

Every article record must include:

- stable `id`
- `slug`
- `status`
- `title`
- `dek`
- `audience`
- `thesis`
- `author`
- `publishedAt` when published
- `sources[]`
- `claims[]` with truth class and support
- `sections[]`
- optional CTA
- revision note

## Truth rules

Use the repository's ICM truth classes:

- FACT
- INFERENCE
- HYPOTHESIS
- DECISION
- EVIDENCE

Never turn repeated agent output into FACT.
Never invent client outcomes, revenue, conversion rates, testimonials, awards, or implementation status.
Never imply a client approved public disclosure without recorded permission.

## Public/private boundary

Public stories may describe outcomes, principles, approved methods, verified case evidence, founder perspective, and client-approved work.

Do not expose secrets, credentials, private client data, unrestricted agent endpoints, internal control-plane details, raw ICM records, or implementation details that do not serve the reader.

ICM, Company Brain, provider names, and internal orchestration mechanics stay behind the story unless explicitly approved for the article.

## Agent actions

SAFE WITHOUT PUBLICATION AUTHORITY

- read approved context
- research
- propose thesis
- draft
- adapt structure
- select existing editorial components
- prepare social derivatives
- run factual/design/SEO/accessibility checks
- create a preview branch

REQUIRES APPROVAL

- promote a draft to published
- introduce a new public factual claim about MACS or a client
- identify a client publicly
- publish client metrics or testimonials
- materially change positioning
- send or schedule distribution to public channels

## CMS/storage abstraction

Agents must target the MACS Editorial Contract, not a vendor-specific schema.

Initial storage: version-controlled structured JSON in `content/insights/`.
Future storage may be Sanity or another CMS through an adapter.
Changing storage must not change the public article contract or ICM approval rules.

## Distribution

After publication, the canonical article may be passed to Social Drop Factory for governed platform adaptation and scheduling. Distribution is downstream of publication and must not mutate the source article.

## Completion evidence

An article is not complete until:

- schema/contract validation passes
- links and metadata are valid
- rendered desktop and mobile views are reviewed
- factual claims are traceable to sources or explicit owner confirmation
- accessibility checks pass
- publication URL resolves
- exact Git SHA is recorded
- social distribution, if requested, has its own approval and execution receipt
