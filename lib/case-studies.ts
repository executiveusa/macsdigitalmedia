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
    headline: "A collaboration built around bringing the brand into a focused digital launch.",
    summary:
      "Taste of Nawlins is the first MACS collaboration story in this format. The public case will show what the team was building, where MACS contributed, and the verified result without overstating authorship.",
    liveUrl: "https://tasteofnawlins.netlify.app",
    liveAvailable: false,
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
    liveUrl: "https://asc3nd-org.31.220.58.212.sslip.io/",
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
    industry: "Creative Infrastructure",
    headline: "A content engine for your social media",
    liveUrl: "https://buffer-blaster.netlify.app/",
    heroImage: "/work/buffer-blaster-hero.webp",
    summary:
      "Buffer Blaster is an internal MACS product for creating UGC ads and media at scale without expensive lock in subscriptions. It belongs to the MAXX Suite and is our open source alternative we built for our clients. Pay once, we install it, you own it forever. No subscriptions needed.",
    sections: [
      {
        title: "Create more. Own the system.",
        body: "Buffer Blaster helps your company create UGC ads and social media at scale without stacking expensive subscriptions.",
      },
      {
        title: "We install it. You keep it.",
        body: "MACS installs Buffer Blaster for your company. You pay once, own the system, and keep control of your workflow.",
      },
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
    liveAvailable: false,
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
    liveUrl: "https://postastudios.31.220.58.212.sslip.io/",
    heroImage: "/work/posta-studios-hero.webp",
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
    headline: "A brand world you walk into, with its own sound and rules.",
    summary:
      "Sweet is a forest world built around one person's brand - navigation as places (the shop, the library, the blog, the machinery), a soundscape and bilingual storytelling. Part of the Built Here story.",
    liveUrl: "https://sweet.31.220.58.212.sslip.io/",
    heroImage: "/work/sweet-hero.webp",
    sections: [
      {
        title: "What it is",
        body: "Sweet is an interactive forest world for a personal brand. Visitors arrive at the edge of her forest and move through places - the shop, the library, the blog, the machinery - instead of scrolling another page of links.",
      },
      {
        title: "What MACS built",
        body: "The world, its art direction, its sound design and its bilingual EN/ES storytelling were designed and built as one experience. Even the rooms still in progress are labeled honestly inside the world: staged preview, soon.",
      },
      {
        title: "What it proves",
        body: "A brand can be a place, not a feed. The world is live now and keeps its own rules - her brand, her agents, her rules.",
      },
    ],
    placeholders: [
      "Directed walkthrough capture of the world",
      "The founder's own account of the concept",
    ],
  },
  {
    slug: "fish-on",
    lane: "Momentum",
    name: "Fish On",
    visibility: "internal",
    format: "product",
    industry: "Agent / Outdoors",
    headline: "A fishing agent that answers from real Texas sources.",
    summary:
      "Fish On answers fishing questions in plain language from real Texas sources with checked dates - regulations, weather, tides - in English and Spanish. Part of the Built Here story.",
    liveUrl: "https://executiveusa.github.io/fish-on/",
    heroImage: "/work/fish-on-hero.webp",
    sections: [
      {
        title: "The problem",
        body: "Fishing regulations live in dense PDFs and scattered pages. Getting a straight answer - can I keep this redfish, what is biting near Houston this weekend - should not require a law degree.",
      },
      {
        title: "What MACS built",
        body: "An agent that answers from real Texas sources (TPWD and friends), shows checked dates, cites its source and speaks English and Spanish. Made in Texas, for Texans.",
      },
      {
        title: "What's live",
        body: "The public preview is live now with sample answers from real Texas sources. It is labeled as a preview because that is what it is.",
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
    headline: "One control room for every agent computer.",
    summary:
      "Foundry Fleet is the private console MACS uses to see its agent computers live - fleet status, audit trail and product state in one place. The public page confirms it is deployed; the console itself stays behind a key.",
    liveUrl: "https://foundry-cp.31.220.58.212.sslip.io/fleet.html",
    heroImage: "/work/foundry-fleet-hero.webp",
    sections: [
      {
        title: "Why it exists",
        body: "A fleet of agent machines doing real work needs one live view: what is up, what is down, what changed, who did it. Without it, operations run on guesswork.",
      },
      {
        title: "What MACS built",
        body: "A control room with Fleet, Audit and Product views over every agent computer - the same discipline we bring to client systems, applied to our own infrastructure first.",
      },
      {
        title: "What's live",
        body: "The console is deployed and answers live; it requires an API key because it is private infrastructure. The public page is the proof it exists, not a demo.",
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
