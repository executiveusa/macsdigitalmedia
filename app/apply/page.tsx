import type { Metadata } from "next";
import { ApplicationForm } from "@/components/application-form";
import { getServerLocale } from "@/lib/server-preferences";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const es = locale === "es-MX";
  return {
    title: es ? "Cuéntanos qué es importante" : "Tell us what's important",
    description: es
      ? "Cuéntanos qué estás intentando lograr y qué se interpone."
      : "Tell MACS what you are trying to accomplish and what is getting in the way.",
  };
}

export default async function ApplyPage() {
  const locale = await getServerLocale();
  const es = locale === "es-MX";

  return (
    <section className="section application-page application-page--intake" aria-labelledby="application-title">
      <div className="shell intake-layout">
        <header className="intake-intro">
          <p className="editorial-kicker">MACS Digital Media</p>
          <h1 id="application-title">
            {es ? "Cuéntanos qué es importante." : "Tell us what’s important."}
          </h1>
          <p>
            {es
              ? "No necesitas un brief técnico. Cuéntanos qué quieres lograr y qué se interpone."
              : "You don’t need a technical brief."}
          </p>
        </header>
        <ApplicationForm />
      </div>
    </section>
  );
}
