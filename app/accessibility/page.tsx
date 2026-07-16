import type { Metadata } from "next";
import { Reveal } from "@/components/motion";
import { siteCopy } from "@/lib/i18n";
import { getServerLocale } from "@/lib/server-preferences";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const copy = siteCopy[locale].accessibility;
  return { title: copy.metadataTitle, description: copy.metadataDescription };
}

export default async function AccessibilityPage() {
  const locale = await getServerLocale();
  const page = siteCopy[locale].accessibility;

  return (
    <article className="content-page">
      <Reveal>
        <header className="content-page__hero">
          <div className="shell">
            <p className="eyebrow eyebrow--dark">{page.eyebrow}</p>
            <h1>{page.title}</h1>
            <p className="content-page__lede">{page.lede}</p>
          </div>
        </header>
      </Reveal>

      <div className="shell content-page__body legal-copy">
        <Reveal>
          <section className="legal-section">
            <h2>{page.standardTitle}</h2>
            <p>{page.standard}</p>
          </section>
        </Reveal>

        <Reveal>
          <section className="legal-section">
            <h2>{page.coverageTitle}</h2>
            <ul>{page.coverage.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
        </Reveal>

        <Reveal>
          <section className="legal-section">
            <h2>{page.limitationsTitle}</h2>
            <p>{page.limitations}</p>
          </section>
        </Reveal>

        <Reveal>
          <section className="legal-section">
            <h2>{page.feedbackTitle}</h2>
            <p>{page.feedback}</p>
          </section>
        </Reveal>
      </div>
    </article>
  );
}
