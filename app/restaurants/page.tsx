import type { Metadata } from "next";
import Link from "next/link";
import { getServerLocale } from "@/lib/server-preferences";
import "./restaurants.css";

const offers = {
  en: {
    title: "Restaurant Growth | MACS Digital Media",
    description: "Restaurant marketing built around real local creators, approved promotions and measurable customer actions. Start with a $750 restaurant revenue map.",
    breadcrumb: "For independent restaurants",
    headline: "More than views. More reasons to walk in.",
    intro: "Local creators show the real food. We handle the planning, follow-up and reporting. You approve every visit, offer and post.",
    primary: "Tell us about your restaurant",
    eyebrow: "A restaurant growth service, not another dashboard",
    question: "Your restaurant does the hard part. Who is bringing people back?",
    problem: "A great kitchen cannot fix scattered marketing. Creators go unanswered, videos sit in a folder, promotions go unmeasured, and the owner is still doing the chasing.",
    approach: "One campaign. One decision at a time.",
    steps: [
      ["01", "Find the opportunity", "Review your existing website, local visibility, demand, ordering, catering and follow-up. Pick one specific growth problem before buying ads."],
      ["02", "Bring in local creators", "Find suitable nearby food creators. Prepare the brief, consent and visit schedule. You approve who comes in; any meals, creator fees or ad spend require your approval."],
      ["03", "Turn visits into useful content", "Capture real food, people and hospitality. Organize the footage, prepare edits, clear usage rights, and request your approval before anything is published."],
      ["04", "Test a real invitation", "Use an owner-approved offer or visit prompt. Measure the response with links, codes, inquiries or supported point-of-sale data—without treating views as sales."],
      ["05", "Keep what works", "Report creator activity, approved assets, spend, qualified responses and verifiable sales signals. Stop weak tests; only expand with your approval."],
    ],
    whatTitle: "What comes off your plate",
    deliverables: [
      ["Creator coordination", "Discovery, outreach preparation, application review, visit scheduling, reminders and content collection."],
      ["A repeatable content rhythm", "One authentic monthly capture can supply a practical Monday / Wednesday / Friday storytelling calendar; production depends on the footage and approvals."],
      ["Promotion operations", "Briefs, tracking links, campaign checklists, consent and rights review, plus clear approval gates for spend and publishing."],
      ["Evidence instead of vanity metrics", "A simple record of work completed, customer response and source-backed sales where authorized data exists."],
    ],
    notTitle: "What we will not promise",
    guardrails: "No guaranteed revenue, no fake restaurant footage, no unauthorized creator outreach, no automatic ads or publishing, and no claim of POS integration until it is actually connected and verified.",
    startTitle: "Start small. Prove one useful result.",
    startTag: "RESET / ENTRY OFFER",
    startName: "Restaurant Revenue Map",
    startPrice: "$750",
    startUnit: "one-time proposed service price",
    startText: "A focused review of one location and its current demand path. We identify the highest-priority opportunity and prepare a 30-day test plan before you commit to execution.",
    startBullets: ["Website, menu and inquiry-path review", "Local presence and existing content inventory", "Creator/promotion feasibility and consent checklist", "One ranked experiment, baseline and owner decisions"],
    nextTag: "MOMENTUM / MANAGED PILOT",
    nextName: "30-day Creator & Promotion Pilot",
    nextPrice: "Quoted after the map",
    nextText: "One bounded owner-approved campaign: creator recruitment workflow, planned visits, one real content production cycle and a results review. Creator compensation, meals and media spend are separate and never committed without approval.",
    nextBullets: ["One target and one defined campaign", "Creator applications and owner approvals", "Visit, footage and rights workflow", "Measured outcome with continue / change / stop decision"],
    scale: "If the pilot earns the right to continue, MACS can manage an ongoing content-and-growth rhythm under the existing Scale program. Nothing scales by default.",
    faqTitle: "Before we start",
    faq: [
      ["Do I need a large influencer?", "No. We evaluate local relevance, quality and fit before audience size. Approval always remains with the restaurant."],
      ["Do creators visit for free?", "Not necessarily. Meals, compensation, usage rights and any paid promotions are agreed separately before a visit or campaign."],
      ["Will you post on our accounts?", "Only after the restaurant approves the exact content and authorized channel access is verified. A prepared post is not a published post."],
      ["Can you prove the campaign brought sales?", "Only when the available data supports a defensible link. We distinguish impressions, visits, inquiries, attributed gross revenue and actual profit; we never imply they are the same."],
      ["Is the automation ready today?", "The managed offer can be scoped with a human operator today. Connected creator scheduling, sales integrations and automated publishing must pass real production checks before being sold as live."],
    ],
    ending: "Tell us your slowest day. We'll find the first test worth running.",
    endingText: "Share your location, what you want to improve and what marketing you already do. We'll tell you whether the Restaurant Revenue Map is the right first step.",
    note: "An inquiry is not a purchase or a guaranteed acceptance. We confirm scope, delivery and payment before starting.",
    link: "Tell us what's important",
    secondary: "See the MACS programs",
    proof: "Owner-controlled approvals · Real creator footage · Bounded campaigns · Verifiable outcomes",
  },
  es: {
    title: "Crecimiento para restaurantes | MACS Digital Media",
    description: "Marketing para restaurantes con creadores locales, promociones aprobadas y resultados medibles. Comienza con un diagnóstico de $750 USD.",
    breadcrumb: "Para restaurantes independientes",
    headline: "Más que vistas. Más motivos para venir.",
    intro: "Creadores locales muestran la comida real. Nosotros coordinamos el plan, el seguimiento y los resultados. Tú apruebas cada visita, oferta y publicación.",
    primary: "Cuéntanos sobre tu restaurante",
    eyebrow: "Un servicio de crecimiento, no otro panel de control",
    question: "Tu cocina hace el trabajo difícil. ¿Quién hace que los clientes regresen?",
    problem: "Una gran cocina no resuelve el marketing disperso. Los creadores esperan respuestas, los videos quedan guardados y nadie mide las promociones. El dueño termina persiguiendo todo.",
    approach: "Una campaña. Una decisión a la vez.",
    steps: [
      ["01", "Encontrar la oportunidad", "Revisamos sitio, presencia local, pedidos, catering y seguimiento. Elegimos un problema concreto antes de gastar en anuncios."],
      ["02", "Invitar a creadores locales", "Buscamos creadores gastronómicos cercanos y preparamos acuerdos y horarios. Tú apruebas las visitas y cualquier gasto."],
      ["03", "Convertir las visitas en contenido", "Mostramos comida, personas y hospitalidad reales. Organizamos el material, revisamos los derechos y solicitamos aprobación antes de publicar."],
      ["04", "Probar una invitación real", "Usamos una promoción aprobada y medimos enlaces, códigos, consultas o ventas cuando los datos autorizados lo permiten."],
      ["05", "Conservar lo que funciona", "Reportamos contenido, visitas, gastos, respuestas y señales verificables de ventas. Solo ampliamos con tu aprobación."],
    ],
    whatTitle: "El trabajo que dejamos de cargarte",
    deliverables: [
      ["Coordinación de creadores", "Búsqueda, preparación de contacto, revisión, calendario, recordatorios y entrega de contenido."],
      ["Contenido con ritmo", "Una grabación auténtica al mes puede alimentar una agenda práctica de lunes, miércoles y viernes, según el material y las aprobaciones."],
      ["Operación de promociones", "Briefs, enlaces medibles, permisos y autorización previa para publicar o gastar."],
      ["Evidencia, no solo likes", "Registro de trabajo, respuestas de clientes y ventas sustentadas cuando existan datos autorizados."],
    ],
    notTitle: "Lo que no prometemos",
    guardrails: "No garantizamos ingresos, no inventamos imágenes del restaurante, no contactamos creadores sin autorización y no afirmamos tener integraciones activas sin verificarlas.",
    startTitle: "Empieza pequeño. Demuestra un resultado útil.",
    startTag: "RESET / SERVICIO INICIAL",
    startName: "Mapa de ingresos del restaurante",
    startPrice: "$750 USD",
    startUnit: "precio propuesto, pago único",
    startText: "Revisión de una ubicación y de cómo llega la demanda. Definimos una oportunidad prioritaria y un plan de prueba de 30 días antes de ejecutar.",
    startBullets: ["Revisión de sitio, menú y consultas", "Presencia local e inventario de contenido", "Viabilidad de creadores y promociones", "Un experimento, punto de partida y aprobaciones"],
    nextTag: "MOMENTUM / PILOTO GESTIONADO",
    nextName: "Piloto de creadores y promociones de 30 días",
    nextPrice: "Cotización después del diagnóstico",
    nextText: "Una campaña delimitada y aprobada: coordinación de creadores, visitas planificadas, un ciclo de contenido real y revisión de resultados. Comidas, honorarios y anuncios se pagan aparte y requieren aprobación.",
    nextBullets: ["Una meta y una campaña", "Solicitudes de creadores y aprobación", "Proceso de visitas, material y permisos", "Resultado medido y decisión de continuar o parar"],
    scale: "Si el piloto funciona, MACS puede gestionar un ritmo continuo de contenido y crecimiento bajo el programa Scale. Nunca escalamos automáticamente.",
    faqTitle: "Antes de empezar",
    faq: [
      ["¿Necesito un influencer famoso?", "No. Priorizamos relevancia local y calidad. Tú eliges a quién invitar."],
      ["¿Las visitas son gratis?", "No necesariamente. Comidas, honorarios, derechos y anuncios se acuerdan por separado."],
      ["¿Publicarán en mis redes?", "Solo con aprobación del contenido exacto y acceso autorizado a cada canal."],
      ["¿Pueden comprobar las ventas?", "Solo cuando los datos lo permitan. Diferenciamos vistas, visitas, consultas, ventas atribuidas y ganancias."],
      ["¿La automatización ya está activa?", "Podemos definir el servicio gestionado con una persona. Agenda automática, integraciones y publicación requieren pruebas reales antes de venderse como operativas."],
    ],
    ending: "Dinos cuál es tu día más lento. Busquemos la primera prueba que valga la pena.",
    endingText: "Comparte tu ubicación, objetivo y marketing actual. Te diremos si el Mapa de ingresos es un buen primer paso.",
    note: "Enviar una consulta no es una compra ni aceptación garantizada. Confirmamos alcance, entrega y pago antes de empezar.",
    link: "Cuéntanos qué es importante",
    secondary: "Ver programas de MACS",
    proof: "Aprobación del dueño · Contenido real · Campañas acotadas · Resultados verificables",
  },
} as const;

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const t = locale === "es-MX" ? offers.es : offers.en;
  return {
    title: t.title,
    description: t.description,
    alternates: { canonical: "/restaurants" },
    openGraph: { title: t.title, description: t.description, url: "/restaurants", type: "website" },
  };
}

