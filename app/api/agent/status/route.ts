import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { isAuthorizedSiteAgent } from "@/lib/site-ops-auth";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

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

async function dependencyReady(table: string) {
  try {
    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from(table).select("id").limit(1);
    return !error;
  } catch {
    return false;
  }
}

export async function GET(request: Request) {
  if (!isAuthorizedSiteAgent(request.headers)) {
    return json(
      { ok: false, error: "unauthorized" },
      401,
      { "WWW-Authenticate": 'Bearer realm="macs-site-operations"' },
    );
  }

  const [applicationIntakeReady, contentStoreReady] = await Promise.all([
    dependencyReady("founding_applications"),
    dependencyReady("site_content_blocks"),
  ]);
  const ready = applicationIntakeReady && contentStoreReady;

  return json(
    {
      ok: ready,
      service: "macs-site-operations",
      version: "1.0",
      environment: process.env.VERCEL_ENV || process.env.NODE_ENV || "unknown",
      deployment: {
        commitSha: process.env.VERCEL_GIT_COMMIT_SHA || null,
        deploymentId: process.env.VERCEL_DEPLOYMENT_ID || null,
      },
      dependencies: {
        applicationIntake: applicationIntakeReady ? "ready" : "unavailable",
        managedContent: contentStoreReady ? "ready" : "unavailable",
      },
      capabilities: {
        contentRead: true,
        contentWrite: true,
        unrestrictedExecution: false,
        clientRecordAccess: false,
      },
      checkedAt: new Date().toISOString(),
    },
    ready ? 200 : 503,
  );
}
