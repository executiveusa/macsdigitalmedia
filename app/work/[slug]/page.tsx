import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { FoundryStage } from "@/components/foundry-stage";
import { RollingTextLink, StaggerItem } from "@/components/motion";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
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

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug === "agent-maxx") {
    permanentRedirect("/maxx");
  }

  const study = getCaseStudy(slug);
  if (!study) notFound();

  const isInternal = study.visibility === "internal";
  const formatLabel = isInternal
    ? "Built Here · In-House System"
    : study.formatLabel ??
      (study.format === "collaboration" ? "Client Collaboration" : "Client Case Study");

  const currentIndex = caseStudies.findIndex((item) => item.slug === study.slug);
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <div className="editorial-page editorial-page--white macs-case-page">
      <div className="editorial-shell">
        <header className="macs-case-hero">
          <div className="macs-case-hero__copy">
            <p className="macs-case-hero__category">
              {study.lane} · {formatLabel}
            </p>
            <h1>{study.name}</h1>
            <p className="macs-case-hero__headline">{study.headline}</p>
            <p className="macs-case-hero__summary">{study.summary}</p>
            {study.collaboration ? (
              <p className="macs-case-hero__credit">{study.collaboration}</p>
            ) : null}
            {study.credit ? (
              <p className="macs-case-hero__credit">{study.credit}</p>
            ) : null}

            <div className="macs-case-hero__actions">
              {study.liveUrl ? (
                <a
                  className="macs-btn macs-btn--primary"
                  href={study.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Visit live site</span>
                  <span className="macs-btn__arrow" aria-hidden="true">↗</span>
                </a>
              ) : (
                <RollingTextLink
                  href={`/apply?program=${study.lane.toLowerCase()}`}
                  label={`Ask about installing ${study.name}`}
                  className="macs-btn macs-btn--primary"
                />
              )}
              <Link className="macs-underline-cta macs-underline-cta--dark" href="/work">
                <span>All selected work</span>
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>

          <dl className="macs-case-meta">
            <div>
              <dt>Program</dt>
              <dd>{study.lane}</dd>
            </div>
            {study.industry ? (
              <div>
                <dt>Category</dt>
                <dd>{study.industry}</dd>
              </div>
            ) : null}
            {study.stage ? (
              <div>
                <dt>Status</dt>
                <dd>{study.stage}</dd>
              </div>
            ) : null}
            <div>
              <dt>Ownership</dt>
              <dd>{isInternal ? "Installed & client-owned" : "100% client-owned"}</dd>
            </div>
          </dl>
        </header>

        {study.slug === "foundry-fleet" ? (
          <div className="macs-case-stage">
            <FoundryStage />
          </div>
        ) : study.heroImage ? (
          <figure className="macs-case-stage">
            <div className="macs-case-stage__frame">
              <Image
                src={study.heroImage}
                alt={`${study.name} showcase preview`}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 90vw"
                className={
                  isInternal
                    ? "macs-case-stage__img macs-case-stage__img--contain"
                    : "macs-case-stage__img"
                }
              />
            </div>
          </figure>
        ) : null}

        <section className="macs-case-tension" aria-labelledby="case-tension-title">
          <div className="macs-case-tension__head">
            <h2 id="case-tension-title">
              {isInternal
                ? `What changes when you install ${study.name}.`
                : `What changed for ${study.name}.`}
            </h2>
          </div>

          <div className="macs-clarity__legend" aria-hidden="true">
            <div className="macs-clarity__legend-col macs-clarity__legend-col--before">
              <span className="macs-clarity__badge macs-clarity__badge--before">×</span>
              <span>Before · What was broken</span>
            </div>
            <div className="macs-clarity__legend-spacer" />
            <div className="macs-clarity__legend-col macs-clarity__legend-col--after">
              <span className="macs-clarity__badge macs-clarity__badge--after">✓</span>
              <span>After · What we delivered</span>
            </div>
          </div>

          <div className="macs-clarity__list" role="list">
            {study.beforeAfter.map((pair) => (
              <StaggerItem className="macs-clarity__pair" key={pair.topic}>
                <div className="macs-clarity__card macs-clarity__card--before" role="listitem">
                  <div className="macs-clarity__meta">
                    <span className="macs-clarity__topic">{pair.topic}</span>
                    <span className="macs-clarity__state macs-clarity__state--before">
                      <span aria-hidden="true">×</span> Before
                    </span>
                  </div>
                  <p className="macs-clarity__text">{pair.before}</p>
                </div>

                <div className="macs-clarity__arrow" aria-hidden="true">
                  <span className="macs-clarity__arrow-desktop">→</span>
                  <span className="macs-clarity__arrow-mobile">↓</span>
                </div>

                <div className="macs-clarity__card macs-clarity__card--after">
                  <div className="macs-clarity__meta">
                    <span className="macs-clarity__topic">{pair.topic}</span>
                    <span className="macs-clarity__state macs-clarity__state--after">
                      <span aria-hidden="true">✓</span> Delivered
                    </span>
                  </div>
                  <p className="macs-clarity__text">{pair.after}</p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </section>

        <section className="macs-case-chapters" aria-label={`${study.name} editorial story`}>
          {study.sections.map((section) => (
            <article className="macs-case-chapter" key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </article>
          ))}
        </section>

        <section className="macs-case-proof" aria-labelledby="case-proof-title">
          <div>
            <h2 id="case-proof-title">
              {isInternal ? `Included with ${study.name}` : "Key deliverables"}
            </h2>
            <ul className="macs-case-proof__list">
              {study.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="macs-case-proof__ownership">{study.ownershipNote}</p>
          </div>
          <div className="macs-case-proof__cta">
            <RollingTextLink
              href={`/apply?program=${study.lane.toLowerCase()}`}
              label={
                isInternal
                  ? `Install ${study.name} for your business`
                  : "Start a project like this"
              }
              className="macs-btn macs-btn--primary"
            />
          </div>
        </section>

        {study.evidence?.length ? (
          <section className="editorial-case-study-evidence" aria-labelledby="case-evidence-title">
            <h2 id="case-evidence-title">Additional proof</h2>
            <div className="editorial-case-study-evidence__grid">
              {study.evidence.map((item) => (
                <figure key={item.image}>
                  <Image src={item.image} alt={item.caption} width={1600} height={1000} />
                  <figcaption>{item.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        ) : null}

        <nav className="macs-case-next" aria-label="Next case study">
          <Link className="macs-underline-cta macs-underline-cta--dark" href="/work">
            <span>Back to all work</span>
            <span aria-hidden="true">↗</span>
          </Link>
          <Link className="macs-case-next__link" href={`/work/${nextStudy.slug}`}>
            <span className="macs-case-next__label">Next showcase</span>
            <strong className="macs-case-next__name">
              {nextStudy.name} <span aria-hidden="true">→</span>
            </strong>
          </Link>
        </nav>
      </div>
    </div>
  );
}
