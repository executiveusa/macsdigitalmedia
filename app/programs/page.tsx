import type { Metadata } from "next";
import Link from "next/link";
import { getServerLocale } from "@/lib/server-preferences";

export const metadata: Metadata = {
  title: "Programs",
  description: "Four ways MACS Digital Media begins an ongoing technology partnership with owner-led businesses: Reset, Momentum, Scale and Launch.",
};

export default async function ProgramsPage() {
  const locale = await getServerLocale();
  const es = locale === "es-MX";

  const programs = es
    ? [
        ["reset", "Reset", "Cuando el sitio web, las herramientas y los flujos digitales están creando más fricción que progreso.", "Empezamos por ordenar la base: auditamos lo que existe, conservamos lo que sirve, eliminamos duplicación y dejamos una estructura más clara para seguir mejorando."],
        ["momentum", "Momentum", "Cuando el negocio necesita atención constante, mejor contenido y seguimiento más confiable.", "Construimos un ritmo repetible para contenido, distribución, UGC y seguimiento para que el crecimiento no dependa de campañas aisladas ni de que el dueño haga todo."],
        ["scale", "Scale", "Cuando el volumen ya rebasó la forma en que el equipo maneja información, decisiones y trabajo.", "Conectamos automatización, IA, conocimiento, aprobaciones y seguimiento para que el negocio pueda manejar más trabajo sin sumar más caos."],
        ["launch", "Launch", "Cuando una nueva oferta, producto o iniciativa necesita un sistema completo detrás.", "Unimos posicionamiento, sitio, contenido, distribución, captura de demanda y seguimiento para que el lanzamiento tenga una operación que continúe después del primer impulso."],
      ]
    : [
        ["reset", "Reset", "When the website, tools and digital workflows are creating more friction than progress.", "We start by cleaning up the foundation: audit what exists, keep what works, remove overlap and leave a clearer system that can keep improving."],
        ["momentum", "Momentum", "When the business needs consistent attention, stronger content and more reliable follow-up.", "We build a repeatable rhythm for content, distribution, UGC and follow-up so growth does not depend on isolated campaigns or the owner doing everything."],
        ["scale", "Scale", "When volume has outgrown the way the team handles information, decisions and work.", "We connect automation, AI, knowledge, approvals and follow-up so the business can handle more work without adding more chaos."],
        ["launch", "Launch", "When a new offer, product or initiative needs a complete system behind it.", "We connect positioning, website, content, distribution, demand capture and follow-up so the launch has an operation that keeps working after the first push."],
      ];

  return (
    <div className="editorial-page">
      <div className="editorial-shell">
        <header className="editorial-page__intro">
          <p className="editorial-kicker">{es ? "Cuatro caminos" : "Four partnership lanes"}</p>
          <div>
            <h1>{es ? "Un socio tecnológico. Cuatro formas de empezar." : "One technology partner. Four ways to start."}</h1>
            <p>{es ? "No son cuatro servicios sueltos. Son cuatro puntos de entrada a una relación continua. Empezamos por el problema más urgente y seguimos con el negocio conforme cambian las prioridades." : "These are not four disconnected services. They are four entry points into an ongoing relationship. We start with the most urgent pressure point and stay with the business as priorities change."}</p>
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
          {es ? "Empezar la conversación" : "Start the conversation"} <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </div>
  );
}
