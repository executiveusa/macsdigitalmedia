import type { Metadata } from "next";
import Link from "next/link";
import { getServerLocale } from "@/lib/server-preferences";

export const metadata: Metadata = {
  title: "Programs",
  description: "Four ways to start with MACS Digital Media: Reset, Momentum, Scale and Launch.",
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
        ["reset", "Reset", "Simplify what got complicated.", "We help you clean up the digital side of the business and build the systems to help you grow."],
        ["momentum", "Momentum", "We help you show up consistently online, build in public and turn attention to opportunity.", ""],
        ["scale", "Scale", "The idea is working. Grow without complexity.", "We use social campaigns and automation to simplify your growth."],
        ["launch", "Launch", "Bring your next idea or project to market.", "We help you take the idea from concept to launch without having to figure out the digital side yourself."],
      ];

  return (
    <div className="editorial-page">
      <div className="editorial-shell">
        <header className="editorial-page__intro">
          <div>
            <h1>{es ? "Un socio tecnológico. Cuatro formas de empezar." : "Four ways to start"}</h1>
          </div>
        </header>

        {programs.map(([id, name, line, response]) => (
          <section className="editorial-program-detail" id={id} key={id}>
            <p className="editorial-kicker">{name}</p>
            {line ? <h2>{line}</h2> : null}
            {response ? <p>{response}</p> : null}
          </section>
        ))}

        <Link className="editorial-link" href="/apply">
          {es ? "Empezar la conversación" : "Tell us what's important"} <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </div>
  );
}
