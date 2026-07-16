import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion";
import { siteCopy } from "@/lib/i18n";
import { getServerLocale } from "@/lib/server-preferences";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const copy = siteCopy[locale].websiteRescue;
  return { title: copy.metadataTitle, description: copy.metadataDescription };
}

export default async function WebsiteRescuePage() {
  const locale = await getServerLocale();
  const page = siteCopy[locale].websiteRescue;

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
              <h3>{page.pathsTitle}</h3>
              <table className="decision-table">
                <thead><tr>{page.pathHeaders.map((header) => <th key={header}>{header}</th>)}</tr></thead>
                <tbody>
                  {page.paths.map(([path, condition, action]) => (
                    <tr key={path}>
                      <td><strong>{path}</strong></td>
                      <td>{condition}</td>
                      <td>{action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </Reveal>

          <Reveal>
            <section className="content-section">
              <h3>{page.frontDoorTitle}</h3>
              <ol>{page.frontDoorSteps.map((step) => <li key={step}>{step}</li>)}</ol>
            </section>
          </Reveal>

          <Reveal>
            <section className="content-section">
              <h3>{page.doesNotTitle}</h3>
              <p>{page.doesNot}</p>
            </section>
          </Reveal>
        </div>
      </div>
    </article>
  );
}
