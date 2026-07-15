import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Website Rescue and AI Front Door",
  description: "How MACS preserves, repairs, or replaces a website before adding an AI Front Door.",
};

const paths = [
  ["Preserve", "The current website already earns trust.", "Keep the site, clarify the most important actions, and add the AI Front Door to the highest-value visitor journey."],
  ["Rescue", "The content is useful but the path is unclear.", "Repair the homepage, navigation, mobile behavior, and primary inquiry or application flow while preserving usable content."],
  ["Replace", "The current site damages confidence or cannot support the required journey.", "Install a standardized five-page foundation with clear messaging, accessible navigation, and the AI Front Door built in."],
];

export default function WebsiteRescuePage() {
  return (
    <article className="content-page">
      <header className="content-page__hero">
        <div className="shell">
          <p className="eyebrow eyebrow--dark">AI Front Door + website rescue</p>
          <h1>The front door cannot work when the rest of the website destroys trust.</h1>
          <p className="content-page__lede">
            MACS audits the existing site before deciding whether to preserve it, repair the primary journey, or replace it with a focused foundation.
          </p>
          <div className="route-cta">
            <Link className="button button--primary" href="/apply">
              Apply for a website and workflow assessment
            </Link>
          </div>
        </div>
      </header>

      <div className="shell content-page__body content-grid">
        <div>
          <h2>A decision based on usability and trust—not preference.</h2>
          <p>
            The audit looks at comprehension, navigation, mobile behavior, accessibility, credibility, content quality, and whether the site can support the agreed visitor journey.
          </p>
        </div>

        <div className="content-stack">
          <section className="content-section">
            <h3>Three possible paths</h3>
            <table className="decision-table">
              <thead>
                <tr>
                  <th>Path</th>
                  <th>When it applies</th>
                  <th>What MACS does</th>
                </tr>
              </thead>
              <tbody>
                {paths.map(([path, condition, action]) => (
                  <tr key={path}>
                    <td><strong>{path}</strong></td>
                    <td>{condition}</td>
                    <td>{action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="content-section">
            <h3>What the AI Front Door does</h3>
            <ol>
              <li>Receives the visitor’s question, application, scheduling request, or service inquiry.</li>
              <li>Checks approved organizational knowledge.</li>
              <li>Collects missing information in a structured way.</li>
              <li>Routes the request to the correct workflow and owner.</li>
              <li>Prepares a response and pauses for human approval when required.</li>
              <li>Records the next action and due date.</li>
            </ol>
          </section>

          <section className="content-section">
            <h3>What it does not do by default</h3>
            <p>
              It does not expose private records, invent eligibility decisions, promise unavailable services, send sensitive personalized messages without approval, or provide unrestricted access to the MAXX control plane.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
