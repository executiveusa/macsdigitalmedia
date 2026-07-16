import type { Metadata } from "next";
import { ApplicationForm } from "@/components/application-form";
import { Reveal } from "@/components/motion";
import { siteCopy } from "@/lib/i18n";
import { getServerLocale } from "@/lib/server-preferences";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const copy = siteCopy[locale].apply;
  return { title: copy.metadataTitle, description: copy.metadataDescription };
}

export default async function ApplyPage() {
  const locale = await getServerLocale();
  const page = siteCopy[locale].apply;

  return (
    <section className="section application-page" aria-labelledby="application-title">
      <div className="shell application-layout">
        <Reveal>
          <div>
            <p className="eyebrow eyebrow--dark">{page.eyebrow}</p>
            <h1 id="application-title">{page.title}</h1>
            <p className="application-intro">{page.intro}</p>

            <div className="intake-notice">
              <strong>{page.nextLabel}</strong> {page.next}
            </div>

            <h2>{page.fitTitle}</h2>
            <ul className="check-list check-list--plain">
              {page.fitCriteria.map((criterion) => <li key={criterion}>{criterion}</li>)}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <ApplicationForm />
        </Reveal>
      </div>
    </section>
  );
}
