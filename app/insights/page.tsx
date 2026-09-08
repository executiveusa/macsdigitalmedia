import type { Metadata } from "next";
import Link from "next/link";
import { listInsights } from "@/lib/editorial";
import styles from "./insights.module.css";

export const metadata: Metadata = {
  title: "Insights | MACS Digital Media",
  description: "Field notes on ownership, operations, technology, and building businesses that stay manageable.",
};

export default function InsightsPage() {
  const articles = listInsights().filter((article) => article.status !== "archived");

  return (
    <main className={styles.page}>
      <section className={styles.mast}>
        <div className={styles.shell}>
          <p className={styles.eyebrow}>MACS Insights</p>
          <h1 className={styles.title}>Ideas for businesses that intend to stay theirs.</h1>
          <p className={styles.dek}>Notes on ownership, operations, technology, and the choices that make a business easier to run instead of harder to leave.</p>
        </div>
      </section>

      <section className={`${styles.shell} ${styles.index}`} aria-label="MACS Insights articles">
        {articles.map((article) => (
          <Link className={styles.card} href={`/insights/${article.slug}`} key={article.id}>
            <div>
              <p className={styles.eyebrow}>{article.status === "published" ? "Insight" : "Preview"}</p>
              <h2>{article.title}</h2>
              <p>{article.dek}</p>
            </div>
            <p className={styles.meta}>Read the story →</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