export default async function RestaurantsPage() {
  const locale = await getServerLocale();
  const t = locale === "es-MX" ? offers.es : offers.en;
  return (
    <article className="restaurant-offer">
      <section className="restaurant-offer__hero" aria-labelledby="restaurant-offer-title">
        <div className="restaurant-offer__shell restaurant-offer__hero-inner">
          <div className="restaurant-offer__intro">
            <p className="restaurant-offer__overline">MACS / {t.breadcrumb}</p>
            <h1 id="restaurant-offer-title">{t.headline}</h1>
            <p className="restaurant-offer__lead">{t.intro}</p>
            <Link className="restaurant-offer__button restaurant-offer__button--primary" href="/apply">
              {t.primary} <span aria-hidden="true">↗</span>
            </Link>
            <p className="restaurant-offer__trust">{t.proof}</p>
          </div>
          <div className="restaurant-offer__hero-art" aria-hidden="true">
            <span className="restaurant-offer__art-label">LOCAL PEOPLE / REAL PLACES / BETTER FOLLOW-UP</span>
            <span className="restaurant-offer__art-big">The<br />table<br />is set.</span>
            <span className="restaurant-offer__art-rule" />
            <span className="restaurant-offer__art-bottom">01 — DISCOVER &nbsp; 02 — CREATE &nbsp; 03 — MEASURE</span>
          </div>
        </div>
      </section>

      <section className="restaurant-offer__problem restaurant-offer__section">
        <div className="restaurant-offer__shell restaurant-offer__split">
          <p className="restaurant-offer__section-label">{t.eyebrow}</p>
          <div>
            <h2>{t.question}</h2>
            <p>{t.problem}</p>
          </div>
        </div>
      </section>

      <section className="restaurant-offer__section restaurant-offer__process" aria-labelledby="restaurant-process">
        <div className="restaurant-offer__shell">
          <h2 id="restaurant-process">{t.approach}</h2>
          <ol className="restaurant-offer__steps">
            {t.steps.map(([number, name, description]) => (
              <li key={number}>
                <span className="restaurant-offer__number">{number}</span>
                <h3>{name}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="restaurant-offer__section restaurant-offer__work" aria-labelledby="restaurant-work">
        <div className="restaurant-offer__shell">
          <h2 id="restaurant-work">{t.whatTitle}</h2>
          <div className="restaurant-offer__work-grid">
            {t.deliverables.map(([name, description]) => (
              <div key={name} className="restaurant-offer__work-item">
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
          <div className="restaurant-offer__truth">
            <strong>{t.notTitle}</strong>
            <p>{t.guardrails}</p>
          </div>
        </div>
      </section>

      <section className="restaurant-offer__section restaurant-offer__offers" aria-labelledby="restaurant-pricing">
        <div className="restaurant-offer__shell">
          <h2 id="restaurant-pricing">{t.startTitle}</h2>
          <div className="restaurant-offer__offer-grid">
            <div className="restaurant-offer__offer restaurant-offer__offer--entry">
              <p className="restaurant-offer__section-label">{t.startTag}</p>
              <h3>{t.startName}</h3>
              <p className="restaurant-offer__price">{t.startPrice}</p>
              <p className="restaurant-offer__price-detail">{t.startUnit}</p>
              <p>{t.startText}</p>
              <ul>{t.startBullets.map((item) => <li key={item}>{item}</li>)}</ul>
              <Link className="restaurant-offer__button restaurant-offer__button--primary" href="/apply">
                {t.primary} <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <div className="restaurant-offer__offer restaurant-offer__offer--pilot">
              <p className="restaurant-offer__section-label">{t.nextTag}</p>
              <h3>{t.nextName}</h3>
              <p className="restaurant-offer__pilot-price">{t.nextPrice}</p>
              <p>{t.nextText}</p>
              <ul>{t.nextBullets.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
          <p className="restaurant-offer__scale">{t.scale}</p>
        </div>
      </section>

      <section className="restaurant-offer__section restaurant-offer__faq" aria-labelledby="restaurant-faq">
        <div className="restaurant-offer__shell restaurant-offer__faq-layout">
          <h2 id="restaurant-faq">{t.faqTitle}</h2>
          <div>
            {t.faq.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="restaurant-offer__closing" aria-labelledby="restaurant-close">
        <div className="restaurant-offer__shell">
          <h2 id="restaurant-close">{t.ending}</h2>
          <p>{t.endingText}</p>
          <Link className="restaurant-offer__button restaurant-offer__button--light" href="/apply">
            {t.link} <span aria-hidden="true">↗</span>
          </Link>
          <p className="restaurant-offer__closing-note">{t.note}</p>
          <Link className="restaurant-offer__secondary-link" href="/programs">{t.secondary}</Link>
        </div>
      </section>
    </article>
  );
}
