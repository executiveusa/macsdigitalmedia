import type { Metadata } from "next";
import { Reveal } from "@/components/motion";
import { siteCopy } from "@/lib/i18n";
import { getServerLocale } from "@/lib/server-preferences";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const copy = siteCopy[locale].privacy;
  return { title: copy.metadataTitle, description: copy.metadataDescription };
}

export default async function PrivacyPage() {
  const locale = await getServerLocale();
  const page = siteCopy[locale].privacy;

  return (
    <article className="content-page">
      <Reveal>
        <header className="content-page__hero">
          <div className="shell">
            <p className="eyebrow eyebrow--dark">{page.eyebrow}</p>
            <h1>{page.title}</h1>
            <p className="content-page__lede">{page.updated}</p>
          </div>
        </header>
      </Reveal>

      <div className="shell content-page__body legal-copy">
        {page.sections.map(([title, body]) => (
          <Reveal key={title}>
            <section className="legal-section">
              <h2>{title}</h2>
              <p>{body}</p>
            </section>
          </Reveal>
        ))}
      </div>
    </article>
  );
}
