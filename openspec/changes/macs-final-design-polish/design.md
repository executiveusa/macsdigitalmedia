# MACS final design polish design

## Design direction

Human, infrastructural, calm, and premium. The work should feel deliberate rather than decorative. Familiar patterns and visible navigation take priority over novelty.

## Layout

- Preserve the current route map and section order.
- Keep the primary CTA visually dominant at every breakpoint.
- Use fluid typography and spacing with explicit min/max limits.
- Keep desktop navigation visible until 940px; use a conventional overlay menu below that point.
- Stack actions on narrow screens and preserve 44px minimum targets.

## Hero

- Keep the approved office WebM as the normal-motion background.
- Place a branded office poster below the video at all times.
- Fade video in only when playable.
- Show the poster when motion is reduced or video playback fails.
- Keep the pause/play control visible only when video playback is applicable.
- Use a mobile focal position near 40% horizontal.

## Color and theme

- Preserve MACS Blue, Silver, Coral, Warm White, and Basalt.
- Introduce semantic light/dark tokens without neon, glow, or generic glass effects.
- Default to system preference and persist explicit choices.
- Keep the hero and dark editorial sections Basalt in both themes.

## Localization

- English and Mexican Spanish use one source-of-truth dictionary.
- Translate full journeys: navigation, content, forms, errors, status text, legal pages, metadata, and accessibility labels.
- Preserve approved brand and product names where translation would reduce clarity.
- Persist language in a same-site cookie and refresh server-rendered content.

## Motion

- Use Framer Motion only for route transitions, restrained section reveals, mobile-menu state, and form feedback.
- Use CSS for button hover/press, card lift, nav underline, and theme transitions.
- Animate opacity and transforms only.
- Disable nonessential motion for reduced-motion users.
- No scroll hijacking, forced intro, particles, tilt, or decorative looping.

## Accessibility

- Preserve semantic headings, skip link, keyboard navigation, and visible focus.
- Restore focus to the menu trigger after Escape.
- Use inline field errors with `aria-invalid`, `aria-describedby`, live status text, and first-error focus.
- Keep all critical content and actions usable without video or animation.

## Responsive targets

360, 390, 430, 680, 760, 940, 1024, 1280, 1440, and 1920 pixels.
