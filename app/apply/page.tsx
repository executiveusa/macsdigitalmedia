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
          <h1 id="application-title">
            {es ? "Cuéntanos qué es importante." : "Tell us what’s important."}
          </h1>
          <p>
            {es
              ? "No necesitas un brief técnico. Cuéntanos qué quieres lograr y qué está frenando tu crecimiento."
              : "You do not need a technical brief. Tell us what you want to grow and what is getting in the way."}
          </p>
          <div className="macs-next-steps">
            <h2>{es ? "Qué pasa después de enviar" : "What happens after you send this"}</h2>
            <ol>
              <li>
                {es
                  ? "Stacy y el equipo leen tu nota directamente (sin bots de ventas)."
                  : "Stacy and our team read your note directly, never an outsourced sales script."}
              </li>
              <li>
                {es
                  ? "Respondemos en menos de 1 día hábil con observaciones claras."
                  : "We reply within one business day with plain-English observations."}
              </li>
              <li>
                {es
                  ? "Si conviene, agendamos una llamada de 15 minutos y definimos si una prueba de 14 días tiene sentido."
                  : "If it looks like a fit, we book a 15-minute call and see if a 14-day proof sprint makes sense."}
              </li>
            </ol>
          </div>
        </header>
        <ApplicationForm />
      </div>
    </section>
  );
}
