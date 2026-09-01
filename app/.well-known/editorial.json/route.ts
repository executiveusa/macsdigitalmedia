import { listInsights } from "@/lib/editorial";

export const dynamic = "force-dynamic";

export async function GET() {
  const articles = listInsights().map(({ id, slug, status, title, dek }) => ({ id, slug, status, title, dek }));

  return Response.json(
    {
      name: "MACS Insights",
      protocol: "macs-editorial-icm-v1",
      organization: "MACS Digital Media",
      canonicalIcmAuthority: "executiveusa/maxx-migrations-agentic-systems",
      publicRenderer: "executiveusa/macsdigitalmedia",
      storage: {
        current: "git-json-v1",
        path: "content/insights/*.json",
        vendorCoupled: false,
        futureAdapters: ["sanity"],
      },
      requiredReads: [
        "/AGENTS.md",
        "/docs/icm/ICM_CORE.md",
        "/docs/icm/EDITORIAL_PROTOCOL.md",
        "/content/insights/AGENTS.md"
      ],
      truthClasses: ["FACT", "INFERENCE", "HYPOTHESIS", "DECISION", "EVIDENCE"],
      workflow: ["01_intake", "02_research", "03_thesis", "04_draft", "05_art_direction", "06_review", "07_publish", "08_distribute", "09_measure", "10_learn"],
      writeMode: "branch-preview-pr",
      approvalRequiredFor: ["publish", "new_public_fact", "client_identity", "client_metrics", "positioning_change", "public_distribution"],
      articles,
    },
    {
      headers: {
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff"
      }
    }
  );
}
