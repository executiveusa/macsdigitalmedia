# Agent MAXX site-operations runbook

## Purpose

This runbook covers the narrow site-operations API in `executiveusa/macsdigitalmedia`. It lets Agent MAXX inspect public-site readiness and manage allowlisted public content without exposing unrestricted execution, provider credentials, real client records, or production mission state.

Unrestricted agent execution remains in `executiveusa/macs-agent-portal`.

## Required server-only configuration

Store these values in the external vault and deployment environment. Never paste their values into GitHub, browser code, screenshots, logs, or chat.

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `SUPABASE_DB_URL` for migrations only
- `SITE_AGENT_TOKEN` with at least 32 random bytes

`SITE_AGENT_TOKEN` must never use a `NEXT_PUBLIC_` prefix.

## Capability discovery

Public manifest:

```text
GET https://www.macsdigitalmedia.com/.well-known/agent.json
```

The manifest is safe to cache and contains no credentials.

## Authenticated status

```bash
curl --fail-with-body \
  -H "Authorization: Bearer $SITE_AGENT_TOKEN" \
  https://www.macsdigitalmedia.com/api/agent/status
```

The status response reports only readiness states, deployment identifiers, and bounded capabilities. It never returns application records, content history, database URLs, or credentials.

## Read managed content

```bash
curl --fail-with-body \
  -H "Authorization: Bearer $SITE_AGENT_TOKEN" \
  https://www.macsdigitalmedia.com/api/agent/content
```

The only supported content key in version 1 is:

```text
home-announcement
```

Supported locales:

```text
en
es-MX
```

## Update managed content

Every write requires:

- `Authorization: Bearer $SITE_AGENT_TOKEN`
- `Idempotency-Key` containing 16–128 safe characters
- `X-Agent-Id` containing the bounded operator identity
- A revision note describing why the change is being made

Example:

```bash
curl --fail-with-body \
  -X PUT \
  -H "Authorization: Bearer $SITE_AGENT_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Idempotency-Key: MAXX-20260716-founding-cohort-en" \
  -H "X-Agent-Id: Agent-MAXX.production" \
  --data '{
    "key": "home-announcement",
    "locale": "en",
    "title": "Founding cohort applications are open",
    "body": "Washington organizations can apply for the next MACS founding cohort.",
    "ctaLabel": "Apply for a founding spot",
    "ctaHref": "/apply",
    "enabled": true,
    "revisionNote": "Open the next approved founding cohort application window."
  }' \
  https://www.macsdigitalmedia.com/api/agent/content
```

Use a different idempotency key for a materially different approved change. Retrying the same operation with the same key is safe.

## Allowed destinations

Managed CTA destinations must be either:

- an internal path beginning with a single `/`, or
- an absolute `https://` URL

Protocol-relative URLs, HTTP URLs, JavaScript URLs, and arbitrary HTML are rejected.

## Disable an announcement

Send the existing approved content with:

```json
{
  "enabled": false
}
```

The full validated payload is still required so the audit record contains the complete intended state.

## Audit trail

Each successful update creates an immutable record in:

```text
public.site_content_revisions
```

The audit record includes:

- content key
- locale
- version
- complete bounded snapshot
- revision note
- idempotency key
- agent identity
- timestamp

The public site never exposes this table.

## Failure behavior

- Missing or invalid token: `401 unauthorized`
- Missing or invalid idempotency key: `400`
- Invalid content: `422` with field errors
- Supabase or migration unavailable: `503`
- Homepage content lookup failure: no announcement is rendered; the normal homepage remains available

Do not retry the same failing request more than three times. Preserve the response and deployment logs for escalation.

## Migration

Apply the Hostinger Supabase migrations through the protected production workflow or a trusted shell:

```bash
npm run db:apply:hostinger
npm run db:verify:hostinger
```

The migration creates forced-RLS tables and a service-role-only transactional function.

## Secret rotation

1. Generate a new token with at least 32 random bytes.
2. Update `SITE_AGENT_TOKEN` in the vault and Vercel.
3. Redeploy the site.
4. Update the agent runtime secret.
5. Verify the old token receives `401` and the new token receives a valid status response.
6. Never log either token during verification.

## Rollback

Immediate operations shutdown:

1. Remove or rotate `SITE_AGENT_TOKEN` in Vercel.
2. Redeploy.
3. Confirm authenticated endpoints return `401` with the retired token.

Application rollback:

1. Revert the site-operations merge commit.
2. Redeploy the prior production commit.
3. Leave database tables intact to preserve the audit trail.

Dropping audit tables is destructive and requires a separately reviewed migration and explicit approval.

## Production gate

A preview may be built and verified automatically. Promotion or merge to production requires explicit Bambu approval during the first 30 days.
