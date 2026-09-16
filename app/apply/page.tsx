import type { Metadata } from "next";
import { ApplicationForm } from "@/components/application-form";
import { Reveal } from "@/components/motion";
import { partnerIntakeCopy } from "@/lib/partner-intake-copy";
import { getServerLocale } from "@/lib/server-preferences";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const copy = partnerIntakeCopy[locale].page;
  return { title: copy.metadataTitle, description: copy.metadataDescription };
}

export default async function ApplyPage() {
  const locale = await getServerLocale();
  const page = partnerIntakeCopy[locale].page;

  return (
    <section className="section application-page" aria-labelledby="application-title">
      <div className="shell application-layout">
        <Reveal>
          <div>
            <h1 id="application-title">{page.title}</h1>
            <p className="application-intro">{page.intro}</p>
          </div>
        </Reveal>

        <ApplicationForm />
      </div>
    </section>
  );
}
