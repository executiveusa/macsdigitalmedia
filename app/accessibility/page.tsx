import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "MACS Digital Media accessibility standards and feedback process.",
};

export default function AccessibilityPage() {
  return (
    <article className="content-page">
      <header className="content-page__hero">
        <div className="shell">
          <p className="eyebrow eyebrow--dark">Accessibility</p>
          <h1>Core information and actions should work without special equipment or perfect conditions.</h1>
          <p className="content-page__lede">
            MACS treats accessibility as a product requirement rather than a final compliance repair.
          </p>
        </div>
      </header>

      <div className="shell content-page__body legal-copy">
        <h2>Current standard</h2>
        <p>
          The site is designed around semantic HTML, keyboard navigation, visible focus, readable contrast, responsive layouts, reduced-motion preferences, clear form labels, and status messages that can be announced by assistive technology.
        </p>

        <h2>Primary task coverage</h2>
        <ul>
          <li>Navigation and the founding application can be used with a keyboard.</li>
          <li>Important controls remain visible without hover.</li>
          <li>The hero video includes a visible playback control and stops for reduced-motion preferences.</li>
          <li>Form errors are placed near the relevant field and summarized through a live status region.</li>
          <li>Mobile layouts preserve reading order and do not require horizontal scrolling.</li>
        </ul>

        <h2>Known limitations</h2>
        <p>
          The site is still being expanded. New routes and the future MAXX demonstration must pass the same keyboard, mobile, contrast, motion, and semantic checks before production release.
        </p>

        <h2>Feedback</h2>
        <p>
          When contacting MACS about an accessibility problem, include the page, the task you were attempting, the device or assistive technology used when relevant, and what prevented completion. MACS will prioritize barriers that block access to information or application submission.
        </p>
      </div>
    </article>
  );
}
