# MACS Digital Media — Finish-Tonight PRD

**Date:** 2026-09-13  
**Mode:** BROWNFIELD  
**Production URL:** https://macsdigitalmedia.netlify.app/  
**Production baseline SHA:** `dc2fd95a9acf305610efd2abc2c8cd36194f917a`  
**Hosting:** Netlify  
**Status at PRD creation:** Production deploy ready; visual/runtime browser gauntlet still required.

---

## 1. PROJECT LOCK

**Product:** MACS Digital Media public website  
**Audience:** Owner-led businesses, non-technical founders, local/service businesses, organizations that need help making the digital side of the business work coherently.  
**Visitor trigger:** Website/content/follow-up/tools/vendors feel scattered, stalled, hard to manage, or need to support growth/launch.  
**Problem:** The current site leads with the category label “technology partner” rather than the visitor’s problem or desired outcome. The site also repeats ideas across sections and exposes more explanation than the visitor needs before deciding whether to start a conversation.  
**Desired outcome:** A visitor quickly understands what MACS helps fix, sees a clear place to start, trusts the evidence, and submits a qualified inquiry.  
**Offer architecture:** Reset / Momentum / Scale / Launch. These four buckets are protected.  
**Primary CTA:** Tell us what’s important.  
**Post-click result:** Visitor reaches a short, clear inquiry flow, submits successfully, and receives an unmistakable confirmation state.  
**Primary KPI:** Qualified inquiry completion.  
**Secondary evidence:** CTA click-through, form start, form completion, route engagement, mobile abandonment where analytics are available.  
**Protected assets:** Four-bucket architecture, father/son story, real founder photography, real case evidence, owner sovereignty/ownership language, existing working backend/form behavior unless a defect is proven.  
**Constraints:** No invented metrics, testimonials, customers, outcomes, URLs, response times, guarantees, integrations, or proof. Preserve rollback. Do not replace the stack for aesthetic reasons.  
**Definition of success:** The deployed site passes the two-second test, has one dominant conversion path, has no mobile overflow or broken controls, uses supported claims only, provides tactile/visible interaction feedback, and is independently verified at phone/tablet/desktop widths.

---

## 2. GOVERNING IDEA

**Make the digital side of the business easier to run.**

The page should behave like the promise: fewer decisions, fewer repeated explanations, clear starts, visible proof, calm interaction, and one obvious next move.

This is not visual minimalism for its own sake. It is operational clarity expressed through copy, composition and behavior.

---

## 3. HERO PRD

### Current problem

Current live headline:

> Your technology partner for the digital side of your vision.

It explains MACS through a category label, not through the visitor’s pain or useful outcome. It fails to establish immediate relevance strongly enough.

### Two-second contract

A new visitor should infer almost immediately:

1. MACS helps make the digital side of the business easier to run.
2. MACS can start with the thing creating pressure now.
3. The next step is to tell MACS what matters.

### Recommended headline territory

**Primary recommendation:**

> Make the digital side of your business easier to run.

**Recommended support:**

> One team for your website, content, systems and follow-up—starting with what needs attention now.

**Primary CTA:**

> Tell us what’s important ↗

**Credibility line:**

> Pacific Northwest · Father + son · Local partners

### Alternate headline territories for owner review

**Pain-forward:**
> Stop managing the digital side of your business in pieces.

**System-forward:**
> Your website, content and follow-up should work together.

**Sharper/stickier:**
> Less digital mess. More room to run your business.

### Hero visual

Keep the real Stacy + Stavarai founder photography. Mobile crop is independent from desktop and must preserve faces/focal points. Avoid replacing authentic founder imagery with decorative product mockups or generic technology visuals.

### Hero acceptance criteria

- No generic “technology partner” dependency for comprehension.
- One H1, one support line, one CTA, one credibility line.
- H1 readable without awkward 1-word orphan lines at 320, 375, 390 and 430 px.
- CTA visible/reachable without overlap.
- Founder crop is intentional on phone.
- No horizontal overflow.
- CTA press feedback begins immediately.
- Reduced motion does not reduce usability.

---

## 4. HOMEPAGE INFORMATION ARCHITECTURE

