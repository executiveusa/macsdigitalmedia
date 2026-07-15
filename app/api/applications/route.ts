import { createHmac } from "node:crypto";

import { validateFoundingApplication } from "@/lib/application-validation";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export const runtime = "nodejs";
export const maxDuration = 10;

function json(body: unknown, status: number) {
  return Response.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
      "Content-Security-Policy": "default-src 'none'",
    },
  });
}

function getClientAddress(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return json({ ok: false, errors: { form: "The application could not be read." } }, 400);
  }

  const validation = validateFoundingApplication(payload);

  if (!validation.ok) {
    return json({ ok: false, errors: validation.errors }, 422);
  }

  if (validation.honeypotTriggered) {
    return json({ ok: true }, 201);
  }

  const hashSecret = process.env.APPLICATION_HASH_SECRET;
  if (!hashSecret || hashSecret.length < 32) {
    return json(
      {
        ok: false,
        errors: { form: "The application service is temporarily unavailable. Please try again later." },
      },
      503,
    );
  }

  const userAgent = request.headers.get("user-agent")?.slice(0, 500) || null;
  const fingerprint = createHmac("sha256", hashSecret)
    .update(`${getClientAddress(request)}|${userAgent || "unknown"}`)
    .digest("hex");

  try {
    const supabase = getSupabaseAdmin();
    const recentWindow = new Date(Date.now() - 10 * 60 * 1000).toISOString();

    const { count, error: countError } = await supabase
      .from("founding_applications")
      .select("id", { count: "exact", head: true })
      .eq("request_fingerprint", fingerprint)
      .gte("created_at", recentWindow);

    if (countError) throw countError;

    if ((count || 0) >= 3) {
      return json(
        {
          ok: false,
          errors: { form: "Too many applications were submitted from this connection. Please wait and try again." },
        },
        429,
      );
    }

    const { data, error } = await supabase
      .from("founding_applications")
      .insert({
        full_name: validation.data.name,
        email: validation.data.email,
        phone: validation.data.phone,
        organization_name: validation.data.organization,
        website: validation.data.website,
        washington_location: validation.data.location,
        organization_type: validation.data.organizationType,
        staff_size: validation.data.staffSize,
        operational_problem: validation.data.problem,
        desired_result: validation.data.result,
        decision_maker_available: validation.data.decisionMaker,
        consent_to_contact: validation.data.consent,
        source_url: validation.data.sourceUrl,
        referrer: validation.data.referrer,
        user_agent: userAgent,
        request_fingerprint: fingerprint,
      })
      .select("id")
      .single();

    if (error) throw error;

    return json({ ok: true, applicationId: data.id }, 201);
  } catch (error) {
    console.error(
      "Founding application intake failed:",
      error instanceof Error ? error.message : "Unknown database error",
    );

    return json(
      {
        ok: false,
        errors: { form: "We could not submit the application. Your information was not confirmed as received. Please try again." },
      },
      500,
    );
  }
}
