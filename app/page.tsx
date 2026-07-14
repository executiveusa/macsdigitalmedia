import Link from "next/link";

const systemParts = [
  {
    number: "01",
    title: "Company Brain",
    copy: "Organizes approved knowledge, policies, programs, and working context so your team and agents stop starting from zero.",
  },
  {
    number: "02",
    title: "Agent MAXX",
    copy: "Prepares follow-up, organizes requests, and turns conversations into action inside clearly defined permissions.",
  },
  {
    number: "03",
    title: "AI Front Door",
    copy: "Gives visitors one clear way to ask, apply, schedule, or request help while sending structured information to the right team.",
  },
  {
    number: "04",
    title: "Human approval",
    copy: "Sensitive or consequential actions pause for review. Your staff stays in control of what is sent, changed, or published.",
  },
  {
    number: "05",
    title: "Workflow history",
    copy: "Records what happened, what is waiting, what failed, and what needs attention instead of hiding work inside a chat window.",
  },
];

const workflowSteps = [
  ["Inquiry received", "A website question enters as a structured request."],
  ["Approved knowledge checked", "The Company Brain finds the relevant program information and source."],
  ["Response prepared", "Agent MAXX drafts a useful reply and identifies missing details."],
  ["Human approval", "A staff member reviews the draft before any personalized message is sent."],
  ["Follow-up created", "The contact record, next action, owner, and due date are recorded."],
];

const rescuePaths = [
  {
    label: "Green — preserve",
    title: "Your website already earns trust",
    copy: "We keep the site, clarify its most important calls to action, and add an AI Front Door for the highest-value visitor journey.",
  },
  {
    label: "Yellow — rescue",
    title: "The content is useful, but the path is unclear",
    copy: "We repair the homepage, navigation, mobile experience, and primary contact or application flow while preserving usable content.",
  },
  {
    label: "Red — replace",
    title: "The current site damages confidence",
    copy: "We install a standardized five-page organization website with clear messaging, accessible navigation, and the AI Front Door built in.",
  },
];

