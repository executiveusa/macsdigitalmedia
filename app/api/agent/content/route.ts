import { listManagedContent, upsertManagedContent } from "@/lib/managed-content";
import {
  isAuthorizedSiteAgent,
  readAgentId,
  readIdempotencyKey,
} from "@/lib/site-ops-auth";
import { validateManagedContent } from "@/lib/site-content-contract";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const maxDuration = 10;

function json(body: unknown, status: number, extraHeaders?: Record<string, string>) {
  return Response.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
      "Content-Security-Policy": "default-src 'none'",
      "X-Content-Type-Options": "nosniff",
      ...extraHeaders,
    },
  });
}

function unauthorized() {
  return json(
    { ok: false, error: "unauthorized" },
    401,
    { "WWW-Authenticate": 'Bearer realm="macs-site-operations"' },
  );
}

export async function GET(request: Request) {
  if (!isAuthorizedSiteAgent(request.headers)) return unauthorized();

  try {
    const records = await listManagedContent();
    return json({ ok: true, records }, 200);
  } catch {
    return json({ ok: false, error: "managed_content_unavailable" }, 503);
  }
}

export async function PUT(request: Request) {
  if (!isAuthorizedSiteAgent(request.headers)) return unauthorized();

  const idempotencyKey = readIdempotencyKey(request.headers);
  if (!idempotencyKey) {
    return json(
      {
        ok: false,
        errors: {
          idempotencyKey: "Idempotency-Key must contain 16–128 safe characters.",
        },
      },
      400,
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return json({ ok: false, errors: { form: "Request body must contain valid JSON." } }, 400);
  }

  const validation = validateManagedContent(payload);
  if (!validation.ok) return json({ ok: false, errors: validation.errors }, 422);

  try {
    const record = await upsertManagedContent(
      validation.data,
      readAgentId(request.headers),
      idempotencyKey,
    );

    return json({ ok: true, record }, 200);
  } catch {
    return json({ ok: false, error: "managed_content_update_failed" }, 503);
  }
}
