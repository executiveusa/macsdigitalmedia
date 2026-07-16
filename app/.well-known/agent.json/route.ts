export const dynamic = "force-static";

const manifest = {
  schemaVersion: "1.0",
  site: {
    name: "MACS Digital Media",
    canonicalUrl: "https://www.macsdigitalmedia.com",
    repository: "executiveusa/macsdigitalmedia",
    purpose: "Public website, content, applications, safe demonstrations, SEO, and public data endpoints.",
  },
  operator: {
    name: "Agent MAXX",
    executionBoundary: "Unrestricted agent execution remains in executiveusa/macs-agent-portal.",
  },
  capabilities: {
    publicRead: [
      "/api/public/company",
      "/api/public/services",
      "/llms.txt",
      "/sitemap.xml",
    ],
    authenticatedOperations: {
      authentication: "Authorization: Bearer <SITE_AGENT_TOKEN>",
      status: "/api/agent/status",
      content: "/api/agent/content",
      writeRequirements: ["Idempotency-Key", "X-Agent-Id"],
      allowlistedContentKeys: ["home-announcement"],
      locales: ["en", "es-MX"],
    },
  },
  safety: {
    secretsInBrowser: false,
    unrestrictedExecution: false,
    realClientRecords: false,
    providerCredentials: false,
    productionMissionState: false,
    humanApprovalRequiredForProductionDeploy: true,
  },
  documentation: {
    repositoryRules: "/AGENTS.md",
    operationsRunbook: "/ops/runbooks/AGENT_SITE_OPERATIONS.md",
  },
} as const;

export async function GET() {
  return Response.json(manifest, {
    headers: {
      "Cache-Control": "public, max-age=300, stale-while-revalidate=3600",
      "Content-Security-Policy": "default-src 'none'",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
