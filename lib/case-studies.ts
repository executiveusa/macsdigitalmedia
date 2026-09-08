export type CaseStudy = {
  slug: string;
  lane: "Reset" | "Momentum" | "Scale" | "Launch";
  name: string;
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
    slug: "asc3nd",
    lane: "Launch",
    name: "ASC3ND",
    headline: "A public website with an operating system behind it.",
    summary:
      "ASC3ND is our Launch example: a public-facing Next.js site connected to reusable operational systems for onboarding, opportunities, campaigns, approvals and organizational context.",
    liveUrl: "https://asc3nd.org",
    heroImage:
      "https://raw.githubusercontent.com/executiveusa/asc3nd-frontend-website-/main/apps/site/public/images/asc3nd-site-reference.jpg",
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
      "Add launch-story video",
      "Add before/after or early concept material",
      "Add ASC3ND SaaS product 01 + live link",
      "Add ASC3ND SaaS product 02 + live link",
      "Add ASC3ND SaaS product 03 + live link",
      "Add documented result or testimonial",
    ],
  },
  {
    slug: "buffer-blaster",
    lane: "Momentum",
    name: "Buffer Blaster",
    headline: "A content engine built to keep momentum moving.",
    summary:
      "Buffer Blaster is an internal MACS product for research, production, scoring and scheduling. It is our Momentum proof: a repeatable system designed to reduce the manual work behind consistent content operations.",
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
      "Add product hero video",
      "Add live product link",
      "Add workflow walkthrough",
      "Add example campaign",
      "Add documented output/result",
    ],
  },
  {
    slug: "pare",
    lane: "Scale",
    name: "Pare’",
    headline: "Scale proof, ready for the full story.",
    summary:
      "Pare’ is reserved as a Scale case study. The page structure is ready for the product story, system walkthrough, live links and documented results once the approved product details are added.",
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
      "Add full-page hero media",
      "Add live product link",
      "Add product walkthrough",
      "Add development timeline",
      "Add documented result",
    ],
  },
  {
    slug: "posta-studio",
    lane: "Scale",
    name: "Posta Studio",
    credit: "Developed by Stavarai",
    headline: "UGC characters built into a repeatable content system.",
    summary:
      "Posta Studio is a Scale case study developed by Stavarai. It will document how the UGC-character product was conceived, built and used as a repeatable system rather than a one-off content experiment.",
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
      "Add full-page hero video",
      "Add live Posta Studio link",
      "Add UGC character gallery",
      "Add product walkthrough",
      "Add development story from Stavarai",
      "Add documented result",
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
