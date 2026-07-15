import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Washington Founding Launch",
  description: "The first MACS AI Operating System installation cohort for Washington organizations.",
};

const phases = [
  ["Days 1–15", "Understand", "Audit operations, website, knowledge, tools, risk, ownership, and acceptance tests."],
  ["Days 16–45", "Build", "Install the Company Brain, AI Front Door, Agent MAXX, and the two agreed workflows."],
  ["Days 46–75", "Operate", "Run supervised work, review failures, refine instructions, and train the team."],
  ["Days 76–90", "Accept and hand off", "Complete acceptance tests, document ownership, and choose handoff or optional managed care."],
];

export default function FoundingLaunchPage() {
  return (
    <article className="content-page">
      <header className="content-page__hero">
        <div className="shell">
          <p className="eyebrow eyebrow--dark">Washington Founding Launch</p>
          <h1>A 90-day installation for organizations ready to fix two important workflows.</h1>
          <p className="content-page__lede">
            The first five accepted organizations enter at $7,500 because they provide structured feedback and work more closely with the founders during validation.
          </p>
          <div className="route-cta">
            <Link className="button button--primary" href="/apply">
              Apply for a founding spot
            </Link>
          </div>
        </div>
      </header>

      <div className="shell content-page__body content-grid">
        <div>
          <h2>What the founding installation includes</h2>
          <p>
            The scope is intentionally limited so the system can be supervised, tested, documented, and accepted rather than becoming an open-ended automation experiment.
          </p>
        </div>

        <div className="content-stack">
          <section className="content-section">
            <h3>Included system</h3>
            <ul>
              <li>Operational and AI-readiness audit</li>
              <li>Private Company Brain</li>
              <li>One managed Agent MAXX operator</li>
              <li>Inquiry-to-follow-up workflow</li>
              <li>Meeting-to-action workflow</li>
              <li>Up to four supported connections</li>
              <li>AI Front Door or standardized five-page website rescue</li>
              <li>Human approval controls and workflow history</li>
              <li>Training, documentation, and ownership handoff</li>
            </ul>
          </section>

          <section className="content-section">
            <h3>Payment milestones</h3>
            <ul>
              <li>$3,000 deposit to reserve the accepted scope</li>
              <li>$2,250 after prototype approval</li>
              <li>$2,250 after launch acceptance</li>
            </ul>
            <p>
              The agreed installation price and included scope lock when the deposit is accepted. Additional requested work requires a separate written scope.
            </p>
          </section>

          <section className="content-section">
            <h3>Launch sequence</h3>
            <table className="decision-table">
              <thead>
                <tr>
                  <th>Period</th>
                  <th>Phase</th>
                  <th>Outcome</th>
                </tr>
              </thead>
              <tbody>
                {phases.map(([period, phase, outcome]) => (
                  <tr key={period}>
                    <td>{period}</td>
                    <td><strong>{phase}</strong></td>
                    <td>{outcome}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="content-section">
            <h3>Acceptance commitment</h3>
            <p>
              When agreed acceptance tests have not passed at the scheduled end of implementation, MACS continues implementation work without an additional management fee until the defined tests pass or both parties agree that a documented dependency prevents completion.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
