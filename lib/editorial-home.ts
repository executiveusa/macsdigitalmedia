import type { Locale } from "@/lib/i18n";

type Program = { name: string; line: string; href: string };
type BuiltItem = { name: string; line: string; href: string };

type EditorialHome = {
  metadataTitle: string;
  metadataDescription: string;
  heroTitle: string;
  heroLine: string;
  primaryCta: string;
  credibility: string;
  programsTitle: string;
  programs: Program[];
  partnershipBridgeTitle: string;
  partnershipBridgeLine: string;
  workLabel: string;
  workTitle: string;
  workCta: string;
  storyLabel: string;
  storyTitle: string;
  storyLine: string;
  storyCta: string;
  builtTitle: string;
  builtItems: BuiltItem[];
  builtCta: string;
  fitTitle: string;
  fitCta: string;
};

export const editorialHome: Record<Locale, EditorialHome> = {
  en: {
    metadataTitle: "MACS Digital Media | A digital partner for non-technical founders",
    metadataDescription:
      "MACS Digital Media is a Pacific Northwest father-and-son digital partner for non-technical founders.",
    heroTitle: "A digital partner for non-technical founders.",
    heroLine: "",
    primaryCta: "Tell us what's important",
    credibility: "Father + son · Built in the Pacific Northwest",
    programsTitle: "Four ways to start.",
    programs: [
      { name: "Reset", line: "Simplify what got complicated.", href: "/programs#reset" },
      { name: "Momentum", line: "Stay visible. Build in public.", href: "/programs#momentum" },
      { name: "Scale", line: "The idea is working. Grow without complexity.", href: "/programs#scale" },
      { name: "Launch", line: "Bring your next idea or project to market.", href: "/programs#launch" },
    ],
    partnershipBridgeTitle: "Start with what matters most.",
    partnershipBridgeLine: "We stay involved as you grow.",
    workLabel: "Proof before promise.",
    workTitle: "See the work.",
    workCta: "View selected work",
    storyLabel: "Father + son",
    storyTitle: "Two perspectives help your business stay relevant and adapt to changing times.",
    storyLine: "One brings the long view. One stays close to what’s changing now.",
    storyCta: "Our story",
    builtTitle: "Built Here",
    builtItems: [
      { name: "Buffer Blaster", line: "Own the system. Keep creating.", href: "/work/buffer-blaster" },
      { name: "PARÉ", line: "Design without designers.", href: "/work/pare" },
      { name: "Posta Studio", line: "One calendar. Every channel.", href: "/work/posta-studio" },
      { name: "Foundry", line: "Virtual computers for your AI agents.", href: "/work/foundry-fleet" },
    ],
    builtCta: "View Built Here",
    fitTitle: "Tell us what's important.",
    fitCta: "Book a conversation",
  },
  "es-MX": {
    metadataTitle: "MACS Digital Media | Socio tecnológico para negocios dirigidos por sus dueños",
    metadataDescription:
      "MACS Digital Media es un equipo de padre e hijo del Noroeste del Pacífico que funciona como socio tecnológico para conectar sitio web, contenido, sistemas y seguimiento.",
    heroTitle: "Tu socio tecnológico para el lado digital del negocio.",
    heroLine: "Sitio web, contenido, sistemas y seguimiento: planeados y mejorados por un solo equipo responsable.",
    primaryCta: "Cuéntanos qué está atorado",
    credibility: "Noroeste del Pacífico · Padre + hijo · Socios locales",
    programsTitle: "Un socio tecnológico. Cuatro formas de empezar.",
    programs: [
      { name: "Reset", line: "Arregla lo que está regado: sitio web, herramientas, proveedores y flujos rotos.", href: "/programs#reset" },
      { name: "Momentum", line: "Construye crecimiento consistente con contenido, visibilidad, distribución y seguimiento.", href: "/programs#momentum" },
      { name: "Scale", line: "La idea funciona. Crece sin complejidad.", href: "/programs#scale" },
      { name: "Launch", line: "Construye el sistema digital detrás de lo que sigue.", href: "/programs#launch" },
    ],
    partnershipBridgeTitle: "Empieza con un problema.",
    partnershipBridgeLine: "Conserva el contexto conforme cambia el negocio.",
    workLabel: "Prueba",
    workTitle: "Prueba antes que promesas.",
    workCta: "Ver el trabajo",
    storyLabel: "Padre + hijo",
    storyTitle: "Uno cuida lo que tiene que durar. El otro se mantiene cerca de lo que está cambiando.",
    storyLine: "Dos perspectivas para mantener el negocio relevante.",
    storyCta: "Nuestra historia",
    builtTitle: "Hecho aquí",
    builtItems: [
      { name: "Buffer Blaster", line: "Un motor de operaciones de contenido.", href: "/work/buffer-blaster" },
      { name: "PARÉ", line: "Diseño y dirección visual.", href: "/work/pare" },
      { name: "Posta Studio", line: "Un calendario para varios canales.", href: "/work/posta-studio" },
      { name: "Foundry", line: "Computadoras virtuales para agentes de IA.", href: "/work/foundry-fleet" },
    ],
    builtCta: "Ver lo que construimos",
    fitTitle: "Cuéntanos qué es importante.",
    fitCta: "Reservar una conversación",
  },
};
