# MACS Hostinger Supabase handoff

## Target

MACS Digital Media uses the existing self-hosted Supabase stack on the Hostinger VPS.

- Public HTTPS API gateway: `https://api.thepaulieffect.com/supabase`
- PostgREST base: `https://api.thepaulieffect.com/supabase/rest/v1/`
- Direct Kong API on the VPS: `http://31.220.58.212:8001`
- Supabase Studio on the VPS: `http://31.220.58.212:3001`
- PostgreSQL host: `31.220.58.212`
- PostgreSQL port: `5434`
- Database: `postgres` (the Supabase stack's own database; `public.founding_applications` lives here)
- Supabase compose project on the VPS: `/opt/supabase`

Use the HTTPS gateway from Vercel. Direct IP endpoints are for trusted infrastructure and maintenance only. Kong on port 8001 is intentionally not reachable from outside the VPS; external callers go through the HTTPS gateway.

Earlier versions of this doc named the database `second_brain`. That was wrong: the leads table is in `postgres`, confirmed during the 2026-11-19 intake repair.

## Hosting

The live site (`www.macsdigitalmedia.com`) is served by the Vercel project `macsdigitalmedia` in the Vercel team `pauli-4426s-projects`. Set the environment variables below there.

The `the-pauli-effect` team also has a project named `macsdigitalmedia`, but it has no custom domain and does not serve the live site. Changing its settings has no effect on production.

## Secret source

The authoritative values live outside this repository in the project vault. Never paste filled environment files, JWTs, database passwords, private keys, or provider tokens into GitHub.

The service-role value must be the self-hosted Supabase `service_role` JWT. A Supabase personal access token beginning with `sbp_` is not a service-role JWT and will not authenticate PostgREST requests.

## Application environment

Configure these values for Preview and Production in the Vercel project `macsdigitalmedia` (team `pauli-4426s-projects`):

```text
SUPABASE_URL=https://api.thepaulieffect.com/supabase
SUPABASE_SERVICE_ROLE_KEY=<self-hosted service_role JWT>
APPLICATION_HASH_SECRET=<32+ random characters>
```

`NEXT_PUBLIC_SUPABASE_URL` is optional and is not required by the founding application intake. The service-role key must never use a `NEXT_PUBLIC_` prefix.

## Migration environment

The migration runner requires a direct PostgreSQL connection stored as a protected secret:

```text
SUPABASE_DB_URL=postgresql://postgres:<password>@31.220.58.212:5434/postgres
```

Add these GitHub **production environment secrets**:

- `SUPABASE_DB_URL`
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

Then run the manual workflow:

```text
Actions → Deploy Hostinger Supabase schema → Run workflow
```

The workflow applies every SQL file in `supabase/migrations/` with `ON_ERROR_STOP=1`, then verifies the API through the service-role client.

## Local or VPS application

From a trusted shell with the variables already loaded:

```bash
npm install
npm run db:apply:hostinger
npm run db:verify:hostinger
```

The scripts never print secret values.

## Created database objects

The migrations create and harden:

- `public.founding_applications`
- UUID primary keys using `pgcrypto`
- status and field constraints
- indexes for review, email lookup, creation time, and abuse-control fingerprint
- row-level security
- revoked `anon` and `authenticated` table privileges
- an automatic `updated_at` trigger

The website inserts records only from the server-side `/api/applications` route using the service-role client. Raw IP addresses are not stored.

## Verification

After deployment:

1. Open `/api/health/supabase` on the deployed MACS site.
2. Confirm the response is `200` with `status: "ready"`.
3. Submit one synthetic founding application.
4. Confirm the record exists in `public.founding_applications`.
5. Confirm an anonymous REST request cannot read the table.
6. Remove the synthetic record after verification.

The health endpoint never returns database URLs, keys, record counts, or application data.

## Failure states

- `503` from `/api/health/supabase`: URL, service-role key, gateway routing, or table migration is unavailable.
- `relation does not exist`: run the schema workflow.
- authentication/JWT error: use the self-hosted service-role JWT rather than a cloud personal access token.
- network failure from Vercel: verify the HTTPS gateway and certificate; do not expose the PostgreSQL port as an application API.

## Rollback

Application rollback is immediate: remove the three Supabase variables from the deployment environment or redeploy the previous commit. The form will return a controlled unavailable response rather than storing partial data.

Database objects contain submitted leads and must not be dropped as an automatic rollback. Export and review the data before any destructive migration.
