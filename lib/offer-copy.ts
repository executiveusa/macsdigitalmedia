import type { Locale } from "@/lib/i18n";

type OfferCopy = {
  common: {
    primaryCta: string;
  };
  home: {
    metadataTitle: string;
    metadataDescription: string;
    eyebrow: string;
    title: string;
    lede: string;
    primaryCta: string;
    secondaryCta: string;
    nextStep: string;
    trust: readonly string[];
    problemEyebrow: string;
    problemTitle: string;
    problemIntro: string;
    beforeTitle: string;
    before: readonly string[];
    afterTitle: string;
    after: readonly string[];
    buildEyebrow: string;
    buildTitle: string;
    buildIntro: string;
    systemParts: readonly (readonly [string, string, string])[];
    demoEyebrow: string;
    demoTitle: string;
    demoIntro: string;
    workflowSteps: readonly (readonly [string, string, string])[];
    rescueEyebrow: string;
    rescueTitle: string;
    rescueIntro: string;
    rescuePaths: readonly (readonly [string, string, string])[];
    founderEyebrow: string;
    founderTitle: string;
    founderParagraphs: readonly string[];
    founderPrinciples: readonly (readonly [string, string])[];
    launchEyebrow: string;
    launchTitle: string;
    launchIntro: string;
    launchPhases: readonly (readonly [string, string, string])[];
    offerEyebrow: string;
    offerTitle: string;
    offerIntro: string;
    offerLock: string;
    validationCohort: string;
    installation90: string;
    included: readonly string[];
    payments: readonly string[];
    guaranteeEyebrow: string;
    guaranteeTitle: string;
    guaranteeBody: string;
    responsibilityTitle: string;
    responsibilityBody: string;
    scopeTitle: string;
    scopeBody: string;
    fitEyebrow: string;
    fitTitle: string;
    fitIntro: string;
    fitCriteria: readonly string[];
    finalEyebrow: string;
    finalTitle: string;
    finalCta: string;
  };
  foundingLaunch: {
    metadataTitle: string;
    metadataDescription: string;
    eyebrow: string;
    title: string;
    lede: string;
    primaryCta: string;
    introTitle: string;
    intro: string;
    includedTitle: string;
    included: readonly string[];
    definitionsTitle: string;
    definitions: readonly (readonly [string, string])[];
    paymentTitle: string;
    payments: readonly string[];
    paymentNote: string;
    sequenceTitle: string;
    sequenceHeaders: readonly string[];
    phases: readonly (readonly [string, string, string])[];
    acceptanceTitle: string;
    acceptance: string;
    clientTitle: string;
    clientCommitment: string;
    exclusionsTitle: string;
    exclusions: string;
    finalTitle: string;
    finalBody: string;
    finalCta: string;
  };
};

