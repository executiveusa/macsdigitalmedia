# Restaurant Growth by MACS — sell-first launch brief

Status: DRAFT OFFER (2026-11-16). Public landing page: `/restaurants` in this repo, PR #63. Do not publish or take payment before approved terms and verified intake.

## Decision and boundary
- Classify **SELL — managed service**, conditional on an owner-approved $750 entry price and a delivery operator. This is a niche within the existing **Reset → Momentum → Scale → Launch** commercial structure, not a fifth service category.
- The *software automation* is **USE / BUILD-ON-EXISTING**, not a new product and not a prerequisite for selling a manual/agent-assisted deliverable. Don't promise finished creator scheduling, ad publishing or POS integration.
- Canonical state/business logic: `executiveusa/maxx-migrations-agentic-systems` (merged restaurant-growth skill from PR #30; draft Square proof PR #42 and Revenue Capture OS PR #29).
- Owner-facing operations: `executiveusa/macs-agent-portal` (draft PR #113). Public offer/intake: `executiveusa/macsdigitalmedia`. Bunna is a *potential* first restaurant pilot, subject to existing owner and production gates. Crown & Core Creator Studio is a separate medspa product, not a restaurant dependency.

## One 30-day revenue test (do not confuse target with actual sales)
**Goal:** at least one explicitly authorized, collected $750 Restaurant Revenue Map payment within 30 days, from an independently verified customer. No pre-existing customer or paid order is claimed here.

**Target:** 10 independent restaurants with a visible owner/operator and a legitimate business inquiry route; prioritize introductions and existing relationships. No unsolicited mass automated creator or restaurant contact. Obtain consent and comply with platform, messaging and privacy rules.

**Paid entry deliverable — Restaurant Revenue Map ($750 one-time, proposed):**
1. Intake: restaurant's single location, owner-approved objective, capacity constraints, current website/order/catering paths, known ad costs, content/rights inventory; no passwords by email.
2. Inspect existing demand and customer conversion. Create a short baseline with known vs unknown labels.
3. Deliver a 5–8-page private report: specific friction, one prioritized growth experiment, creator/promotion feasibility, verified vs assumed sales metrics, limited spend proposal, approval list and operational 30-day plan.
4. One owner review call and one written decision: GO, REVISE or STOP. No ads or creator outreach without separate permission.

**Fulfillment acceptance:** actual customer report with source links, baseline, specific next action, delivery receipt and owner acceptance. If unable to perform with available access, refund/credit under separately approved terms; don't promise automatic refunds in copy.

## Sales sequence
- Days 1–3: approve price/scope/payment method, verify that `/apply` stores inquiries and reaches an authorized human. Verify actual page visually at 320/390/768/1440. Do not merge before approval.
- Days 4–10: send a personalized, permission-respecting message to 10 qualified restaurants or use warm introductions, linking to `/restaurants`. Track sent/received/replied/qualified without inventing leads.
- Days 11–20: offer a short owner discovery conversation. Invoice only after service terms and delivery capacity are confirmed. Record collected payment, not a verbal yes.
- Days 21–30: deliver the first paid map, get acceptance and propose **one bounded 30-day creator/promotion pilot** only where the client has approved access, content rights, venue visit times, expenses and tracking.

## Pilot scope after the map
A separate, custom-quoted Momentum pilot may coordinate local creator applications, manual approval, agreed visit windows, real-footage production and owner-approved promotional tests. Creator meals, talent compensation, media spend and usage rights are separate client-approved costs. Contract and pricing should reflect actual human capture/editing/recruitment workload. Never promise 20 videos, unlimited creators, bookings, new sales or incremental revenue.

## Evidence and stop rules
- Required funnel counters: outreach attempts (authorized), delivered, replies, qualified, proposal, accepted, **paid**, report delivered, review accepted; separately capture labor hours and out-of-pocket cost.
- Report conversion and realized contribution margin separately from attributed gross revenue. No fake dashboards or screenshots.
- Stop/reprice if the first map takes materially more than the quoted profitable service capacity, if required restaurant permissions are unavailable, or if no qualified interest appears after the bounded test. Do not scale automation before one verified paid delivery.

## Technical activation gates
- Public PR #63 requires successful typecheck, lint, production build, real browser preview at 320/390/768/1440, independently reviewed claims and owner approval of the $750 commercial terms.
- The existing `/apply` intake needs an actual accepted submission and receipt to an authorized handler; a working page alone does not establish sales.
- Backend: exact tenant auth, human approvals, creator rights, explicit paid-promotion authority, provider OAuth/permissions, and POS evidence verification must be independently tested before being advertised as live.
- No Bunna public-site, DNS, Supabase, creator-outreach, payment or ad changes from this sales-page PR.

## Rollback
Close PR #63; leave homepage/header/backend and all production settings unchanged. If an eventual public page is inaccurate, remove it from navigation/sitemap and revert the specific reviewed commit.
