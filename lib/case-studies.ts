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
  heroImage?: string;
  sections: Array<{ title: string; body: string }>;
  placeholders?: string[];
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
    headline: "A collaboration built around bringing the brand into a focused digital launch.",
    summary:
      "Taste of Nawlins is the first MACS collaboration story in this format. The public case will show what the team was building, where MACS contributed, and the verified result without overstating authorship.",
    liveUrl: "https://tasteofnawlins.netlify.app",
    heroImage: "/work/taste-of-nawlins-hero.webp",
    sections: [
      {
        title: "What they were building",
        body: "Taste of Nawlins brings New Orleans food to the Pacific Northwest: beignets, chicory coffee, red beans, and a kitchen that travels. The launch needed a focused digital home for the menu, catering and the story behind the food.",
      },
      {
        title: "Where MACS came in",
        body: "MACS designed and built the public website in collaboration with the founder. The live site carries the menu, catering inquiries, drops and the follow-the-kitchen story in one place.",
      },
      {
        title: "What changed",
        body: "The brand has a live public home it can send people to. The founder's own words, launch results and before-and-after material are added here as they are approved.",
      },
    ],
    placeholders: [
      "Collaboration credits — founder, MACS, Stavarai and any outside contributors",
      "Process media — approved concepts, campaign assets or build artifacts",
      "Documented launch result or before/after",
      "Approved quote or testimonial — only if supplied or separately authorized",
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
    headline: "A public website with an operating system behind it.",
    summary:
      "ASC3ND is our Launch example: a public-facing Next.js site connected to reusable operational systems for onboarding, opportunities, campaigns, approvals and organizational context.",
    liveUrl: "https://asc3nd-org.netlify.app/",
    heroImage: "/work/asc3nd-hero.webp",
    sections: [
      {
        title: "The opportunity",
        body: "ASC3ND needed more than a public website. The launch had to create a clear digital front door while leaving room for the operational systems behind the organization to grow with it.",
      },
      {
        title: "What we built",
        body: "The documented system includes a public Next.js front end, a reusable operations console for onboarding, opportunities, campaigns and approvals, and a reusable backend layer for workflows and organizational context.",
      },
      {
        title: "How it develops",
        body: "The website is the visible layer. The larger idea is a launch system that can continue adding useful tools without forcing the organization to rebuild its digital foundation every time something new is introduced.",
      },
    ],
    placeholders: [
      "Before/after or early concept material",
      "Operating-system links beyond the public site",
      "Documented result or approved testimonial",
    ],
  },
  {
    slug: "buffer-blaster",
    lane: "Momentum",
    name: "Buffer Blaster",
    visibility: "internal",
    format: "product",
    headline: "A content engine built to keep momentum moving.",
    liveUrl: "https://bufferblaster.netlify.app/",
    heroImage: "/work/buffer-blaster-hero.webp",
    summary:
      "Buffer Blaster is an internal MACS product for research, production, scoring and scheduling. It belongs to the MAXX Suite / Built Here story rather than the client-work gallery.",
    sections: [
      {
        title: "Why we built it",
        body: "We wanted a content workflow we could understand, control and improve ourselves instead of stacking more closed subscriptions on top of the work.",
      },
      {
        title: "What it does",
        body: "One governed loop runs the work: Learn (product truth, customer pain, brand context and the angles worth testing), Shape (scripts, concepts and controlled variations), Make (creative routed through the right generation path only after plan, rights and cost are clear), then Learn again (approvals, output, spend and performance evidence attached to the next round).",
      },
      {
        title: "How it stays governed",
        body: "Automation removes busywork, not judgment. Paid generation, publishing and activation remain explicit decisions with limits enforced on the server, and every consequential job keeps its evidence: plan, rights, approval, cost and result. The Studio is the doorway; approved agents can call the same workflow over REST, MCP and CLI.",
      },
      {
        title: "What it proves",
        body: "Momentum is not a burst of posts. It is a repeatable operating rhythm. Buffer Blaster is one example of how we build that rhythm into the system itself.",
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
    headline: "Scale proof, ready for the full story.",
    summary:
      "Pare’ is part of the MAXX Suite / Built Here story. The live product is linked; walkthroughs and verified results remain placeholders until approved.",
    liveUrl: "https://pauli-para.netlify.app/",
    heroImage: "/work/pare-hero.webp",
    sections: [
      {
        title: "The problem",
        body: "AI-built software accumulates faster than anyone can review it. Work that ships without a review-and-repair step breaks where nobody is watching.",
      },
      {
        title: "What we built",
        body: "Pare’ is one studio for making things with AI without the noise: it takes the models, tools, prompts, agents and infrastructure underneath modern digital work and removes that complexity from the person trying to make something good. People enter through the Studio; agents use the same system over API, MCP and CLI.",
      },
      {
        title: "How it scales",
        body: "The work stays yours: your projects, your files, your agents, your infrastructure. It is also the review-and-repair step in our own build workflow - supervised passes over AI-built work before it reaches a client, so quality stops depending on who happened to have time to check.",
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
    headline: "UGC characters built into a repeatable content system.",
    summary:
      "Posta Studio is part of the MAXX Suite / Built Here story and was developed by Stavarai. It remains separate from the client-work gallery.",
    sections: [
      {
        title: "Why it exists",
        body: "Consistent short-form content depends on recurring characters and a publishing rhythm, not one-off inspiration. Without a system, every post starts from zero.",
      },
      {
        title: "What Stavarai developed",
        body: "Posta Studio turns UGC-style characters into a repeatable content system: recurring personas, scripted spots, and a publishing workflow that produces on schedule instead of on inspiration.",
      },
      {
        title: "How it becomes leverage",
        body: "A character-led system keeps producing after a single campaign ends. The same workflow can support more content, more campaigns, or a client’s own presence.",
      },
    ],
    placeholders: [
      "Full-page hero video",
      "Live Posta Studio link",
      "UGC character gallery",
      "Product walkthrough",
      "Development story from Stavarai",
      "Documented result",
    ],
  },
];

export const clientWork = caseStudies.filter((study) => study.visibility === "client");
export const maxxSuiteWork = caseStudies.filter((study) => study.visibility === "internal");

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
