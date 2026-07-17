# MACS Digital Media — Full Release-Gate Audit

**Audit date:** 2026-07-16  
**Repository:** `executiveusa/macsdigitalmedia`  
**Audited base:** `main` at `91ef2654b163018e79407cde8d04789874293b46`  
**Audit branch:** `audit/macs-2026-07-16-release-gate`  
**Current release:** `v0.3.0`  
**Primary task:** Apply for a Washington Founding Spot  
**Secondary task:** See the System Work

## 1. Release decision

**Decision: HOLD production cutover.**

The current Next.js source is materially stronger than the prior site and has a successful Vercel commit check. The source-level design score is **8.6/10**. The verified release score is capped at **8.1/10** because this audit could not inspect the post-merge Vercel deployment in a browser, the custom domain still serves the legacy WordPress site, the application backend has not been production-verified, and the supplied consolidated secrets vault must be treated as exposed.

A high average does not override a failed hard floor. The release is blocked by two P0 findings and three P1 findings.

## 2. What was inspected

### Repository and delivery evidence

- Current repository metadata and permissions
- Recent commits and merged pull request #7
- Vercel commit status for the current `main` head
- Pull request description, release claims, and available review output
- Project status and deployment documentation
- Next.js, React, TypeScript, Playwright, Supabase, and Vercel configuration
- Homepage, global layout, header, footer, hero media, preferences, motion, form, application API, and server-side Supabase client
- Responsive, reduced-motion, localization, theme, form-validation, overflow, and health-check tests
- Approved PRD, Krug gates, design constitution, and anti-slop rules
- Current public custom domain behavior
- Supplied consolidated environment vault, inspected only for security posture; no value was copied into the repository

### Evidence limitations

- The Vercel connector returned HTTP 403 for the project team scope.
- The post-merge preview could not be rendered or screenshot-tested in this session.
- A local dependency install and browser run were not available in the current execution environment.
- The application endpoint was not submitted because no isolated production-safe MACS environment was verified.

These limitations prevent a fully verified 8.5+ release score even though the source is strong.

## 3. Executive findings

### What is working well

1. **The value proposition is clear.** The hero positively defines a client-owned AI operating system, identifies the Washington audience, and presents one dominant application action.
2. **The information architecture is conventional.** The navigation labels are plain, routes are predictable, the home link is obvious, and the primary CTA is consistently visible.
3. **The site follows the Krug trunk test.** Brand, page purpose, current section, primary action, and return path are represented in the source.
4. **Accessibility is designed into the interface.** The site includes a skip link, semantic headings, visible focus behavior, mobile focus containment, reduced-motion behavior, labeled controls, inline errors, first-error focus, and live status messages.
5. **English and Mexican Spanish are implemented as complete interface states.** Locale affects navigation, page copy, metadata, forms, errors, legal content, and accessibility labels.
6. **Theme handling is complete at source level.** System, light, and dark preferences are persisted and reflected through semantic tokens.
7. **Motion is restrained.** The code avoids scroll hijacking, forced intros, particles, custom cursors, and motion that hides tasks.
8. **The application API has a sound baseline.** It validates input, uses a honeypot, hashes a request fingerprint, applies a recent-submission limit, prevents caching, and returns safe errors.
9. **The public site avoids fake proof.** No fake dashboards, metrics, customer logos, testimonials, or artificial scarcity were found in the new application source.
10. **Responsive intent is explicit.** Playwright includes overflow checks and screenshots across 360, 430, 768, 1024, 1440, and 1920 widths.

### What blocks release

1. **The supplied secrets vault contains numerous apparent live credentials and private keys.** Treat every contained credential as exposed. Rotate or revoke them before using any related production system.
2. **The custom production domain still serves the legacy WordPress site.** The new application declares `www.macsdigitalmedia.com` as its canonical origin, but visitors are not yet receiving the new release there.
3. **The hero video still depends on the legacy WordPress media URL.** The local poster prevents an empty hero, but the approved local-media gate is not satisfied and the remote host remains a single failure surface.
4. **The application backend is not production-verified.** The source requires an isolated Supabase URL, service-role key, database schema, and hash secret. A production health check and synthetic submission remain necessary.
5. **Fresh post-merge browser evidence is missing.** Desktop, mobile, themes, locale switching, keyboard paths, console, network, accessibility, and form states have not been verified against the exact production candidate.

## 4. Severity register

### P0 — prohibited from release

#### P0-01 — Consolidated secrets exposure

**Evidence:** A supplied environment file contains many apparent API tokens, access tokens, service-role credentials, bot tokens, and private-key material for unrelated systems.

**Impact:** Unauthorized access, billing abuse, data exposure, repository compromise, deployment compromise, or infrastructure takeover may be possible if any credential is still active.

