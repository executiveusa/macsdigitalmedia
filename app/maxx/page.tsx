import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion";
import { getServerLocale } from "@/lib/server-preferences";

export const metadata: Metadata = {
  title: "Agent MAXX",
  description: "Agent MAXX is the digital operator inside MACS with clear limits and human approval where it matters.",
};

export default async function MaxxPage() {
  const locale = await getServerLocale();
  const es = locale === "es-MX";
  const page = es
    ? {
        eyebrow: "Agent MAXX",
        title: "Tu operador digital.",
        lede: "MAXX prepara el trabajo, mantiene el contexto y sabe cuándo pedir aprobación.",
        primaryCta: "Cuéntanos qué es importante",
        introTitle: "Ayuda sin tomar el control.",
        intro: "Trabaja dentro de límites que puedes ver y aprobar.",
        authorityTitle: "Límites claros",
        authorityHeaders: ["Nivel", "Qué hace"],
        authorityRows: [
          ["Automático", "Maneja trabajo rutinario."],
          ["Aprobación", "Se detiene cuando tu decisión importa."],
          ["Fuera de límites", "No puede gastar, firmar, borrar ni darse más autoridad."],
        ],
        ownershipTitle: "Propiedad",
        ownership: "Tus datos siguen siendo tuyos.",
      }
    : {
        eyebrow: "Agent MAXX",
        title: "Your digital operator.",
        lede: "MAXX prepares the work, keeps context and knows when to ask for approval.",
        primaryCta: "Tell us what's important",
        introTitle: "Helpful without taking over.",
        intro: "MAXX works inside limits you can see and approve.",
        authorityTitle: "Clear boundaries",
        authorityHeaders: ["Level", "What it does"],
        authorityRows: [
          ["Automatic", "Handles routine work."],
          ["Approval", "Stops when your decision matters."],
          ["Off limits", "Cannot spend, sign, delete or grant itself more authority."],
        ],
        ownershipTitle: "Ownership",
        ownership: "Your data stays yours.",
      };

  return (
    <article className="content-page">
      <Reveal>
        <header className="content-page__hero">
          <div className="shell">
            <p className="eyebrow eyebrow--dark">{page.eyebrow}</p>
            <h1>{page.title}</h1>
            <p className="content-page__lede">{page.lede}</p>
            <div className="route-cta">
              <Link className="button button--primary" href="/apply">{page.primaryCta}</Link>
            </div>
          </div>
        </header>
      </Reveal>

      <div className="shell content-page__body content-grid">
        <Reveal>
          <div>
            <h2>{page.introTitle}</h2>
            <p>{page.intro}</p>
          </div>
        </Reveal>

        <div className="content-stack">
          <Reveal>
            <section className="content-section">
              <h3>{page.authorityTitle}</h3>
              <table className="decision-table">
                <thead><tr>{page.authorityHeaders.map((header) => <th key={header}>{header}</th>)}</tr></thead>
                <tbody>
                  {page.authorityRows.map(([level, behavior]) => (
                    <tr key={level}><td><strong>{level}</strong></td><td>{behavior}</td></tr>
                  ))}
                </tbody>
              </table>
            </section>
          </Reveal>

          <Reveal><section className="content-section"><h3>{page.ownershipTitle}</h3><p>{page.ownership}</p></section></Reveal>
        </div>
      </div>
    </article>
  );
}
