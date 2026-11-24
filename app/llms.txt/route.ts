export const dynamic = "force-static";

export async function GET() {
  const body = `# MACS Digital Media

MACS Digital Media is a Seattle, Washington father-and-son digital partner for non-technical founders and owner-led businesses. We build AI-ready websites, run disciplined Google and Meta advertising, and install 60-second automated lead capture under one roof.

## Who we serve
Owner-led local service businesses, clinics, eCommerce brands, and community organizations across the Pacific Northwest and United States.

## Four ways to start
- Reset (/programs#reset): Audit what exists, rescue or rebuild a fast mobile-first website, and install 60-second lead capture (14 to 30 day sprint).
- Momentum (/programs#momentum): Weekly content, UGC creative, local proof, and consistent follow-up.
- Scale (/programs#scale): Disciplined Google Ads and Meta Ads with strict stop-loss rules, dedicated landing pages, and AI-assisted lead follow-up (starts with a 14-day live proof sprint for qualified businesses).
- Launch (/programs#launch): End-to-end positioning, web platform, launch creative, and demand capture for a new brand or offer.

## Built Here (Client-Owned In-House Systems)
- Buffer Blaster (/work/buffer-blaster): Content and UGC ad production engine installed under client ownership.
- PARÉ (/work/pare): Editorial design and quality-review system that prevents generic AI web templates.
- Posta Studio (/work/posta-studio): Automated social publishing workflows tailored to the brand.
- Foundry (/work/foundry-fleet): Private, client-owned AI agent infrastructure for lead follow-up and operations.

## Ownership and safety
Clients keep 100% ownership of their domain, website codebase, ad accounts, data, and installed workflows. No 12-month agency lock-in contracts. Consequential actions use clear human approval gates.

## Selected work
- ASC3ND: https://www.asc3nd.org (Case study: https://www.macsdigitalmedia.com/work/asc3nd)
- Taste of Nawlins: https://www.macsdigitalmedia.com/work/taste-of-nawlins

## Contact and public resources
- Website: https://www.macsdigitalmedia.com/
- Programs: https://www.macsdigitalmedia.com/programs
- Work: https://www.macsdigitalmedia.com/work
- Team: https://www.macsdigitalmedia.com/team
- Apply / Start a conversation: https://www.macsdigitalmedia.com/apply
- Direct email: info@macsdigitalmedia.com
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
