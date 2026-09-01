import type { Metadata } from "next";
import Link from "next/link";
import { getServerLocale } from "@/lib/server-preferences";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected MACS Digital Media work and build-in-public operating-system proof.",
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
            <h1>{es ? "Menos promesas. Más cosas que se pueden ver." : "Fewer promises. More things you can actually see."}</h1>
            <p>{es ? "Esta biblioteca empieza pequeña a propósito. Solo entra trabajo que podamos mostrar sin inventar resultados." : "This library starts small on purpose. Only work we can show without inventing outcomes belongs here."}</p>
          </div>
        </header>

        <article className="editorial-case" id="asc3nd">
          <div
            className="editorial-case__media"
            role="img"
            aria-label="ASC3ND website project reference"
            style={{ backgroundImage: "url(https://asc3nd.org/images/asc3nd-site-reference.jpg)" }}
          />
          <div className="editorial-case__copy">
            <div>
              <p className="editorial-kicker">01 · ASC3ND</p>
              <h2>{es ? "Una misión pública con una base operativa detrás." : "A public mission with an operating backbone behind it."}</h2>
            </div>
            <div>
              <p>{es ? "ASC3ND es una organización de propósito social en Seattle. El trabajo documentado incluye un frente público en Next.js y una base reutilizable para onboarding, oportunidades, campañas, aprobaciones y contexto de operación." : "ASC3ND is a Seattle social-purpose organization. The documented work includes a Next.js public front end and a reusable operating layer for onboarding, opportunities, campaigns, approvals and organizational context."}</p>
              <p><a className="editorial-link" href="https://asc3nd.org">{es ? "Ver ASC3ND" : "Visit ASC3ND"} <span aria-hidden="true">↗</span></a></p>
            </div>
          </div>
        </article>

        <article className="editorial-case" id="client-zero">
          <div className="editorial-case__copy">
            <div>
              <p className="editorial-kicker">02 · MACS / Client Zero</p>
              <h2>{es ? "Primero lo probamos en nosotros." : "We test it on ourselves first."}</h2>
            </div>
            <div>
              <p>{es ? "MACS usa su propia empresa como Cliente Cero para probar contexto, aprobaciones, evidencia, portabilidad y los límites de lo que un agente debe poder hacer antes de ponerlo frente a un cliente." : "MACS uses its own company as Client Zero to test context, approvals, evidence, portability and the limits of what an agent should be allowed to do before putting it in front of a client."}</p>
              <p>{es ? "Eso no es un resultado de cliente. Es evidencia del estándar que usamos antes de convertir una idea en una oferta." : "That is not a client result. It is evidence of the standard we use before turning an idea into an offer."}</p>
            </div>
          </div>
        </article>

        <Link className="editorial-link" href="/apply">
          {es ? "Hablar de tu situación" : "Talk about your situation"} <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </div>
  );
}
