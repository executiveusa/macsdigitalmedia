import type { Locale } from "@/lib/i18n";

type Program = { name: string; line: string; href: string };
type BuiltItem = { name: string; line: string; href: string };
type ClarityPair = { before: string; after: string };
type FaqItem = { question: string; answer: string };

type EditorialHome = {
  metadataTitle: string;
  metadataDescription: string;
  heroTitle: string;
  heroLine: string;
  primaryCta: string;
  secondaryCta: string;
  heroTrust: string;
  credibility: string;
  clarityTitle: string;
  claritySubtitle: string;
  clarityPairs: ClarityPair[];
  programsLabel: string;
  programsTitle: string;
  programs: Program[];
  partnershipBridgeTitle: string;
  partnershipBridgeLine: string;
  workLabel: string;
  workTitle: string;
  asc3ndTitle: string;
  asc3ndLine: string;
  reelTitle: string;
  reelLine: string;
  workCta: string;
  storyLabel: string;
  storyTitle: string;
  storyLine: string;
  storyCta: string;
  builtLabel: string;
  builtTitle: string;
  builtItems: BuiltItem[];
  builtCta: string;
  faqTitle: string;
  faqSubtitle: string;
  faqs: FaqItem[];
  fitLabel: string;
  fitTitle: string;
  fitLine: string;
  fitCta: string;
};

