import type { Metadata } from "next";
import Link from "next/link";
import { clientWork } from "@/lib/case-studies";
import { getServerLocale } from "@/lib/server-preferences";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected MACS Digital Media case studies and collaborations.",
};

export default async function WorkPage() {
  const locale = await getServerLocale();
  const es = locale === "es-MX";
  const caseStudies = clientWork.filter((study) => study.format === "case-study");
  const collaborations = clientWork.filter((study) => study.format === "collaboration");

  return (
    <div className="editorial-page editorial-page--white">
      <div className="editorial-shell">
        <header className="editorial-page__intro editorial-work-intro">
          <p className="editorial-kicker">{es ? "Trabajo" : "Work"}</p>
          <div>
            <h1>{es ? "Trabajo hecho con gente que está construyendo algo real." : "Work made with people building something real."}</h1>
            <p>{es ? "Casos y colaboraciones. Mostramos el trabajo, aclaramos nuestra participación y dejamos que la evidencia hable." : "Case studies and collaborations. We show the work, make our role clear, and let the evidence do the talking."}</p>
          </div>
        </header>

        <section className="editorial-work-index" aria-labelledby="selected-work-title">
          <div className="editorial-work-index__heading">
            <p className="editorial-kicker">{es ? "Trabajo seleccionado" : "Selected Work"}</p>
            <h2 id="selected-work-title">{es ? "Una vista rápida." : "A quick view."}</h2>
          </div>

          <div className="editorial-work-index__grid">
            {clientWork.map((study, index) => (
              <Link className="editorial-work-card" href={`/work/${study.slug}`} key={study.slug}>
                <span className="editorial-work-card__index">{String(index + 1).padStart(2, "0")}</span>
                <div className="editorial-work-card__media" aria-hidden="true">
                  <span>{study.heroImage ? "Project media" : "Media placeholder"}</span>
                </div>
                <div className="editorial-work-card__copy">
                  <p className="editorial-kicker">{study.format === "collaboration" ? (es ? "Colaboración" : "Collaboration") : (es ? "Caso" : "Case Study")}</p>
                  <h3>{study.name}</h3>
                  <p>{study.headline}</p>
                  <div className="editorial-work-card__meta">
                    <span>{study.lane}</span>
                    {study.industry ? <span>{study.industry}</span> : null}
                    <span aria-hidden="true">↗</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="editorial-work-section" aria-labelledby="case-studies-title">
          <div className="editorial-work-section__heading">
            <p className="editorial-kicker">{es ? "Casos" : "Case Studies"}</p>
            <h2 id="case-studies-title">{es ? "Historias con suficiente evidencia para profundizar." : "Stories with enough evidence to go deeper."}</h2>
          </div>

          <div className="editorial-work-list">
            {caseStudies.map((study) => (
              <Link className="editorial-work-row" href={`/work/${study.slug}`} key={study.slug}>
                <div>
                  <strong>{study.name}</strong>
                  <span>{study.headline}</span>
                </div>
                <div className="editorial-work-row__meta">
                  <span>{study.lane}</span>
                  {study.industry ? <span>{study.industry}</span> : null}
                  <span aria-hidden="true">↗</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="editorial-work-section" aria-labelledby="collaborations-title">
          <div className="editorial-work-section__heading">
            <p className="editorial-kicker">{es ? "Colaboraciones" : "Collaborations"}</p>
            <h2 id="collaborations-title">{es ? "Trabajo hecho junto a fundadores, equipos y socios." : "Work made alongside founders, teams and partners."}</h2>
          </div>

          <div className="editorial-work-list">
            {collaborations.map((study) => (
              <Link className="editorial-work-row" href={`/work/${study.slug}`} key={study.slug}>
                <div>
                  <strong>{study.collaboration ?? study.name}</strong>
                  <span>{study.headline}</span>
                </div>
                <div className="editorial-work-row__meta">
                  <span>{study.lane}</span>
                  {study.industry ? <span>{study.industry}</span> : null}
                  <span aria-hidden="true">↗</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <div className="editorial-work-footer-cta">
          <Link className="editorial-link" href="/apply">
            {es ? "Cuéntanos qué es importante" : "Tell us what's important"} <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
