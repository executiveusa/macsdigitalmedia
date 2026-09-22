import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { Reveal } from "@/components/motion";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;

  if (slug === "agent-maxx") {
    return {
      title: "Agent MAXX",
      description: "Agent MAXX is built inside MACS and documented under Built Here.",
    };
  }

  const study = getCaseStudy(slug);
  if (!study) return {};

  return {
    title: study.name,
    description: study.summary,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (slug === "agent-maxx") {
    permanentRedirect("/maxx");
  }

  const study = getCaseStudy(slug);
  if (!study) notFound();

  const isInternal = study.visibility === "internal";
  const formatLabel = study.formatLabel ?? (study.format === "collaboration" ? "Collaboration" : study.format === "product" ? "Built Here" : "Case Study");

  return (
    <div className="editorial-page editorial-page--white editorial-page--case">
      <div className="editorial-shell">
        <Reveal intensity="soft">
        <header className="editorial-case-study-hero">
          <div className="editorial-case-study-hero__lead">
            <p className="editorial-kicker">{study.lane} · {formatLabel}</p>
            <h1>{study.name}</h1>
            {study.collaboration ? <p className="editorial-case-study-hero__credit">{study.collaboration}</p> : null}
            {study.credit ? <p className="editorial-case-study-hero__credit">{study.credit}</p> : null}
            <p className="editorial-case-study-hero__headline">{study.headline}</p>
            <p className="editorial-case-study-hero__summary">{study.summary}</p>
          </div>

          <div
            className={`editorial-case-study-hero__media${isInternal ? " editorial-case-study-hero__media--contain" : ""}`}
            role={study.heroImage ? "img" : undefined}
            aria-label={study.heroImage ? `${study.name} project hero` : undefined}
            style={study.heroImage ? { backgroundImage: `url(${study.heroImage})` } : undefined}
          >
            {!study.heroImage ? <span>Hero media — approved project image or film</span> : null}
          </div>

          <div className="editorial-case-study-hero__meta">
          <dl className="editorial-case-study-meta">
            <div><dt>Program</dt><dd>{study.lane}</dd></div>
            {study.industry ? <div><dt>Industry</dt><dd>{study.industry}</dd></div> : null}
            {study.stage ? <div><dt>Stage</dt><dd>{study.stage}</dd></div> : null}
            <div><dt>Format</dt><dd>{formatLabel}</dd></div>
          </dl>

          <div className="editorial-case-study-hero__actions">
            {study.liveUrl ? (
              <a className="editorial-link" href={study.liveUrl} target="_blank" rel="noreferrer">
                Visit live project <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <span className="editorial-case-study-placeholder">Live project link — pending</span>
            )}
            {study.slug === "buffer-blaster" ? (
              <Link className="editorial-link" href="/apply">
                I want Buffer Blaster for my company <span aria-hidden="true">↗</span>
              </Link>
            ) : null}
          </div>
          </div>
        </header>
        </Reveal>

        <div className="editorial-case-study-story">
          {study.sections.map((section, index) => (
            <Reveal intensity="strong" key={section.title}>
            <section className="editorial-case-study-story__section">
              <p className="editorial-kicker">0{index + 1}</p>
              <div>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </div>
            </section>
            </Reveal>
          ))}
        </div>

        {study.evidence?.length ? (
          <section className="editorial-case-study-evidence" aria-labelledby="case-evidence-title">
            <p className="editorial-kicker">Evidence</p>
            <h2 id="case-evidence-title">Straight from the live product.</h2>
            <div className="editorial-case-study-evidence__grid">
              {study.evidence.map((item) => (
                <figure key={item.image}>
                  <Image src={item.image} alt={item.caption} width={1600} height={1000} sizes="(max-width: 800px) 100vw, 88vw" />
                  <figcaption>{item.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        ) : null}

        {study.placeholders?.length ? (
          <section className="editorial-case-study-assets" aria-labelledby="case-assets-title">
            <p className="editorial-kicker">Proof still needed</p>
            <div>
              <h2 id="case-assets-title">Complete the story with approved evidence.</h2>
              <div className="editorial-case-study-assets__grid">
                {study.placeholders.map((placeholder) => (
                  <div className="editorial-case-study-placeholder" key={placeholder}>{placeholder}</div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <div className="editorial-case-study-footer">
          <Link className="editorial-link" href={isInternal ? "/built-here" : "/work"}>
            {isInternal ? "Back to Built Here" : "See all work"} <span aria-hidden="true">↗</span>
          </Link>
          <Link className="editorial-link" href="/apply">Tell us what&apos;s important <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </div>
  );
}
