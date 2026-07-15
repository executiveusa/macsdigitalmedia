import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Managed AI Systems for Small Businesses",
  description: "A secondary MACS route for selected Washington small businesses with the same approval-first, client-owned operating model.",
};

export default function SmallBusinessPage() {
  return (
    <article className="content-page">
      <header className="content-page__hero">
        <div className="shell">
          <p className="eyebrow eyebrow--dark">Selected Washington small businesses</p>
          <h1>Fix follow-up, meetings, scattered knowledge, and website friction without adding another disconnected tool.</h1>
          <p className="content-page__lede">
            The primary MACS founding cohort is built around nonprofit and social-purpose organizations. Selected small businesses may apply when the same two-workflow installation model fits the operation.
          </p>
          <div className="route-cta">
            <Link className="button button--primary" href="/apply">
              Apply for an assessment
            </Link>
            <Link className="button button--secondary" href="/founding-launch">
              Review the launch scope
            </Link>
          </div>
        </div>
      </header>

      <div className="shell content-page__body content-grid">
        <div>
          <h2>Best fit</h2>
          <p>
            MACS is most useful when a small team has meaningful demand but loses time to repetitive communication, information scattered across tools, inconsistent follow-up, or a website that does not route people correctly.
          </p>
        </div>

        <div className="content-stack">
          <section className="content-section">
            <h3>Typical first workflows</h3>
            <ul>
              <li>New inquiry to qualified follow-up</li>
              <li>Estimate or consultation request to scheduled next action</li>
              <li>Meeting notes to assigned work and reminders</li>
              <li>Frequently asked questions to approved answers and escalation</li>
            </ul>
          </section>

          <section className="content-section">
            <h3>Same ownership model</h3>
            <p>
              Small-business clients receive the same target model: separate data, defined permissions, human approval for consequential actions, documented workflow history, and an ownership handoff option instead of required long-term software lock-in.
            </p>
          </section>

          <section className="content-section">
            <h3>Not a fit for the founding scope</h3>
            <p>
              Projects requiring immediate mass outbound messaging, autonomous spending, regulated determinations, complex enterprise migration, or unlimited custom software are outside the standardized founding installation.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
