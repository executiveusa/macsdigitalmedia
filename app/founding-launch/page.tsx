import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion";
import { offerCopy } from "@/lib/offer-copy";
import { getServerLocale } from "@/lib/server-preferences";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const copy = offerCopy[locale].foundingLaunch;
  return { title: copy.metadataTitle, description: copy.metadataDescription };
}

export default async function FoundingLaunchPage() {
  const locale = await getServerLocale();
  const page = offerCopy[locale].foundingLaunch;

  return (
    <article className="content-page">
      <Reveal>
        <header className="content-page__hero">
          <div className="shell">
            <p className="eyebrow eyebrow--dark">{page.eyebrow}</p>
            <h1>{page.title}</h1>
            <p className="content-page__lede">{page.lede}</p>
            <div className="route-cta">
              <Link className="button button--primary" href="/apply">{page.primaryCta}</Link>
            </div>
          </div>
        </header>
      </Reveal>

      <div className="shell content-page__body content-grid">
        <Reveal>
          <div>
            <h2>{page.introTitle}</h2>
            <p>{page.intro}</p>
          </div>
        </Reveal>

        <div className="content-stack">
          <Reveal>
            <section className="content-section">
              <h3>{page.includedTitle}</h3>
              <ul>{page.included.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>
          </Reveal>

          <Reveal>
            <section className="content-section">
              <h3>{page.definitionsTitle}</h3>
              <dl className="definition-list">
                {page.definitions.map(([term, definition]) => (
                  <div key={term}>
                    <dt>{term}</dt>
                    <dd>{definition}</dd>
                  </div>
                ))}
              </dl>
            </section>
          </Reveal>

          <Reveal>
            <section className="content-section">
              <h3>{page.paymentTitle}</h3>
              <ul>{page.payments.map((item) => <li key={item}>{item}</li>)}</ul>
              <p>{page.paymentNote}</p>
            </section>
          </Reveal>

          <Reveal>
            <section className="content-section">
              <h3>{page.sequenceTitle}</h3>
              <table className="decision-table">
                <thead><tr>{page.sequenceHeaders.map((header) => <th key={header}>{header}</th>)}</tr></thead>
                <tbody>
                  {page.phases.map(([period, phase, outcome]) => (
                    <tr key={period}>
                      <td>{period}</td>
                      <td><strong>{phase}</strong></td>
                      <td>{outcome}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </Reveal>

          <Reveal>
            <section className="content-section content-section--guarantee">
              <h3>{page.acceptanceTitle}</h3>
              <p>{page.acceptance}</p>
            </section>
          </Reveal>

          <Reveal>
            <section className="content-section">
              <h3>{page.clientTitle}</h3>
              <p>{page.clientCommitment}</p>
            </section>
          </Reveal>

          <Reveal>
            <section className="content-section">
              <h3>{page.exclusionsTitle}</h3>
              <p>{page.exclusions}</p>
            </section>
          </Reveal>

          <Reveal>
            <section className="content-section content-section--final">
              <h3>{page.finalTitle}</h3>
              <p>{page.finalBody}</p>
              <Link className="button button--primary" href="/apply">{page.finalCta}</Link>
            </section>
          </Reveal>
        </div>
      </div>
    </article>
  );
}