export const offerCopy: Record<Locale, OfferCopy> = {
  en: {
    common: {
      primaryCta: "Apply for a founding installation",
    },
    home: {
      metadataTitle: "MACS Digital Media | Client-Owned AI Operations",
      metadataDescription: "MACS installs private, client-owned AI operations systems for Washington nonprofits, social-purpose organizations, and selected small businesses.",
      eyebrow: "Client-owned AI operations for Washington organizations",
      title: "Own the AI system that keeps your organization moving.",
      lede: "In 90 days, MACS connects your approved knowledge, website inquiries, meeting follow-up, and routine work inside one controlled system—without permanent software lock-in or an internal technical department.",
      primaryCta: "Apply for a founding installation",
      secondaryCta: "Watch inquiry become follow-up",
      nextStep: "Five Washington organizations will be accepted. Application review comes first, and submitting does not create a contract or reserve a spot.",
      trust: [
        "Father-and-son built in Washington",
        "Human approval where it matters",
        "Documented ownership handoff",
      ],
      problemEyebrow: "The operational problem",
      problemTitle: "Important work is being lost between inboxes, meetings, websites, and memory.",
      problemIntro: "MACS starts with the work that is already being missed. The goal is not to add another AI tool. The goal is to give two important workflows a clear path, an accountable owner, and a visible history.",
      beforeTitle: "Before MACS",
      before: [
        "New inquiries wait too long or disappear without an owner.",
        "Meeting decisions remain trapped in notes and memory.",
        "Staff search across folders, inboxes, and disconnected tools.",
        "Website visitors do not know what to do next.",
        "The organization depends on one person remembering everything.",
      ],
      afterTitle: "After the founding installation",
      after: [
        "New inquiries enter a defined follow-up workflow.",
        "Meetings create assigned actions, owners, and due dates.",
        "Approved organizational knowledge is searchable and sourced.",
        "Sensitive actions stop for human review.",
        "The client receives documentation and an ownership handoff option.",
      ],
      buildEyebrow: "What we install",
      buildTitle: "One private system behind the work your team already does.",
      buildIntro: "The public website, approved organizational knowledge, managed operator, approval controls, and activity history work together instead of becoming five more disconnected tools.",
      systemParts: [
        ["01", "Company Brain", "Organizes approved knowledge, policies, programs, and working context so staff and agents stop starting from zero."],
        ["02", "Agent MAXX", "Prepares follow-up, organizes requests, and turns conversations into action inside clearly defined permissions."],
        ["03", "AI Front Door", "Gives visitors one clear way to ask, apply, schedule, or request help while routing structured information to the right team."],
        ["04", "Human approval", "Sensitive or consequential actions pause for review. Staff stays in control of what is sent, changed, scheduled, or published."],
        ["05", "Activity history", "Shows what happened, what is waiting, what failed, and what needs attention instead of hiding work inside a chat window."],
      ],
      demoEyebrow: "Labeled demonstration",
      demoTitle: "Watch one inquiry become accountable follow-up.",
      demoIntro: "This example uses synthetic data. The public demonstration never touches real client records or unrestricted agent tools.",
      workflowSteps: [
        ["Inquiry received", "A website question enters as a structured request with a recorded time and source.", "Recorded"],
        ["Approved knowledge checked", "The Company Brain finds the relevant program information and supporting source.", "Recorded"],
        ["Response prepared", "Agent MAXX drafts a useful reply and identifies any missing information.", "Recorded"],
        ["Human approval", "A staff member reviews the draft before a personalized message is sent.", "Approval required"],
        ["Follow-up assigned", "The next action, owner, and due date are recorded so the request cannot quietly disappear.", "Recorded"],
      ],
      rescueEyebrow: "AI Front Door + website rescue",
      rescueTitle: "We do not attach a polished intake page to a website that destroys trust.",
      rescueIntro: "The audit determines whether the current site should be preserved, repaired, or replaced with a focused five-page foundation.",
      rescuePaths: [
        ["Green — preserve", "The website already earns trust", "Keep the site, clarify its most important actions, and add the AI Front Door to the highest-value visitor journey."],
        ["Yellow — rescue", "The content is useful, but the path is unclear", "Repair the homepage, navigation, mobile experience, and primary inquiry or application flow while preserving usable content."],
        ["Red — replace", "The current site damages confidence", "Install a standardized five-page foundation with clear messaging, accessible navigation, and the AI Front Door built in."],
      ],
      founderEyebrow: "Built by a father and son",
      founderTitle: "Powerful technology should create capability—not dependence.",
      founderParagraphs: [
        "MACS Digital Media began in a Pacific Northwest basement as a father-and-son effort between Jeremy Bowers and his son, Tyshawn. The goal was simple: give smaller organizations access to powerful technology without forcing them to surrender control of their data, systems, or future.",
        "That belief became the foundation of the MACS offer. We install the system, prove the two agreed workflows, document how it works, and give the organization a clear choice between independent ownership and optional managed support.",
        "Agent MAXX is the visible operator. The MACS AI Operating System is the controlled environment that gives MAXX approved knowledge, limited tools, human oversight, and an activity history the client can review.",
      ],
      founderPrinciples: [
        ["Ownership", "Client data, credentials, workflow history, and operating knowledge remain separately controlled."],
        ["Visibility", "Important work leaves a reviewable history instead of disappearing inside an invisible chatbot."],
        ["Choice", "Managed care is optional after acceptance. The client is not trapped to keep the system working."],
      ],
      launchEyebrow: "The 90-day installation",
      launchTitle: "A controlled implementation with a defined finish line.",
      launchIntro: "The founding installation is limited to two workflows so the system can be tested, supervised, documented, and accepted before its authority expands.",
      launchPhases: [
        ["Days 1–15", "Understand", "Audit the work, website, approved knowledge, tools, risks, ownership, and acceptance tests."],
        ["Days 16–45", "Build", "Install the Company Brain, AI Front Door, Agent MAXX, and the two agreed workflows."],
        ["Days 46–75", "Operate", "Run supervised work, review failures, refine instructions, and train the team."],
        ["Days 76–90", "Accept and hand off", "Complete acceptance tests, document ownership, and choose handoff or optional managed care."],
      ],
      offerEyebrow: "Washington founding cohort",
      offerTitle: "Five accepted organizations launch at $7,500.",
      offerIntro: "The founding cohort receives the lowest published installation price in exchange for structured feedback and closer founder involvement during validation.",
      offerLock: "The written scope and $7,500 installation price lock when the deposit is accepted. Additional requested work requires a separate written scope.",
      validationCohort: "Founding cohort",
      installation90: "90-day installation",
      included: [
        "Operational and AI-readiness audit",
        "Private Company Brain",
        "One managed Agent MAXX operator",
        "Two defined and tested workflows",
        "Up to four approved connections",
        "AI Front Door or defined five-page website rescue",
        "Human approval controls and activity history",
        "Training, documentation, and ownership handoff",
      ],
      payments: ["$3,000 deposit", "$2,250 after prototype approval", "$2,250 after launch acceptance"],
      guaranteeEyebrow: "Acceptance guarantee",
      guaranteeTitle: "The two agreed workflows must pass before the installation is accepted.",
      guaranteeBody: "MACS defines the acceptance tests before implementation. If the agreed workflows have not passed by the scheduled end of the installation, MACS continues implementation work without an additional management fee until they pass or a documented outside dependency prevents completion.",
      responsibilityTitle: "What the client provides",
      responsibilityBody: "One decision-maker, access to the agreed tools and approved knowledge, participation in workflow sessions, and timely review of prototypes, content, and approval rules.",
      scopeTitle: "What remains outside the founding scope",
      scopeBody: "Custom applications, major data migration or cleanup, unlimited revisions, immediate mass outreach, autonomous spending, regulated determinations, and third-party service fees are quoted or handled separately.",
      fitEyebrow: "Who this is for",
      fitTitle: "A focused offer for small teams with meaningful work and visible operational drag.",
      fitIntro: "The founding installation is designed for organizations that can name two important workflows, provide one decision-maker, and participate in a supervised implementation.",
      fitCriteria: [
        "The organization operates in Washington.",
        "Approximately 3–50 people contribute to the work.",
        "Missed follow-up, scattered knowledge, meetings, or website friction create measurable drag.",
        "A decision-maker can define and approve two launch workflows.",
        "The team accepts a supervised 90-day installation rather than unlimited automation.",
      ],
      finalEyebrow: "Start with the work being missed",
      finalTitle: "Choose the two workflows your organization needs to stop losing first.",
      finalCta: "Apply for a founding installation",
    },
    foundingLaunch: {
      metadataTitle: "The MACS 90-Day Client-Owned AI Installation",
      metadataDescription: "A defined 90-day installation for five Washington organizations to implement, test, and own two important AI-supported workflows.",
      eyebrow: "Washington founding cohort",
      title: "Install two working AI workflows in 90 days—and own the system when it is accepted.",
      lede: "Five accepted Washington organizations enter at $7,500, receive closer founder involvement, and complete a supervised installation with defined scope, payment milestones, acceptance tests, and a documented handoff option.",
      primaryCta: "Apply for a founding installation",
      introTitle: "A bounded installation, not an open-ended automation experiment",
      intro: "The founding scope is deliberately narrow. MACS installs one controlled system around two high-value workflows, proves them against agreed tests, trains the team, and documents the ownership path before expanding authority or adding custom work.",
      includedTitle: "Included system",
      included: [
        "Operational and AI-readiness audit",
        "Private Company Brain",
        "One managed Agent MAXX operator",
        "Two defined and tested workflows",
        "Up to four approved connections",
        "AI Front Door or defined five-page website rescue",
        "Human approval controls and activity history",
        "Training, documentation, and ownership handoff",
      ],
      definitionsTitle: "Founding-scope definitions",
      definitions: [
        ["One workflow", "One agreed trigger, defined steps, assigned owner, expected output, approval rules, and written acceptance test."],
        ["One supported connection", "One approved existing tool connected through a supported API, webhook, or documented import/export path."],
        ["Website rescue", "A focused foundation of up to five core pages, one primary visitor journey, accessible navigation, and the AI Front Door. Major content production or custom applications require separate scope."],
        ["Ownership handoff", "Documentation, credentials under client control where supported, workflow descriptions, acceptance evidence, and a clear operating handoff after final payment."],
      ],
      paymentTitle: "Payment milestones",
      payments: [
        "$3,000 deposit to reserve the accepted written scope",
        "$2,250 after prototype approval",
        "$2,250 after launch acceptance",
      ],
      paymentNote: "The $7,500 price and included scope lock when the deposit is accepted. Additional requested work, third-party fees, and items outside the written scope require separate approval.",
      sequenceTitle: "Launch sequence",
      sequenceHeaders: ["Period", "Phase", "Outcome"],
      phases: [
        ["Days 1–15", "Understand", "Audit operations, website, approved knowledge, tools, risk, ownership, and acceptance tests."],
        ["Days 16–45", "Build", "Install the Company Brain, AI Front Door, Agent MAXX, and the two agreed workflows."],
        ["Days 46–75", "Operate", "Run supervised work, review failures, refine instructions, and train the team."],
        ["Days 76–90", "Accept and hand off", "Complete acceptance tests, document ownership, and choose handoff or optional managed care."],
      ],
      acceptanceTitle: "The two agreed workflows must pass before acceptance",
      acceptance: "MACS defines the acceptance tests before implementation. If the workflows have not passed by the scheduled end of implementation, MACS continues implementation work without an additional management fee until the tests pass or both parties document an outside dependency that prevents completion.",
      clientTitle: "Client participation required",
      clientCommitment: "The organization provides one decision-maker, access to the agreed systems and approved knowledge, participation in workflow definition, and timely review of prototypes, content, permissions, and acceptance evidence.",
      exclusionsTitle: "Outside the standardized founding installation",
      exclusions: "Custom applications, major data migration or cleanup, unlimited revisions, autonomous spending, immediate mass outreach, regulated determinations, complex enterprise migration, and third-party service fees are not included unless separately scoped in writing.",
      finalTitle: "Name the two workflows your organization needs to stop losing.",
      finalBody: "The application determines fit before a discovery call. Submitting does not create a contract or reserve a spot.",
      finalCta: "Apply for a founding installation",
    },
  },
  "es-MX": {
    common: {
      primaryCta: "Solicitar una instalación fundadora",
    },
    home: {
      metadataTitle: "MACS Digital Media | Operaciones de IA propiedad del cliente",
      metadataDescription: "MACS instala sistemas privados de operaciones con IA, propiedad del cliente, para organizaciones sin fines de lucro, empresas con propósito social y pequeñas empresas seleccionadas de Washington.",
      eyebrow: "Operaciones de IA propiedad del cliente para organizaciones de Washington",
      title: "Sé dueño del sistema de IA que mantiene en movimiento a tu organización.",
      lede: "En 90 días, MACS conecta el conocimiento aprobado, las consultas del sitio web, el seguimiento de reuniones y el trabajo rutinario dentro de un sistema controlado, sin dependencia permanente de software ni necesidad de un departamento técnico interno.",
      primaryCta: "Solicitar una instalación fundadora",
      secondaryCta: "Ver una consulta convertirse en seguimiento",
      nextStep: "Se aceptarán cinco organizaciones de Washington. Primero revisamos la solicitud; enviarla no crea un contrato ni reserva un lugar.",
      trust: [
        "Creado en Washington por padre e hijo",
        "Aprobación humana cuando importa",
        "Transferencia de propiedad documentada",
      ],
      problemEyebrow: "El problema operativo",
      problemTitle: "El trabajo importante se pierde entre correos, reuniones, sitios web y la memoria.",
      problemIntro: "MACS comienza con el trabajo que ya se está quedando sin atender. La meta no es agregar otra herramienta de IA. La meta es dar a dos flujos importantes un camino claro, una persona responsable y un historial visible.",
      beforeTitle: "Antes de MACS",
      before: [
        "Las nuevas consultas esperan demasiado o desaparecen sin responsable.",
        "Las decisiones de reuniones quedan atrapadas en notas y memoria.",
        "El personal busca información entre carpetas, correos y herramientas desconectadas.",
        "Las personas que visitan el sitio no saben cuál es el siguiente paso.",
        "La organización depende de que una sola persona recuerde todo.",
      ],
      afterTitle: "Después de la instalación fundadora",
      after: [
        "Las nuevas consultas entran a un flujo definido de seguimiento.",
        "Las reuniones generan acciones, responsables y fechas límite.",
        "El conocimiento aprobado de la organización se puede buscar y verificar.",
        "Las acciones sensibles se detienen para revisión humana.",
        "El cliente recibe documentación y una opción de transferencia de propiedad.",
      ],
      buildEyebrow: "Lo que instalamos",
      buildTitle: "Un sistema privado detrás del trabajo que tu equipo ya realiza.",
      buildIntro: "El sitio web público, el conocimiento aprobado, el operador administrado, los controles de aprobación y el historial de actividad trabajan juntos en vez de convertirse en cinco herramientas desconectadas más.",
      systemParts: [
        ["01", "Company Brain", "Organiza conocimiento aprobado, políticas, programas y contexto de trabajo para que el personal y los agentes no empiecen desde cero."],
        ["02", "Agente MAXX", "Prepara seguimientos, organiza solicitudes y convierte conversaciones en acciones dentro de permisos claramente definidos."],
        ["03", "AI Front Door", "Ofrece a cada visitante una forma clara de preguntar, solicitar, agendar o pedir ayuda, y dirige la información estructurada al equipo correcto."],
        ["04", "Aprobación humana", "Las acciones sensibles o importantes se detienen para revisión. El personal conserva el control de lo que se envía, cambia, agenda o publica."],
        ["05", "Historial de actividad", "Muestra qué ocurrió, qué está pendiente, qué falló y qué necesita atención, en vez de esconder el trabajo dentro de un chat."],
      ],
      demoEyebrow: "Demostración identificada",
      demoTitle: "Mira cómo una consulta se convierte en seguimiento con responsable.",
      demoIntro: "Este ejemplo usa datos sintéticos. La demostración pública nunca toca registros reales de clientes ni herramientas de agente sin restricciones.",
      workflowSteps: [
        ["Consulta recibida", "Una pregunta del sitio web entra como solicitud estructurada con hora y fuente registradas.", "Registrado"],
        ["Conocimiento aprobado consultado", "Company Brain encuentra la información relevante del programa y su fuente de respaldo.", "Registrado"],
        ["Respuesta preparada", "El Agente MAXX redacta una respuesta útil e identifica cualquier información faltante.", "Registrado"],
        ["Aprobación humana", "Una persona del equipo revisa el borrador antes de enviar un mensaje personalizado.", "Aprobación requerida"],
        ["Seguimiento asignado", "Se registran la siguiente acción, la persona responsable y la fecha límite para que la solicitud no desaparezca.", "Registrado"],
      ],
      rescueEyebrow: "AI Front Door + rescate de sitio web",
      rescueTitle: "No conectamos una recepción pulida a un sitio web que destruye la confianza.",
      rescueIntro: "La auditoría determina si conviene conservar, reparar o reemplazar el sitio actual con una base enfocada de cinco páginas.",
      rescuePaths: [
        ["Verde — conservar", "El sitio web ya genera confianza", "Conservar el sitio, aclarar sus acciones más importantes y agregar AI Front Door al recorrido de mayor valor."],
        ["Amarillo — rescatar", "El contenido es útil, pero el camino no está claro", "Reparar la página de inicio, navegación, experiencia móvil y flujo principal de consulta o solicitud, conservando el contenido útil."],
        ["Rojo — reemplazar", "El sitio actual daña la confianza", "Instalar una base estandarizada de cinco páginas con mensajes claros, navegación accesible y AI Front Door integrado."],
      ],
      founderEyebrow: "Creado por padre e hijo",
      founderTitle: "La tecnología poderosa debe crear capacidad, no dependencia.",
      founderParagraphs: [
        "MACS Digital Media comenzó en un sótano del noroeste del Pacífico como un esfuerzo de padre e hijo entre Jeremy Bowers y su hijo, Tyshawn. La meta era sencilla: dar a organizaciones pequeñas acceso a tecnología poderosa sin obligarlas a entregar el control de sus datos, sistemas o futuro.",
        "Esa convicción se convirtió en la base de la oferta de MACS. Instalamos el sistema, comprobamos los dos flujos acordados, documentamos cómo funciona y damos a la organización una opción clara entre propiedad independiente y soporte administrado opcional.",
        "El Agente MAXX es el operador visible. El Sistema Operativo de IA de MACS es el entorno controlado que proporciona a MAXX conocimiento aprobado, herramientas limitadas, supervisión humana y un historial de actividad que el cliente puede revisar.",
      ],
      founderPrinciples: [
        ["Propiedad", "Los datos, credenciales, historial de flujos y conocimiento operativo del cliente permanecen bajo control separado."],
        ["Visibilidad", "El trabajo importante deja un historial revisable en vez de desaparecer dentro de un chatbot invisible."],
        ["Elección", "El soporte administrado es opcional después de la aceptación. El cliente no queda atrapado para mantener funcionando el sistema."],
      ],
      launchEyebrow: "La instalación de 90 días",
      launchTitle: "Una implementación controlada con una meta final definida.",
      launchIntro: "La instalación fundadora se limita a dos flujos para poder probar, supervisar, documentar y aceptar el sistema antes de ampliar su autoridad.",
      launchPhases: [
        ["Días 1–15", "Entender", "Auditar el trabajo, sitio web, conocimiento aprobado, herramientas, riesgos, propiedad y pruebas de aceptación."],
        ["Días 16–45", "Construir", "Instalar Company Brain, AI Front Door, el Agente MAXX y los dos flujos acordados."],
        ["Días 46–75", "Operar", "Ejecutar trabajo supervisado, revisar fallas, mejorar instrucciones y capacitar al equipo."],
        ["Días 76–90", "Aceptar y transferir", "Completar pruebas de aceptación, documentar la propiedad y elegir transferencia o soporte administrado opcional."],
      ],
      offerEyebrow: "Cohorte fundadora de Washington",
      offerTitle: "Cinco organizaciones aceptadas comienzan por $7,500.",
      offerIntro: "La cohorte fundadora recibe el precio de instalación publicado más bajo a cambio de comentarios estructurados y mayor participación de los fundadores durante la validación.",
      offerLock: "El alcance escrito y el precio de instalación de $7,500 quedan fijos cuando se acepta el depósito. El trabajo adicional solicitado requiere un alcance escrito por separado.",
      validationCohort: "Cohorte fundadora",
      installation90: "Instalación de 90 días",
      included: [
        "Auditoría operativa y de preparación para IA",
        "Company Brain privado",
        "Un operador administrado Agente MAXX",
        "Dos flujos definidos y probados",
        "Hasta cuatro conexiones aprobadas",
        "AI Front Door o rescate definido de sitio de cinco páginas",
        "Controles de aprobación humana e historial de actividad",
        "Capacitación, documentación y transferencia de propiedad",
      ],
      payments: ["Depósito de $3,000", "$2,250 después de aprobar el prototipo", "$2,250 después de aceptar el lanzamiento"],
      guaranteeEyebrow: "Garantía de aceptación",
      guaranteeTitle: "Los dos flujos acordados deben aprobarse antes de aceptar la instalación.",
      guaranteeBody: "MACS define las pruebas de aceptación antes de implementar. Si los flujos acordados no han aprobado al terminar el periodo programado, MACS continúa el trabajo de implementación sin una tarifa administrativa adicional hasta que aprueben o una dependencia externa documentada impida completarlos.",
      responsibilityTitle: "Lo que proporciona el cliente",
      responsibilityBody: "Una persona con poder de decisión, acceso a las herramientas acordadas y al conocimiento aprobado, participación en las sesiones de flujo y revisión oportuna de prototipos, contenido y reglas de aprobación.",
      scopeTitle: "Lo que queda fuera del alcance fundador",
      scopeBody: "Aplicaciones personalizadas, migración o limpieza importante de datos, revisiones ilimitadas, difusión masiva inmediata, gastos autónomos, decisiones reguladas y costos de servicios de terceros se cotizan o administran por separado.",
      fitEyebrow: "Para quién es",
      fitTitle: "Una oferta enfocada para equipos pequeños con trabajo importante y fricción operativa visible.",
      fitIntro: "La instalación fundadora está diseñada para organizaciones que pueden nombrar dos flujos importantes, proporcionar una persona con poder de decisión y participar en una implementación supervisada.",
      fitCriteria: [
        "La organización opera en Washington.",
        "Aproximadamente de 3 a 50 personas contribuyen al trabajo.",
        "El seguimiento perdido, el conocimiento disperso, las reuniones o la fricción del sitio crean un impacto medible.",
        "Una persona con poder de decisión puede definir y aprobar dos flujos de lanzamiento.",
        "El equipo acepta una instalación supervisada de 90 días en vez de automatización ilimitada.",
      ],
      finalEyebrow: "Comienza con el trabajo que se está perdiendo",
      finalTitle: "Elige los dos flujos que tu organización necesita dejar de perder primero.",
      finalCta: "Solicitar una instalación fundadora",
    },
    foundingLaunch: {
      metadataTitle: "La instalación de IA de 90 días y propiedad del cliente de MACS",
      metadataDescription: "Una instalación definida de 90 días para que cinco organizaciones de Washington implementen, prueben y sean propietarias de dos flujos importantes apoyados por IA.",
      eyebrow: "Cohorte fundadora de Washington",
      title: "Instala dos flujos de IA que funcionen en 90 días y sé dueño del sistema al aceptarlo.",
      lede: "Cinco organizaciones aceptadas de Washington entran por $7,500, reciben mayor participación de los fundadores y completan una instalación supervisada con alcance, pagos, pruebas de aceptación y una transferencia documentada claramente definidos.",
      primaryCta: "Solicitar una instalación fundadora",
      introTitle: "Una instalación limitada, no un experimento de automatización sin fin",
      intro: "El alcance fundador es deliberadamente reducido. MACS instala un sistema controlado alrededor de dos flujos de alto valor, los comprueba con pruebas acordadas, capacita al equipo y documenta el camino de propiedad antes de ampliar autoridad o agregar trabajo personalizado.",
      includedTitle: "Sistema incluido",
      included: [
        "Auditoría operativa y de preparación para IA",
        "Company Brain privado",
        "Un operador administrado Agente MAXX",
        "Dos flujos definidos y probados",
        "Hasta cuatro conexiones aprobadas",
        "AI Front Door o rescate definido de sitio de cinco páginas",
        "Controles de aprobación humana e historial de actividad",
        "Capacitación, documentación y transferencia de propiedad",
      ],
      definitionsTitle: "Definiciones del alcance fundador",
      definitions: [
        ["Un flujo", "Un disparador acordado, pasos definidos, persona responsable, resultado esperado, reglas de aprobación y prueba de aceptación por escrito."],
        ["Una conexión compatible", "Una herramienta existente aprobada conectada por una API, webhook o ruta documentada de importación y exportación que sea compatible."],
        ["Rescate de sitio web", "Una base enfocada de hasta cinco páginas principales, un recorrido principal para visitantes, navegación accesible y AI Front Door. La producción extensa de contenido o aplicaciones personalizadas requieren un alcance separado."],
        ["Transferencia de propiedad", "Documentación, credenciales bajo control del cliente cuando sea compatible, descripciones de flujos, evidencia de aceptación y una entrega operativa clara después del pago final."],
      ],
      paymentTitle: "Etapas de pago",
      payments: [
        "Depósito de $3,000 para reservar el alcance escrito aceptado",
        "$2,250 después de aprobar el prototipo",
        "$2,250 después de aceptar el lanzamiento",
      ],
      paymentNote: "El precio de $7,500 y el alcance incluido quedan fijos cuando se acepta el depósito. El trabajo adicional solicitado, los costos de terceros y los elementos fuera del alcance escrito requieren aprobación separada.",
      sequenceTitle: "Secuencia de lanzamiento",
      sequenceHeaders: ["Periodo", "Fase", "Resultado"],
      phases: [
        ["Días 1–15", "Entender", "Auditar operaciones, sitio web, conocimiento aprobado, herramientas, riesgos, propiedad y pruebas de aceptación."],
        ["Días 16–45", "Construir", "Instalar Company Brain, AI Front Door, el Agente MAXX y los dos flujos acordados."],
        ["Días 46–75", "Operar", "Ejecutar trabajo supervisado, revisar fallas, mejorar instrucciones y capacitar al equipo."],
        ["Días 76–90", "Aceptar y transferir", "Completar pruebas de aceptación, documentar la propiedad y elegir transferencia o soporte administrado opcional."],
      ],
      acceptanceTitle: "Los dos flujos acordados deben aprobarse antes de la aceptación",
      acceptance: "MACS define las pruebas de aceptación antes de implementar. Si los flujos no han aprobado al terminar el periodo programado, MACS continúa el trabajo sin una tarifa administrativa adicional hasta que aprueben o ambas partes documenten una dependencia externa que impida completarlos.",
      clientTitle: "Participación requerida del cliente",
      clientCommitment: "La organización proporciona una persona con poder de decisión, acceso a los sistemas acordados y al conocimiento aprobado, participación en la definición de flujos y revisión oportuna de prototipos, contenido, permisos y evidencia de aceptación.",
      exclusionsTitle: "Fuera de la instalación fundadora estandarizada",
      exclusions: "Aplicaciones personalizadas, migración o limpieza importante de datos, revisiones ilimitadas, gastos autónomos, difusión masiva inmediata, decisiones reguladas, migración empresarial compleja y costos de servicios de terceros no están incluidos salvo que se definan por escrito por separado.",
      finalTitle: "Nombra los dos flujos que tu organización necesita dejar de perder.",
      finalBody: "La solicitud determina compatibilidad antes de una llamada de descubrimiento. Enviarla no crea un contrato ni reserva un lugar.",
      finalCta: "Solicitar una instalación fundadora",
    },
  },
};
