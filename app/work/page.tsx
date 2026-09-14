import type { Metadata } from "next";
import Link from "next/link";
import { clientWork, maxxSuiteWork } from "@/lib/case-studies";
import { getServerLocale } from "@/lib/server-preferences";
import styles from "./work.module.css";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected MACS Digital Media case studies and collaborations.",
};

export default async function WorkPage() {
  const locale = await getServerLocale();
  const es = locale === "es-MX";
  const quickView = [...clientWork, ...maxxSuiteWork];

  return (
    <div className="editorial-page editorial-page--white">
      <div className="editorial-shell">
        <header className={`editorial-page__intro ${styles.intro}`}>
          <p className="editorial-kicker">{es ? "Trabajo" : "Work"}</p>
          <div>
            <h1>{es ? "Trabajo hecho con gente que está construyendo algo real." : "Work made with people building something real."}</h1>
            <p>{es ? "Casos y colaboraciones. Mostramos el trabajo, aclaramos nuestra participación y dejamos que la evidencia hable." : "Case studies and collaborations. We show the work, make our role clear, and let the evidence do the talking."}</p>
          </div>
        </header>

        <section className={styles.index} aria-labelledby="selected-work-title">
          <div className={styles.indexHeading}>
            <p className="editorial-kicker">{es ? "Trabajo seleccionado" : "Selected Work"}</p>
            <h2 id="selected-work-title">{es ? "El índice. Ábrelo, tócalo, verifícalo." : "The index. Open it, touch it, verify it."}</h2>
          </div>

          <div className={styles.grid}>
            {quickView.map((study, index) => (
              <article className={styles.card} key={study.slug}>
                <Link className={styles.cardMain} href={`/work/${study.slug}`}>
                  <span
                    className={styles.cardMedia}
                    aria-hidden="true"
                    style={study.heroImage ? { backgroundImage: `url(${study.heroImage})` } : undefined}
                  >
                    {!study.heroImage ? <span className={styles.cardPlaceholder}>Media placeholder</span> : null}
                  </span>
                  <span className={styles.cardCopy}>
                    <span className={styles.cardKicker}>
                      {String(index + 1).padStart(2, "0")} · {study.format === "collaboration" ? (es ? "Colaboración" : "Collaboration") : study.format === "product" ? (es ? "Hecho Aquí" : "Built Here") : (es ? "Caso" : "Case Study")}
                    </span>
                    <span className={styles.cardName}>{study.name}</span>
                    <span className={styles.cardRole}>{[study.industry, study.lane].filter(Boolean).join(" · ")}</span>
                  </span>
                </Link>
                {study.liveUrl ? (
                  <a className={styles.cardLive} href={study.liveUrl} target="_blank" rel="noreferrer">
                    {es ? "En vivo" : "Live"} <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <span className={styles.cardLivePending}>{es ? "Enlace en preparación" : "Live link in progress"}</span>
                )}
              </article>
            ))}
          </div>
        </section>

        <div className={styles.footerCta}>
          <Link className="editorial-link" href="/apply">
            {es ? "Cuéntanos qué es importante" : "Tell us what's important"} <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