### Golden conversion slice

1. **Hero** — outcome/pain + CTA + founder proof.
2. **Four ways to start** — Reset / Momentum / Scale / Launch.
3. **Proof** — strongest verified work only.
4. **Relationship** — why staying with one accountable team matters.
5. **Father + son** — human differentiation.
6. **Built Here** — only compactly, if it increases trust instead of distracting from client outcomes.
7. **Final CTA** — one sentence: Tell us what’s important.

### Reduction rule

Every homepage element must answer at least one of:

- What is this?
- Why should I care?
- Why should I believe it?
- What should I do next?

If it answers none, remove it. If two sections perform the same job, combine them.

---

## 5. FOUR-BUCKET PRD

Protected architecture:

### Reset

**Label:** Reset  
**Public copy:** Keep minimal. Do not force a tagline if the adjacent proof explains the job.  
**Proof:** Real Reset case when available; otherwise a clearly non-production descriptive placeholder during implementation only.

### Momentum

**Line:** Stay visible. Turn attention into opportunity.  
**Proof:** Buffer Blaster where appropriate and evidence-backed.

### Scale

**Line:** The idea is working. Grow without complexity.  
**Proof:** Pare’ + Posta Studio, with exact evidence limits preserved.

### Launch

**Line:** Turn new ideas into branded campaigns.  
**Proof:** ASC3ND and other approved launch work.

### Component behavior

Do not show one set of four bucket rows and then another separate set of four proof boxes if the second set merely repeats the first. Prefer one coherent unit per bucket: name → one-line outcome → one proof/action.

### Mobile

Each bucket should read as a short vertical decision unit. Do not compress a desktop grid. Tap area should include the full actionable row/card where semantics permit, with clear focus and active states.

---

## 6. PROOF PRD

### Purpose

Reduce uncertainty through real evidence rather than technical explanation.

### Rules

- Never invent results.
- Prefer real screenshots, live links, before/after, documented outputs, verified quotes, or concrete shipped artifacts.
- Remove technical stack language from primary proof copy unless it materially helps the buyer understand value.
- If evidence is missing, record the missing proof internally; do not publish “proof placeholder” text as if it were customer-facing content.

### Homepage proof target

Show no more than the minimum set required to demonstrate that MACS has done real work across the relevant types of engagement.

---

## 7. RELATIONSHIP PRD

**Heading/body target:**

> We stay involved in the process.

> Extended arrangements help you grow.

The relationship section should not re-explain all four buckets. Its sole job is to communicate continuity and retained context.

Use a real working-session/client/founder image when available.

---

## 8. FATHER + SON PRD

**Label:** Father + son  
**Heading:** One watches what has to last. One stays close to what is changing.  
**Body:** Stacy brings simplicity to non-technical founders. Stavarai stays close to what’s changing.

Use real founder media. Keep this section short. Its job is human differentiation, not a full biography.

---

## 9. BUILT HERE PRD

### Purpose

Show that MACS builds and tests useful systems in real work before expecting clients to trust them.

### Homepage heading

> We build only what you need.

### Items

- Agent MAXX — provisional line: “Day-to-day digital.”
- Buffer Blaster — “Our system for keeping content moving.”
- Home Team Lab — “Where we test what earns a place in the stack.”

### Reduction gate

If Built Here distracts from client outcomes before the visitor reaches conversion, reduce it further or move detail to `/built-here`.

---

## 10. FINAL CTA PRD

Remove repeated partnership manifesto copy.

The final homepage action should be the sentence itself:

> Tell us what’s important ↗

No competing CTA language. No extra card wall.

---

## 11. PROGRAMS PAGE PRD

### Job

Help a visitor recognize the correct starting condition quickly.

### Hero

> One technology partner. Four ways to start.

Remove redundant explanatory framing.

### Content

Use the four protected buckets. Each section should have:

- bucket name;
- one-line outcome when needed;
- strongest appropriate proof;
- direct path to conversation.

### Mobile

Intentional vertical sequence, short copy, no squeezed multi-column layouts.

---

## 12. WORK PAGE / CASE STUDY PRD

### Job

