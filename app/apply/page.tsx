import type { Metadata } from "next";
import { ApplicationPreviewForm } from "@/components/application-preview-form";

export const metadata: Metadata = {
  title: "Apply for a Washington Founding Spot",
  description:
    "Preview the application for the first MACS AI Operating System validation cohort in Washington.",
};

const fitCriteria = [
  "Your organization operates in Washington.",
  "Approximately 3–50 people contribute to the work.",
  "Missed follow-up, scattered knowledge, meetings, or website friction are creating operational drag.",
  "A decision-maker can help define and approve two launch workflows.",
  "Your team accepts a supervised 90-day implementation rather than unlimited automation.",
];

export default function ApplyPage() {
  return (
    <section className="section application-page" aria-labelledby="application-title">
      <div className="shell application-layout">
        <div>
          <p className="eyebrow eyebrow--dark">Washington validation cohort</p>
          <h1 id="application-title">Apply for one of the first five founding installations.</h1>
          <p className="application-intro">
            This application determines fit before a discovery call. It does not request sensitive documents, private client information, or system credentials.
          </p>

          <div className="preview-notice" role="status">
            <strong>Architecture preview:</strong> the form is complete for usability review, but secure submission is intentionally disabled until the intake service and privacy controls are connected.
          </div>

          <h2>Good-fit organizations usually meet these conditions</h2>
          <ul className="check-list check-list--plain">
            {fitCriteria.map((criterion) => (
              <li key={criterion}>{criterion}</li>
            ))}
          </ul>
        </div>

        <ApplicationPreviewForm />
      </div>
    </section>
  );
}
