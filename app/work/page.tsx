import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";
import { getServerLocale } from "@/lib/server-preferences";

export const metadata: Metadata = {
  title: "Work",
  description: "Documented MACS Digital Media work organized around Reset, Momentum, Scale and Launch.",
};

const bucketOrder = ["Reset", "Momentum", "Scale", "Launch"] as const;

const bucketLines: Record<(typeof bucketOrder)[number], { en: string; es: string }> = {
  Reset: {
    en: "Fix what is getting in the way. Make the path clear again.",
    es: "Arregla lo que estorba. Vuelve a dejar claro el camino.",
  },
  Momentum: {
    en: "Stay visible. Turn attention into opportunity.",
    es: "Mantente visible. Convierte atención en oportunidad.",
  },
  Scale: {
    en: "The idea is working. Grow without complexity.",
    es: "La idea funciona. Crece sin complejidad.",
  },
  Launch: {
    en: "Put the idea in front of the right people. Learn what earns a yes.",
    es: "Pon la idea frente a las personas correctas. Aprende qué obtiene un sí.",
  },
};

export default async function WorkPage() {
  const locale = await getServerLocale();
  const es = locale === "es-MX";

  return (
    <div className="editorial-page editorial-page--white">
      <div className="editorial-shell">
        <header className="editorial-page__intro">
          <p className="editorial-kicker">{es ? "Trabajo" : "Work"}</p>
          <div>
            <h1>{es ? "Cuatro formas de empezar. El trabajo detrás de cada una." : "Four ways to start. The work behind each one."}</h1>
            <p>{es ? "Mostramos lo que podemos documentar. Sin métricas prestadas. Sin casos inventados." : "We show what we can document. No borrowed metrics. No invented case studies."}</p>
          </div>
        </header>

        {bucketOrder.map((bucket, bucketIndex) => {
          const studies = caseStudies.filter((study) => study.lane === bucket);

          return (
            <section className="editorial-case" id={bucket.toLowerCase()} key={bucket}>
              <div className="editorial-case__copy">
                <div>
                  <p className="editorial-kicker">{String(bucketIndex + 1).padStart(2, "0")}</p>
                  <h2>{bucket}</h2>
                </div>
                <div>
                  <p>{es ? bucketLines[bucket].es : bucketLines[bucket].en}</p>
                </div>
              </div>

              {studies.length ? (
                studies.map((study, projectIndex) => (
                  <article key={study.slug}>
                    <Link
                      className="editorial-case__placeholder"
                      href={`/work/${study.slug}`}
                      aria-label={`${study.name} case study`}
                    >
                      <span className="editorial-case__placeholder-index">
                        {String(bucketIndex + 1).padStart(2, "0")}.{projectIndex + 1}
                      </span>
                      <strong>{study.name}</strong>
                      <span>{study.lane}</span>
                      <span className="editorial-case__placeholder-mark" aria-hidden="true">↗</span>
                    </Link>
                    <div className="editorial-case__copy">
                      <div>
                        <p className="editorial-kicker">{study.lane}</p>
                        <h2>{study.name}</h2>
                        {study.credit ? <p>{study.credit}</p> : null}
                      </div>
                      <div>
                        <p>{study.summary}</p>
                        <p>
                          <Link className="editorial-link" href={`/work/${study.slug}`}>
                            {es ? "Ver el caso" : "Read the case study"} <span aria-hidden="true">↗</span>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </article>
                ))
              ) : (
                <div className="editorial-case__placeholder" aria-label="Reset case study placeholder">
                  <span className="editorial-case__placeholder-index">01.1</span>
                  <strong>{es ? "Caso pendiente" : "Case study placeholder"}</strong>
                  <span>Reset</span>
                </div>
              )}
            </section>
          );
        })}

        <Link className="editorial-link" href="/apply">
          {es ? "Cuéntanos qué es importante" : "Tell us what's important"} <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </div>
  );
}