Make evidence easy to scan and authorship easy to understand.

### Work index

Keep editorial/COLLINS-like pacing. Prefer visual project proof over explanatory copy.

### Case template

- Project name
- Bucket
- One-sentence lead
- Hero media
- Problem: max 2–3 sentences
- Work: max 2–3 sentences
- Change: max 2–3 sentences
- Verified evidence
- CTA: Tell us what’s important

### Rules

- No invented outcomes.
- No ambiguous authorship.
- Pare’ remains placeholder-driven until exact approved one-line product description/evidence exists.
- Work support “Documented results.” remains provisional until owner locks it.

---

## 13. STORY PAGE PRD

### Hero

**Father + son**  
**Two ways of looking at the same challenges.**  
**See what has to last. Stay close to what is changing.**

### Stacy

> MACS came from solving problems inside my own businesses—too many subscriptions, too many vendors and nobody responsible for the whole result.

> That became the rule: what we build should remain understandable and yours.

### Stavarai

> Stavarai stays close to content, commerce and how customers behave now. That perspective comes from running eCommerce, not just watching trends.

### MACS

> We use our technology and the best outside tools when they make sense. You stay because the relationship works—not because leaving is difficult.

Use real media and keep each chapter visually distinct but editorially related.

---

## 14. TEAM PAGE PRD

### Job

Show who is accountable and what each person actually does.

### Hero

> Meet the team

No generic success slogan.

### Team

- Stacy — Founder / Strategy — Long-term vision, strategy and client direction.
- Stavarai — Product / Commerce — Product, commerce and development.
- Ivette / Akash / Jeremy — do not invent roles or bios. Use explicit internal placeholders until facts are supplied.

Global spelling: **Stavarai**.

---

## 15. NOTES PRD

### Hero

> What we’re seeing, testing and learning.

Notes should support credibility through actual thinking, experiments and learning. Remove throat-clearing copy. Allow beta/coming-soon/pipeline material only when clearly labeled as such.

---

## 16. AGENT MAXX PRD

### Hero

> Your digital operator.

> MAXX prepares the work, keeps context and knows when to ask for approval.

### Simplified capability groups

- Automatic — Handles routine work.
- Approval — Stops when your decision matters.
- Off limits — Cannot spend, sign, delete or grant itself more authority.
- Ownership — Your data stays yours.

Keep technical details lower on the page or behind progressive disclosure.

---

## 17. APPLY / INQUIRY PRD

### Hero

> Tell us what’s important.

> What needs attention right now?

Nothing else is required above the form.

### Target form

- Name
- Email
- Phone — optional
- Organization
- Website — optional where appropriate
- Location
- What needs attention?
- What would you like to change in the next 90 days?
- Decision-maker/consent only where actually necessary

### Submit

> Send

### Confirmation

Must visibly confirm success and explain the next truthful step. Do not invent a response-time promise.

### Error behavior

Field-local errors, summary where useful, focus moves to first actionable error, failure message explains whether the submission was or was not sent.

---

## 18. GLOBAL NAVIGATION PRD

Primary public navigation remains concise:

- Programs
- Work
- Story
- Team
- Built Here
- Notes
- Tell us what’s important

Mobile navigation is a separate composition with large touch targets, no hover dependencies, visible current state, clean open/close behavior and focus restoration.

---

## 19. FOOTER PRD

Remove obsolete brand slogans and generic vendor language.

Direction:

- angled/diagonal navigation planes;
- strong editorial movement/up-arrow language;
- links: Programs / Work / Story / Team / Built Here / Notes;
- quiet utility layer: MACS Digital Media / Pacific Northwest / Privacy / Accessibility / © 2026 MACS Digital Media;
- social links only when real profile URLs exist.

Do not create a wall of equal boxes.

---

## 20. PRIVACY + ACCESSIBILITY PRD

Preserve full underlying routes and substantive content.

Preferred interaction from footer:

- polished editorial modal/overlay or full-screen sheet;
- direct URL remains functional;
- keyboard access;
- visible focus;
- Escape closes where appropriate;
- close control is obvious;
- scroll is contained correctly;
- deep linking remains possible.

