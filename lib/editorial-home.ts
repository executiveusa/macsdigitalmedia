import type { Locale } from "@/lib/i18n";

type Program = {
  name: string;
  line: string;
  href: string;
  proofLabel: string;
  proofHint: string;
};

type BuiltItem = {
  name: string;
  line: string;
  href: string;
};

type EditorialHome = {
  metadataTitle: string;
  metadataDescription: string;
  heroTitle: string;
  heroLine: string;
  primaryCta: string;
  credibility: string;
  programsLabel: string;
  programsTitle: string;
  programsIntro: string;
  programs: Program[];
  partnershipBridgeLabel: string;
  partnershipBridgeTitle: string;
  partnershipBridgeLine: string;
  workLabel: string;
  workTitle: string;
  asc3ndTitle: string;
  asc3ndLine: string;
  clientZeroTitle: string;
  clientZeroLine: string;
  workCta: string;
  storyLabel: string;
  storyTitle: string;
  storyLine: string;
  storyCta: string;
  builtLabel: string;
  builtTitle: string;
  builtItems: BuiltItem[];
  builtCta: string;
  fitLabel: string;
  fitTitle: string;
  fitLine: string;
  fitCta: string;
};

export const editorialHome: Record<Locale, EditorialHome> = {
  en: {
    metadataTitle: "MACS Digital Media | Technology partner for owner-led businesses",
    metadataDescription:
      "MACS Digital Media is a Pacific Northwest father-and-son technology partner helping founders and local services enhance their digital presence",
    heroTitle: "Your technology partner for the digital side of your vision.",
    heroLine: "Websites, content, automation, AI and follow-up—planned and improved by one accountable team instead of a rotating list of freelancers and vendors.",
    primaryCta: "Tell us what's important",
    credibility: "Pacific Northwest  Local  partners Proven Results",
    programsLabel: "How we partner",
    programsTitle: "One technology partner. Four ways to start.",
    programsIntro: "We meet you where you are. From a brand reset, momentum ,scale or a new launch. We design the  systems around your vision based only on the results that are  important to you",
    programs: [
      {
        name: "Reset",
        line: "Fix what’s scattered—website, tools, vendors and broken workflows.",
        href: "/programs#reset",
        proofLabel: "Reset proof",
        proofHint: "Add video, before/after, case study or live site",
      },
      {
        name: "Momentum",
        line: "Build growth through social strategy  , brand visibility, content distribution and systems you can own and understand.",
        href: "/programs#momentum",
        proofLabel: "Momentum proof",
        proofHint: "Add campaign, content system, video or results story",
      },
      {
        name: "Scale",
        line: "Your idea is already working. We use  automation, agentic systems, and digital campaigns that converts that idea into more of your desired outcomes. More customers, sales, awareness and what actually moves you forward. All operating at scale powered by the latest technology our team uses",
        href: "/programs#scale",
        proofLabel: "Scale proof",
        proofHint: "Add workflow, automation, agent or operations case study",
      },
      {
        name: "Launch",
        line: "Build repeatable systems before you launch what comes next—not just the campaign announcing it.",
        href: "/programs#launch",
        proofLabel: "Launch proof",
        proofHint: "Add launch video, product, brand, live site or case study",
      },
    ],
    partnershipBridgeLabel: "The relationship",
    partnershipBridgeTitle: "Start with one problem. Keep the context as the business changes.",
    partnershipBridgeLine: "A Reset can become Momentum. Momentum can expose what needs to Scale. Launch can happen at any point. The value is not buying four separate services—it is having one technology partner who already understands the business when the next problem or opportunity  appears.",
    workLabel: "Proof",
    workTitle: "Proof before promises.",
    asc3ndTitle: "ASC3ND",
    asc3ndLine: "A public Next.js site plus a reusable operations layer for onboarding, opportunities, campaigns, approvals and organizational context.",
    clientZeroTitle: "MACS / Client Zero",
    clientZeroLine: "We test all new systems on our own company before asking a client to trust them.",
    workCta: "See the proof",
    storyLabel: "Father + son",
    storyTitle: "One watches what has to last. One stays close to what is changing.",
    storyLine:
      "Stacy brings the long term view of ownership, operations and your big idea. Stavarai stays close to creators, commerce and what trends  customers respond to that owners usually only catch on to after its to late . Together withour team we   improve your systems over time—never just ship a project , website or app and disappear.",
    storyCta: "Meet the team",
    builtLabel: "Built here",
    builtTitle: "We build the tools our partnerships need next.",
    builtItems: [
      { name: "Agent MAXX", line: "Our in house AI agent built to handle day to day operations inside macs digital media. Designed with everyday non technical users in mind. Powerful,Fun and built on open source software. Try Agent Maxx Here", href: "/built-here#agent-maxx" },
      { name: "Buffer Blaster", line: "A fully automated  content-operations engine for research, production, scoring and scheduling of any content. Also Open Source and designed to be an intentional alternative to closed source social media automation subscriptions like Buffer,Hootsuite, and Social Bee.", href: "/built-here#buffer-blaster" },
      { name: "Home Team AI Lab", line: "Real business-task testing of smaller local and open models before adding more complexity.", href: "/built-here#home-team" },
    ],
    builtCta: "See what we built",
    fitLabel: "Partnership",
    fitTitle: "One accountable  partner. Four ways to start.",
    fitLine: "We help discover what makes sense to build according to  what your trying to accomplish. Reset, gain momentum, Scale what's working or Launch something new. Our partnership allows you to focus on the other things that need you present in your business and gives you back your time . The goal is continuity, ownership and fewer disconnected vendors and subscriptions you need to manage",
    fitCta: "Start the conversation",
  },
  "es-MX": {
    metadataTitle: "MACS Digital Media | Socio tecnológico para negocios dirigidos por sus dueños",
    metadataDescription:
      "MACS Digital Media es un equipo de padre e hijo del Noroeste del Pacífico que funciona como socio tecnológico para conectar sitio web, contenido, automatización, IA y seguimiento en un solo sistema.",
    heroTitle: "Tu socio tecnológico para el lado digital del negocio.",
    heroLine: "Sitio web, contenido, automatización, IA y seguimiento: planeados y mejorados por un solo equipo responsable de padre e hijo, en lugar de una lista cambiante de freelancers y proveedores.",
    primaryCta: "Cuéntanos qué está atorado",
    credibility: "Noroeste del Pacífico · Padre + hijo · Hecho para una relación continua",
    programsLabel: "Cómo colaboramos",
    programsTitle: "Un socio tecnológico. Cuatro formas de empezar.",
    programsIntro: "Empieza donde está la presión. Cada camino resuelve una condición distinta del negocio, pero el contexto se queda con el mismo equipo conforme cambian las prioridades.",
    programs: [
      {
        name: "Reset",
        line: "Arregla lo que está regado: sitio web, herramientas, proveedores y flujos rotos.",
        href: "/programs#reset",
        proofLabel: "Prueba de Reset",
        proofHint: "Agregar video, antes/después, caso de estudio o sitio en vivo",
      },
      {
        name: "Momentum",
        line: "Construye crecimiento consistente con contenido, visibilidad, distribución y seguimiento.",
        href: "/programs#momentum",
        proofLabel: "Prueba de Momentum",
        proofHint: "Agregar campaña, sistema de contenido, video o historia de resultados",
      },
      {
        name: "Scale",
        line: "Haz que crecer sea más fácil de operar con automatización, IA, conocimiento y mejores sistemas.",
        href: "/programs#scale",
        proofLabel: "Prueba de Scale",
        proofHint: "Agregar flujo, automatización, agente o caso operativo",
      },
      {
        name: "Launch",
        line: "Construye el sistema digital detrás de lo que sigue, no solo la campaña que lo anuncia.",
        href: "/programs#launch",
        proofLabel: "Prueba de Launch",
        proofHint: "Agregar video, producto, marca, sitio en vivo o caso de estudio",
      },
    ],
    partnershipBridgeLabel: "La relación",
    partnershipBridgeTitle: "Empieza con un problema. Conserva el contexto conforme cambia el negocio.",
    partnershipBridgeLine: "Un Reset puede convertirse en Momentum. Momentum puede mostrar qué necesita Scale. Launch puede aparecer en cualquier momento. El valor no está en comprar cuatro proyectos, sino en tener un socio tecnológico que ya entiende el negocio cuando aparece el siguiente problema.",
    workLabel: "Prueba",
    workTitle: "Prueba antes que promesas.",
    asc3ndTitle: "ASC3ND",
    asc3ndLine: "Un sitio público en Next.js más una capa operativa reutilizable para onboarding, oportunidades, campañas, aprobaciones y contexto organizacional.",
    clientZeroTitle: "MACS / Cliente Cero",
    clientZeroLine: "Probamos los sistemas nuevos en nuestra propia empresa antes de pedirle a un cliente que confíe en ellos.",
    workCta: "Ver la prueba",
    storyLabel: "Padre + hijo",
    storyTitle: "Uno cuida lo que tiene que durar. El otro se mantiene cerca de lo que está cambiando.",
    storyLine:
      "Stacy aporta la mirada larga de la propiedad, la operación y lo que tiene que seguir funcionando. Stavarai se mantiene cerca de creadores, comercio y de lo que hoy mueve a los clientes. Juntos nos mantenemos lo suficientemente cerca del negocio para mejorar el sistema con el tiempo, no solo entregar un proyecto y desaparecer.",
    storyCta: "Conoce al equipo",
    builtLabel: "Hecho aquí",
    builtTitle: "Construimos las herramientas que nuestras colaboraciones necesitan después.",
    builtItems: [
      { name: "Agent MAXX", line: "Una capa de control para contexto, aprobaciones, avance y evidencia que el dueño puede revisar.", href: "/built-here#agent-maxx" },
      { name: "Buffer Blaster", line: "Un motor de operaciones de contenido para investigar, producir, evaluar y programar.", href: "/built-here#buffer-blaster" },
      { name: "Home Team AI Lab", line: "Pruebas con tareas reales de negocio usando modelos locales y abiertos antes de agregar más complejidad.", href: "/built-here#home-team" },
    ],
    builtCta: "Ver lo que construimos",
    fitLabel: "Colaboración",
    fitTitle: "Un solo socio tecnológico responsable. Cuatro formas de empezar.",
    fitLine: "Empezamos por el camino con más presión—Reset, Momentum, Scale o Launch—y seguimos mejorando el lado digital del negocio conforme cambian las prioridades. La meta es continuidad, propiedad y menos proveedores desconectados.",
    fitCta: "Empezar la conversación",
  },
};