const launchPhases = [
  ["Days 1–15", "Understand", "Audit the work, website, knowledge, tools, risks, and acceptance tests."],
  ["Days 16–45", "Build", "Create the Company Brain, AI Front Door, managed operator, and two agreed workflows."],
  ["Days 46–75", "Operate", "Run supervised work, review failures, improve instructions, and train the team."],
  ["Days 76–90", "Transfer or scale", "Document ownership, confirm acceptance, and choose handoff or optional managed care."],
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MACS Digital Media",
  url: "https://www.macsdigitalmedia.com",
  logo: "https://www.macsdigitalmedia.com/logo.png",
  description: "Managed, client-owned AI operating systems for Washington organizations.",
  areaServed: {
    "@type": "State",
    name: "Washington",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "MACS AI Operating System installation",
  provider: {
    "@type": "Organization",
    name: "MACS Digital Media",
  },
  areaServed: "Washington, USA",
  serviceType: "Managed AI operating system installation and implementation",
  description:
    "A 90-day installation combining an organization knowledge system, managed AI operator, AI Front Door, approval controls, and two production workflows.",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, serviceSchema]) }}
      />

      <section className="hero" aria-labelledby="hero-title">
        <video className="hero__video" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
          <source
            src="https://www.macsdigitalmedia.com/wp-content/uploads/2025/04/6015791_Business_Office_1280x720.webm"
            type="video/webm"
          />
        </video>
        <div className="hero__overlay" aria-hidden="true" />
        <div className="shell hero__content">
          <p className="eyebrow">Managed AI systems for Washington organizations</p>
          <h1 id="hero-title">Your organization does not need another chatbot. It needs an operating system.</h1>
          <p className="hero__lede">
            MACS connects your knowledge, website, communications, and routine work inside one controlled system—then helps your team operate it without needing an internal technical department.
          </p>
          <div className="button-row" aria-label="Primary actions">
            <Link className="button button--primary" href="/apply">
              Apply for a Washington founding spot
            </Link>
            <Link className="button button--secondary" href="#system-work">
              See the system work
            </Link>
          </div>
          <ul className="trust-list" aria-label="Service principles">
            <li>Father-and-son company</li>
            <li>Human approval where it matters</li>
            <li>Client-owned deployment</li>
          </ul>
        </div>
      </section>

      <section className="section section--light" id="what-we-build" aria-labelledby="system-title">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow eyebrow--dark">What we build</p>
            <h2 id="system-title">One connected system behind the work your team already does.</h2>
            <p>
              The public website, organization knowledge, managed agent, approval controls, and workflow history work together instead of becoming five more disconnected tools.
            </p>
          </div>
          <ol className="system-grid">
            {systemParts.map((part) => (
              <li className="system-card" key={part.number}>
                <span className="system-card__number" aria-hidden="true">
                  {part.number}
                </span>
                <h3>{part.title}</h3>
                <p>{part.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--dark" id="system-work" aria-labelledby="workflow-title">
        <div className="shell workflow-layout">
          <div className="section-heading section-heading--dark">
            <p className="eyebrow">Synthetic demonstration</p>
            <h2 id="workflow-title">See an inquiry move from question to accountable follow-up.</h2>
            <p>
              This example uses labeled sample data. The public demonstration never touches real client records or unrestricted agent tools.
            </p>
          </div>
          <ol className="workflow-list">
            {workflowSteps.map(([title, copy], index) => (
              <li className={index === 3 ? "workflow-step workflow-step--approval" : "workflow-step"} key={title}>
                <span className="workflow-step__number">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
                <span className="workflow-step__status">{index === 3 ? "Approval required" : "Recorded step"}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="website-rescue-title">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow eyebrow--dark">AI Front Door + website rescue</p>
            <h2 id="website-rescue-title">We do not attach a polished intake page to a website that destroys trust.</h2>
            <p>
              The audit determines whether your current site should be preserved, repaired, or replaced with a focused five-page foundation.
            </p>
          </div>
          <div className="rescue-grid">
            {rescuePaths.map((path) => (
              <article className="rescue-card" key={path.label}>
                <p className="rescue-card__label">{path.label}</p>
                <h3>{path.title}</h3>
                <p>{path.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft" id="how-it-works" aria-labelledby="launch-title">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow eyebrow--dark">The 90-day launch</p>
            <h2 id="launch-title">A controlled installation with a defined finish line.</h2>
            <p>
              The first launch is limited to two workflows so the system can be tested, supervised, documented, and accepted before its authority expands.
            </p>
          </div>
          <ol className="phase-grid">
            {launchPhases.map(([days, title, copy]) => (
              <li className="phase-card" key={days}>
                <p className="phase-card__days">{days}</p>
                <h3>{title}</h3>
                <p>{copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" id="founding-offer" aria-labelledby="offer-title">
        <div className="shell offer-layout">
          <div className="section-heading">
            <p className="eyebrow eyebrow--dark">Washington validation cohort</p>
            <h2 id="offer-title">The first five accepted organizations launch at $7,500.</h2>
            <p>
              The first cohort receives the lowest published rate because it includes structured feedback and closer founder involvement. Later cohorts enter at published higher prices as the system becomes more proven and standardized.
            </p>
            <p className="offer-lock">
              Once the deposit is accepted, the agreed installation price and included scope are locked unless the client requests additional work.
            </p>
          </div>
          <div className="offer-card">
            <div className="offer-card__price">
              <span>Validation cohort</span>
              <strong>$7,500</strong>
              <span>90-day installation</span>
            </div>
            <ul className="check-list">
              <li>Operational and AI-readiness audit</li>
              <li>Private Company Brain</li>
              <li>One managed Agent MAXX operator</li>
              <li>Inquiry-to-follow-up workflow</li>
              <li>Meeting-to-action workflow</li>
              <li>Up to four supported connections</li>
              <li>AI Front Door or five-page website rescue</li>
              <li>Training, documentation, and ownership handoff</li>
            </ul>
            <div className="payment-plan" aria-label="Payment milestones">
              <span>$3,000 deposit</span>
              <span>$2,250 approved prototype</span>
              <span>$2,250 launch acceptance</span>
            </div>
            <Link className="button button--primary button--full" href="/apply">
              Apply for a Washington founding spot
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--dark" id="about" aria-labelledby="about-title">
        <div className="shell about-layout">
          <div>
            <p className="eyebrow">Why MACS</p>
            <h2 id="about-title">Technology should make a small team more capable—not more dependent.</h2>
          </div>
          <div className="about-copy">
            <p>
              MACS Digital Media is a father-and-son company building practical AI infrastructure for organizations doing meaningful work in Washington.
            </p>
            <p>
              We sell ownership and implementation rather than permanent software lock-in. Clients can continue with optional managed care or receive a documented handoff after acceptance.
            </p>
            <p>
              Agent MAXX is the visible operator. The MACS AI Operating System is the controlled environment that gives MAXX approved knowledge, limited tools, human oversight, and an activity history.
            </p>
          </div>
        </div>
      </section>

      <section className="section final-cta" aria-labelledby="final-cta-title">
        <div className="shell final-cta__inner">
          <div>
            <p className="eyebrow eyebrow--dark">Start with the work that is being missed</p>
            <h2 id="final-cta-title">Identify the follow-up, meetings, and website friction your team needs fixed first.</h2>
          </div>
          <Link className="button button--primary" href="/apply">
            Start the founding application
          </Link>
        </div>
      </section>
    </>
  );
}
