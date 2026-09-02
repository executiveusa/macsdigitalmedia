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
      "MACS Digital Media is a Pacific Northwest father-and-son technology partner helping owner-led businesses connect websites, content, automation, AI and follow-up into one working system.",
    heroTitle: "Your technology partner for the digital side of the business.",
    heroLine: "Websites, content, automation, AI and follow-up—planned and improved by one accountable father-and-son team instead of a rotating list of freelancers and vendors.",
    primaryCta: "Tell us what's stuck",
    credibility: "Pacific Northwest · Father + son · Built for ongoing partnership",
    programsLabel: "How we partner",
    programsTitle: "One technology partner. Four ways to start.",
    programsIntro: "Start where the pressure is. Each lane solves a different business condition, but the context stays with the same team as priorities change.",
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
        line: "Build consistent growth through content, visibility, distribution and follow-up.",
        href: "/programs#momentum",
        proofLabel: "Momentum proof",
        proofHint: "Add campaign, content system, video or results story",
      },
      {
        name: "Scale",
        line: "Make growth easier to operate with automation, AI, knowledge and better systems.",
        href: "/programs#scale",
        proofLabel: "Scale proof",
        proofHint: "Add workflow, automation, agent or operations case study",
      },
      {
        name: "Launch",
        line: "Build the digital system behind what comes next—not just the campaign announcing it.",
        href: "/programs#launch",
        proofLabel: "Launch proof",
        proofHint: "Add launch video, product, brand, live site or case study",
      },
    ],
    partnershipBridgeLabel: "The relationship",
    partnershipBridgeTitle: "Start with one problem. Keep the context as the business changes.",
    partnershipBridgeLine: "A Reset can become Momentum. Momentum can expose what needs to Scale. Launch can happen at any point. The value is not buying four projects—it is having one technology partner who already understands the business when the next problem appears.",
    workLabel: "Proof",
    workTitle: "Proof before promises.",
    asc3ndTitle: "ASC3ND",
    asc3ndLine: "A public Next.js site plus a reusable operations layer for onboarding, opportunities, campaigns, approvals and organizational context.",
    clientZeroTitle: "MACS / Client Zero",
    clientZeroLine: "We test new systems on our own company before asking a client to trust them.",
    workCta: "See the proof",
    storyLabel: "Father + son",
    storyTitle: "One watches what has to last. One stays close to what is changing.",
    storyLine:
      "Stacy brings the long view of ownership, operations and what has to keep working. Stavarai stays close to creators, commerce and what customers respond to now. Together, we stay close enough to the business to improve the system over time—not just ship a project and disappear.",
    storyCta: "Meet the team",
    builtLabel: "Built here",
    builtTitle: "We build the tools our partnerships need next.",
    builtItems: [
      { name: "Agent MAXX", line: "An owner-facing control layer for context, approvals, progress and evidence.", href: "/built-here#agent-maxx" },
      { name: "Buffer Blaster", line: "A content-operations engine for research, production, scoring and scheduling.", href: "/built-here#buffer-blaster" },
      { name: "Home Team AI Lab", line: "Real business-task testing of smaller local and open models before adding more complexity.", href: "/built-here#home-team" },
    ],
    builtCta: "See what we built",
    fitLabel: "Partnership",
    fitTitle: "One accountable technology partner. Four ways to start.",
    fitLine: "We begin with the highest-pressure lane—Reset, Momentum, Scale or Launch—then keep improving the digital side of the business as priorities change. The goal is continuity, ownership and fewer disconnected vendors.",
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
