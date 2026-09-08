import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getInsight, listInsights } from "@/lib/editorial";
import styles from "../insights.module.css";

export function generateStaticParams() {
  return listInsights().filter((article) => article.status !== "archived").map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) return {};
  return { title: `${article.title} | MACS Digital Media`, description: article.dek };
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article || article.status === "archived") notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.dek,
    author: { "@type": "Organization", name: article.author },
    publisher: { "@type": "Organization", name: "MACS Digital Media" },
    ...(article.publishedAt ? { datePublished: article.publishedAt } : {}),
  };

  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article className={`${styles.shell} ${styles.article}`}>
        <Link className={styles.back} href="/insights">← MACS Insights</Link>
        <header className={styles.articleHeader}>
          <p className={styles.eyebrow}>{article.status === "published" ? "MACS Insight" : "Editorial Preview"}</p>
          <h1 className={styles.articleTitle}>{article.title}</h1>
          <p className={styles.articleDek}>{article.dek}</p>
        </header>

        <div className={styles.body}>
          {article.sections.map((section, index) => {
            const sectionClass = [styles.section, section.type === "lead" ? styles.lead : "", section.type === "statement" ? styles.statement : ""].filter(Boolean).join(" ");

            if (section.type === "contrast") {
              return (
                <section className={sectionClass} key={`${section.type}-${index}`}>
                  {section.heading ? <h2>{section.heading}</h2> : null}
                  <div className={styles.contrast}>
                    <div className={styles.contrastBlock}><div className={styles.contrastLabel}>Dependency</div><p>{section.before}</p></div>
                    <div className={styles.contrastBlock}><div className={styles.contrastLabel}>Capability</div><p>{section.after}</p></div>
                  </div>
                </section>
              );
            }

            return (
              <section className={sectionClass} key={`${section.type}-${index}`}>
                {section.heading ? <h2>{section.heading}</h2> : null}
                {section.body ? <p>{section.body}</p> : null}
              </section>
            );
          })}

          {article.cta ? <Link className={styles.cta} href={article.cta.href}>{article.cta.label} →</Link> : null}

          <aside className={styles.sources} aria-label="Editorial provenance">
            <strong>Editorial provenance</strong>
            <ul>{article.sources.map((source) => <li key={source.label}>{source.label}</li>)}</ul>
          </aside>
        </div>
      </article>
    </main>
  );
}
