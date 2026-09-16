export type CaseStudy = {
  slug: string;
  lane: "Reset" | "Momentum" | "Scale" | "Launch";
  name: string;
  visibility: "client" | "internal";
  format: "case-study" | "collaboration" | "product";
  collaboration?: string;
  industry?: string;
  stage?: string;
  credit?: string;
  headline: string;
  summary: string;
  liveUrl?: string;
  liveAvailable?: boolean;
  heroImage?: string;
  sections: Array<{ title: string; body: string }>;
  placeholders?: string[];
  evidence?: Array<{ image: string; caption: string }>;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "taste-of-nawlins",
    lane: "Launch",
    name: "Taste of Nawlins",
    visibility: "client",
    format: "collaboration",
    collaboration: "Taste of Nawlins × MACS Digital Media",
    industry: "Food / Hospitality",
    stage: "Launch",
    headline: "A focused digital home for a food brand built to move.",
    summary: "Taste of Nawlins needed one place for the menu, catering and the story behind the food. MACS designed and built the public site with the founder.",
    liveUrl: "https://tasteofnawlins.netlify.app",
    liveAvailable: false,
    heroImage: "/work/taste-of-nawlins-hero.webp",
    sections: [
      {
        title: "The brand",
        body: "Taste of Nawlins brings New Orleans food to the Pacific Northwest through a traveling kitchen.",
      },
      {
        title: "Our role",
        body: "MACS designed and built the public site with the founder, bringing menu, catering and story into one place.",
      },
      {
        title: "What changed",
        body: "The brand now has one public home to send people to. Launch results will be added only when they are documented and approved.",
      },
    ],
    placeholders: [
      "Collaboration credits — founder, MACS, Stavarai and outside contributors",
      "Approved process media or campaign assets",
      "Documented launch result or before/after",
      "Approved quote or testimonial",
    ],
  },
  {
    slug: "asc3nd",
    lane: "Launch",
    name: "ASC3ND",
    visibility: "client",
    format: "case-study",
    collaboration: "ASC3ND × MACS Digital Media",
    industry: "Nonprofit",
    stage: "Launch",
    headline: "A digital foundation for a new organization.",
    summary: "MACS built the public site and the reusable systems behind it so ASC3ND could launch without rebuilding the foundation every time something changed.",
    liveUrl: "https://asc3nd-org.31.220.58.212.sslip.io/",
    heroImage: "/work/asc3nd-hero.webp",
    sections: [
      {
        title: "The need",
        body: "ASC3ND needed a clear public front door and room for the organization behind it to grow.",
      },
      {
        title: "What we built",
        body: "A public site plus reusable systems for onboarding, opportunities, campaigns and approvals.",
      },
      {
        title: "What it leaves behind",
        body: "A foundation the organization can keep building on instead of starting over with every new initiative.",
      },
    ],
    placeholders: [
      "Before/after or early concept material",
      "Approved operating-system captures",
      "Documented result or approved testimonial",
    ],
  },
  {
    slug: "buffer-blaster",
    lane: "Momentum",
    name: "Buffer Blaster",
    visibility: "internal",
    format: "product",
    industry: "Creative Infrastructure",
    headline: "Our system for keeping content moving.",
    liveUrl: "https://buffer-blaster.31.220.58.212.sslip.io/",
    heroImage: "/work/buffer-blaster-hero.webp",
    summary: "Buffer Blaster keeps research, production, scoring and scheduling in one governed workflow. It is part of the MAXX Suite / Built Here story.",
    sections: [
      {
        title: "The problem",
        body: "Content work gets scattered across tools, people and handoffs. Every round can start from zero.",
      },
      {
        title: "What we built",
        body: "One workflow for learning, shaping, making and reviewing content while important actions still require human judgment.",
      },
      {
        title: "What is live",
        body: "The public beta is live. Documented campaign results will be added when they are available.",
      },
    ],
    evidence: [
      {
        image: "/work/bb-evidence-loop.webp",
        caption: "The live workflow: Learn, Shape, Make, Learn again.",
      },
      {
        image: "/work/bb-evidence-governance.webp",
        caption: "Important actions keep a visible record of plan, approval, cost and result.",
      },
    ],
    placeholders: [
      "Workflow walkthrough film",
      "Example campaign",
      "Documented output/result",
    ],
  },
  {
    slug: "pare",
    lane: "Scale",
    name: "Pare’",
    visibility: "internal",
    format: "product",
    headline: "[PLACEHOLDER — WHAT PARE’ DOES IN ONE SENTENCE.]",
    summary: "Pare’ is part of the MAXX Suite / Built Here story. The exact public description and verified result still need to be approved.",
    liveUrl: "https://pauli-para.netlify.app/",
    liveAvailable: false,
    heroImage: "/work/pare-hero.webp",
    sections: [
      {
        title: "What it solves",
        body: "[PLACEHOLDER — THE PROBLEM PARE’ SOLVES.]",
      },
      {
        title: "What we built",
        body: "[PLACEHOLDER — THE PRODUCT IN PLAIN LANGUAGE.]",
      },
      {
        title: "What changed",
        body: "[PLACEHOLDER — VERIFIED RESULT.]",
      },
    ],
    placeholders: [
      "Product walkthrough film",
      "Development timeline",
      "Documented result",
    ],
  },
  {
    slug: "posta-studio",
    lane: "Scale",
    name: "Posta Studio",
    visibility: "internal",
    format: "product",
    credit: "Developed by Stavarai",
    liveUrl: "https://postastudios.31.220.58.212.sslip.io/",
    heroImage: "/work/posta-studios-hero.webp",
    headline: "UGC production built into a repeatable system.",
    summary: "Developed by Stavarai. Posta Studio turns recurring characters and scripted spots into a repeatable content workflow.",
    sections: [
      {
        title: "The problem",
        body: "Consistent short-form content is hard when every post starts from zero.",
      },
      {
        title: "What Stavarai built",
        body: "A system for recurring characters, scripted spots and scheduled production.",
      },
      {
        title: "Why it matters",
        body: "The workflow can keep producing after one campaign ends.",
      },
    ],
    placeholders: [
      "Full-page hero video",
      "UGC character gallery",
      "Product walkthrough",
      "Development story from Stavarai",
      "Documented result",
    ],
  },
  {
    slug: "sweet",
    lane: "Momentum",
    name: "Sweet",
    visibility: "internal",
    format: "product",
    industry: "World / Experience",
    headline: "A brand world you walk into.",
    summary: "Sweet turns a personal brand into an interactive bilingual world with its own places, sound and rules.",
    liveUrl: "https://sweet.31.220.58.212.sslip.io/",
    heroImage: "/work/sweet-hero.webp",
    sections: [
      {
        title: "The idea",
        body: "Visitors move through places—the shop, library, blog and machinery—instead of scrolling another page of links.",
      },
      {
        title: "What we built",
        body: "The world, art direction, sound and EN/ES storytelling were designed as one experience.",
      },
      {
        title: "What it shows",
        body: "A brand can behave like a place, not only a feed.",
      },
    ],
    placeholders: [
      "Directed walkthrough capture",
      "The founder's account of the concept",
    ],
  },
  {
    slug: "fish-on",
    lane: "Momentum",
    name: "Fish On",
    visibility: "internal",
    format: "product",
    industry: "Agent / Outdoors",
    headline: "Fishing answers from real Texas sources.",
    summary: "Fish On answers plain-language fishing questions from Texas sources with checked dates in English and Spanish.",
    liveUrl: "https://executiveusa.github.io/fish-on/",
    heroImage: "/work/fish-on-hero.webp",
    sections: [
      {
        title: "The problem",
        body: "Fishing rules and conditions are spread across dense pages and PDFs.",
      },
      {
        title: "What we built",
        body: "An agent that answers from Texas sources, shows checked dates and links back to the source.",
      },
      {
        title: "What is live",
        body: "The public preview is live and labeled as a preview.",
      },
    ],
    placeholders: [
      "Documented usage or result",
      "Full agent walkthrough",
    ],
  },
  {
    slug: "foundry-fleet",
    lane: "Scale",
    name: "Foundry Fleet",
    visibility: "internal",
    format: "product",
    industry: "Internal Tooling",
    headline: "One control room for our agent computers.",
    summary: "Foundry Fleet gives MACS one private view of fleet status, audit history and product state.",
    liveUrl: "https://foundry-cp.31.220.58.212.sslip.io/fleet.html",
    heroImage: "/work/foundry-fleet-hero.webp",
    sections: [
      {
        title: "The problem",
        body: "A fleet doing real work needs one place to see what is up, what changed and what needs attention.",
      },
      {
        title: "What we built",
        body: "A private control room for fleet, audit and product views across our agent computers.",
      },
      {
        title: "What is live",
        body: "The console is deployed and protected because it is private infrastructure.",
      },
    ],
    placeholders: [
      "Approved interior capture of the fleet view",
    ],
  },
];

export const clientWork = caseStudies.filter((study) => study.visibility === "client");
export const maxxSuiteWork = caseStudies.filter((study) => study.visibility === "internal");

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
