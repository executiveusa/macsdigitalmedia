import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion";
import { siteCopy } from "@/lib/i18n";
import { getServerLocale } from "@/lib/server-preferences";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const copy = siteCopy[locale].smallBusiness;
  return { title: copy.metadataTitle, description: copy.metadataDescription };
}

export default async function SmallBusinessPage() {
  const locale = await getServerLocale();
  const page = siteCopy[locale].smallBusiness;

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
              <Link className="button button--secondary" href="/founding-launch">{page.secondaryCta}</Link>
            </div>
          </div>
        </header>
      </Reveal>

      <div className="shell content-page__body content-grid">
        <Reveal>
          <div>
            <h2>{page.fitTitle}</h2>
            <p>{page.fit}</p>
          </div>
        </Reveal>

        <div className="content-stack">
          <Reveal>
            <section className="content-section">
              <h3>{page.workflowsTitle}</h3>
              <ul>{page.workflows.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>
          </Reveal>
          <Reveal>
            <section className="content-section">
              <h3>{page.ownershipTitle}</h3>
              <p>{page.ownership}</p>
            </section>
          </Reveal>
          <Reveal>
            <section className="content-section">
              <h3>{page.notFitTitle}</h3>
              <p>{page.notFit}</p>
            </section>
          </Reveal>
        </div>
      </div>
    </article>
  );
}
