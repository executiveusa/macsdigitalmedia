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
          <div>
            <h1>{es ? "Trabajo hecho con gente que está construyendo algo real." : "Work made with people building something real."}</h1>
            <p>{es ? "Mostramos el trabajo. Aclaramos nuestra participación. La evidencia habla." : "We show the work. We make our role clear. The evidence speaks."}</p>
          </div>
        </header>

        <section className={styles.index} aria-labelledby="selected-work-title">
          <div className={styles.indexHeading}>
            <p className="editorial-kicker">{es ? "Trabajo seleccionado" : "Selected Work"}</p>
            <h2 id="selected-work-title">{es ? "Ábrelo. Míralo. Verifícalo." : "Open it. See it. Verify it."}</h2>
          </div>

          <div className={styles.grid}>
            {quickView.map((study, index) => (
              <article className={styles.card} key={study.slug}>
                {study.liveUrl && study.liveAvailable !== false ? (
                  <a className={styles.cardMain} href={study.liveUrl} target="_blank" rel="noreferrer" aria-label={`${study.name}: open live project`}>
                    <span className={styles.cardMedia} aria-hidden="true" style={study.heroImage ? { backgroundImage: `url(${study.heroImage})` } : undefined}>
                      {!study.heroImage ? <span className={styles.cardPlaceholder}>Media coming soon</span> : null}
                    </span>
                    <span className={styles.cardCopy}>
                      <span className={styles.cardKicker}>{String(index + 1).padStart(2, "0")} · {study.format === "collaboration" ? (es ? "Colaboración" : "Collaboration") : study.format === "product" ? (es ? "Hecho Aquí" : "Built Here") : (es ? "Caso" : "Case Study")}</span>
                      <span className={styles.cardName}>{study.name}</span>
                      <span className={styles.cardRole}>{[study.industry, study.lane].filter(Boolean).join(" · ")}</span>
                    </span>
                  </a>
                ) : (
                  <Link className={styles.cardMain} href={`/work/${study.slug}`} aria-label={`${study.name}: view case details`}>
                    <span className={styles.cardMedia} aria-hidden="true" style={study.heroImage ? { backgroundImage: `url(${study.heroImage})` } : undefined}>
                      {!study.heroImage ? <span className={styles.cardPlaceholder}>Media coming soon</span> : null}
                    </span>
                    <span className={styles.cardCopy}>
                      <span className={styles.cardKicker}>{String(index + 1).padStart(2, "0")} · {study.format === "collaboration" ? (es ? "Colaboración" : "Collaboration") : study.format === "product" ? (es ? "Hecho Aquí" : "Built Here") : (es ? "Caso" : "Case Study")}</span>
                      <span className={styles.cardName}>{study.name}</span>
                      <span className={styles.cardRole}>{[study.industry, study.lane].filter(Boolean).join(" · ")}</span>
                    </span>
                  </Link>
                )}
                <div className={styles.cardActions}>
                  {study.liveUrl && study.liveAvailable !== false ? (
                    <a className={styles.cardLive} href={study.liveUrl} target="_blank" rel="noreferrer">{es ? "Abrir proyecto" : "Open live project"} <span aria-hidden="true">↗</span></a>
                  ) : (
                    <span className={styles.cardLivePending}>{es ? "Próximamente" : "Coming soon"}</span>
                  )}
                  <Link className={styles.cardDetails} href={`/work/${study.slug}`}>{es ? "Detalles" : "Details"}</Link>
                </div>
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
