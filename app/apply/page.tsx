import type { Metadata } from "next";
import { ApplicationForm } from "@/components/application-form";
import { Reveal } from "@/components/motion";
import { businessFirstCopy } from "@/lib/business-first-copy";
import { getServerLocale } from "@/lib/server-preferences";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  return {
    title: locale === "es-MX" ? "Empieza con un Diagnóstico Digital MAX" : "Start a MAX Digital Checkup",
    description: locale === "es-MX"
      ? "Cuéntanos qué está frenando tu negocio. MACS investiga primero y recomienda qué vale la pena corregir antes de construir."
      : "Tell MACS what is getting in the way. We research first and recommend what is worth fixing before implementation begins.",
  };
}

export default async function ApplyPage() {
  const locale = await getServerLocale();
  const copy = businessFirstCopy[locale];
  const es = locale === "es-MX";

  return (
    <section className="bf-section bf-apply" aria-labelledby="application-title">
      <div className="shell bf-apply__layout">
        <Reveal>
          <div>
            <p className="bf-kicker bf-kicker--ink">MAX Digital Checkup</p>
            <h1 id="application-title" className="bf-display bf-display--section">
              {es ? "Cuéntanos qué se está interponiendo." : "Tell us what’s getting in the way."}
            </h1>
            <p className="bf-intro">
              {es
                ? "No necesitas diagnosticar el problema por nosotros. Cuéntanos qué estás viendo, qué resultado quieres y dónde sientes la fricción. Investigaremos el negocio antes de recomendar una construcción."
                : "You do not need to diagnose the problem for us. Tell us what you are seeing, what result you want, and where the friction seems to be. We will research the business before recommending a build."}
            </p>

            <div className="bf-apply__price">
              <strong>{copy.checkup.price}</strong>
              <p>{copy.checkup.priceNote}</p>
            </div>

            <div className="bf-apply__expect">
              <p className="bf-kicker bf-kicker--ink">{es ? "Qué pasa después" : "What happens next"}</p>
              <ol>
                <li>{es ? "Revisamos tu negocio, sitio, reputación, recorrido del cliente y mercado." : "We review your business, website, reputation, customer journey, and market."}</li>
                <li>{es ? "Marcamos lo verificado, inferido y lo que todavía no sabemos." : "We separate what is verified, inferred, and still unknown."}</li>
                <li>{es ? "Te hacemos sólo las preguntas que la investigación no pudo contestar." : "We ask only the questions the research could not answer."}</li>
                <li>{es ? "Entregamos un diagnóstico priorizado y el siguiente movimiento de mayor valor." : "We deliver a ranked diagnosis and the highest-value next move."}</li>
              </ol>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="bf-apply__form">
            <ApplicationForm submitLabel={es ? "Enviar para diagnóstico" : "Submit for Checkup"} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