Do not reduce legal/accessibility substance merely for visual simplicity.

---

## 21. LEGACY / EXPERIMENTAL ROUTE PRD

Audit these before release:

- `/small-business`
- `/website-rescue`
- `/insights`
- `/insights/[slug]`
- `/demos`
- `/design-lab`
- `/design-lab/*`
- `/founding-launch`

Classify each as:

**KEEP / REDIRECT / NOINDEX-INTERNAL / ARCHIVE / REMOVE**

Known desired change: `/small-business` should 301 to `/programs` after link/sitemap/SEO verification.

Do not delete other routes until purpose, inbound links and navigation references are checked.

---

## 22. MOBILE CONTRACT

Mobile is not compressed desktop.

### Required widths

320 / 360 / 375 / 390 / 414 / 430 / 768 / 1024 / 1440

### Must verify

- no unintended horizontal overflow;
- no clipped text or media;
- intentional content order;
- correct founder/image focal points;
- minimum practical touch targets around 44×44 CSS px;
- no hover-only essential interaction;
- header/nav usable one-handed where practical;
- forms usable with mobile keyboards;
- buttons not hidden by keyboard/safe-area;
- visible focus;
- text zoom/reflow;
- portrait plus important landscape cases;
- reduced-motion behavior;
- safe-area insets where needed.

### Mobile-only composition changes are allowed

Reorder, collapse, combine or defer secondary content when that reduces cognitive load without hiding trust-critical information.

---

## 23. MOTION + MICROINTERACTION CONTRACT

Framer Motion already exists in the project. Do not add another motion library merely for polish.

### Use CSS/native behavior for

- button/link press compression;
- hover/focus underline or color state;
- simple transitions;
- native smooth anchor movement when useful.

### Use Framer Motion only for

- meaningful state transitions;
- continuity/orientation;
- component entry/exit where CSS is insufficient;
- gestures/sheets if later justified.

### Press feedback

Begin on pointer/touch down. Target subtle compression around `scale(.97–.985)` with approximately 80–120 ms feedback. Do not create long button animations.

### Motion rules

- no scroll hijacking;
- no animation that delays reading/action;
- no animation on every section;
- transform/opacity preferred for performance;
- honor `prefers-reduced-motion`;
- movement must communicate hierarchy, state, continuity, causality or useful delight.

### Existing issue

The shared `Reveal` component currently wraps content but does not animate it. Decide deliberately whether to keep it inert/remove redundant wrappers or give it one restrained, globally coherent behavior. Do not add motion simply because the wrapper exists.

---

## 24. APPLE-POLISH INTERACTION PRD

The experience should feel:

**FAST / QUIET / DIRECT / TRUSTWORTHY / PHYSICAL / FOCUSED / PREMIUM / MOBILE-NATIVE**

Required interaction details:

- immediate pressed state;
- visible focus state;
- clear loading state;
- clear disabled state;
- success confirmation;
- truthful recoverable error state;
- controls do not shift unexpectedly;
- motion is interruptible where gesture-driven;
- spacing/typography remain coherent between states;
- primary action never competes with decorative movement.

---

## 25. CSS / DESIGN-SYSTEM DEBT PRD

The current project contains multiple global polish/editorial/mobile CSS layers. Do not rewrite them blindly.

### Audit first

Map which file owns:

- tokens;
- global typography;
- header/footer;
- homepage;
- mobile overrides;
- forms;
- motion/reduced motion;
- legacy compatibility.

Identify collisions, duplicate selectors and override chains. Consolidate only when rendered behavior has been preserved and tests prove no regression.

Goal: one clear owner per visual behavior.

---

## 26. ACCESSIBILITY PRD

Release blockers on the primary conversion path:

- inaccessible navigation;
- missing/weak focus;
- insufficient contrast;
- broken keyboard flow;
- unlabeled form controls;
- errors not associated/announced;
- content unusable under text zoom/reflow;
- essential hover-only interaction;
- motion with no reduced-motion alternative.

Use semantic links/buttons; never fake controls with clickable non-semantic containers.

---

## 27. PERFORMANCE PRD

Audit production, especially on phone:

