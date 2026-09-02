import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion";
import { getServerLocale } from "@/lib/server-preferences";

export const metadata: Metadata = {
  title: "Agent MAXX",
  description: "The visible managed operator inside a MACS technology partnership.",
};

export default async function MaxxPage() {
  const locale = await getServerLocale();
  const es = locale === "es-MX";
  const page = es
    ? {
        eyebrow: "Agent MAXX",
        title: "Un operador visible con permisos definidos, no un chatbot invisible.",
        lede: "MAXX prepara trabajo, explica qué utilizó, se detiene cuando hace falta aprobación y deja un historial que el equipo puede revisar.",
        primaryCta: "Empezar la conversación",
        secondaryCta: "Ver cómo encaja en la relación",
        introTitle: "MAXX es una parte del sistema, no el producto completo.",
        intro: "La relación con MACS incluye criterio, diseño de sistemas, permisos, flujos, integraciones, aprobaciones e historial. MAXX es uno de los operadores que trabaja dentro de esos límites.",
        authorityTitle: "Autoridad primero con aprobación",
        authorityHeaders: ["Nivel", "Comportamiento típico"],
        authorityRows: [
          ["Automático", "Buscar conocimiento aprobado, clasificar solicitudes, resumir reuniones, preparar borradores, crear tareas internas y registrar historial."],
          ["Aprobación humana", "Mensajes externos personalizados, cambios importantes, publicación, cambios de agenda, contacto sensible y compartir información delicada."],
          ["Desactivado por defecto", "Gastos, contratos, eliminación permanente, banca, facturación, cambios de permisos, alcance masivo, autoaprobación o acceso autoconcedido."],
        ],
        supervisedTitle: "Operación supervisada",
        supervised: "Cada flujo nuevo empieza con supervisión. Revisamos borradores, fallas, casos extremos y reglas de aprobación antes de ampliar autoridad.",
        ownershipTitle: "Propiedad separada del cliente",
        ownership: "El modelo objetivo mantiene datos, credenciales, historial y conocimiento del cliente separados. MACS opera como socio tecnológico; el cliente conserva propiedad y visibilidad.",
      }
    : {
        eyebrow: "Agent MAXX",
        title: "A visible operator with defined permissions—not an invisible chatbot.",
        lede: "MAXX prepares work, explains what it used, pauses when approval is required, and leaves an activity history your team can review.",
        primaryCta: "Start the conversation",
        secondaryCta: "See where MAXX fits",
        introTitle: "MAXX is part of the system, not the entire product.",
        intro: "A MACS partnership includes judgment, system design, permissions, workflows, integrations, approvals and history. MAXX is one operator working inside those boundaries.",
        authorityTitle: "Approval-first authority",
        authorityHeaders: ["Authority level", "Typical behavior"],
        authorityRows: [
          ["Automatic", "Search approved knowledge, classify requests, summarize meetings, prepare drafts, create internal tasks, and record workflow history."],
          ["Human approval", "Personalized external messages, important record changes, publishing, scheduling changes, sensitive outreach, and sharing consequential information."],
          ["Disabled by default", "Spending, contracts, permanent deletion, banking, billing, permission changes, mass outreach, self-approval, or self-granted access."],
        ],
        supervisedTitle: "Supervised operation",
        supervised: "Each new workflow starts supervised. We review drafts, failures, edge cases and approval rules before authority expands.",
        ownershipTitle: "Separate client ownership",
        ownership: "The target model keeps client data, credentials, workflow history and approved knowledge separate. MACS operates as the technology partner; the client keeps ownership and visibility.",
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
              <Link className="button button--secondary" href="/programs">{page.secondaryCta}</Link>
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

          <Reveal><section className="content-section"><h3>{page.supervisedTitle}</h3><p>{page.supervised}</p></section></Reveal>
          <Reveal><section className="content-section"><h3>{page.ownershipTitle}</h3><p>{page.ownership}</p></section></Reveal>
        </div>
      </div>
    </article>
  );
}
