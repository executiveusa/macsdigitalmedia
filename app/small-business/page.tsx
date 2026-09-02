import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion";
import { getServerLocale } from "@/lib/server-preferences";

export const metadata: Metadata = {
  title: "Technology Partner for Owner-Led Businesses",
  description: "MACS helps owner-led businesses improve websites, content, follow-up, automation and AI through an ongoing technology partnership.",
};

export default async function SmallBusinessPage() {
  const locale = await getServerLocale();
  const es = locale === "es-MX";

  const page = es
    ? {
        eyebrow: "Negocios dirigidos por sus dueños",
        title: "Menos proveedores. Un socio tecnológico que entiende el negocio.",
        lede: "MACS trabaja con equipos pequeños que necesitan mejorar sitio web, contenido, seguimiento, automatización e IA sin contratar y coordinar a un especialista distinto para cada problema.",
        primaryCta: "Empezar la conversación",
        secondaryCta: "Ver los cuatro caminos",
        fitTitle: "Dónde aportamos más valor",
        fit: "Funcionamos mejor cuando el negocio ya tiene demanda real, pero el lado digital está fragmentado entre herramientas, freelancers, agencias, procesos manuales y trabajo que nadie termina de poseer.",
        workflowsTitle: "Problemas que normalmente resolvemos primero",
        workflows: [
          "Sitio web, contacto y seguimiento que no trabajan juntos",
          "Contenido y distribución sin un ritmo repetible",
          "Reuniones, solicitudes o leads que pierden seguimiento",
          "Trabajo repetitivo que puede simplificarse con automatización o IA",
        ],
        ownershipTitle: "La relación importa más que el proyecto",
        ownership: "Podemos empezar por Reset, Momentum, Scale o Launch. La intención es convertirnos en el socio que mantiene contexto, mejora el sistema y ayuda a decidir qué tecnología sí vale la pena agregar después.",
        notFitTitle: "Lo que no somos",
        notFit: "No somos una fábrica de entregables aislados ni un proveedor que busca crear dependencia. El cliente conserva propiedad y visibilidad; MACS aporta continuidad, criterio y ejecución.",
      }
    : {
        eyebrow: "Owner-led businesses",
        title: "Fewer vendors. One technology partner who understands the business.",
        lede: "MACS works with small teams that need websites, content, follow-up, automation and AI to improve together—without hiring and coordinating a different specialist for every problem.",
        primaryCta: "Start the conversation",
        secondaryCta: "See the four partnership lanes",
        fitTitle: "Where we create the most leverage",
        fit: "We are most useful when the business already has real demand, but the digital side is fragmented across tools, freelancers, agencies, manual processes and work that nobody fully owns.",
        workflowsTitle: "Problems we commonly tackle first",
        workflows: [
          "Website, inquiry and follow-up systems that do not work together",
          "Content and distribution without a repeatable operating rhythm",
          "Meetings, requests or leads that lose follow-up",
          "Repetitive work that can be simplified with automation or AI",
        ],
        ownershipTitle: "The relationship matters more than the project",
        ownership: "We may start in Reset, Momentum, Scale or Launch. The intent is to become the partner who keeps context, improves the system and helps decide what technology is actually worth adding next.",
        notFitTitle: "What we are not",
        notFit: "We are not a factory for isolated deliverables or a vendor trying to create dependency. The client keeps ownership and visibility; MACS provides continuity, judgment and execution.",
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
            <h2>{page.fitTitle}</h2>
            <p>{page.fit}</p>
          </div>
        </Reveal>

        <div className="content-stack">
          <Reveal>
            <section className="content-section">
              <h3>{page.workflowsTitle}</h3>
              <ul>{page.workflows.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>
          </Reveal>
          <Reveal>
            <section className="content-section">
              <h3>{page.ownershipTitle}</h3>
              <p>{page.ownership}</p>
            </section>
          </Reveal>
          <Reveal>
            <section className="content-section">
              <h3>{page.notFitTitle}</h3>
              <p>{page.notFit}</p>
            </section>
          </Reveal>
        </div>
      </div>
    </article>
  );
}
