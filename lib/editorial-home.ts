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
    metadataTitle: "MACS Digital Media | Pacific Northwest father-and-son business systems",
    metadataDescription:
      "MACS Digital Media is a Pacific Northwest father-and-son company helping owner-led organizations bring scattered digital work back together.",
    heroTitle: "Make the business feel whole again.",
    heroLine: "A father-and-son team for the parts that stopped working together.",
    primaryCta: "See if we're a fit",
    credibility: "Pacific Northwest · Father + son · Selective 90-day engagements",
    programsLabel: "Programs",
    programsTitle: "Four situations we step into.",
    programs: [
      { name: "Reset", line: "When too many tools, vendors and loose ends are running the business.", href: "/programs#reset" },
      { name: "Momentum", line: "When the business is good, but not enough people are seeing it.", href: "/programs#momentum" },
      { name: "Scale", line: "When growth has outpaced the way the work gets done.", href: "/programs#scale" },
      { name: "Launch", line: "When something new needs more than a good idea.", href: "/programs#launch" },
    ],
    workLabel: "Work",
    workTitle: "Show the work. Then explain it.",
    asc3ndTitle: "ASC3ND",
    asc3ndLine: "A Seattle social-purpose organization building a clearer public front door and a reusable operating backbone.",
    clientZeroTitle: "MACS / Client Zero",
    clientZeroLine: "We use our own company first when we test what should become part of a client's system.",
    workCta: "See the work",
    storyLabel: "Father + son",
    storyTitle: "One watches what has to last. One stays close to what is changing.",
    storyLine:
      "Stacy knows what it feels like when software, vendors and responsibilities scatter across a business. Stavarai brings the creator, commerce and content side of what customers respond to now.",
    storyCta: "Our story",
    builtLabel: "Built here",
    builtTitle: "Things we built because we needed them to do better work.",
    builtItems: [
      { name: "Agent MAXX", line: "An owner-facing operator for context, approvals, progress and evidence.", href: "/built-here#agent-maxx" },
      { name: "Buffer Blaster", line: "Our internal content-operations engine for research, production, scoring and scheduling.", href: "/built-here#buffer-blaster" },
      { name: "Home Team AI Lab", line: "Real business-task tests of smaller local and open models before we reach for more complexity.", href: "/built-here#home-team" },
    ],
    builtCta: "Explore Built Here",
    fitLabel: "Fit",
    fitTitle: "We work with a small number of businesses at a time.",
    fitLine: "Initial engagements run 90 days. The goal is useful work, clear ownership and a relationship worth keeping.",
    fitCta: "See if we're a fit",
  },
  "es-MX": {
    metadataTitle: "MACS Digital Media | Empresa familiar del Noroeste del Pacífico",
    metadataDescription:
      "MACS Digital Media es una empresa de padre e hijo del Noroeste del Pacífico que ayuda a negocios dirigidos por sus dueños a volver a conectar su trabajo digital.",
    heroTitle: "Haz que el negocio vuelva a sentirse completo.",
    heroLine: "Un equipo de padre e hijo para las partes que dejaron de trabajar juntas.",
    primaryCta: "Veamos si encajamos",
    credibility: "Noroeste del Pacífico · Padre + hijo · Proyectos selectivos de 90 días",
    programsLabel: "Programas",
    programsTitle: "Cuatro momentos en los que entramos a ayudar.",
    programs: [
      { name: "Reset", line: "Cuando demasiadas herramientas, proveedores y pendientes empiezan a dirigir el negocio.", href: "/programs#reset" },
      { name: "Momentum", line: "Cuando el negocio es bueno, pero no suficiente gente lo está viendo.", href: "/programs#momentum" },
      { name: "Scale", line: "Cuando el crecimiento ya rebasó la forma en que se hace el trabajo.", href: "/programs#scale" },
      { name: "Launch", line: "Cuando algo nuevo necesita más que una buena idea.", href: "/programs#launch" },
    ],
    workLabel: "Trabajo",
    workTitle: "Primero muestra el trabajo. Después explícalo.",
    asc3ndTitle: "ASC3ND",
    asc3ndLine: "Una organización de propósito social en Seattle construyendo una entrada pública más clara y una base operativa reutilizable.",
    clientZeroTitle: "MACS / Cliente Cero",
    clientZeroLine: "Probamos primero en nuestra propia empresa lo que después puede formar parte del sistema de un cliente.",
    workCta: "Ver el trabajo",
    storyLabel: "Padre + hijo",
    storyTitle: "Uno cuida lo que tiene que durar. El otro se mantiene cerca de lo que está cambiando.",
    storyLine:
      "Stacy sabe lo que pasa cuando el software, los proveedores y las responsabilidades terminan regados por todo el negocio. Stavarai aporta la mirada de creadores, comercio y contenido sobre lo que hoy sí mueve a los clientes.",
    storyCta: "Nuestra historia",
    builtLabel: "Hecho aquí",
    builtTitle: "Cosas que construimos porque las necesitábamos para hacer mejor trabajo.",
    builtItems: [
      { name: "Agent MAXX", line: "Un operador para contexto, aprobaciones, avance y evidencia que el dueño puede revisar.", href: "/built-here#agent-maxx" },
      { name: "Buffer Blaster", line: "Nuestro motor interno de operaciones de contenido para investigar, producir, evaluar y programar.", href: "/built-here#buffer-blaster" },
      { name: "Home Team AI Lab", line: "Pruebas con tareas reales de negocio antes de agregar modelos o infraestructura más complejos.", href: "/built-here#home-team" },
    ],
    builtCta: "Explorar Hecho Aquí",
    fitLabel: "Encaje",
    fitTitle: "Trabajamos con pocos negocios a la vez.",
    fitLine: "Los proyectos iniciales duran 90 días. Buscamos trabajo útil, propiedad clara y una relación que valga la pena mantener.",
    fitCta: "Veamos si encajamos",
  },
};
