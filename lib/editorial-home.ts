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
    metadataTitle: "MACS Digital Media | One team for the digital side of your business",
    metadataDescription:
      "MACS helps owner-led businesses bring websites, content, systems and follow-up under one accountable team.",
    heroTitle: "Stop being the person holding the digital side of your business together.",
    heroLine: "MACS brings your website, content, systems and follow-up under one accountable team—so you can run the business instead of coordinating tools and vendors.",
    primaryCta: "Tell us what's important",
    credibility: "Pacific Northwest · Father + son · Local partners",
    programsLabel: "",
    programsTitle: "Four ways to start.",
    programsIntro: "",
    programs: [
      {
        name: "Reset",
        line: "Fix what’s getting in the way.",
        href: "/programs#reset",
        proofLabel: "Taste of Nawlins",
        proofHint: "A live launch built with the founder.",
      },
      {
        name: "Momentum",
        line: "Stay visible. Turn attention into opportunity.",
        href: "/programs#momentum",
        proofLabel: "Buffer Blaster",
        proofHint: "The content system we use to keep work moving.",
      },
      {
        name: "Scale",
        line: "The idea is working. Grow without complexity.",
        href: "/programs#scale",
        proofLabel: "Pare’ + Posta Studio",
        proofHint: "Products built to make repeatable work easier.",
      },
      {
        name: "Launch",
        line: "Turn new ideas into branded campaigns.",
        href: "/programs#launch",
        proofLabel: "ASC3ND",
        proofHint: "A new organization launched with room to keep growing.",
      },
    ],
    partnershipBridgeLabel: "",
    partnershipBridgeTitle: "We stay involved in the process.",
    partnershipBridgeLine: "Extended arrangements help you grow.",
    workLabel: "",
    workTitle: "Proof before promises.",
    asc3ndTitle: "ASC3ND",
    asc3ndLine: "A new organization launched with the digital foundation to keep building.",
    clientZeroTitle: "Built Here",
    clientZeroLine: "We use our own business as the first test.",
    workCta: "See the work",
    storyLabel: "Father + son",
    storyTitle: "One watches what has to last. One stays close to what is changing.",
    storyLine: "Stacy brings simplicity to non-technical founders. Stavarai stays close to what’s changing.",
    storyCta: "Meet the team",
    builtLabel: "Built here",
    builtTitle: "We build only what you need.",
    builtItems: [
      { name: "Agent MAXX", line: "Day-to-day digital.", href: "/maxx" },
      { name: "Buffer Blaster", line: "Our system for keeping content moving.", href: "/work/buffer-blaster" },
      { name: "Home Team Lab", line: "Where we test what earns a place in the stack.", href: "/built-here#home-team" },
    ],
    builtCta: "See what we built",
    fitLabel: "",
    fitTitle: "",
    fitLine: "",
    fitCta: "Tell us what's important",
  },
  "es-MX": {
    metadataTitle: "MACS Digital Media | Un solo equipo para el lado digital de tu negocio",
    metadataDescription:
      "MACS ayuda a negocios dirigidos por sus dueños a reunir sitio web, contenido, sistemas y seguimiento bajo un solo equipo responsable.",
    heroTitle: "Deja de ser la persona que sostiene sola el lado digital de tu negocio.",
    heroLine: "MACS reúne sitio web, contenido, sistemas y seguimiento bajo un solo equipo responsable para que puedas dirigir el negocio en lugar de coordinar herramientas y proveedores.",
    primaryCta: "Cuéntanos qué es importante",
    credibility: "Noroeste del Pacífico · Padre + hijo · Socios locales",
    programsLabel: "",
    programsTitle: "Cuatro formas de empezar.",
    programsIntro: "",
    programs: [
      {
        name: "Reset",
        line: "Arregla lo que está estorbando.",
        href: "/programs#reset",
        proofLabel: "Taste of Nawlins",
        proofHint: "Un lanzamiento en vivo construido con la fundadora.",
      },
      {
        name: "Momentum",
        line: "Mantente visible. Convierte atención en oportunidad.",
        href: "/programs#momentum",
        proofLabel: "Buffer Blaster",
        proofHint: "El sistema de contenido que usamos para mantener el trabajo en movimiento.",
      },
      {
        name: "Scale",
        line: "La idea funciona. Crece sin complejidad.",
        href: "/programs#scale",
        proofLabel: "Pare’ + Posta Studio",
        proofHint: "Productos creados para hacer más simple el trabajo repetible.",
      },
      {
        name: "Launch",
        line: "Convierte nuevas ideas en campañas de marca.",
        href: "/programs#launch",
        proofLabel: "ASC3ND",
        proofHint: "Una nueva organización lanzada con espacio para seguir creciendo.",
      },
    ],
    partnershipBridgeLabel: "",
    partnershipBridgeTitle: "Seguimos involucrados en el proceso.",
    partnershipBridgeLine: "Las relaciones extendidas ayudan a crecer.",
    workLabel: "",
    workTitle: "Prueba antes que promesas.",
    asc3ndTitle: "ASC3ND",
    asc3ndLine: "Una nueva organización lanzada con una base digital para seguir construyendo.",
    clientZeroTitle: "Hecho aquí",
    clientZeroLine: "Usamos nuestro propio negocio como primera prueba.",
    workCta: "Ver el trabajo",
    storyLabel: "Padre + hijo",
    storyTitle: "Uno cuida lo que tiene que durar. El otro se mantiene cerca de lo que está cambiando.",
    storyLine: "Stacy simplifica lo digital para fundadores no técnicos. Stavarai se mantiene cerca de lo que está cambiando.",
    storyCta: "Conoce al equipo",
    builtLabel: "Hecho aquí",
    builtTitle: "Construimos solo lo que necesitas.",
    builtItems: [
      { name: "Agent MAXX", line: "Operación digital del día a día.", href: "/maxx" },
      { name: "Buffer Blaster", line: "Nuestro sistema para mantener el contenido en movimiento.", href: "/work/buffer-blaster" },
      { name: "Home Team Lab", line: "Donde probamos lo que realmente merece entrar al sistema.", href: "/built-here#home-team" },
    ],
    builtCta: "Ver lo que construimos",
    fitLabel: "",
    fitTitle: "",
    fitLine: "",
    fitCta: "Cuéntanos qué es importante",
  },
};
