import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Agent MAXX",
  description: "The visible managed operator inside the MACS AI Operating System.",
};

const authorityRows = [
  ["Automatic", "Search approved knowledge, classify requests, summarize meetings, prepare drafts, create internal tasks, and record workflow history."],
  ["Human approval", "Personalized external messages, important record changes, publishing, scheduling changes, donor or funder contact, and sensitive information sharing."],
  ["Disabled by default", "Spending, contracts, permanent deletion, banking, billing, permission changes, mass outreach, regulated determinations, self-approval, or self-granted access."],
];

export default function MaxxPage() {
  return (
    <article className="content-page">
      <header className="content-page__hero">
        <div className="shell">
          <p className="eyebrow eyebrow--dark">Agent MAXX</p>
          <h1>A visible operator with defined permissions—not an invisible chatbot.</h1>
          <p className="content-page__lede">
            MAXX prepares work, explains what it used, pauses when approval is required, and leaves an activity history your team can review.
          </p>
          <div className="route-cta">
            <Link className="button button--primary" href="/apply">
              Apply for a founding spot
            </Link>
            <Link className="button button--secondary" href="/#system-work">
              See the synthetic workflow
            </Link>
          </div>
        </div>
      </header>

      <div className="shell content-page__body content-grid">
        <div>
          <h2>MAXX is one part of the installed system.</h2>
          <p>
            The MACS AI Operating System provides the Company Brain, permissions, workflows, integrations, approvals, and history. MAXX is the operator that works inside those boundaries.
          </p>
        </div>

        <div className="content-stack">
          <section className="content-section">
            <h3>Approval-first authority</h3>
            <table className="decision-table">
              <thead>
                <tr>
                  <th>Authority level</th>
                  <th>Typical behavior</th>
                </tr>
              </thead>
              <tbody>
                {authorityRows.map(([level, behavior]) => (
                  <tr key={level}>
                    <td><strong>{level}</strong></td>
                    <td>{behavior}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="content-section">
            <h3>Supervised launch</h3>
            <p>
              Each founding installation begins with a supervised 30-day operating period. The team reviews drafts, failures, edge cases, and approval rules before any authority expands.
            </p>
          </section>

          <section className="content-section">
            <h3>Separate client ownership</h3>
            <p>
              The target deployment model gives each client its own data, credentials, workflow history, and Company Brain. The public MACS website does not receive unrestricted access to client systems.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
