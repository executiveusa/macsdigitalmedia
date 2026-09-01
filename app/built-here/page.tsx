import type { Metadata } from "next";
import Link from "next/link";
import { getServerLocale } from "@/lib/server-preferences";

export const metadata: Metadata = {
  title: "Built Here",
  description: "Tools and experiments MACS Digital Media built because they helped the team do better work for real businesses.",
};

export default async function BuiltHerePage() {
  const locale = await getServerLocale();
  const es = locale === "es-MX";

  const items = es
    ? [
        ["agent-maxx", "01", "Agent MAXX", "Lo construimos para que un dueño pueda conversar con el contexto, las aprobaciones, el avance y la evidencia sin aprender la arquitectura detrás."],
        ["buffer-blaster", "02", "Buffer Blaster", "Un motor interno de operaciones de contenido para investigar, producir, evaluar y programar más trabajo sin convertir al cliente en operador del sistema."],
        ["home-team", "03", "Home Team AI Lab", "Probamos modelos pequeños, locales y abiertos con tareas reales de negocio para saber cuándo sí sirven antes de pagar por más complejidad."],
      ]
    : [
        ["agent-maxx", "01", "Agent MAXX", "We built it so an owner can work with context, approvals, progress and evidence without learning the architecture underneath."],
        ["buffer-blaster", "02", "Buffer Blaster", "An internal content-operations engine for research, production, scoring and scheduling so the client does not have to become the system operator."],
        ["home-team", "03", "Home Team AI Lab", "We test smaller local and open models on real business tasks so we know when they are enough before paying for more complexity."],
      ];

  return (
    <div className="editorial-page editorial-page--blue">
      <div className="editorial-shell">
        <header className="editorial-page__intro">
          <p className="editorial-kicker">{es ? "Hecho aquí" : "Built Here"}</p>
          <div>
            <h1>{es ? "Construimos cosas cuando ayudan al trabajo. No para llenar un catálogo." : "We build things when they make the work better. Not to fill a catalog."}</h1>
            <p>{es ? "La mayoría de estas herramientas son ventaja interna. Si algún día una merece convertirse en producto, primero tiene que demostrarlo en trabajo real." : "Most of these tools are internal leverage. If one ever deserves to become a product, it has to prove itself in real work first."}</p>
          </div>
        </header>

        {items.map(([id, index, name, line]) => (
          <section className="editorial-built-detail" id={id} key={id}>
            <span className="editorial-built__index">{index}</span>
            <h2>{name}</h2>
            <p>{line}</p>
          </section>
        ))}

        <Link className="editorial-link editorial-link--light" href="/apply">
          {es ? "Hablar de tu negocio" : "Talk about your business"} <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </div>
  );
}
