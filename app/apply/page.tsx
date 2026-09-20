import type { Metadata } from "next";
import Link from "next/link";
import { getServerLocale } from "@/lib/server-preferences";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const es = locale === "es-MX";

  return {
    title: es ? "Cuéntanos qué es importante" : "Tell us what's important",
    description: es
      ? "Empieza la conversación con MACS Digital Media."
      : "Book a conversation with MACS Digital Media.",
  };
}

export default async function ApplyPage() {
  const locale = await getServerLocale();
  const es = locale === "es-MX";

  return (
    <section className="section application-page" aria-labelledby="application-title">
      <div className="shell application-layout">
        <div>
          <h1 id="application-title">
            {es ? "Cuéntanos qué es importante." : "Tell us what’s important."}
          </h1>
          <div className="route-cta">
            <Link className="button button--primary" href="/book">
              {es ? "Empezar la conversación" : "Book a conversation"}{" "}
              <span className="button-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