**Required action:**

- Revoke or rotate every non-placeholder credential in the supplied file.
- Rotate high-impact credentials first: source control, deployment, database/service-role, cloud infrastructure, SSH/private keys, payment, communications, and AI providers.
- Review provider audit logs for suspicious access.
- Replace the unified vault with per-project and per-environment secrets.
- Apply least privilege and expiration where supported.
- Never commit or paste replacement values into repository files, issues, pull requests, or chat transcripts.

**Release gate:** blocked until rotation is confirmed.

#### P0-02 — Production domain does not serve the audited application

**Evidence:** The repository metadata, structured data, robots, and sitemap target `www.macsdigitalmedia.com`, while the public custom domain still presents the legacy WordPress experience.

**Impact:** Users, search engines, social previews, and form traffic do not reach the release being audited. The production state and repository state are inconsistent.

**Required action:**

- Verify the intended Vercel production deployment.
- Confirm all required environment variables on that project.
- Prepare DNS records and rollback instructions.
- Point the custom domain to Vercel.
- Verify apex/`www` canonical redirects, TLS, robots, sitemap, metadata, and every public route.
- Keep the WordPress installation available only as a controlled rollback target until acceptance completes.

**Release gate:** blocked until the custom domain serves the verified build.

### P1 — must be fixed or explicitly accepted before release

#### P1-01 — Hero media remains externally coupled

**Evidence:** `components/hero-video.tsx` and the Playwright test both reference the legacy WordPress WebM URL. The approved PRD required a local file under `public/media` and an optimized WebP poster.

**Impact:** The most important visual can fail because of WordPress availability, cross-origin behavior, URL changes, cache policy, or domain cutover.

**Required action:**

- Copy the approved WebM into `public/media`.
- Extract and art-direct a stable frame as an optimized WebP poster.
- Change the component to same-origin media paths.
- Update the test to fail when the hero source is external.
- Verify normal playback, loading, error fallback, reduced motion, mobile crop, and the visible pause/play control.

#### P1-02 — Production application intake is not verified

