import type { Metadata } from "next";
import { RollingTextLink } from "@/components/motion";
import { ProgramExplorer, type ProgramDetail } from "@/components/program-tabs";
import { getServerLocale } from "@/lib/server-preferences";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Four ways to start with MACS Digital Media: Reset, Momentum, Scale and Launch.",
};

export default async function ProgramsPage() {
  const locale = await getServerLocale();
  const es = locale === "es-MX";

  const programs: ProgramDetail[] = es
    ? [
        {
          id: "reset",
          name: "Reset",
          headline: "Simplifica lo que se volvió complicado.",
          summary:
            "Auditamos lo que ya tienes, conservamos lo que funciona, reparamos el sitio y dejamos lista una captura de clientes clara y confiable.",
          bestIf:
            "Tu sitio actual frena la confianza, tus herramientas están desconectadas o los prospectos no reciben respuesta rápida.",
          timeline: "Sprint inicial de 14 a 30 días",
          deliverables: [
            "Auditoría completa de sitio, conversión y seguimiento actual",
            "Rediseño o rescate del hogar digital optimizado para móvil",
            "Captura de prospectos y respuesta automática en 60 segundos",
            "Estructura limpia lista para buscadores e IA (llms.txt y schema)",
          ],
          youKeep: "Dominio, código del sitio, cuentas y automatizaciones a tu nombre.",
        },
        {
          id: "momentum",
          name: "Momentum",
          headline: "Mantén visibilidad constante y convierte atención en ventas.",
          summary:
            "Construimos un sistema repetible de contenido, prueba local y seguimiento para que el crecimiento no dependa de improvisar cada semana.",
          bestIf:
            "Tienes un gran servicio, pero el negocio depende solo de recomendaciones o publicaciones esporádicas.",
          timeline: "Ritmo mensual continuo",
          deliverables: [
            "Producción semanal de contenido y piezas UGC basadas en trabajo real",
            "Calendario y distribución consistente en redes clave",
            "Seguimiento automatizado para prospectos que preguntan por mensaje o web",
            "Reporte mensual claro en español o inglés",
          ],
          youKeep: "Toda la biblioteca creativa, perfiles sociales y base de contactos.",
        },
        {
          id: "scale",
          name: "Scale",
          headline: "La oferta funciona. Crece sin agregar caos.",
          summary:
            "Escalamos la demanda con campañas disciplinadas en Google y Meta más automatización de seguimiento e IA para manejar más clientes.",
          bestIf:
            "Ya cierras ventas bien cuando llegan prospectos calificados y quieres flujo predecible de clientes cada mes.",
          timeline: "Prueba de 14 días + optimización mensual",
          deliverables: [
            "Campañas de Google Ads y Meta Ads con reglas estrictas de freno de gasto",
            "Páginas de aterrizaje dedicadas por servicio u oferta",
            "Pruebas continuas de anuncios y optimización de costo por cliente",
            "Flujos de IA y automatización para calificación y citas",
          ],
          youKeep: "100% de tus cuentas publicitarias, audiencias, datos y landings.",
        },
        {
          id: "launch",
          name: "Launch",
          headline: "Lleva tu próxima marca u oferta al mercado en un solo sistema.",
          summary:
            "Unimos posicionamiento, sitio web, contenido inicial, captura de demanda y seguimiento para lanzar con orden desde el día uno.",
          bestIf:
            "Estás lanzando una nueva marca, línea de servicio o iniciativa y quieres un solo equipo responsable.",
          timeline: "30 a 60 días de concepto a lanzamiento",
          deliverables: [
            "Posicionamiento claro, mensajes clave y arquitectura de oferta",
            "Identidad web, páginas de conversión y prueba documental",
            "Campaña inicial de lanzamiento y captura de primeros clientes",
            "Documentación y entrega limpia para operar sin candados",
          ],
          youKeep: "Marca, plataforma web, activos de campaña y propiedad total.",
        },
      ]
    : [
        {
          id: "reset",
          name: "Reset",
          headline: "Simplify what got complicated.",
          summary:
            "We inspect what you already have, keep what works, fix a dated or leaky website, and install clean lead capture so every visitor knows why to trust you.",
          bestIf:
            "Your current site undersells your business, tools feel stitched together, or leads slip through the cracks.",
          timeline: "14 to 30 day focused sprint",
          deliverables: [
            "Full clarity, trust, and conversion audit of your current setup",
            "Fast, mobile-first digital home rescue or rebuild",
            "60-second automated lead capture and follow-up workflow",
            "AI-search readiness (clean schema, llms.txt, and fast load times)",
          ],
          youKeep: "Your domain, website codebase, ad accounts, and installed workflows.",
        },
        {
          id: "momentum",
          name: "Momentum",
          headline: "Stay visible every week and turn attention into booked work.",
          summary:
            "We install a repeatable weekly system for real-world content, local proof, and follow-up so growth never depends on random bursts of posting.",
          bestIf:
            "You deliver great work, but your pipeline still relies mostly on word of mouth or sporadic social posts.",
          timeline: "Ongoing monthly cadence",
          deliverables: [
            "Weekly content and UGC ads built from real customer proof",
            "Consistent publishing across your highest-leverage local channels",
            "Automated follow-up for web inquiries and direct messages",
            "Plain-English monthly scorecards tied to real inquiries",
          ],
          youKeep: "Every creative asset, social channel, and contact list.",
        },
        {
          id: "scale",
          name: "Scale",
          headline: "The offer works. Grow demand without adding chaos.",
          summary:
            "We pair disciplined Google and Meta advertising with dedicated landing pages and smart AI follow-up so you can add steady revenue without managing three agencies.",
          bestIf:
            "You already close well when qualified buyers call and want predictable monthly lead volume.",
          timeline: "14-day live proof + monthly optimization",
          deliverables: [
            "Google Ads and Meta Ads built with strict stop-loss budget guardrails",
            "Dedicated high-converting landing pages per core service",
            "Weekly creative and keyword testing focused on booked jobs",
            "AI-assisted lead routing, booking, and reactivation workflows",
          ],
          youKeep: "100% of your ad accounts, pixel/conversion data, and landing pages.",
        },
        {
          id: "launch",
          name: "Launch",
          headline: "Bring your next brand or offer to market under one roof.",
          summary:
            "We connect positioning, web build, launch content, and lead capture so your new initiative goes live with real credibility from day one.",
          bestIf:
            "You are launching a new business, service line, or community platform and want one accountable partner.",
          timeline: "30 to 60 days from concept to live launch",
          deliverables: [
            "Plain-English positioning, offer structure, and conversion copy",
            "Custom editorial web platform built for desktop and mobile",
            "Launch creative kit and initial demand-capture campaign",
            "Clean handoff documentation with zero vendor lock-in",
          ],
          youKeep: "Full ownership of brand assets, codebase, and customer data.",
        },
      ];

  return (
    <div className="editorial-page">
      <div className="editorial-shell">
        <header className="editorial-page__intro">
          <div>
            <h1>{es ? "Cuatro formas de empezar." : "Four ways to start."}</h1>
            <p>
              {es
                ? "Un solo socio digital, cuatro puntos de entrada claros según lo que tu negocio necesita primero."
                : "One senior digital partner, four clear starting points based on what your business needs most right now."}
            </p>
          </div>
        </header>

        <ProgramExplorer programs={programs} es={es} />

        <aside className="macs-proof-strip" aria-label={es ? "Prueba inicial" : "Low-risk proof option"}>
          <div>
            <h3>
              {es
                ? "Empieza con una prueba real de 14 días."
                : "Start with a low-risk 14-day proof sprint."}
            </h3>
            <p>
              {es
                ? "No tienes que firmar un contrato largo a ciegas. Podemos probar primero el impacto real en sitio, anuncios o captura de leads."
                : "You do not have to sign a long contract on faith. For qualified local businesses, we prove real lead and conversion lift first before any ongoing retainer."}
            </p>
          </div>
          <RollingTextLink
            href="/apply"
            label={es ? "Cuéntanos qué es importante" : "Tell us what's important"}
            className="macs-btn macs-btn--primary"
          />
        </aside>
      </div>
    </div>
  );
}
