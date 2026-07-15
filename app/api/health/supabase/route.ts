import { getSupabaseAdmin } from "@/lib/supabase-admin";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function response(body: Record<string, unknown>, status: number) {
  return Response.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
      "Content-Security-Policy": "default-src 'none'",
    },
  });
}

export async function GET() {
  try {
    const supabase = getSupabaseAdmin();
    const { error } = await supabase
      .from("founding_applications")
      .select("id", { count: "exact", head: true });

    if (error) {
      console.error("Supabase health check failed:", error.message);
      return response({ ok: false, service: "supabase", status: "unavailable" }, 503);
    }

    return response({ ok: true, service: "supabase", status: "ready" }, 200);
  } catch (error) {
    console.error(
      "Supabase health check failed:",
      error instanceof Error ? error.message : "Unknown configuration error",
    );

    return response({ ok: false, service: "supabase", status: "unavailable" }, 503);
  }
}