**Evidence:** The API requires `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, and `APPLICATION_HASH_SECRET`; the supplied vault is mixed across projects and is unsafe to use as-is.

**Impact:** A user may complete the form but receive a 503/500 response, or data may be sent to the wrong project.

**Required action:**

- Create or confirm an isolated MACS Supabase project and schema.
- Create new project-scoped credentials after the vault rotation.
- Configure server-only Vercel environment variables.
- Verify `/api/health/supabase` without exposing configuration details.
- Submit one clearly synthetic application.
- Confirm one database row, expected fields, timestamp, and no secrets in logs or responses.
- Delete the synthetic row after evidence capture if policy requires it.

#### P1-03 — Post-merge browser verification unavailable

**Evidence:** The project team scope returned HTTP 403 through the available Vercel connector.

**Impact:** The exact deployed artifact has not been verified for browser behavior, regressions, screenshots, or runtime errors.

**Required action:**

- Reauthorize the Vercel connector for the project team or produce an accessible preview.
- Run the full Playwright suite against the production candidate.
- Capture the required screenshot manifest.
- Inspect console and network output.
- Perform keyboard-only, reduced-motion, zoom, contrast, and screen-reader smoke checks.

### P2 — important correction

#### P2-01 — Status documentation was stale

The prior status file still described MS00, disabled submission, and absent deployment access. This branch updates it to the MS03/PR7 state and current blockers.

#### P2-02 — Tests institutionalize the remote media dependency

The hero test currently verifies the WordPress URL instead of asserting same-origin delivery. Correct this when the media binary is added.

#### P2-03 — Poster format does not match the approved delivery plan

The current poster is an SVG. It provides a reliable fallback, but the approved plan specified a real optimized WebP frame from the supplied video.

#### P2-04 — Baseline global security headers were absent

The prior Next.js and Vercel configuration did not set HSTS, MIME sniffing protection, frame protection, referrer policy, or a restrictive permissions policy. This branch adds those baseline headers. A tested Content Security Policy remains a separate task because the current remote hero and Next.js runtime require a deliberate origin and script inventory.

#### P2-05 — Independent CI evidence is incomplete

The Vercel commit check is successful, but the current commit status does not independently expose lint, typecheck, and Playwright results. Add a dedicated GitHub Actions quality workflow or surface equivalent required checks before production cutover.

## 5. Twenty-axis design audit

| Axis | Score | Evidence and decision |
|---|---:|---|
| 1. Task clarity | 9.2 | Product, audience, ownership model, and primary action are clear in one scan. |
| 2. Information architecture | 8.8 | Route model is small and understandable; live route verification is still required. |
| 3. Navigation | 9.0 | Conventional labels, home path, active route, desktop visibility, and accessible mobile behavior. |
| 4. Visual hierarchy | 8.8 | Strong hero and section structure; final score depends on live media and viewport evidence. |
| 5. Scanability | 8.7 | Descriptive headings, concise intros, ordered workflows, and restrained section structure. |
| 6. Copy clarity | 9.0 | Specific operational outcomes and plain verbs; avoids generic AI marketing language. |
| 7. Affordance and clickability | 8.9 | Links, buttons, toggles, active states, focus states, and pressed feedback are explicit in source. |
| 8. Forms and validation | 8.8 | Strong inline validation and accessible relationships; successful production submission is unverified. |
| 9. State completeness | 8.7 | Loading, failure, reduced-motion, validation, submitting, success, and error states exist in source. |
| 10. Mobile responsiveness | 8.3 | Responsive CSS and tests exist, but fresh post-merge mobile screenshots are unavailable. |
| 11. Keyboard access | 9.0 | Skip link, focus restoration, focus containment, Escape handling, labels, and first-error focus. |
| 12. Screen-reader semantics | 8.7 | Semantic landmarks, headings, labels, ARIA status, and descriptions are present; live AT smoke test remains. |
| 13. Color and contrast | 8.6 | Semantic light/dark tokens and focus colors are deliberate; instrumented contrast evidence is missing. |
| 14. Motion and reduced motion | 8.8 | Reduced-motion fallback and restrained transitions are implemented; exact deployment needs verification. |
| 15. Performance | 7.5 | The remote hero video is the largest avoidable delivery risk. |
| 16. Design-system consistency | 8.7 | Semantic tokens and shared interaction patterns are coherent; legacy CSS layers should be consolidated later. |
| 17. Brand specificity | 8.8 | PNW trust, human-centered media, MACS palette, client ownership, and Agent MAXX are specific to the product. |
| 18. Content honesty | 9.0 | New app avoids fake proof; production-domain mismatch prevents the required 10.0 hard floor. |
| 19. Visual taste | 8.4 | Strong restraint overall; card lifts and button shine should be visually reviewed for anti-slop fit. |
| 20. Completion and polish | 7.2 | Domain, secrets, media localization, backend verification, and fresh evidence remain open. |

**Static/source average:** 8.6/10  
**Verified release score:** 8.1/10 due to evidence and deployment caps

### Hard-floor results

| Hard floor | Required | Current | Result |
|---|---:|---:|---|
| Overall verified average | 8.5 | 8.1 | Fail |
| Task clarity | 9.0 | 9.2 | Pass |
| Navigation | 9.0 | 9.0 | Pass at source level |
| Affordance and clickability | 9.0 | 8.9 | Fail pending browser proof |
| Mobile responsiveness | 8.5 | 8.3 | Fail pending browser proof |
| Keyboard access | 9.0 | 9.0 | Pass at source level |
| Screen-reader semantics | 8.5 | 8.7 | Pass at source level |
| Color and contrast | 9.0 | 8.6 | Fail pending measured proof |
| Content honesty | 10.0 | 9.0 | Fail because production state is inconsistent |
| Visual taste | 8.5 | 8.4 | Fail pending screenshot review |
| Completion and polish | 8.5 | 7.2 | Fail |

## 6. Krug usability review

| Law | Result | Finding |
|---|---|---|
| Do not make users think | Pass | The new hero names the system, audience, and ownership benefit directly. |
| Explain the whole site from the homepage | Pass at source level | The homepage covers the product, workflow, launch, offer, trust model, and next action. |
| Use obvious hierarchy | Conditional pass | Structure is strong; the live hero and responsive hierarchy still require evidence. |
| Make clickable things obvious | Conditional pass | Source states are complete; browser verification is missing. |
| Support scanning | Pass | Headings, short sections, lists, and ordered steps support scanning. |
| Keep the next action obvious | Pass | The founding application remains dominant across routes. |
| Keep forms clear | Conditional pass | Validation is strong; successful production intake is unverified. |
| Make mobile effortless | Not verified | Source and automated intent exist; fresh deployed evidence is missing. |
| Put trust near decisions | Pass | Client ownership, human approval, privacy, scope, payment milestones, and next-step expectations are close to conversion points. |
| Pass the trunk test | Pass at source level | Site identity, page identity, navigation, current location, and home path are represented. |

## 7. Security and privacy audit

### Passes

- Service-role access remains server-only in source.
- API responses use `Cache-Control: no-store`.
- Application payload validation is duplicated server-side.
- Honeypot behavior avoids confirming bot detection.
- Request fingerprints are HMAC-hashed rather than stored as raw IP addresses.
- User-agent storage is bounded.
- Database errors are logged without intentionally returning internal details.
- The repository `.env.example` contains names and guidance, not live values.

### Open security work

- Rotate the exposed consolidated vault.
- Verify no historical Git commits contain secrets with GitHub secret scanning and provider-side searches.
- Add a dedicated dependency/security workflow.
- Add CSP in report-only mode after the hero becomes same-origin and required Vercel/Next origins are inventoried.
- Confirm production logs do not include form payloads or secrets.
- Confirm database row-level and operator access policies for staff reviewing applications.
- Define retention and deletion rules for rejected applications.

## 8. Performance and resilience audit

### Current strengths

- The hero has a static fallback and avoids an empty reduced-motion state.
- Video preload is limited to metadata and disabled under reduced motion.
- Next.js image handling is used for the logo.
- Page content remains available without motion.
- The form clearly distinguishes confirmed receipt from failure.

### Current risks

- Remote WordPress media is a single point of failure.
- The hero poster is not the planned optimized video frame.
- Multiple legacy CSS layers increase long-term regression risk.
- No current production Web Vitals, bundle analysis, or Lighthouse evidence is attached to the release.

### Required evidence

- LCP, CLS, INP, and transfer size at mobile and desktop.
- Video start and fallback timing on a throttled connection.
- No horizontal overflow from 360px through 1920px.
- No console errors, failed first-party requests, or hydration warnings.
- Correct cache headers for immutable public media.

## 9. Browser verification manifest

Capture from the exact production candidate:

- `desktop-1440-full.png`
- `desktop-1440-hero.png`
- `desktop-1440-nav.png`
- `desktop-1440-primary-action.png`
- `desktop-1440-footer.png`
- `tablet-768-full.png`
- `mobile-390-full.png`
- `mobile-390-nav.png`
- `mobile-390-primary-action.png`
- `form-empty.png`
- `form-error-en.png`
- `form-error-es-MX.png`
- `form-submitting.png`
- `form-success-synthetic.png`
- `theme-system.png`
- `theme-light.png`
- `theme-dark.png`
- `reduced-motion.png`
- `hero-network-failure.png`
- `accessibility-focus-path.png`

Also record:

- Every route and anchor result
- Keyboard path and focus order
- Escape and focus restoration for mobile navigation
- Locale persistence after refresh and direct navigation
- Theme persistence after refresh and direct navigation
- Console output
- Failed network requests
- Accessibility scanner output
- Production response headers
- Supabase health response
- Synthetic submission evidence

## 10. Remediation sequence

### Gate A — Contain security risk

1. Rotate the supplied credentials.
2. Review provider logs.
3. Create isolated project-scoped MACS secrets.
4. Confirm repository and Git history are clean.

### Gate B — Remove external hero dependency

1. Add the WebM and WebP poster to `public/media`.
2. Update component and tests.
3. Verify loading, error, reduced-motion, and mobile behavior.

### Gate C — Verify application intake

1. Configure isolated Supabase environment variables.
2. Apply and verify schema.
3. Run health check.
4. Submit and verify one synthetic application.

### Gate D — Verify the deployment

1. Restore Vercel project-team access.
2. Run lint, typecheck, build, Playwright, accessibility, console, network, and screenshot checks.
3. Confirm the baseline headers added by this branch.
4. Add and test CSP report-only policy.

### Gate E — Cut over the domain

1. Record current DNS and rollback values.
2. Assign apex and `www` to Vercel.
3. Verify TLS, redirects, canonical origin, metadata, sitemap, robots, routes, forms, and analytics/privacy behavior.
4. Monitor errors and application intake.
5. Keep rollback available until acceptance is signed.

## 11. Changes made by this audit branch

- Added this full audit report.
- Updated `STATUS.md` to reflect the merged MS03 release and real release blockers.
- Added baseline global response headers in `next.config.ts`:
  - Strict Transport Security
  - MIME sniffing protection
  - Frame denial
  - Strict-origin referrer policy
  - Camera, microphone, geolocation, and browsing-topics restrictions

No brand geometry, product copy, navigation model, pricing, form contract, database schema, secrets, or MAXX repository code was changed.

## 12. Definition of ready

The production release may proceed only when:

- All exposed credentials are rotated or revoked.
- The hero media is same-origin.
- The isolated application backend passes health and synthetic submission tests.
- Lint, typecheck, production build, and Playwright pass on the release commit.
- Required browser screenshots and accessibility evidence exist.
- No P0 or P1 findings remain.
- Hard-floor scores meet or exceed the design constitution.
- The custom domain serves the verified Next.js release.
- Rollback is documented and tested.
