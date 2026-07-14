export async function GET() {
  const body = `# MACS Digital Media

MACS Digital Media installs and manages client-owned AI operating systems for Washington organizations.

## Primary audience
Washington nonprofit and social-purpose organizations with approximately 3–50 staff.

## Core offer
The Washington Founding Launch is a supervised 90-day installation combining a Company Brain, one managed Agent MAXX operator, an AI Front Door or standardized website rescue, human approval controls, and two workflows: Inquiry to Follow-up and Meeting to Action.

## Founding price
The first five accepted organizations enter at $7,500. Later cohorts enter at published higher prices as the system becomes more proven and standardized.

## Safety and ownership
Consequential actions require human approval during the supervised launch. Client organizations receive separate, client-owned deployments and a documented handoff option.

## Public resources
- Website: https://www.macsdigitalmedia.com/
- Application: https://www.macsdigitalmedia.com/apply
- Company data: https://www.macsdigitalmedia.com/api/public/company
- Service data: https://www.macsdigitalmedia.com/api/public/services
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
