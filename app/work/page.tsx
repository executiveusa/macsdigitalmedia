import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";
import { getServerLocale } from "@/lib/server-preferences";

export const metadata: Metadata = {
  title: "Work",
  description: "Documented MACS Digital Media work and Client Zero proof without invented outcomes or borrowed metrics.",
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
            <h1>{es ? "Prueba antes que promesas." : "Proof before promises."}</h1>
            <p>{es ? "Solo mostramos trabajo que podemos documentar. Sin métricas prestadas. Sin casos inventados." : "We only show work we can document. No borrowed metrics. No invented case studies."}</p>
          </div>
        </header>

        {caseStudies.map((study, index) => (
          <article className="editorial-case" id={study.slug} key={study.slug}>
            {study.heroImage ? (
              <div
                className="editorial-case__media"
                role="img"
                aria-label={`${study.name} project reference`}
                style={{ backgroundImage: `url(${study.heroImage})` }}
              />
            ) : null}
            <div className="editorial-case__copy">
              <div>
                <p className="editorial-kicker">{String(index + 1).padStart(2, "0")} · {study.lane}</p>
                <h2>{study.name}</h2>
                {study.credit ? <p>{study.credit}</p> : null}
              </div>
              <div>
                <p>{study.summary}</p>
                <p>
                  <Link className="editorial-link" href={`/work/${study.slug}`}>
                    Read the case study <span aria-hidden="true">↗</span>
                  </Link>
                </p>
              </div>
            </div>
          </article>
        ))}

        <Link className="editorial-link" href="/apply">
          {es ? "Cuéntanos qué es importante" : "Tell us what's important"} <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </div>
  );
}
