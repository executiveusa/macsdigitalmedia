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
    sections: [
      {
        title: "What they were building",
        body: "Document the approved founder and brand context here: what Taste of Nawlins was creating, what already existed, and what mattered before MACS joined the work.",
      },
      {
        title: "Where MACS came in",
        body: "Document the exact MACS contribution here. Separate strategy, design, technology, campaign, operations, and partner contributions so authorship stays clear.",
      },
      {
        title: "What changed",
        body: "Add only verified launch evidence here: the live experience, approved before-and-after material, documented operating improvement, customer response, or another supported outcome.",
      },
    ],
    placeholders: [
      "Hero media — approved food, founder, brand, launch image or film",
      "Collaboration credits — founder, MACS, Stavarai and any outside contributors",
      "Process media — approved concepts, campaign assets or build artifacts",
      "Launch evidence — live screenshots, before/after or documented result",
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
    liveUrl: "https://asc3nd.org",
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
      "Hero media — current ASC3ND launch image or film",
      "Before/after or early concept material",
      "Current live product / operating-system links",
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
    summary:
      "Buffer Blaster is an internal MACS product for research, production, scoring and scheduling. It belongs to the MAXX Suite / Built Here story rather than the client-work gallery.",
    sections: [
      {
        title: "Why we built it",
        body: "We wanted a content workflow we could understand, control and improve ourselves instead of stacking more closed subscriptions on top of the work.",
      },
      {
        title: "What it does",
        body: "The system brings research, production, scoring and scheduling into one content-operations workflow so the team can produce consistently without making the owner the full-time operator.",
      },
      {
        title: "What it proves",
        body: "Momentum is not a burst of posts. It is a repeatable operating rhythm. Buffer Blaster is one example of how we build that rhythm into the system itself.",
      },
    ],
    placeholders: [
      "Product hero video",
      "Live product link",
      "Workflow walkthrough",
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
      "Pare’ is reserved for the MAXX Suite / Built Here story. Product details, walkthroughs, links and verified results remain placeholders until approved.",
    sections: [
      {
        title: "The problem",
        body: "Add the business condition Pare’ was created to solve.",
      },
      {
        title: "What we built",
        body: "Add the product architecture and the parts of the workflow MACS designed or implemented.",
      },
      {
        title: "How it scales",
        body: "Add the specific way Pare’ turns a working process into a repeatable system at greater volume.",
      },
    ],
    placeholders: [
      "Full-page hero media",
      "Live product link",
      "Product walkthrough",
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
        body: "Add the original content problem or opportunity that led Stavarai to develop Posta Studio.",
      },
      {
        title: "What Stavarai developed",
        body: "Add the approved product details, including the UGC-character workflow and the parts of the experience Stavarai designed and developed.",
      },
      {
        title: "How it becomes leverage",
        body: "Add how the system turns character-led UGC production into a repeatable capability that can support more content, campaigns or clients.",
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
