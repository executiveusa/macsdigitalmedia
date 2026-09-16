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
      metadataTitle: "Tell us what's important | MACS Digital Media",
      metadataDescription: "Tell MACS Digital Media what needs attention in your business right now.",
      eyebrow: "",
      title: "Tell us what's important.",
      intro: "What needs attention right now?",
      nextLabel: "",
      next: "",
      fitTitle: "A good fit usually means",
      fitCriteria: [
        "Something important needs attention.",
        "Someone can make decisions.",
        "You want a partner, not another disconnected vendor.",
      ],
    },
    form: {
      companyFax: "Company fax",
      name: "Your name",
      email: "Email",
      phone: "Phone",
      optional: "Optional",
      organization: "Organization",
      website: "Website",
      location: "City or service area",
      organizationType: "Organization type",
      selectOne: "Select one",
      nonprofit: "Nonprofit",
      socialPurpose: "Social-purpose company",
      smallBusiness: "Small business",
      staffSize: "Team size",
      problem: "What needs attention?",
      problemHelp: "Website, content, visibility, follow-up, systems or something else.",
      result: "What would you like to change in the next 90 days?",
      decisionMaker: "A decision-maker can participate when approval is needed.",
      consentStart: "MACS may use this information to review your request and contact you about next steps. See the",
      privacyNotice: "privacy notice",
      submit: "Send",
      submitting: "Sending…",
      submittingMessage: "Sending…",
      success: "Received. We’ll review it and follow up if we need anything else.",
      review: "Review the highlighted information and try again.",
      connection: "We could not send this. Check your connection and try again.",
      required: "Required.",
      emailInvalid: "Enter a valid email.",
      urlInvalid: "Enter a complete website address beginning with http:// or https://.",
      tooShort: "Add a little more detail.",
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
      metadataTitle: "Cuéntanos qué es importante | MACS Digital Media",
      metadataDescription: "Cuéntale a MACS Digital Media qué necesita atención en tu negocio ahora.",
      eyebrow: "",
      title: "Cuéntanos qué es importante.",
      intro: "¿Qué necesita atención ahora?",
      nextLabel: "",
      next: "",
      fitTitle: "Una buena colaboración suele tener",
      fitCriteria: [
        "Algo importante necesita atención.",
        "Alguien puede tomar decisiones.",
        "Buscas un socio, no otro proveedor desconectado.",
      ],
    },
    form: {
      companyFax: "Fax de empresa",
      name: "Tu nombre",
      email: "Correo",
      phone: "Teléfono",
      optional: "Opcional",
      organization: "Organización",
      website: "Sitio web",
      location: "Ciudad o zona de servicio",
      organizationType: "Tipo de organización",
      selectOne: "Selecciona una opción",
      nonprofit: "Organización sin fines de lucro",
      socialPurpose: "Empresa con propósito social",
      smallBusiness: "Pequeña empresa",
      staffSize: "Tamaño del equipo",
      problem: "¿Qué necesita atención?",
      problemHelp: "Sitio web, contenido, visibilidad, seguimiento, sistemas u otra cosa.",
      result: "¿Qué te gustaría cambiar en los próximos 90 días?",
      decisionMaker: "Una persona con capacidad de decisión puede participar cuando haga falta aprobación.",
      consentStart: "MACS puede usar esta información para revisar tu solicitud y contactarte sobre los siguientes pasos. Consulta el",
      privacyNotice: "aviso de privacidad",
      submit: "Enviar",
      submitting: "Enviando…",
      submittingMessage: "Enviando…",
      success: "Recibido. Lo revisaremos y te contactaremos si necesitamos algo más.",
      review: "Revisa la información marcada y vuelve a intentar.",
      connection: "No pudimos enviarlo. Revisa tu conexión e inténtalo de nuevo.",
      required: "Obligatorio.",
      emailInvalid: "Ingresa un correo válido.",
      urlInvalid: "Ingresa una dirección completa que empiece con http:// o https://.",
      tooShort: "Agrega un poco más de detalle.",
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
