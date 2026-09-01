import type { Metadata } from "next";
import Link from "next/link";
import { getServerLocale } from "@/lib/server-preferences";

export const metadata: Metadata = {
  title: "Programs",
  description: "Four business situations where MACS Digital Media helps owner-led businesses bring digital work back under control.",
};

export default async function ProgramsPage() {
  const locale = await getServerLocale();
  const es = locale === "es-MX";

  const programs = es
    ? [
        ["reset", "Reset", "Cuando demasiadas herramientas, proveedores y pendientes ya no trabajan juntos.", "Auditamos lo que existe, conservamos lo que sirve, eliminamos duplicación y devolvemos al dueño el control de los sistemas importantes."],
        ["momentum", "Momentum", "Cuando el negocio es bueno, pero la atención y el seguimiento son inconsistentes.", "Conectamos contenido, distribución y seguimiento en un ritmo repetible sin convertir al dueño en creador de contenido de tiempo completo."],
        ["scale", "Scale", "Cuando el crecimiento ya rebasó la forma en que se manejan la información, las decisiones y el trabajo.", "Construimos una base operativa más clara para información, seguimiento, aprobaciones y responsabilidades."],
        ["launch", "Launch", "Cuando una nueva oferta necesita un sistema detrás, no solo una campaña de lanzamiento.", "Unimos posicionamiento, presencia pública, contenido, distribución y seguimiento alrededor de un solo lanzamiento."],
      ]
    : [
        ["reset", "Reset", "When too many tools, vendors and loose ends no longer work together.", "We audit what exists, keep what works, remove overlap and put the important systems back under the owner's control."],
        ["momentum", "Momentum", "When the business is good, but attention and follow-up are inconsistent.", "We connect content, distribution and follow-up into a repeatable rhythm without turning the owner into a full-time creator."],
        ["scale", "Scale", "When growth has outpaced the way information, decisions and work get handled.", "We build a clearer operating backbone for information, follow-up, approvals and responsibilities."],
        ["launch", "Launch", "When a new offer needs a working system behind it, not just a launch campaign.", "We bring positioning, public presence, content, distribution and follow-up together around one launch."],
      ];

  return (
    <div className="editorial-page">
      <div className="editorial-shell">
        <header className="editorial-page__intro">
          <p className="editorial-kicker">{es ? "Programas" : "Programs"}</p>
          <div>
            <h1>{es ? "Entramos cuando el trabajo digital necesita un dueño claro." : "We step in when the digital work needs a clear owner."}</h1>
            <p>{es ? "Elige la situación que más se parece a la tuya. Empezamos por el cuello de botella y construimos solo lo necesario para mover el negocio." : "Choose the situation that feels familiar. We start with the bottleneck and build only what the business needs to move."}</p>
          </div>
        </header>

        {programs.map(([id, name, situation, response]) => (
          <section className="editorial-program-detail" id={id} key={id}>
            <p className="editorial-kicker">{name}</p>
            <h2>{situation}</h2>
            <p>{response}</p>
          </section>
        ))}

        <Link className="editorial-link" href="/apply">
          {es ? "Cuéntanos qué está atorado" : "Tell us what's stuck"} <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </div>
  );
}
