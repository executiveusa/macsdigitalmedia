import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion";
import { clientWork, maxxSuiteWork } from "@/lib/case-studies";
import { getServerLocale } from "@/lib/server-preferences";
import styles from "./work.module.css";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected MACS Digital Media case studies and collaborations.",
};

const builtHereSlugs = new Set([
  "buffer-blaster",
  "pare",
  "posta-studio",
  "foundry-fleet",
]);

const cardCopy: Record<string, { title: string; line: string }> = {
  "taste-of-nawlins": {
    title: "Taste of Nawlins × MACS",
    line: "New Orleans food, catering and a traveling kitchen with a focused digital home.",
  },
  asc3nd: {
    title: "ASC3ND × MACS",
    line: "A documentary-led public brand built around founders, community work and participation.",
  },
  "buffer-blaster": {
    title: "Buffer Blaster",
    line: "A content engine for your social media.",
  },
  pare: {
    title: "PARÉ",
    line: "Design high-level products without the AI slop problem.",
  },
  "posta-studio": {
    title: "Posta Studio",
    line: "Automate your entire social media presence.",
  },
  "foundry-fleet": {
    title: "Foundry",
    line: "Give your AI agent its own computer.",
  },
};

export default async function WorkPage() {
  const locale = await getServerLocale();
  const es = locale === "es-MX";
  const selectedWork = clientWork.filter((study) =>
    ["taste-of-nawlins", "asc3nd"].includes(study.slug),
  );
  const builtHere = maxxSuiteWork.filter((study) => builtHereSlugs.has(study.slug));

  const renderGrid = (studies: typeof selectedWork) => (
    <div className={styles.grid}>
      {studies.map((study) => {
        const copy = cardCopy[study.slug] ?? {
          title: study.collaboration ?? study.name,
          line: study.headline,
        };

        return (
          <article className={styles.card} key={study.slug}>
            <Link
              className={styles.cardMain}
              href={`/work/${study.slug}`}
              aria-label={`${copy.title}: view project`}
            >
              <span
                className={
                  builtHereSlugs.has(study.slug)
                    ? `${styles.cardMedia} ${styles.cardMediaProduct}`
                    : styles.cardMedia
                }
                data-product={builtHereSlugs.has(study.slug) ? study.slug : undefined}
                aria-hidden="true"
                style={
                  study.heroImage
                    ? { backgroundImage: `url(${study.heroImage})` }
                    : undefined
                }
              />
              <span className={styles.cardCopy}>
                <span className={styles.cardName}>{copy.title}</span>
                <span className={styles.cardRole}>{copy.line}</span>
              </span>
            </Link>
            <div className={styles.cardActions}>
              <Link className={styles.cardDetails} href={`/work/${study.slug}`}>
                {es ? "Ver proyecto" : "View project"}
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );

  return (
    <div className="editorial-page editorial-page--white">
      <div className="editorial-shell">
        <header className={`editorial-page__intro ${styles.intro}`}>
          <p className="editorial-kicker">{es ? "Trabajo" : "Work"}</p>
          <div>
            <h1>
              {es
                ? "Trabajo hecho con gente que está construyendo algo real."
                : "Selected work and collaborations."}
            </h1>
            {es ? (
              <p>
                Casos y colaboraciones. Mostramos el trabajo, aclaramos nuestra
                participación y dejamos que la evidencia hable.
              </p>
            ) : null}
          </div>
        </header>

        <Reveal intensity="strong">
        <section className={styles.index} aria-labelledby="selected-work-title">
          <div className={styles.indexHeading}>
            <h2 id="selected-work-title">
              {es ? "Trabajo seleccionado" : "Selected Work"}
            </h2>
          </div>
          {renderGrid(selectedWork)}
        </section>
        </Reveal>

        <Reveal intensity="strong">
        <section className={styles.index} aria-labelledby="built-here-title">
          <div className={styles.indexHeading}>
            <h2 id="built-here-title">{es ? "Hecho Aquí" : "Built Here"}</h2>
          </div>
          {renderGrid(builtHere)}
        </section>
        </Reveal>

        <div className={styles.footerCta}>
          <Link className="editorial-link" href="/apply">
            {es ? "Cuéntanos qué es importante" : "Tell us what's important"}{" "}
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
