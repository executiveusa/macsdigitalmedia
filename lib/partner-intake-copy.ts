import type { Locale } from "@/lib/i18n";

export const partnerIntakeCopy: Record<Locale, {
  page: {
    metadataTitle: string;
    metadataDescription: string;
    eyebrow: string;
    title: string;
    intro: string;
    nextLabel: string;
    next: string;
    fitTitle: string;
    fitCriteria: string[];
  };
  form: {
    companyFax: string;
    name: string;
    email: string;
    phone: string;
    optional: string;
    organization: string;
    website: string;
    location: string;
    organizationType: string;
    selectOne: string;
    nonprofit: string;
    socialPurpose: string;
    smallBusiness: string;
    staffSize: string;
    problem: string;
    problemHelp: string;
    result: string;
    decisionMaker: string;
    consentStart: string;
    privacyNotice: string;
    submit: string;
    submitting: string;
    submittingMessage: string;
    success: string;
    review: string;
    connection: string;
    required: string;
    emailInvalid: string;
    urlInvalid: string;
    tooShort: string;
    selectRequired: string;
    checkboxRequired: string;
    errorSummary: string;
  };
  privacy: {
    metadataTitle: string;
    metadataDescription: string;
    eyebrow: string;
    title: string;
    updated: string;
    sections: [string, string][];
  };
}> = {
  en: {
    page: {
      metadataTitle: "Start a Technology Partnership",
      metadataDescription: "Tell MACS Digital Media where the digital side of your business needs attention and which partnership lane may fit best.",
      eyebrow: "Start a technology partnership",
      title: "Tell us where the digital side of the business needs attention.",
      intro: "We use this intake to understand whether Reset, Momentum, Scale or Launch is the right place to begin. We are looking for relationships where MACS can become an accountable technology partner—not a one-off freelancer for a single task.",
      nextLabel: "What happens next:",
      next: "We review the situation, identify the most likely starting lane, and contact good-fit organizations about a working session. Submitting this form does not create a contract or commit either side.",
      fitTitle: "A strong partnership usually looks like this",
      fitCriteria: [
        "You want one accountable partner across more than one digital problem.",
        "A website, content, follow-up, automation, AI or internal workflow is currently slowing the business down.",
        "A decision-maker can help prioritize what matters first and approve meaningful changes.",
        "You value continuity, ownership and documented systems over a rotating list of vendors.",
        "You are comfortable starting with one urgent lane and expanding the relationship when the work proves useful.",
      ],
    },
    form: {
      companyFax: "Company fax",
      name: "Your name",
      email: "Work email",
      phone: "Phone number",
      optional: "Optional",
      organization: "Organization name",
      website: "Organization website",
      location: "City or service area",
      organizationType: "Organization type",
      selectOne: "Select one",
      nonprofit: "Nonprofit",
      socialPurpose: "Social-purpose company",
      smallBusiness: "Small business",
      staffSize: "Approximate staff size",
      problem: "What is getting stuck on the digital side of the business?",
      problemHelp: "Think website, content, visibility, follow-up, automation, AI, scattered tools or internal workflows.",
      result: "What would a useful technology partner help change over the next 90 days?",
      decisionMaker: "A decision-maker can participate in prioritization, approvals and review of the work.",
      consentStart: "MACS may use this information to review the partnership request and contact me about next steps. See the",
      privacyNotice: "privacy notice",
      submit: "Send partnership request",
      submitting: "Sending request…",
      submittingMessage: "Sending your partnership request…",
      success: "Your request was received. MACS will review it before suggesting a working session or asking for more information.",
      review: "Review the highlighted information and submit again.",
      connection: "The request could not be submitted. Check your connection and try again.",
      required: "This field is required.",
      emailInvalid: "Enter a valid work email.",
      urlInvalid: "Enter a complete website address beginning with http:// or https://.",
      tooShort: "Add a little more detail so MACS can understand the situation.",
      selectRequired: "Select one option.",
      checkboxRequired: "Confirm this item before submitting.",
      errorSummary: "Correct the highlighted fields before submitting.",
    },
    privacy: {
      metadataTitle: "Privacy Notice",
      metadataDescription: "How MACS Digital Media handles partnership-intake information.",
      eyebrow: "Privacy",
      title: "What we collect, why we collect it, and how we limit access.",
      updated: "Last updated September 1, 2026.",
      sections: [
        ["Partnership request information", "The intake collects your name, work email, optional phone number, organization details, service area, staffing range, and the business problems and outcomes you describe. Do not submit passwords, credentials, medical records, financial account information, or private client records."],
        ["Why MACS uses this information", "MACS uses this information to assess fit, identify a likely starting lane, contact qualified organizations, prepare a working conversation, prevent abusive submissions, and maintain an internal intake record."],
        ["Storage and access", "Intake records are stored in a private Supabase database table. The public website cannot read submitted requests. Database access is limited to authorized server-side systems and authorized MACS reviewers. Service-role credentials remain server-side and are never sent to the browser."],
        ["Abuse prevention", "MACS generates a one-way request fingerprint from connection and browser information to limit repeated automated submissions. The raw IP address is not stored in the application table. The fingerprint is not used for advertising or cross-site tracking."],
        ["Sharing", "MACS does not sell partnership-request information. Information may be processed by infrastructure providers required to operate the site and database. Public testimonials, logos, screenshots, interviews, and named case studies require separate written consent."],
        ["Retention and requests", "Intake information is retained while MACS evaluates the request, communicates with the organization, or maintains a reasonable business record. You may request correction or deletion through the contact method provided during follow-up."],
      ],
    },
  },
  "es-MX": {
    page: {
      metadataTitle: "Iniciar una colaboración tecnológica",
      metadataDescription: "Cuéntale a MACS Digital Media dónde se está atorando el lado digital de tu negocio y cuál de los cuatro caminos puede encajar mejor.",
      eyebrow: "Iniciar una colaboración tecnológica",
      title: "Cuéntanos dónde se está atorando el lado digital del negocio.",
      intro: "Usamos esta información para entender si Reset, Momentum, Scale o Launch es el mejor punto de partida. Buscamos relaciones donde MACS pueda convertirse en un socio tecnológico responsable, no en un freelancer para una sola tarea.",
      nextLabel: "Qué sigue:",
      next: "Revisamos la situación, identificamos el camino más probable para empezar y contactamos a los negocios con buen encaje para una sesión de trabajo. Enviar este formulario no crea un contrato ni compromete a ninguna de las partes.",
      fitTitle: "Una buena colaboración normalmente se ve así",
      fitCriteria: [
        "Quieres un solo socio responsable para más de un problema digital.",
        "Sitio web, contenido, seguimiento, automatización, IA o flujos internos están frenando al negocio.",
        "Una persona con capacidad de decisión puede ayudar a priorizar y aprobar cambios importantes.",
        "Valoras continuidad, propiedad y sistemas documentados por encima de una lista cambiante de proveedores.",
        "Estás dispuesto a empezar por un camino urgente y ampliar la relación cuando el trabajo demuestre valor.",
      ],
    },
    form: {
      companyFax: "Fax de empresa",
      name: "Tu nombre",
      email: "Correo de trabajo",
      phone: "Teléfono",
      optional: "Opcional",
      organization: "Nombre de la organización",
      website: "Sitio web",
      location: "Ciudad o zona de servicio",
      organizationType: "Tipo de organización",
      selectOne: "Selecciona una opción",
      nonprofit: "Organización sin fines de lucro",
      socialPurpose: "Empresa con propósito social",
      smallBusiness: "Pequeña empresa",
      staffSize: "Tamaño aproximado del equipo",
      problem: "¿Qué se está atorando en el lado digital del negocio?",
      problemHelp: "Piensa en sitio web, contenido, visibilidad, seguimiento, automatización, IA, herramientas dispersas o flujos internos.",
      result: "¿Qué debería ayudar a cambiar un buen socio tecnológico en los próximos 90 días?",
      decisionMaker: "Una persona con capacidad de decisión puede participar en prioridades, aprobaciones y revisión del trabajo.",
      consentStart: "MACS puede usar esta información para revisar la solicitud de colaboración y contactarme sobre los siguientes pasos. Consulta el",
      privacyNotice: "aviso de privacidad",
      submit: "Enviar solicitud de colaboración",
      submitting: "Enviando solicitud…",
      submittingMessage: "Enviando tu solicitud de colaboración…",
      success: "Recibimos tu solicitud. MACS la revisará antes de proponer una sesión de trabajo o pedir más información.",
      review: "Revisa la información marcada y vuelve a enviar.",
      connection: "No se pudo enviar la solicitud. Revisa tu conexión e inténtalo de nuevo.",
      required: "Este campo es obligatorio.",
      emailInvalid: "Ingresa un correo de trabajo válido.",
      urlInvalid: "Ingresa una dirección completa que empiece con http:// o https://.",
      tooShort: "Agrega un poco más de detalle para que MACS entienda la situación.",
      selectRequired: "Selecciona una opción.",
      checkboxRequired: "Confirma este punto antes de enviar.",
      errorSummary: "Corrige los campos marcados antes de enviar.",
    },
    privacy: {
      metadataTitle: "Aviso de privacidad",
      metadataDescription: "Cómo MACS Digital Media maneja la información de solicitudes de colaboración.",
      eyebrow: "Privacidad",
      title: "Qué recopilamos, por qué y cómo limitamos el acceso.",
      updated: "Última actualización: 1 de septiembre de 2026.",
      sections: [
        ["Información de la solicitud", "El formulario recopila nombre, correo de trabajo, teléfono opcional, datos de la organización, zona de servicio, tamaño del equipo y los problemas y resultados que describes. No envíes contraseñas, credenciales, expedientes médicos, información de cuentas financieras ni registros privados de clientes."],
        ["Por qué usamos esta información", "MACS usa esta información para evaluar encaje, identificar un camino inicial, contactar organizaciones calificadas, preparar una conversación de trabajo, prevenir envíos abusivos y mantener un registro interno."],
        ["Almacenamiento y acceso", "Los registros se guardan en una tabla privada de Supabase. El sitio público no puede leer solicitudes enviadas. El acceso está limitado a sistemas autorizados del servidor y revisores autorizados de MACS."],
        ["Prevención de abuso", "MACS genera una huella unidireccional a partir de información de conexión y navegador para limitar envíos automatizados repetidos. La dirección IP sin procesar no se guarda en la tabla."],
        ["Compartir información", "MACS no vende la información de solicitudes. Los proveedores de infraestructura necesarios para operar el sitio y la base de datos pueden procesarla. Testimonios, logotipos, capturas, entrevistas y casos públicos requieren consentimiento por escrito separado."],
        ["Retención y solicitudes", "La información se conserva mientras MACS evalúa la solicitud, se comunica con la organización o mantiene un registro comercial razonable. Puedes solicitar corrección o eliminación mediante el método de contacto usado durante el seguimiento."],
      ],
    },
  },
};
