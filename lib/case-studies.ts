export type CaseStudy = {
  slug: string;
  lane: "Reset" | "Momentum" | "Scale" | "Launch";
  name: string;
  visibility: "client" | "internal";
  format: "case-study" | "collaboration" | "product";
  formatLabel?: string;
  collaboration?: string;
  industry?: string;
  stage?: string;
  credit?: string;
  headline: string;
  summary: string;
  liveUrl?: string;
  liveAvailable?: boolean;
  access?: "client-gate";
  heroImage?: string;
  sections: Array<{ title: string; body: string }>;
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
    headline: "A focused digital launch for a traveling New Orleans kitchen.",
    summary:
      "Taste of Nawlins brings New Orleans food to the Pacific Northwest. MACS worked with the founder to shape a focused public site around the menu, catering, drops and the story behind the kitchen.",
    liveUrl: "https://tasteofnawlins.netlify.app",
    heroImage: "/work/taste-of-nawlins-hero.webp",
    sections: [
      {
        title: "The Collaboration",
        body: "Taste of Nawlins already had the food, the voice and the founder’s story. The digital work was to give that identity a clear public home for the menu, catering and the story behind a kitchen that travels.",
      },
      {
        title: "What we built",
        body: "MACS designed and built the public website in collaboration with the founder. The site brings the menu, catering, drops and the follow-the-kitchen story together in one focused experience.",
      },
      {
        title: "Where it stands",
        body: "The brand now has a live public home that brings its food, catering and ongoing kitchen story together without turning the experience into a generic restaurant site.",
      },
    ],
  },
  {
    slug: "asc3nd",
    lane: "Launch",
    name: "ASC3ND",
    visibility: "client",
    format: "case-study",
    collaboration: "ASC3ND × MACS Digital Media",
    industry: "Youth / Community",
    formatLabel: "Brand + Digital Platform",
    headline: "Turning a community organization into a credible public brand.",
    summary:
      "ASC3ND already had the mission, the founders and the big idea. MACS helped turn that foundation into a clear public brand built around real community work, documentary proof and simple ways for families, mentors, volunteers and partners to connect.",
    liveUrl: "https://asc3nd-brand-site.vercel.app/",
    heroImage: "/work/asc3nd-hero.webp",
    sections: [
      {
        title: "The Collaboration",
        body: "ASC3ND already had the mission and the big idea. What it needed was a digital presence that made the organization clear, credible and easy to understand without overstating programs or inventing impact.",
      },
      {
        title: "What we built",
        body: "MACS created a documentary-led brand site centered on ASC3ND’s founders, real community work and clear ways to participate. Community Cuts for Kids became the first documented project, bringing together the event film, approved photography and the story behind the work.",
      },
      {
        title: "Building forward",
        body: "The site was designed to grow as ASC3ND grows. New programs, projects and opportunities can be added when they are confirmed, while families, mentors, volunteers and community partners already have a clear way to connect.",
      },
    ],
  },
  {
    slug: "buffer-blaster",
    lane: "Momentum",
    name: "Buffer Blaster",
    visibility: "internal",
    format: "product",
    access: "client-gate",
    industry: "Creative Infrastructure",
    headline: "A content engine for your social media",
    heroImage: "/work/buffer-blaster-hero.webp",
    summary:
      "Buffer Blaster is an in-house MACS content system we install for customers who need UGC ads and social media production at scale without stacking expensive subscriptions. MACS installs and configures it around the company workflow, then the customer keeps control of the system.",
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
    access: "client-gate",
    headline: "Design high-level products without the AI slop problem.",
    summary:
      "PARÉ is an in-house MACS design system we install for customers who want stronger product design, visual direction and review without adding another subscription stack.",
    liveAvailable: false,
    heroImage: "/work/pare-hero.webp",
    sections: [
      {
        title: "The problem",
        body: "AI-built websites and apps create code faster than anyone can review it. Work that ships without a real design process can break when nobody is watching or create sloppy, insecure products that all look alike.",
      },
      {
        title: "What we built",
        body: "Pare’ is one studio for designing high-level products without the AI slop problem. It’s our in-house alternative to Canva, Claude Design, and basic vibe-coding apps. One plugin turns your AI agent into an entire design team. Or, if you want a hands-on approach, log in and use the canvas. Our built-in security review audits your site for bugs before it ships.",
      },
      {
        title: "How it scales",
        body: "No subscriptions. One installation fee lets you own the system. Our built-in agents and process use a defined quality bar to review AI-built work before it ever reaches a client. Sign up for Pare’ and \"Stop the Slop.\"",
      },
    ],
  },
  {
    slug: "posta-studio",
    lane: "Scale",
    name: "Posta Studio",
    visibility: "internal",
    format: "product",
    credit: "Developed by Stavarai",
    access: "client-gate",
    heroImage: "/work/posta-studios-hero.webp",
    headline: "Automate your entire social media presence",
    summary:
      "Posta Studio is an in-house MACS social publishing system we install for customers who need repeatable content, scheduled publishing and campaign workflows without doing every post by hand.",
    sections: [
      {
        title: "Why it exists",
        body: "Consistent short-form content depends on recurring characters and a publishing rhythm, not one-off inspiration. Without a system, every post starts from zero.",
      },
      {
        title: "What Stavarai developed",
        body: "Stavarai and our team created Posta Studio to turn UGC-style content and social posts into a repeatable system: automated posts, scripted ads, and a publishing workflow that produces on schedule instead of when you find time.",
      },
      {
        title: "How it becomes leverage",
        body: "Reusable and consistent social media at scale, without you having to post, saves hours of time and lets you see your ads working across all platforms. Built for influencers, eCommerce, podcasts and much more.",
      },
    ],
  },
  {
    slug: "fish-on",
    lane: "Momentum",
    name: "Fish On",
    visibility: "internal",
    format: "product",
    access: "client-gate",
    industry: "Agent / Outdoors",
    headline: "A fishing agent that answers from real Texas sources.",
    summary:
      "Fish On is an in-house MACS source-grounded agent pattern we install and adapt for customers who need a specialized assistant that answers from trusted sources instead of guessing.",
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
        title: "How it is delivered",
        body: "The public shared demo has been retired. MACS installs Fish On as a private customer-controlled system with its own authentication, sources and operating rules.",
      },
    ],
  },
  {
    slug: "foundry-fleet",
    lane: "Scale",
    name: "Foundry",
    visibility: "internal",
    format: "product",
    access: "client-gate",
    industry: "Internal Tooling",
    headline: "Give your AI agent its own computer.",
    summary:
      "Foundry is an in-house MACS agent-computer system we install for customers who need AI agents to safely browse websites, operate software, gather information and handle repetitive digital work.",
    heroImage: "/work/foundry-fleet-hero.webp",
    sections: [
      {
        title: "The problem",
        body: "Most AI can answer questions, but it cannot actually do the browser work inside the websites or software your business uses every day. People still have to copy information, click through dashboards, fill forms, move files, and repeat the same steps over and over. AI agents in Claude and ChatGPT are often blocked from finding public information, transcripts, and other data when scraping.",
      },
      {
        title: "Why you would use one",
        body: "If your team spends hours doing repetitive work in a browser, Foundry can take over the routine parts. Your team stays in control of sensitive actions while the agent handles the visual clicking, searching, checking, and data gathering.",
      },
      {
        title: "What it can do",
        body: "Basically anything a human can do with a browser, Foundry can perform for you. Multiple agents and browsers can be used at the same time. It can use software, edit videos, organize files, search websites and gather information, use dashboards and browser-based software, watch websites for changes, fill repetitive forms and update systems, and install complex agents or software for you.",
      },
      {
        title: "Ownership / offer",
        body: "Your agent. Its own computer. Your rules. MACS installs and configures Foundry around the work your company actually needs done. You decide what it can access, what it can do automatically, and where human approval is required.",
      },
    ],
  },
];

export const clientWork = caseStudies.filter((study) => study.visibility === "client");
export const maxxSuiteWork = caseStudies.filter((study) => study.visibility === "internal");

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
