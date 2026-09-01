import type { Locale } from "@/lib/i18n";

type Program = {
  name: string;
  line: string;
  href: string;
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
  programs: Program[];
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
    metadataTitle: "MACS Digital Media | Digital systems for owner-led businesses",
    metadataDescription:
      "MACS Digital Media is a Pacific Northwest father-and-son team that helps owner-led businesses make websites, content, automation and follow-up work together.",
    heroTitle: "We fix the digital side of growing businesses.",
    heroLine: "Website, content, automation and follow-up—one father-and-son team makes the pieces work together and leaves the owner in control.",
    primaryCta: "Tell us what's stuck",
    credibility: "Pacific Northwest · Father + son · 90-day systems engagements",
    programsLabel: "Start here",
    programsTitle: "Start with the problem, not a package.",
    programs: [
      { name: "Reset", line: "Too many tools, vendors and loose ends are running the business.", href: "/programs#reset" },
      { name: "Momentum", line: "The business is good, but attention and follow-up are inconsistent.", href: "/programs#momentum" },
      { name: "Scale", line: "Growth is outrunning the way information, decisions and work get handled.", href: "/programs#scale" },
      { name: "Launch", line: "A new offer needs a working system behind it, not just a launch campaign.", href: "/programs#launch" },
    ],
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
      "Stacy brings the long view of ownership, operations and what has to keep working. Stavarai stays close to creators, commerce and what customers respond to now. The work happens where those two clocks meet.",
    storyCta: "Meet the team",
    builtLabel: "Built here",
    builtTitle: "We build the tools we wish small businesses already had.",
    builtItems: [
      { name: "Agent MAXX", line: "An owner-facing control layer for context, approvals, progress and evidence.", href: "/built-here#agent-maxx" },
      { name: "Buffer Blaster", line: "A content-operations engine for research, production, scoring and scheduling.", href: "/built-here#buffer-blaster" },
      { name: "Home Team AI Lab", line: "Real business-task testing of smaller local and open models before adding more complexity.", href: "/built-here#home-team" },
    ],
    builtCta: "See what we built",
    fitLabel: "Fit",
    fitTitle: "If the digital side of the business feels scattered, start here.",
    fitLine: "Initial engagements run 90 days. We find the friction, fix the highest-leverage problems and leave clear ownership behind.",
    fitCta: "Tell us what's stuck",
  },
  "es-MX": {
    metadataTitle: "MACS Digital Media | Sistemas digitales para negocios dirigidos por sus dueños",
    metadataDescription:
      "MACS Digital Media es un equipo de padre e hijo del Noroeste del Pacífico que ayuda a negocios dirigidos por sus dueños a hacer que sitio web, contenido, automatización y seguimiento trabajen juntos.",
    heroTitle: "Arreglamos el lado digital de negocios en crecimiento.",
    heroLine: "Sitio web, contenido, automatización y seguimiento: un equipo de padre e hijo hace que las piezas trabajen juntas y deja el control en manos del dueño.",
    primaryCta: "Cuéntanos qué está atorado",
    credibility: "Noroeste del Pacífico · Padre + hijo · Proyectos de sistemas de 90 días",
    programsLabel: "Empieza aquí",
    programsTitle: "Empieza por el problema, no por un paquete.",
    programs: [
      { name: "Reset", line: "Demasiadas herramientas, proveedores y pendientes están dirigiendo el negocio.", href: "/programs#reset" },
      { name: "Momentum", line: "El negocio es bueno, pero la atención y el seguimiento son inconsistentes.", href: "/programs#momentum" },
      { name: "Scale", line: "El crecimiento ya rebasó la forma en que se manejan la información, las decisiones y el trabajo.", href: "/programs#scale" },
      { name: "Launch", line: "Una nueva oferta necesita un sistema que funcione detrás, no solo una campaña de lanzamiento.", href: "/programs#launch" },
    ],
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
      "Stacy aporta la mirada larga de la propiedad, la operación y lo que tiene que seguir funcionando. Stavarai se mantiene cerca de creadores, comercio y de lo que hoy mueve a los clientes. El trabajo sucede donde se encuentran esos dos ritmos.",
    storyCta: "Conoce al equipo",
    builtLabel: "Hecho aquí",
    builtTitle: "Construimos las herramientas que nos gustaría que los pequeños negocios ya tuvieran.",
    builtItems: [
      { name: "Agent MAXX", line: "Una capa de control para contexto, aprobaciones, avance y evidencia que el dueño puede revisar.", href: "/built-here#agent-maxx" },
      { name: "Buffer Blaster", line: "Un motor de operaciones de contenido para investigar, producir, evaluar y programar.", href: "/built-here#buffer-blaster" },
      { name: "Home Team AI Lab", line: "Pruebas con tareas reales de negocio usando modelos locales y abiertos antes de agregar más complejidad.", href: "/built-here#home-team" },
    ],
    builtCta: "Ver lo que construimos",
    fitLabel: "Encaje",
    fitTitle: "Si el lado digital del negocio se siente regado, empieza aquí.",
    fitLine: "Los proyectos iniciales duran 90 días. Encontramos la fricción, resolvemos los problemas de mayor impacto y dejamos la propiedad clara.",
    fitCta: "Cuéntanos qué está atorado",
  },
};
