import type { Locale } from "@/lib/i18n";

export type BusinessFirstHomeCopy = {
  metadataTitle: string;
  metadataDescription: string;
  nav: { method: string; work: string; about: string; start: string };
  hero: { eyebrow: string; title: string; lede: string; primaryCta: string; secondaryCta: string };
  tension: { eyebrow: string; title: string; intro: string; losses: string[] };
  belief: { eyebrow: string; title: string; accent: string; body: string };
  method: { eyebrow: string; title: string; intro: string; steps: Array<[string, string]> };
  checkup: { eyebrow: string; title: string; body: string; price: string; priceNote: string; includes: string[]; cta: string };
  ladder: { eyebrow: string; title: string; intro: string; steps: Array<[string, string, string]> };
  founders: { eyebrow: string; title: string; body: string; stacy: string; stavarai: string };
  capability: { eyebrow: string; title: string; body: string; lines: string[]; closer: string };
  technology: { eyebrow: string; title: string; body: string; principles: Array<[string, string]> };
  sovereignty: { eyebrow: string; title: string; body: string; lines: string[] };
  proof: { eyebrow: string; title: string; body: string; labels: string[] };
  final: { eyebrow: string; title: string; body: string; cta: string };
};

export const businessFirstCopy: Record<Locale, BusinessFirstHomeCopy> = {
  en: {
    metadataTitle: "MACS Digital Media | Start With the Business",
    metadataDescription: "MACS helps Washington businesses find what is getting in the way of growth, fix the highest-value problem, and build practical digital systems that stay under client control.",
    nav: { method: "How we work", work: "What we fix", about: "About", start: "Start with a Checkup" },
    hero: {
      eyebrow: "Washington · Business-first digital systems",
      title: "Your business doesn’t need more digital stuff.",
      lede: "MACS helps Washington businesses find what is getting in the way, fix the highest-value problem, and build practical systems that keep working after launch.",
      primaryCta: "Start with a Digital Checkup",
      secondaryCta: "See how MACS works",
    },
    tension: {
      eyebrow: "The ordinary leaks",
      title: "Good businesses lose customers in surprisingly ordinary places.",
      intro: "Usually the problem is not a lack of tools. It is a break in the path between attention, trust, follow-up, and action.",
      losses: [
        "A call nobody returned.",
        "A website nobody trusted.",
        "A lead sitting in an inbox.",
        "A decision nobody followed through on.",
        "A customer who could not figure out what to do next.",
      ],
    },
    belief: {
      eyebrow: "Our operating belief",
      title: "Start with the business.",
      accent: "Not the software.",
      body: "Before MACS recommends a website, campaign, CRM, automation, AI tool, or rebuild, we determine what result matters, what is actually blocking it, and what evidence would prove the problem was fixed.",
    },
    method: {
      eyebrow: "The MACS method",
      title: "Diagnose before you prescribe.",
      intro: "Every engagement moves through the same evidence-first questions. Requested deliverables are treated as clues, not diagnoses.",
      steps: [
        ["FIT", "Should we work together at all?"],
        ["WHY NOW", "What changed, and why does this matter now?"],
        ["OUTCOME", "What measurable business result needs to change?"],
        ["CUSTOMER", "Whose behavior must change for that result to happen?"],
        ["PROBLEM", "What is actually blocking the outcome today?"],
        ["ADVANTAGE", "What can this business credibly own that competitors cannot easily copy?"],
        ["FUTURE", "What should the business become over the next one to three years?"],
        ["POSITION", "What should the right customer remember and choose?"],
        ["PROOF", "What evidence will tell us the work actually worked?"],
      ],
    },
    checkup: {
      eyebrow: "The first paid step",
      title: "Start by finding out what is actually wrong.",
      body: "The MAX Digital Checkup turns a vague request into a ranked business diagnosis before anyone starts building. We research the business, customer journey, market, website, follow-up, reputation, and digital operations, then recommend the smallest high-value next move.",
      price: "$750",
      priceNote: "Credited toward a Rescue Sprint when the work continues with MACS.",
      includes: ["What is working", "What is costing you business", "What matters now", "What can wait", "What we would fix first", "How we will measure it"],
      cta: "Start the Checkup",
    },
    ladder: {
      eyebrow: "A relationship that earns the next step",
      title: "Find it. Fix it. Connect it. Operate it.",
      intro: "We do not sell the biggest project first. Each stage has to create enough evidence to justify the next one.",
      steps: [
        ["01 · FIND", "MAX Digital Checkup", "Understand the business, isolate the highest-value problem, and define proof."],
        ["02 · FIX", "MAX Rescue Sprint", "Correct one bounded revenue, trust, conversion, follow-up, or workflow leak."],
        ["03 · CONNECT", "MAX Growth System", "Connect the website, lead flow, content, knowledge, and automation that the proven problem actually requires."],
        ["04 · OPERATE", "MAX Operations", "Maintain, measure, and improve the system after it has proven useful."],
      ],
    },
    founders: {
      eyebrow: "A father-and-son company",
      title: "Technology changes fast. Trust shouldn’t.",
      body: "MACS is built around relationships first. Stacy brings the conversation, local context, and accountability. Stavarai brings the perspective of a working business owner. The technology behind them creates leverage without replacing the human relationship.",
      stacy: "Relationships · discovery · client accountability",
      stavarai: "Business-owner perspective · execution · operating reality",
    },
    capability: {
      eyebrow: "What we can actually fix",
      title: "The answer depends on the problem.",
      body: "MACS does not force every client into the same deliverable.",
      lines: ["Sometimes it is the website.", "Sometimes it is follow-up.", "Sometimes it is positioning.", "Sometimes it is content.", "Sometimes it is the offer.", "Sometimes it is automation."],
      closer: "Sometimes the right recommendation is: don’t build anything yet.",
    },
    technology: {
      eyebrow: "When technology is the answer",
      title: "That is where MAXX becomes an unfair advantage.",
      body: "Behind MACS is a controlled AI operating layer that can research, organize knowledge, prepare follow-up, connect workflows, and help small teams execute with more consistency. It is a capability layer—not the thing you have to understand before we can help you.",
      principles: [
        ["Human approval", "Consequential actions pause for a person."],
        ["Visible history", "Important work leaves evidence instead of disappearing inside chat."],
        ["Bounded authority", "Agents work inside defined permissions and workflows."],
      ],
    },
    sovereignty: {
      eyebrow: "No hostage architecture",
      title: "Your business. Your data. Your accounts. Your system.",
      body: "MACS is designed to create capability without manufacturing dependence.",
      lines: ["You control your domain.", "You control your credentials.", "You control your data.", "You receive documented ownership and handoff paths.", "Managed support remains a choice, not a trap."],
    },
    proof: {
      eyebrow: "Proof before claims",
      title: "Better is not a feeling. We define what changes before we build.",
      body: "Every implementation starts with a baseline, a target, a measurement source, and an evaluation window. Until client results are verified, pilots and demonstrations stay clearly labeled as pilots and demonstrations.",
      labels: ["BASELINE", "TARGET", "MEASUREMENT", "WINDOW"],
    },
    final: {
      eyebrow: "The first question",
      title: "What’s getting in the way?",
      body: "Start with a Digital Checkup. We will research first, ask only what we still need to know, and tell you what we believe is worth fixing before we recommend a build.",
      cta: "Start with a Checkup",
    },
  },
  "es-MX": {
    metadataTitle: "MACS Digital Media | Primero el Negocio",
    metadataDescription: "MACS ayuda a negocios de Washington a encontrar qué frena su crecimiento, corregir el problema de mayor valor y construir sistemas digitales prácticos bajo control del cliente.",
    nav: { method: "Cómo trabajamos", work: "Qué resolvemos", about: "Nosotros", start: "Empieza con un Diagnóstico" },
    hero: {
      eyebrow: "Washington · Sistemas digitales centrados en el negocio",
      title: "Tu negocio no necesita más cosas digitales.",
      lede: "MACS ayuda a negocios de Washington a encontrar qué está frenando el avance, corregir el problema de mayor valor y construir sistemas prácticos que sigan funcionando después del lanzamiento.",
      primaryCta: "Empieza con un Diagnóstico Digital",
      secondaryCta: "Conoce cómo trabaja MACS",
    },
    tension: {
      eyebrow: "Las fugas cotidianas",
      title: "Los buenos negocios pierden clientes en lugares sorprendentemente comunes.",
      intro: "Normalmente el problema no es la falta de herramientas. Es una ruptura entre atención, confianza, seguimiento y acción.",
      losses: ["Una llamada que nadie devolvió.", "Un sitio web que no generó confianza.", "Un prospecto olvidado en una bandeja de entrada.", "Una decisión sin seguimiento.", "Un cliente que no supo cuál era el siguiente paso."],
    },
    belief: {
      eyebrow: "Nuestra forma de operar",
      title: "Primero el negocio.",
      accent: "No el software.",
      body: "Antes de recomendar un sitio web, campaña, CRM, automatización, herramienta de IA o reconstrucción, MACS determina qué resultado importa, qué lo está bloqueando y qué evidencia demostraría que el problema fue resuelto.",
    },
    method: {
      eyebrow: "El método MACS",
      title: "Diagnosticar antes de recetar.",
      intro: "Cada proyecto pasa por las mismas preguntas basadas en evidencia. La solución que pide el cliente se trata como una pista, no como el diagnóstico.",
      steps: [
        ["FIT", "¿Deberíamos trabajar juntos?"], ["POR QUÉ AHORA", "¿Qué cambió y por qué importa ahora?"], ["RESULTADO", "¿Qué resultado medible del negocio debe cambiar?"], ["CLIENTE", "¿Qué comportamiento del cliente debe cambiar?"], ["PROBLEMA", "¿Qué bloquea el resultado hoy?"], ["VENTAJA", "¿Qué puede poseer este negocio que sus competidores no pueden copiar fácilmente?"], ["FUTURO", "¿En qué debe convertirse el negocio en uno a tres años?"], ["POSICIÓN", "¿Qué debe recordar y elegir el cliente correcto?"], ["PRUEBA", "¿Qué evidencia demostrará que funcionó?"]
      ],
    },
    checkup: {
      eyebrow: "El primer paso pagado",
      title: "Empieza descubriendo qué está realmente mal.",
      body: "El Diagnóstico Digital MAX convierte una petición vaga en un diagnóstico priorizado antes de construir. Investigamos el negocio, recorrido del cliente, mercado, sitio web, seguimiento, reputación y operación digital para recomendar el siguiente movimiento más pequeño y valioso.",
      price: "$750",
      priceNote: "Se acredita a un Rescue Sprint si el trabajo continúa con MACS.",
      includes: ["Qué funciona", "Qué está costando negocio", "Qué importa ahora", "Qué puede esperar", "Qué corregiríamos primero", "Cómo lo mediremos"],
      cta: "Iniciar el Diagnóstico",
    },
    ladder: {
      eyebrow: "Una relación que gana el siguiente paso",
      title: "Encontrar. Corregir. Conectar. Operar.",
      intro: "No vendemos primero el proyecto más grande. Cada etapa debe producir suficiente evidencia para justificar la siguiente.",
      steps: [["01 · ENCONTRAR", "Diagnóstico Digital MAX", "Entender el negocio, aislar el problema de mayor valor y definir la prueba."], ["02 · CORREGIR", "MAX Rescue Sprint", "Corregir una fuga acotada de ingresos, confianza, conversión, seguimiento o flujo."], ["03 · CONECTAR", "MAX Growth System", "Conectar sitio, prospectos, contenido, conocimiento y automatización que el problema probado requiere."], ["04 · OPERAR", "MAX Operations", "Mantener, medir y mejorar el sistema después de demostrar utilidad."]],
    },
    founders: {
      eyebrow: "Una empresa de padre e hijo",
      title: "La tecnología cambia rápido. La confianza no debería.",
      body: "MACS se construye primero alrededor de relaciones. Stacy aporta la conversación, el contexto local y la responsabilidad. Stavarai aporta la perspectiva de un dueño de negocio activo. La tecnología detrás de ellos crea apalancamiento sin reemplazar la relación humana.",
      stacy: "Relaciones · descubrimiento · responsabilidad con clientes",
      stavarai: "Perspectiva de dueño · ejecución · realidad operativa",
    },
    capability: {
      eyebrow: "Lo que realmente podemos corregir",
      title: "La respuesta depende del problema.",
      body: "MACS no fuerza a cada cliente al mismo entregable.",
      lines: ["A veces es el sitio web.", "A veces es el seguimiento.", "A veces es el posicionamiento.", "A veces es el contenido.", "A veces es la oferta.", "A veces es la automatización."],
      closer: "A veces la recomendación correcta es: todavía no construyas nada.",
    },
    technology: {
      eyebrow: "Cuando la tecnología sí es la respuesta",
      title: "Ahí es donde MAXX se vuelve una ventaja injusta.",
      body: "Detrás de MACS existe una capa operativa de IA controlada que puede investigar, organizar conocimiento, preparar seguimiento, conectar flujos y ayudar a equipos pequeños a ejecutar con mayor consistencia. Es una capacidad, no algo que debas entender antes de que podamos ayudarte.",
      principles: [["Aprobación humana", "Las acciones importantes se detienen para una persona."], ["Historial visible", "El trabajo importante deja evidencia en lugar de desaparecer en un chat."], ["Autoridad limitada", "Los agentes trabajan dentro de permisos y flujos definidos."]],
    },
    sovereignty: {
      eyebrow: "Sin arquitectura rehén",
      title: "Tu negocio. Tus datos. Tus cuentas. Tu sistema.",
      body: "MACS está diseñado para crear capacidad sin fabricar dependencia.",
      lines: ["Tú controlas tu dominio.", "Tú controlas tus credenciales.", "Tú controlas tus datos.", "Recibes documentación y una ruta de entrega.", "El soporte administrado es una opción, no una trampa."],
    },
    proof: {
      eyebrow: "Prueba antes que promesas",
      title: "Mejor no es una sensación. Definimos qué debe cambiar antes de construir.",
      body: "Cada implementación inicia con una línea base, una meta, una fuente de medición y una ventana de evaluación. Hasta verificar resultados reales, los pilotos y demostraciones permanecen claramente etiquetados.",
      labels: ["LÍNEA BASE", "META", "MEDICIÓN", "VENTANA"],
    },
    final: {
      eyebrow: "La primera pregunta",
      title: "¿Qué se está interponiendo?",
      body: "Empieza con un Diagnóstico Digital. Investigamos primero, preguntamos sólo lo que todavía necesitamos saber y te decimos qué vale la pena corregir antes de recomendar una construcción.",
      cta: "Empieza con un Diagnóstico",
    },
  },
};