export const editorialHome: Record<Locale, EditorialHome> = {
  en: {
    metadataTitle: "MACS Digital Media | A digital partner for non-technical founders",
    metadataDescription:
      "MACS Digital Media is a Seattle father-and-son digital partner building AI-ready websites, profitable Google and Meta ads, and 60-second lead capture for owner-led businesses.",
    heroTitle: "A digital partner for non-technical founders.",
    heroLine:
      "Websites, Google and Meta ads, and AI-powered lead capture under one roof. Built and run by one senior Seattle team so you stop juggling freelancers.",
    primaryCta: "Tell us what's important",
    secondaryCta: "See how the 4 programs work",
    heroTrust: "No long-term lock-in. You own every website, ad account, and system we build.",
    credibility:
      "Father + son · Built in Seattle, WA · Websites · Google & Meta Ads · AI Lead Capture · Client-Owned Systems",
    clarityTitle: "Stop paying three vendors who never talk to each other.",
    claritySubtitle:
      "Most owners already spend money on a site, social media, or ads. The leak happens in the handoff between them.",
    clarityPairs: [
      {
        before: "A slow or dated website that makes serious buyers hesitate before calling.",
        after: "A clear, mobile-first digital home built to convert visitors into booked conversations.",
      },
      {
        before: "Wasted Google and Meta ad spend with vague agency reports and no clear ROI.",
        after: "Disciplined paid campaigns with tight targeting, fast stop-loss rules, and plain-English reporting.",
      },
      {
        before: "Leads slipping through the cracks when you are on a job site or with clients.",
        after: "Automated 60-second lead capture and follow-up that keeps every real inquiry warm.",
      },
      {
        before: "Software lock-in where an agency holds your domain, site, or ad accounts hostage.",
        after: "100% client-owned websites, ad accounts, and installed AI workflows you keep forever.",
      },
    ],
    programsLabel: "Programs",
    programsTitle: "Four ways to start.",
    programs: [
      {
        name: "Reset",
        line: "Fix a messy site, disconnected tools, and broken lead capture in one focused sprint.",
        href: "/programs#reset",
      },
      {
        name: "Momentum",
        line: "Stay visible every week with consistent content, local proof, and reliable follow-up.",
        href: "/programs#momentum",
      },
      {
        name: "Scale",
        line: "Turn proven offers into steady demand with Google and Meta ads plus smart automation.",
        href: "/programs#scale",
      },
      {
        name: "Launch",
        line: "Take a new brand, offer, or platform from idea to live market without managing five vendors.",
        href: "/programs#launch",
      },
    ],
    partnershipBridgeTitle: "Start with what matters most.",
    partnershipBridgeLine: "We prove the work first, then stay involved as your business grows.",
    workLabel: "Proof before promise.",
    workTitle: "See the work.",
    asc3ndTitle: "ASC3ND",
    asc3ndLine: "Building the public presence and operational foundation for a growing community brand.",
    reelTitle: "What we make, in 30 seconds.",
    reelLine: "Websites · Shops · Ads · UGC · Motion",
    workCta: "View selected work",
    storyLabel: "Father + son",
    storyTitle: "Two perspectives help your business stay relevant and adapt to changing times.",
    storyLine: "One brings the long view of ownership. One stays close to what is winning attention right now.",
    storyCta: "Our story",
    builtLabel: "Built Here",
    builtTitle: "Built Here",
    builtItems: [
      {
        name: "Buffer Blaster",
        line: "Turns one founder voice note or job-site photo into a week of ready-to-approve content.",
        href: "/work/buffer-blaster",
      },
      {
        name: "PARÉ",
        line: "Our editorial design and review system that keeps client sites fast, clear, and free of AI slop.",
        href: "/work/pare",
      },
      {
        name: "Posta Studio",
        line: "Automated social publishing and brand-consistent creative workflows installed for your team.",
        href: "/work/posta-studio",
      },
      {
        name: "Foundry",
        line: "Private, client-owned AI agent infrastructure for lead follow-up and internal operations.",
        href: "/work/foundry-fleet",
      },
    ],
    builtCta: "View Built Here",
    faqTitle: "Straight answers before we talk.",
    faqSubtitle: "No mystery pricing, no agency fog, and no software traps.",
    faqs: [
      {
        question: "Who is MACS Digital Media best suited for?",
        answer:
          "Owner-led local service businesses, clinics, eCommerce brands, and community organizations that want one accountable partner to run their website, ads, content, and follow-up cleanly.",
      },
      {
        question: "Do I own my website, ad accounts, and systems?",
        answer:
          "Yes, 100%. Your domain, website codebase, Google and Meta ad accounts, and installed AI workflows live under your ownership. You stay with MACS because the work performs, never because we locked your accounts.",
      },
      {
        question: "How fast can we start and see real progress?",
        answer:
          "After a short 15-minute fit call, we map the single highest-leverage fix first. Most Reset and proof sprints go live within 14 days so you can judge real output before committing long term.",
      },
      {
        question: "What if we already have a website or ad account that just underperforms?",
        answer:
          "We inspect what already works before changing anything. If your current site or ad account has good bones, we rescue and sharpen it instead of charging you to rebuild from scratch.",
      },
      {
        question: "Do you require a 12-month agency contract?",
        answer:
          "No. Engagements start with a clearly scoped sprint or proof period, followed by flexible month-to-month partnership once results are clear.",
      },
    ],
    fitLabel: "Partnership",
    fitTitle: "Tell us what's important.",
    fitLine:
      "Share what is slowing growth down. We reply within one business day with a plain-English plan and zero hard pitch.",
    fitCta: "Tell us what's important",
  },
  "es-MX": {
    metadataTitle: "MACS Digital Media | Socio digital para dueños de negocio",
    metadataDescription:
      "MACS Digital Media es un equipo de padre e hijo en Seattle que construye sitios web claros, anuncios en Google y Meta, y seguimiento automatizado para negocios dirigidos por sus dueños.",
    heroTitle: "Tu socio digital para hacer crecer el negocio sin ruido técnico.",
    heroLine:
      "Sitio web, anuncios en Google y Meta, y captura de clientes con IA bajo un mismo techo. Un solo equipo responsable en Seattle para que dejes de coordinar proveedores sueltos.",
    primaryCta: "Cuéntanos qué es importante",
    secondaryCta: "Ver cómo funcionan los 4 programas",
    heroTrust: "Sin contratos forzosos. Tu dominio, sitio web, cuentas de anuncios y sistemas siempre son tuyos.",
    credibility:
      "Padre + hijo · Seattle, WA · Sitios web · Anuncios Google y Meta · Captura de leads con IA · Sistemas propios",
    clarityTitle: "Deja de pagar tres proveedores que no se hablan entre sí.",
    claritySubtitle:
      "La mayoría de los negocios ya invierten en sitio, redes o anuncios. El dinero se pierde en las desconexiones.",
    clarityPairs: [
      {
        before: "Un sitio lento o confuso que hace dudar a clientes listos para comprar.",
        after: "Un hogar digital claro y rápido en móvil diseñado para convertir visitas en llamadas.",
      },
      {
        before: "Presupuesto desperdiciado en Google y Meta con reportes vagos y sin retorno claro.",
        after: "Campañas disciplinadas con segmentación precisa, reglas de freno rápido y reportes claros.",
      },
      {
        before: "Prospectos que se enfrían cuando estás atendiendo clientes o en operación.",
        after: "Respuesta automática en 60 segundos y seguimiento constante para no perder ventas.",
      },
      {
        before: "Agencias que retienen tu dominio, sitio web o cuentas publicitarias.",
        after: "100% propiedad del cliente en sitios, cuentas de anuncios y sistemas de IA instalados.",
      },
    ],
    programsLabel: "Cómo colaboramos",
    programsTitle: "Cuatro formas de empezar.",
    programs: [
      {
        name: "Reset",
        line: "Ordena un sitio confuso, herramientas sueltas y seguimiento roto en un sprint enfocado.",
        href: "/programs#reset",
      },
      {
        name: "Momentum",
        line: "Mantén visibilidad semanal con contenido constante, prueba real y seguimiento confiable.",
        href: "/programs#momentum",
      },
      {
        name: "Scale",
        line: "Convierte ofertas probadas en demanda constante con anuncios en Google y Meta más automatización.",
        href: "/programs#scale",
      },
      {
        name: "Launch",
        line: "Lleva una nueva marca, oferta o plataforma de idea a mercado sin coordinar cinco proveedores.",
        href: "/programs#launch",
      },
    ],
    partnershipBridgeTitle: "Empieza con lo más importante.",
    partnershipBridgeLine: "Primero demostramos resultados reales y después crecemos contigo.",
    workLabel: "Prueba antes que promesas.",
    workTitle: "Ve el trabajo.",
    asc3ndTitle: "ASC3ND",
    asc3ndLine: "Presencia pública y base operativa para una organización comunitaria en crecimiento.",
    reelTitle: "Lo que hacemos, en 30 segundos.",
    reelLine: "Sitios web · Tiendas · Anuncios · UGC · Motion",
    workCta: "Ver el trabajo",
    storyLabel: "Padre + hijo",
    storyTitle: "Dos perspectivas ayudan a que tu negocio siga vigente y se adapte a lo que cambia.",
    storyLine: "Uno cuida lo que tiene que durar. El otro se mantiene cerca de lo que funciona hoy.",
    storyCta: "Nuestra historia",
    builtLabel: "Hecho aquí",
    builtTitle: "Hecho aquí",
    builtItems: [
      {
        name: "Buffer Blaster",
        line: "Convierte una nota de voz o foto de tu negocio en una semana de contenido listo para aprobar.",
        href: "/work/buffer-blaster",
      },
      {
        name: "PARÉ",
        line: "Nuestro sistema editorial de diseño y revisión para sitios rápidos, claros y sin plantillas genéricas.",
        href: "/work/pare",
      },
      {
        name: "Posta Studio",
        line: "Publicación social automatizada y flujos creativos consistentes instalados para tu equipo.",
        href: "/work/posta-studio",
      },
      {
        name: "Foundry",
        line: "Infraestructura privada de agentes de IA propiedad del cliente para seguimiento y operación.",
        href: "/work/foundry-fleet",
      },
    ],
    builtCta: "Ver lo que construimos",
    faqTitle: "Respuestas directas antes de hablar.",
    faqSubtitle: "Sin letras pequeñas, sin jerga innecesaria y sin candados de software.",
    faqs: [
      {
        question: "¿Para quién funciona mejor MACS Digital Media?",
        answer:
          "Negocios locales de servicios, clínicas, tiendas en línea y organizaciones que buscan un solo socio responsable de sitio web, anuncios, contenido y seguimiento.",
      },
      {
        question: "¿Soy dueño de mi sitio web, cuentas de anuncios y sistemas?",
        answer:
          "Sí, al 100%. Tu dominio, código, cuentas de Google y Meta y automatizaciones quedan bajo tu control. Sigues con MACS por resultados, nunca por candados.",
      },
      {
        question: "¿Qué tan rápido empezamos y vemos avances?",
        answer:
          "Después de una llamada breve de 15 minutos, atacamos primero el cambio de mayor impacto. La mayoría de los sprints iniciales salen en vivo en 14 días.",
      },
      {
        question: "¿Qué pasa si ya tengo sitio web o campañas que no rinden?",
        answer:
          "Revisamos primero lo que ya sirve. Si la base es rescatable, la limpiamos y mejoramos en lugar de cobrarte una reconstrucción innecesaria.",
      },
      {
        question: "¿Piden contrato anual?",
        answer:
          "No. Empezamos con un sprint o prueba de alcance claro y después trabajamos mes a mes con resultados visibles.",
      },
    ],
    fitLabel: "Alianza",
    fitTitle: "Cuéntanos qué es importante.",
    fitLine:
      "Compártenos qué está frenando tu crecimiento. Respondemos en menos de un día hábil con un plan claro y sin presión.",
    fitCta: "Cuéntanos qué es importante",
  },
};
