import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) return {};

  return {
    title: `${study.name} | MACS Digital Media`,
    description: study.summary,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) notFound();

  return (
    <div className="editorial-page editorial-page--white">
      <div className="editorial-shell">
        <header className="editorial-case-study-hero">
          <p className="editorial-kicker">{study.lane} · Case study</p>
          <h1>{study.name}</h1>
          {study.credit ? <p className="editorial-case-study-hero__credit">{study.credit}</p> : null}
          <p className="editorial-case-study-hero__headline">{study.headline}</p>
          <p className="editorial-case-study-hero__summary">{study.summary}</p>
          <div className="editorial-case-study-hero__actions">
            {study.liveUrl ? (
              <a className="editorial-link" href={study.liveUrl} target="_blank" rel="noreferrer">
                Visit live project <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <span className="editorial-case-study-placeholder">Live link placeholder</span>
            )}
          </div>
        </header>

        <div
          className="editorial-case-study-hero__media"
          role={study.heroImage ? "img" : undefined}
          aria-label={study.heroImage ? `${study.name} case study hero` : undefined}
          style={study.heroImage ? { backgroundImage: `url(${study.heroImage})` } : undefined}
        >
          {!study.heroImage ? <span>Hero media placeholder</span> : null}
        </div>

        <div className="editorial-case-study-story">
          {study.sections.map((section, index) => (
            <section className="editorial-case-study-story__section" key={section.title}>
              <p className="editorial-kicker">0{index + 1}</p>
              <div>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </div>
            </section>
          ))}
        </div>

        {study.placeholders?.length ? (
          <section className="editorial-case-study-assets" aria-labelledby="case-assets-title">
            <p className="editorial-kicker">Next proof</p>
            <div>
              <h2 id="case-assets-title">Add the evidence as it is ready.</h2>
              <div className="editorial-case-study-assets__grid">
                {study.placeholders.map((placeholder) => (
                  <div className="editorial-case-study-placeholder" key={placeholder}>{placeholder}</div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <div className="editorial-case-study-footer">
          <Link className="editorial-link" href="/work">See all work <span aria-hidden="true">↗</span></Link>
          <Link className="editorial-link" href="/apply">Tell us what's important <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </div>
  );
}
