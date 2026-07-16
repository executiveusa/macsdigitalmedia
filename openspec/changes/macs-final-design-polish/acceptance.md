# MACS final design polish acceptance

## Hero

- The office video element and approved source remain present.
- A branded poster is visible before playback, after failure, and for reduced-motion users.
- Reduced-motion mode does not show an empty dark rectangle.
- Playback control is at least 44px and uses localized accessible labels.

## Steve Krug gates

- A first-time visitor can identify MACS, the audience, the client-owned outcome, and the primary action within five seconds.
- One primary action is visually dominant on every tested viewport.
- Navigation labels are visible on desktop and conventional on mobile.
- Page names match the routes users selected.
- Every page provides a predictable path home and access to the founding application.
- Forms explain what happens next and make errors visible beside the relevant control.

## Localization and themes

- English and Mexican Spanish journeys contain no mixed-language interface fragments.
- The document language updates to `en` or `es-MX`.
- Language choice persists during route navigation and refresh.
- System, light, and dark modes persist and have no unreadable surface combinations.
- Theme controls have accessible names and visible focus.

## Motion and accessibility

- Route, section, menu, button, and form transitions remain restrained.
- Reduced-motion preference removes nonessential movement without removing content or identity.
- Menu closes with Escape and returns focus to the trigger.
- Form controls use persistent inline errors, `aria-invalid`, `aria-describedby`, and a live summary.
- Focus rings remain visible and tap targets remain at least 44px.

## Responsive evidence

No horizontal overflow at 360, 390, 430, 768, 1024, 1280, 1440, or 1920 pixels. Screenshots are produced for representative desktop, mobile, reduced-motion, light-theme, dark-theme, Spanish, and form-error states.

## Technical verification

- ESLint passes.
- TypeScript passes.
- Next.js production build passes.
- Playwright Chromium tests pass.
- Vercel preview reaches Ready.
- No unresolved P0/P1 review findings remain.
- Production merge requires explicit human approval.
