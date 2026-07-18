import type { Metadata } from "next";
import Link from "next/link";
import { HeroVideo } from "@/components/hero-video";
import { Reveal } from "@/components/motion";
import { offerCopy } from "@/lib/offer-copy";
import { getServerLocale } from "@/lib/server-preferences";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const copy = offerCopy[locale].home;

  return {
    title: copy.metadataTitle,
    description: copy.metadataDescription,
  };
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MACS Digital Media",
  url: "https://www.macsdigitalmedia.com",
  logo: "https://www.macsdigitalmedia.com/logo.png",
  description: "Client-owned AI operations systems for Washington organizations.",
  areaServed: {
    "@type": "State",
    name: "Washington",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "MACS 90-Day Client-Owned AI Installation",
  provider: {
    "@type": "Organization",
    name: "MACS Digital Media",
  },
  areaServed: "Washington, USA",
  serviceType: "Client-owned AI operations system installation",
  description:
    "A defined 90-day installation combining approved organizational knowledge, a managed AI operator, an AI Front Door, human approval controls, activity history, and two tested workflows.",
  offers: {
    "@type": "Offer",
    price: "7500",
    priceCurrency: "USD",
    availability: "https://schema.org/LimitedAvailability",
  },
};

export default async function HomePage() {
  const locale = await getServerLocale();
  const home = offerCopy[locale].home;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, serviceSchema]) }}
      />

      <section className="hero" aria-labelledby="hero-title">
        <HeroVideo />
        <div className="hero__overlay" aria-hidden="true" />
        <div className="shell hero__content">
          <Reveal>
            <p className="eyebrow">{home.eyebrow}</p>
            <h1 id="hero-title">{home.title}</h1>
            <p className="hero__lede">{home.lede}</p>
            <div className="button-row" aria-label={locale === "es-MX" ? "Acciones principales" : "Primary actions"}>
              <Link className="button button--primary" href="/apply">
                {home.primaryCta}
              </Link>
              <Link className="button button--secondary" href="#system-work">
                {home.secondaryCta}
              </Link>
            </div>
            <p className="hero__next-step">{home.nextStep}</p>
            <ul className="trust-list" aria-label={locale === "es-MX" ? "Principios del servicio" : "Service principles"}>
              {home.trust.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      <Reveal>
        <section className="section section--soft" id="operational-problem" aria-labelledby="problem-title">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow eyebrow--dark">{home.problemEyebrow}</p>
              <h2 id="problem-title">{home.problemTitle}</h2>
              <p>{home.problemIntro}</p>
            </div>
            <div className="outcome-grid">
              <article className="outcome-card outcome-card--before">
                <h3>{home.beforeTitle}</h3>
                <ul>
                  {home.before.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
              <article className="outcome-card outcome-card--after">
                <h3>{home.afterTitle}</h3>
                <ul>
                  {home.after.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section section--light" id="what-we-build" aria-labelledby="system-title">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow eyebrow--dark">{home.buildEyebrow}</p>
              <h2 id="system-title">{home.buildTitle}</h2>
              <p>{home.buildIntro}</p>
            </div>
            <ol className="system-grid">
              {home.systemParts.map(([number, title, body]) => (
                <li className="system-card" key={number}>
                  <span className="system-card__number" aria-hidden="true">{number}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section section--dark" id="system-work" aria-labelledby="workflow-title">
          <div className="shell workflow-layout">
            <div className="section-heading section-heading--dark">
              <p className="eyebrow">{home.demoEyebrow}</p>
              <h2 id="workflow-title">{home.demoTitle}</h2>
              <p>{home.demoIntro}</p>
            </div>
            <ol className="workflow-list">
              {home.workflowSteps.map(([title, body, status], index) => (
                <li className={index === 3 ? "workflow-step workflow-step--approval" : "workflow-step"} key={title}>
                  <span className="workflow-step__number">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                  <span className="workflow-step__status">{status}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section" aria-labelledby="website-rescue-title">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow eyebrow--dark">{home.rescueEyebrow}</p>
              <h2 id="website-rescue-title">{home.rescueTitle}</h2>
              <p>{home.rescueIntro}</p>
            </div>
            <div className="rescue-grid">
              {home.rescuePaths.map(([label, title, body]) => (
                <article className="rescue-card" key={label}>
                  <p className="rescue-card__label">{label}</p>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section section--dark" id="about" aria-labelledby="founder-title">
          <div className="shell founder-layout">
            <div>
              <p className="eyebrow">{home.founderEyebrow}</p>
              <h2 id="founder-title">{home.founderTitle}</h2>
            </div>
            <div className="founder-copy">
              {home.founderParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="founder-principles">
              {home.founderPrinciples.map(([title, body]) => (
                <article className="founder-principle" key={title}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section section--soft" id="how-it-works" aria-labelledby="launch-title">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow eyebrow--dark">{home.launchEyebrow}</p>
              <h2 id="launch-title">{home.launchTitle}</h2>
              <p>{home.launchIntro}</p>
            </div>
            <ol className="phase-grid">
              {home.launchPhases.map(([days, title, body]) => (
                <li className="phase-card" key={days}>
                  <p className="phase-card__days">{days}</p>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section" id="founding-offer" aria-labelledby="offer-title">
          <div className="shell offer-layout">
            <div className="section-heading">
              <p className="eyebrow eyebrow--dark">{home.offerEyebrow}</p>
              <h2 id="offer-title">{home.offerTitle}</h2>
              <p>{home.offerIntro}</p>
              <p className="offer-lock">{home.offerLock}</p>
            </div>
            <div className="offer-card">
              <div className="offer-card__price">
                <span>{home.validationCohort}</span>
                <strong>$7,500</strong>
                <span>{home.installation90}</span>
              </div>
              <ul className="check-list">
                {home.included.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <div className="payment-plan" aria-label={locale === "es-MX" ? "Etapas de pago" : "Payment milestones"}>
                {home.payments.map((payment) => <span key={payment}>{payment}</span>)}
              </div>
              <Link className="button button--primary button--full" href="/apply">
                {home.primaryCta}
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section section--soft" aria-labelledby="guarantee-title">
          <div className="shell">
            <div className="guarantee-panel">
              <p className="eyebrow eyebrow--dark">{home.guaranteeEyebrow}</p>
              <h2 id="guarantee-title">{home.guaranteeTitle}</h2>
              <p>{home.guaranteeBody}</p>
            </div>
            <div className="scope-grid">
              <article>
                <h3>{home.responsibilityTitle}</h3>
                <p>{home.responsibilityBody}</p>
              </article>
              <article>
                <h3>{home.scopeTitle}</h3>
                <p>{home.scopeBody}</p>
              </article>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section section--light" aria-labelledby="fit-title">
          <div className="shell fit-layout">
            <div className="section-heading">
              <p className="eyebrow eyebrow--dark">{home.fitEyebrow}</p>
              <h2 id="fit-title">{home.fitTitle}</h2>
              <p>{home.fitIntro}</p>
            </div>
            <ul className="fit-list">
              {home.fitCriteria.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section final-cta" aria-labelledby="final-cta-title">
          <div className="shell final-cta__inner">
            <div>
              <p className="eyebrow eyebrow--dark">{home.finalEyebrow}</p>
              <h2 id="final-cta-title">{home.finalTitle}</h2>
            </div>
            <Link className="button button--primary" href="/apply">
              {home.finalCta}
              <span className="button-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </Reveal>
    </>
  );
}
