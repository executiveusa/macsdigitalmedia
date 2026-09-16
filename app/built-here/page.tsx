import type { Metadata } from "next";
import Link from "next/link";
import { getServerLocale } from "@/lib/server-preferences";

export const metadata: Metadata = {
  title: "Built Here",
  description: "Products and experiments built inside MACS Digital Media.",
};

export default async function BuiltHerePage() {
  const locale = await getServerLocale();
  const es = locale === "es-MX";

  const items = es
    ? [
        ["agent-maxx", "01", "Agent MAXX", "Operación digital del día a día con límites claros y aprobación cuando importa.", "/maxx"],
        ["buffer-blaster", "02", "Buffer Blaster", "Nuestro sistema para mantener el contenido en movimiento.", "/work/buffer-blaster"],
        ["pare", "03", "Pare’", "[PLACEHOLDER — QUÉ HACE PARE’ EN UNA FRASE.]", "/work/pare"],
        ["posta-studio", "04", "Posta Studio", "Contenido UGC convertido en un sistema repetible. Desarrollado por Stavarai.", "/work/posta-studio"],
        ["home-team", "05", "Home Team Lab", "Donde probamos lo que realmente merece entrar al sistema.", "/notes"],
        ["demos", "06", "Demos", "Pruebas de trabajo. No resultados de clientes.", "/demos"],
      ]
    : [
        ["agent-maxx", "01", "Agent MAXX", "Day-to-day digital with clear limits and approval when it matters.", "/maxx"],
        ["buffer-blaster", "02", "Buffer Blaster", "Our system for keeping content moving.", "/work/buffer-blaster"],
        ["pare", "03", "Pare’", "[PLACEHOLDER — WHAT PARE’ DOES IN ONE SENTENCE.]", "/work/pare"],
        ["posta-studio", "04", "Posta Studio", "UGC production built into a repeatable system. Developed by Stavarai.", "/work/posta-studio"],
        ["home-team", "05", "Home Team Lab", "Where we test what earns a place in the stack.", "/notes"],
        ["demos", "06", "Demos", "Working tests. Not client results.", "/demos"],
      ];

  return (
    <div className="editorial-page editorial-page--blue">
      <div className="editorial-shell">
        <header className="editorial-page__intro">
          <p className="editorial-kicker">{es ? "Hecho aquí" : "Built Here"}</p>
          <div>
            <h1>{es ? "Construimos cosas cuando ayudan al trabajo. No para llenar un catálogo." : "We build things when they make the work better. Not to fill a catalog."}</h1>
            <p>{es ? "Primero tienen que demostrar su lugar en trabajo real." : "They earn their place in real work first."}</p>
          </div>
        </header>

        {items.map(([id, index, name, line, href]) => (
          <section className="editorial-built-detail" id={id} key={id}>
            <span className="editorial-built__index">{index}</span>
            <h2>{name}</h2>
            <div>
              <p>{line}</p>
              <p><Link className="editorial-link editorial-link--light" href={href}>{es ? "Ver más" : "See more"} <span aria-hidden="true">↗</span></Link></p>
            </div>
          </section>
        ))}

        <Link className="editorial-link editorial-link--light" href="/apply">
          {es ? "Cuéntanos qué es importante" : "Tell us what's important"} <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </div>
  );
}
