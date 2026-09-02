import type { Metadata } from "next";
import Link from "next/link";
import { getServerLocale } from "@/lib/server-preferences";

export const metadata: Metadata = {
  title: "Work",
  description: "Documented MACS Digital Media work and Client Zero proof without invented outcomes or borrowed metrics.",
};

const asc3ndReferenceImage =
  "https://raw.githubusercontent.com/executiveusa/asc3nd-frontend-website-/main/apps/site/public/images/asc3nd-site-reference.jpg";

export default async function WorkPage() {
  const locale = await getServerLocale();
  const es = locale === "es-MX";

  return (
    <div className="editorial-page editorial-page--white">
      <div className="editorial-shell">
        <header className="editorial-page__intro">
          <p className="editorial-kicker">{es ? "Trabajo" : "Work"}</p>
          <div>
            <h1>{es ? "Prueba antes que promesas." : "Proof before promises."}</h1>
            <p>{es ? "Solo mostramos trabajo que podemos documentar. Sin métricas prestadas. Sin casos inventados." : "We only show work we can document. No borrowed metrics. No invented case studies."}</p>
          </div>
        </header>

        <article className="editorial-case" id="asc3nd">
          <div
            className="editorial-case__media"
            role="img"
            aria-label="ASC3ND website project reference"
            style={{ backgroundImage: `url(${asc3ndReferenceImage})` }}
          />
          <div className="editorial-case__copy">
            <div>
              <p className="editorial-kicker">01 · ASC3ND</p>
              <h2>{es ? "Sitio público. Sistema operativo detrás." : "Public website. Operating system behind it."}</h2>
            </div>
            <div>
              <p>{es ? "El repositorio documenta tres capas: un frente público en Next.js, una consola operativa reutilizable para onboarding, oportunidades, campañas y aprobaciones, y una base backend reutilizable para flujos de trabajo y contexto organizacional." : "The repository documents three layers: a public Next.js front end, a reusable operations console for onboarding, opportunities, campaigns and approvals, and a reusable backend layer for workflows and organizational context."}</p>
              <p><a className="editorial-link" href="https://asc3nd.org">{es ? "Ver ASC3ND" : "Visit ASC3ND"} <span aria-hidden="true">↗</span></a></p>
            </div>
          </div>
        </article>

        <article className="editorial-case" id="client-zero">
          <div className="editorial-case__copy">
            <div>
              <p className="editorial-kicker">02 · MACS / Client Zero</p>
              <h2>{es ? "Probamos el sistema en nosotros primero." : "We test the system on ourselves first."}</h2>
            </div>
            <div>
              <p>{es ? "MACS es donde probamos contexto, aprobaciones, evidencia, portabilidad y límites antes de convertir una idea en algo que un cliente tenga que confiar." : "MACS is where we test context, approvals, evidence, portability and boundaries before turning an idea into something a client has to trust."}</p>
              <p>{es ? "Eso no es un resultado de cliente. Es evidencia de nuestro estándar de trabajo." : "That is not a client outcome. It is evidence of our working standard."}</p>
            </div>
          </div>
        </article>

        <Link className="editorial-link" href="/apply">
          {es ? "Cuéntanos qué está atorado" : "Tell us what's stuck"} <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </div>
  );
}
