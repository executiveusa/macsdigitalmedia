# MACS final design polish proposal

## Problem

The live browser audit found that the hero video is removed for visitors who prefer reduced motion and has no branded static fallback. The site also lacks Mexican Spanish and theme controls, relies on native-only form errors, and has no coherent motion system.

## Outcome

Deliver a clearer, bilingual, theme-aware, mobile-first MACS public website with restrained Framer Motion interactions, a reliable hero fallback, accessible form feedback, and preserved conversion and backend behavior.

## In scope

- Hero poster, loading, error, playback, and reduced-motion states
- English and Mexican Spanish interface copy across all public routes
- System, light, and dark theme preferences
- Responsive navigation and mobile composition
- Button, menu, route, form, and section microinteractions
- Copy refinement that improves the five-second product explanation
- Inline accessible application-form errors
- Browser tests and visual evidence across key breakpoints

## Out of scope

- Agent control-plane changes
- Supabase schema or intake API redesign
- Fake testimonials, metrics, partnerships, awards, or scarcity
- Scroll hijacking, forced intros, particles, custom cursors, or heavy parallax
- Production merge or deployment without explicit approval

## Protected behavior

- Existing routes and working links
- Founding application payload and server validation
- Client-owned and approval-first positioning
- Published cohort pricing and payment milestones
- Privacy, accessibility, and security commitments
- Approved logo geometry and brand palette

## File allowlist

Public application pages, shared navigation/footer, hero media, preference and motion components, copy dictionaries, final polish CSS, browser tests, and this change package.

## Rollback

Base commit: `cefeb3dd0ccdcd3adfcfe7d74b8612843b5fbf3c`.

Revert the final squash merge or reset the feature branch to the base commit. Database objects and application records are not modified by this change.

## Evidence

- Read-only browser audit supplied by the user
- Source video successfully returned HTTP 206 and decoded
- Review identified the missing reduced-motion fallback as the root hero defect
- Automated screenshots and functional tests are required before merge
