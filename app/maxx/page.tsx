import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion";
import { siteCopy } from "@/lib/i18n";
import { getServerLocale } from "@/lib/server-preferences";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const copy = siteCopy[locale].maxx;
  return { title: copy.metadataTitle, description: copy.metadataDescription };
}

export default async function MaxxPage() {
  const locale = await getServerLocale();
  const copy = siteCopy[locale];
  const page = copy.maxx;

  return (
    <article className="content-page">
      <Reveal>
        <header className="content-page__hero">
          <div className="shell">
            <p className="eyebrow eyebrow--dark">{page.eyebrow}</p>
            <h1>{page.title}</h1>
            <p className="content-page__lede">{page.lede}</p>
            <div className="route-cta">
              <Link className="button button--primary" href="/apply">
                {copy.common.apply}
              </Link>
              <Link className="button button--secondary" href="/#system-work">
                {page.secondaryCta}
              </Link>
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
              <h3>{page.authorityTitle}</h3>
              <table className="decision-table">
                <thead>
                  <tr>
                    {page.authorityHeaders.map((header) => <th key={header}>{header}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {page.authorityRows.map(([level, behavior]) => (
                    <tr key={level}>
                      <td><strong>{level}</strong></td>
                      <td>{behavior}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </Reveal>

          <Reveal>
            <section className="content-section">
              <h3>{page.supervisedTitle}</h3>
              <p>{page.supervised}</p>
            </section>
          </Reveal>

          <Reveal>
            <section className="content-section">
              <h3>{page.ownershipTitle}</h3>
              <p>{page.ownership}</p>
            </section>
          </Reveal>
        </div>
      </div>
    </article>
  );
}