- hero LCP/image behavior;
- font loading;
- total JS and hydration cost;
- Framer usage vs actual value;
- layout shift;
- duplicated CSS;
- third-party scripts;
- image dimensions/crops;
- unnecessary API/network work;
- animation compositing.

Do not add a dependency without documenting why native/CSS/custom code is insufficient.

---

## 28. SEO / SHARING PRD

Verify:

- page titles/descriptions reflect final positioning;
- canonical URLs;
- OpenGraph/social image;
- favicon;
- sitemap;
- robots behavior;
- redirects for retired routes;
- no experimental route unintentionally indexed;
- structured data reflects supported facts only.

The current metadata should be updated if “technology partner” is removed from primary positioning.

---

## 29. ANALYTICS PRD

Where analytics are actually configured, verify runtime events for:

- homepage view;
- primary CTA click;
- inquiry form start;
- inquiry success;
- inquiry failure where useful;
- key proof/work clicks where commercially useful.

Do not call analytics working because a script exists. Require event evidence.

---

## 30. TEST + GAUNTLET PRD

Extend/reuse existing Playwright tests rather than creating a duplicate QA stack.

### Review council

1. Conversion prosecutor
2. Krug clarity reviewer
3. Creative director
4. Slop/taste hunter
5. Mobile director
6. Accessibility reviewer
7. Truth/evidence auditor
8. Production engineer
9. Security/privacy reviewer
10. Sovereignty/rollback reviewer

### Severity

- P0 — cannot ship
- P1 — cannot ship
- P2 — polish; fix when reasonable before release

### Required release gates

- Two-second test: PASS
- Single primary conversion: PASS
- Primary CTA: functional
- Confirmation state: functional
- Unsupported public claims: 0
- P0: 0
- P1: 0
- Broken controls: 0
- Broken public routes: 0
- Mobile overflow: 0
- Critical accessibility failures: 0
- Production/mobile rendered evidence: PASS
- Rollback: documented

Target scores:

- Overall ≥ 8.5
- Clarity/usability ≥ 8.5
- Visual design ≥ 8.5
- Originality ≥ 8.5
- Accessibility ≥ 8.5
- Mobile ≥ 8.5
- Product proof ≥ 8.5
- Conversion path ≥ 9.0

---

## 31. IMPLEMENTATION SLICES

### NOW — Slice 1: Truth + hero + shortest homepage path

- lock hero copy;
- remove duplicate explanation;
- reduce four-bucket architecture;
- keep real founder media;
- preserve working CTA route;
- update matching tests.

### NEXT — Slice 2: Mobile composition + interaction

- phone-specific content order;
- header/nav;
- touch targets;
- press feedback;
- form ergonomics;
- overflow/crop repair;
- reduced motion.

### NEXT — Slice 3: Proof + supporting pages

- Programs;
- Work/cases;
- Story;
- Team;
- Built Here;
- Notes;
- Agent MAXX.

### NEXT — Slice 4: Conversion endpoint

- Apply reduction;
- success/error states;
- analytics evidence if available.

### LATER TONIGHT — Slice 5: Footer/legal/legacy routes

- diagonal footer direction;
- privacy/accessibility overlay behavior;
- legacy route classification/redirects;
- SEO/sitemap cleanup.

### FINAL — Slice 6: Independent browser gauntlet

- rendered screenshots;
- width matrix;
- functional clicks/forms;
- accessibility;
- performance;
- repairs;
- rerun;
- deploy exact tested SHA;
- production smoke test.

---

## 32. DEFINITION OF DONE

The site is not “done” because the build passes.

It is done only when:

- final hero passes owner approval and two-second test;
- four buckets remain clear and do not duplicate content;
- mobile was intentionally composed and verified;
- every primary control provides immediate state feedback;
- inquiry path is short, functional and visibly confirms success;
- public claims are supported;
- P0/P1 findings are repaired;
- responsive Playwright/browser tests pass;
- production deploy points to the exact tested SHA;
- public production URL is smoke-tested after deploy;
- rollback SHA is recorded.

Final status language must be one of:

**NOT READY / READY FOR PREVIEW / PREVIEW VERIFIED / PRODUCTION VERIFIED**
