# MACS Insights — Agent Entry Point

Before changing any article:

1. Read `/AGENTS.md`.
2. Read `/docs/icm/ICM_CORE.md`.
3. Read `/docs/icm/EDITORIAL_PROTOCOL.md`.
4. Read the target article JSON in this directory.

## Current storage

`git-json-v1`

Each article is one portable JSON record. The renderer lives in `app/insights/` and the storage adapter lives in `lib/editorial.ts`.

## Write model

Do not edit `main` directly for editorial work.

Create a branch, create/update the article record, render a preview, run repository gates, and submit a PR. Publication means approved merge plus verified public URL.

## Never do these

- invent claims or metrics
- expose private ICM material
- publish client identity without approval
- put secrets in article records
- bypass review because content is 'only marketing'
- couple the article schema to a CMS vendor

## Next legal action

If the article is `draft` or `preview`, improve or review it using traceable sources. Do not mark it `published` without approval and publication evidence.
