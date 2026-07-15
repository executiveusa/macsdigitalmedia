export const dynamic = "force-static";

export async function GET() {
  return Response.json({
    name: "MACS Digital Media",
    category: "Managed AI operating systems",
    audience: "Washington nonprofit, social-purpose, and selected small-business organizations",
    operatingModel: "Human-managed, approval-first, client-owned deployments",
    primaryMarket: "Washington, USA",
    website: "https://www.macsdigitalmedia.com",
    publicProduct: "MACS AI Operating System",
    managedOperator: "Agent MAXX",
  });
}
