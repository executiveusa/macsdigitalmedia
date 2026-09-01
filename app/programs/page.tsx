import type { Metadata } from "next";
import Link from "next/link";
import { getServerLocale } from "@/lib/server-preferences";

export const metadata: Metadata = {
  title: "Programs",
  description: "Four business situations where MACS Digital Media steps in and takes responsibility for the digital work around the business.",
};

export default async function ProgramsPage() {
  const locale = await getServerLocale();
  const es = locale === "es-MX";

  const programs = es
    ? [
        ["reset", "Reset", "Cuando el negocio se fue llenando de herramientas, proveedores y pendientes que ya no trabajan juntos.", "Empezamos por entender qué sirve, qué estorba y qué debe volver a quedar bajo control del dueño."],
        ["momentum", "Momentum", "Cuando el negocio es bueno, pero no suficiente gente lo está viendo o recordando.", "Contenido, UGC, distribución y seguimiento trabajan juntos para mantener al negocio visible sin convertir al dueño en creador de tiempo completo."],
        ["scale", "Scale", "Cuando el crecimiento ya rebasó la forma en que el equipo organiza información, seguimiento y decisiones.", "Construimos una base operativa más clara para que el negocio no dependa de memoria, pestañas abiertas o una sola persona que sabe cómo funciona todo."],
        ["launch", "Launch", "Cuando algo nuevo necesita posicionamiento, presencia, contenido, distribución y una operación que aguante después del lanzamiento.", "Juntamos las piezas necesarias alrededor del resultado, sin vender una lista de servicios por separado."],
      ]
    : [
        ["reset", "Reset", "When the business filled up with tools, vendors and loose ends that no longer work together.", "We start by finding what works, what gets in the way, and what needs to come back under the owner's control."],
        ["momentum", "Momentum", "When the business is good, but not enough people are seeing it or remembering it.", "Content, UGC, distribution and follow-up work together without turning the owner into a full-time content creator."],
        ["scale", "Scale", "When growth has outpaced the way the team handles information, follow-up and decisions.", "We build a clearer operating backbone so the business does not depend on memory, open tabs or one person who knows how everything works."],
        ["launch", "Launch", "When something new needs positioning, presence, content, distribution and an operation that still works after launch day.", "We bring the necessary pieces together around the outcome instead of selling a disconnected list of services."],
      ];

  return (
    <div className="editorial-page">
      <div className="editorial-shell">
        <header className="editorial-page__intro">
          <p className="editorial-kicker">{es ? "Programas" : "Programs"}</p>
          <div>
            <h1>{es ? "Entramos cuando el negocio necesita que alguien vea el cuadro completo." : "We step in when the business needs someone to see the whole picture."}</h1>
            <p>{es ? "Los nombres siguen siendo de trabajo. La regla ya está fija: empezamos por la situación del cliente, no por una lista de entregables." : "The names are still working names. The rule is already fixed: start with the client's situation, not a list of deliverables."}</p>
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
          {es ? "Veamos si uno de estos encaja" : "See if one of these fits"} <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </div>
  );
}
