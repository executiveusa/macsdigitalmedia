# MACS Digital Media — Status

Last updated: 2026-07-14

## Repository state

- Project type: greenfield public website with a brownfield backend integration target
- Production branch: `main`
- Active architecture branch: `architect/macs-ms00-foundation`
- Current sprint: `MACS-MS00`
- Current code state: first Next.js application scaffold and homepage vertical slice committed for preview and verification

## Implemented in the first build slice

- MACS logo and brand tokens
- Responsive navigation
- Existing father-and-son hero video preserved as a decorative background
- Locked homepage positioning and calls to action
- MACS AI Operating System explanation
- Synthetic inquiry-to-follow-up demonstration
- Website preserve/rescue/replace framework
- 90-day launch sequence
- Transparent $7,500 validation-cohort offer
- Application usability preview with secure submission intentionally disabled
- Structured data, sitemap, robots, llms.txt, and public JSON endpoints
- Keyboard focus, reduced-motion, and mobile behavior
- GitHub Actions build and typecheck workflow

## Locked decisions

- Primary audience: Washington nonprofit and social-purpose organizations, approximately 3–50 staff
- Main CTA: Apply for a Washington Founding Spot
- Secondary CTA: See the System Work
- Validation cohort: first five organizations at $7,500
- Website policy: AI Front Door for usable sites; standardized five-page rescue when the current site damages trust
- Standard workflows: Inquiry to Follow-up and Meeting to Action
- Product name: MACS AI Operating System
- Mascot/operator: Agent MAXX
- Client model: separate client-owned deployments
- Public website and MAXX control plane remain separate repositories

## Required verification before review

1. Install dependencies and generate a lockfile.
2. Run typecheck and production build.
3. Review the Vercel branch preview at desktop and mobile widths.
4. Verify hero video loading and fallback behavior.
5. Connect a secure application intake service and privacy notice before production.
6. Complete accessibility and Krug usability gates.

## Known blockers

- This environment cannot install npm dependencies or render the Vercel preview, so the first commit is source-reviewed but not yet execution-verified.
- Vercel project settings and deployment logs are not directly available through the current GitHub connection.
- The production MAXX public-demo contract is not implemented yet.
- Application submission is intentionally disabled until secure intake is selected and reviewed.
