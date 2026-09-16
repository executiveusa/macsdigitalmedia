import type { Metadata } from "next";
import Link from "next/link";
import { getServerLocale } from "@/lib/server-preferences";

export const metadata: Metadata = {
  title: "Programs",
  description: "Reset, Momentum, Scale and Launch: four ways to start with MACS Digital Media.",
};

export default async function ProgramsPage() {
  const locale = await getServerLocale();
  const es = locale === "es-MX";

  const programs = es
    ? [
        ["reset", "Reset", "Arregla lo que está estorbando.", "Ordenamos sitio web, herramientas y flujos que están haciendo más difícil el trabajo."],
        ["momentum", "Momentum", "Mantente visible. Convierte atención en oportunidad.", "Creamos un ritmo más simple para contenido, distribución y seguimiento."],
        ["scale", "Scale", "La idea funciona. Crece sin complejidad.", "Conectamos lo que ya funciona para que el negocio pueda manejar más sin sumar más caos."],
        ["launch", "Launch", "Convierte nuevas ideas en campañas de marca.", "Construimos sitio, contenido y seguimiento alrededor de lo que vas a llevar al mercado."],
      ]
    : [
        ["reset", "Reset", "Fix what’s getting in the way.", "We clean up the website, tools and workflows making the work harder than it needs to be."],
        ["momentum", "Momentum", "Stay visible. Turn attention into opportunity.", "We build a simpler rhythm for content, distribution and follow-up."],
        ["scale", "Scale", "The idea is working. Grow without complexity.", "We connect what already works so the business can handle more without adding more chaos."],
        ["launch", "Launch", "Turn new ideas into branded campaigns.", "We build the site, content and follow-up around what you are bringing to market."],
      ];

  return (
    <div className="editorial-page">
      <div className="editorial-shell">
        <header className="editorial-page__intro">
          <div>
            <h1>{es ? "Cuatro formas de empezar." : "Four ways to start."}</h1>
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
          {es ? "Cuéntanos qué es importante" : "Tell us what's important"} <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </div>
  );
}
