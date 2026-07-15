# Pauli Design Guardrails

These rules adapt the Pauli Uncodixfy and Pauli Taste design systems to the MACS Digital Media website.

## Source order

When sources conflict, use this order:

1. Current user instruction
2. Accessibility, privacy, security, and legal requirements
3. Steve Krug usability gates
4. Approved MACS brand assets and tokens
5. Existing working product conventions
6. Uncodixfy anti-slop rules
7. Taste enhancements
8. Trends or agent preference

## MACS design dials

- Design variance: 5/10
- Motion intensity: 3/10
- Visual density: 4/10

The corporate website must feel human, documentary, trustworthy, and infrastructural. The separate MAXX product experience may become more cinematic after the public conversion path is stable.

## Required behaviors

- One dominant action per page.
- One primary workflow per screen.
- Familiar navigation and visible current location.
- Clear page purpose within five seconds.
- Labels describe the result of the action.
- Mobile reading order matches task priority.
- Keyboard access and visible focus are mandatory.
- Loading, empty, error, disabled, success, and degraded states must be designed with the main state.
- Motion must explain state, sequence, hierarchy, or cause and effect.
- Real brand assets and honest content override generic placeholders.

## Blocked defaults

Do not use these as automatic design choices:

- Purple-blue AI gradients
- Neon glows
- Glass panels as the default surface
- Floating detached card shells
- Oversized rounded corners across every component
- Pills for ordinary buttons, tabs, labels, and statuses
- Three equal feature cards as the first layout choice
- Fake metrics, charts, testimonials, customers, live states, awards, or scarcity
- Dashboard hero sections with decorative copy
- Eyebrow labels above every heading
- Decorative status dots and badges
- Custom cursors
- Animation on every element
- Generic startup language
- Cards nested inside cards

A blocked pattern may be used only when the product reason, mobile behavior, reduced-motion fallback, accessibility effect, and performance budget are documented.

## Brand rules

- Preserve the supplied logo geometry and colors.
- Use MACS Blue, Structural Silver, Signal Coral, Warm White, and Basalt Black as the primary palette.
- Do not recolor, redraw, bevel, glow, or separate the logo without approval.
- Use one coherent neutral family.
- Do not invent a replacement brand because the existing asset is inconvenient.

## Component rules

- Buttons: solid or simple outline; 8–10px radius.
- Cards: use only when the boundary communicates ownership, selection, elevation, or an independent record.
- Forms: label above field; help and error below; entered data preserved after recoverable failure.
- Tables: left aligned, restrained borders, readable mobile transformation.
- Navigation: predictable location; no essential desktop navigation hidden behind decorative interactions.
- Icons: one family and one stroke weight when icons are needed.
- Motion: transform and opacity only for ordinary transitions.

## Release gate

A user-facing PR cannot merge while any answer is no:

- Can a new visitor identify the page, audience, and primary action within five seconds?
- Are all controls visibly interactive without hover?
- Can the primary task be completed with a keyboard?
- Does the mobile layout preserve meaning and priority?
- Are all claims supportable?
- Are loading, error, empty, and success states complete?
- Does every animation add understanding?
- Is every decorative element justified?
- Does the implementation use the approved MACS brand rather than a generic AI aesthetic?
