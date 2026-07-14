# Steve Krug Usability Gates

These rules are mandatory for every page, component, form, animation, and interaction in MACS Digital Media.

## Core standard

Every important screen must be understandable at a glance. A visitor should immediately know:

- What this page is
- What MACS does
- Who the offer is for
- What the main action is
- What happens after that action
- Where they are in the site

If a concept cannot be self-evident, it must be made self-explanatory with the smallest useful amount of guidance.

## Navigation

- Use familiar navigation conventions.
- Keep the logo linked to Home.
- Keep primary navigation in a predictable location.
- Use plain-language labels; no clever names for ordinary destinations.
- Make the current section clear.
- Preserve an obvious route back or out of every flow.
- Do not hide essential navigation behind decorative interactions on desktop.

## Clickability and controls

- Buttons, links, tabs, and controls must look interactive without requiring hover.
- Do not style non-interactive text like a link or button.
- Use one dominant visual treatment for the primary action.
- Labels must describe the destination or result, not vague actions such as “Learn more” when a clearer label is available.
- Every control needs visible focus, keyboard access, and a sufficiently large touch target.

## Page hierarchy

- The most important item must be the most visually prominent.
- Related content must be visually grouped.
- Nested content must visually show what belongs to what.
- Sections must have clear boundaries and predictable spacing.
- Heading levels must be visibly distinct and semantically correct.
- Headings must sit closer to the content they introduce than to the section above.

## Writing and scanning

- Assume visitors scan before they read.
- Use descriptive headings that form a useful outline of the page.
- Keep paragraphs short.
- Remove introductory filler, generic welcome copy, repetition, and vendor jargon.
- Highlight only the most important terms.
- Use lists only when they make comparison or scanning easier.
- Prefer concrete outcomes and plain language over technical explanations.

## Choice architecture

- Make each decision clear and low-risk.
- Do not present unnecessary choices at the same time.
- Split complicated forms into meaningful stages when that reduces cognitive load.
- Provide help only where needed, when needed, and next to the relevant decision.
- Show progress and preserve entered information.
- Error messages must explain the problem and the correction in plain language.

## Visual noise

- Every decorative element must justify its presence.
- Do not make multiple sections compete for attention.
- Avoid autoplay carousels, unsolicited popups, decorative dashboards, fake data, and excessive badges.
- Motion must communicate sequence, state, hierarchy, or cause and effect.
- The page must remain fully understandable when animation is disabled.
- Creativity may alter presentation, but never navigation clarity or task completion.

## Homepage trunk test

Without scrolling far, a first-time visitor must be able to identify:

1. Site identity: MACS Digital Media
2. Category: managed AI operating systems
3. Primary audience: Washington nonprofit and social-purpose organizations
4. Primary outcome: less administrative friction and missed follow-up
5. Primary action: Apply for a Washington Founding Spot
6. Secondary action: See the System Work
7. Trust basis: human-managed, approval-first, client-owned deployment

## Mobile rules

- Design the primary path for narrow screens first.
- Place the main action within easy reach without covering content.
- Do not depend on hover, tiny text, horizontal scrolling, or precision tapping.
- Preserve clear hierarchy after content stacks vertically.
- Avoid full-screen introductions that delay access to the page.

## Accessibility floor

- Semantic HTML is required.
- Keyboard navigation and visible focus are required.
- Color cannot be the only indicator of state.
- Text and controls must meet contrast requirements.
- Reduced-motion preferences must be honored.
- Form labels, errors, status updates, and media alternatives must be programmatically available.

## Design review gate

A build cannot pass review while any answer below is “no”:

- Can a new visitor explain the page purpose after five seconds?
- Is the primary action obvious without reading every paragraph?
- Are all interactive elements visibly interactive?
- Can the main task be completed using only a keyboard?
- Does the mobile version preserve the same meaning and priority?
- Does every animation add understanding rather than distraction?
- Can all claims be supported?
- Is any section present mainly because it looks fashionable?
- Can any copy or component be removed without losing meaning?

Clarity overrides novelty and minor visual consistency. No visual award, animation, or brand flourish may weaken comprehension, accessibility, trust, or task completion.
