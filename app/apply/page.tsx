import type { Metadata } from "next";
import { ApplicationForm } from "@/components/application-form";

export const metadata: Metadata = {
  title: "Apply for a Washington Founding Spot",
  description:
    "Apply for the first MACS AI Operating System founding cohort in Washington.",
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
            This application determines fit before a discovery call. Do not submit private client records, passwords, credentials, medical information, or financial account information.
          </p>

          <div className="intake-notice">
            <strong>What happens next:</strong> MACS reviews the application, confirms whether the project fits the founding scope, and contacts qualified organizations about a discovery call. Submitting does not create a contract or reserve a spot.
          </div>

          <h2>Good-fit organizations usually meet these conditions</h2>
          <ul className="check-list check-list--plain">
            {fitCriteria.map((criterion) => (
              <li key={criterion}>{criterion}</li>
            ))}
          </ul>
        </div>

        <ApplicationForm />
      </div>
    </section>
  );
}
