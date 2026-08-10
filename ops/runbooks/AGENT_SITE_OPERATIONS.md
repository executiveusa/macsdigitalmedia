# Agent MAXX Site Operations

This public-site control surface is intentionally narrow. Unrestricted agent execution remains in `executiveusa/macs-agent-portal`.

## Capabilities

- `GET /.well-known/agent.json` — public capability discovery.
- `GET /api/agent/status` — authenticated dependency/readiness check.
- `GET /api/agent/content` — authenticated read of allowlisted managed public content.
- `PUT /api/agent/content` — authenticated, validated, idempotent update of allowlisted public content.

## Authentication

Store `SITE_AGENT_TOKEN` only as a server-side secret. Use at least 32 random bytes. Never prefix it with `NEXT_PUBLIC_`.

Authenticated requests use `Authorization: Bearer <SITE_AGENT_TOKEN>`. Writes also require `Idempotency-Key` and should identify the operator with `X-Agent-Id`.

## Safety boundary

The API does not expose arbitrary execution, provider credentials, browser-control credentials, production mission state, or unrestricted client records. Managed content is restricted to the contract in `lib/site-content-contract.ts` and persisted with immutable revisions.

## Activation

1. Apply the ordered Supabase migrations from a trusted environment.
2. Configure `SITE_AGENT_TOKEN` in the deployment secret store.
3. Verify unauthorized requests return 401.
4. Verify `/api/agent/status` reports both dependencies ready.
5. Exercise a reversible managed-content write with a unique idempotency key.
6. Confirm the revision record exists before using the endpoint operationally.
