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
  beforeAfter: Array<{ topic: string; before: string; after: string }>;
  highlights: string[];
  ownershipNote: string;
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
    stage: "Live Launch",
    headline: "A focused digital launch for a traveling New Orleans kitchen.",
    summary:
      "Taste of Nawlins brings authentic New Orleans food to the Pacific Northwest. MACS worked with the founder to shape a clear public home for the menu, catering inquiries, pop-up drops, and the story behind the kitchen.",
    liveUrl: "https://tasteofnawlins.netlify.app",
    heroImage: "/work/taste-of-nawlins-hero.webp",
    beforeAfter: [
      {
        topic: "Discovery",
        before: "Pop-up locations, menu items, and catering info scattered across social posts.",
        after: "One focused public home where hungry locals and event planners find everything fast.",
      },
      {
        topic: "Brand Voice",
        before: "Generic restaurant templates that erase the personality of a traveling kitchen.",
        after: "An editorial digital home built around the founder, the food, and the New Orleans craft.",
      },
    ],
    highlights: [
      "Custom mobile-first storefront for menu, pop-up drops, and catering",
      "Founder-led storytelling that keeps the brand authentic and distinct",
      "Direct inquiry flow built for catering and event bookings",
    ],
    ownershipNote: "100% client-owned web presence built to evolve as new pop-ups and catering menus launch.",
    sections: [
      {
        title: "The Collaboration",
        body: "Taste of Nawlins already had the food, the voice, and the founder’s story. Our job was to give that identity a clear public home for the menu, catering, and the rhythm of a kitchen that travels.",
      },
      {
        title: "What we built",
        body: "MACS designed and built the public website in collaboration with the founder. The site brings the menu, catering, drops, and the follow-the-kitchen story together in one focused experience.",
      },
      {
        title: "Where it stands",
        body: "The brand now has a live public home that brings its food, catering, and ongoing kitchen story together without turning the experience into a generic restaurant site.",
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
    stage: "Live at asc3nd.org",
    headline: "Turning a community organization into a credible public brand.",
    summary:
      "ASC3ND already had the mission, the founders, and the community trust. MACS helped turn that foundation into a clear public brand at asc3nd.org built around documentary proof and simple ways for families, mentors, volunteers, and partners to connect.",
    liveUrl: "https://asc3nd.org",
    heroImage: "/work/asc3nd-hero.webp",
    beforeAfter: [
      {
        topic: "Public Trust",
        before: "Real community impact happening offline with no clear digital home for partners or donors.",
        after: "A documentary-led public brand at asc3nd.org grounded in real founders and real events.",
      },
      {
        topic: "Participation",
        before: "Families, volunteers, and sponsors unsure how to plug into upcoming community programs.",
        after: "Clear paths to donate, volunteer, and explore flagship initiatives like Community Cuts for Kids.",
      },
    ],
    highlights: [
      "Documentary-led brand platform live on asc3nd.org",
      "Dedicated project storytelling for Community Cuts for Kids",
      "Direct participation paths for families, mentors, volunteers, and donors",
    ],
    ownershipNote: "Built for ASC3ND to own and expand cleanly as new youth programs and community events launch.",
    sections: [
      {
        title: "The Collaboration",
        body: "ASC3ND already had the mission and the big idea. What it needed was a digital presence that made the organization clear, credible, and easy to understand without overstating programs or inventing impact.",
      },
      {
        title: "What we built",
        body: "MACS created a documentary-led brand site centered on ASC3ND’s founders, real community work, and clear ways to participate. Community Cuts for Kids became the first documented project, bringing together event film, approved photography, and the story behind the work.",
      },
      {
        title: "Building forward",
        body: "The site was designed to grow as ASC3ND grows. New programs, projects, and opportunities can be added when confirmed, while families, mentors, volunteers, and community partners already have a clear way to connect.",
      },
    ],
  },
  {
    slug: "buffer-blaster",
    lane: "Momentum",
    name: "Buffer Blaster",
    visibility: "internal",
    format: "product",
    industry: "Creative Infrastructure",
    stage: "Installed for MACS Clients",
    headline: "A client-owned content engine for UGC ads and weekly social media.",
    summary:
      "Buffer Blaster is an in-house MACS content system we install for customers who need UGC ads and social media production at scale without stacking expensive monthly subscriptions. We configure it around your brand voice, and you keep control of the system.",
    heroImage: "/work/buffer-blaster-hero.webp",
    beforeAfter: [
      {
        topic: "Creative Velocity",
        before: "Staring at a blank screen every week or paying $400+ a month across disconnected content tools.",
        after: "Turn one founder voice note, job-site photo, or offer into a full week of ready-to-approve ads and posts.",
      },
      {
        topic: "Ownership",
        before: "Rented SaaS content subscriptions that disappear the moment you stop paying.",
        after: "Installed once inside your own workspace so you own the workflow and every creative asset.",
      },
    ],
    highlights: [
      "Converts raw founder notes and photos into structured UGC ad scripts and social posts",
      "Built-in human approval queue so nothing publishes without your sign-off",
      "Zero recurring SaaS lock-in: MACS installs and configures it around your business",
    ],
    ownershipNote: "Pay once for installation and configuration. Your team owns the system and creative library.",
    sections: [
      {
        title: "Create more without agency bottlenecks",
        body: "Most small businesses do not fail at marketing because they lack good work. They fail because nobody has time to turn daily wins into consistent ads and posts. Buffer Blaster removes that friction.",
      },
      {
        title: "We install it. You keep it.",
        body: "MACS installs Buffer Blaster around your brand tone, offers, and approval rules. Your team generates fresh creative on demand while keeping 100% ownership of the system.",
      },
    ],
  },
  {
    slug: "pare",
    lane: "Scale",
    name: "PARÉ",
    visibility: "internal",
    format: "product",
    industry: "Design & Quality Systems",
    stage: "Installed for MACS Clients",
    headline: "Design high-craft web products without the AI slop problem.",
    summary:
      "PARÉ is MACS Digital Media’s in-house editorial design and review system. We built it so AI-assisted web builds ship with senior art direction, Steve Krug usability discipline, and pre-launch security checks instead of generic templates.",
    liveAvailable: false,
    heroImage: "/work/pare-hero.webp",
    beforeAfter: [
      {
        topic: "Visual Quality",
        before: "AI-generated websites that look identical, break on mobile, and ship with invisible contrast bugs.",
        after: "Editorial typography, verified contrast, clean mobile hierarchy, and distinct brand taste on every page.",
      },
      {
        topic: "Pre-Launch Review",
        before: "Shipping fast code with zero usability testing or security audits until a customer complains.",
        after: "Built-in design critics and automated pre-ship checks that catch layout, copy, and security flaws before launch.",
      },
    ],
    highlights: [
      "Turns AI coding agents into a disciplined design studio with strict anti-slop guardrails",
      "Enforces desktop and mobile usability, contrast, and clean hierarchy before shipping",
      "Includes pre-launch security and bug review with zero recurring design-SaaS tax",
    ],
    ownershipNote: "One installation fee lets your team own the PARÉ design bar and workflow permanently.",
    sections: [
      {
        title: "The problem",
        body: "AI-built websites and apps create code faster than anyone can review it. Work that ships without a real design process breaks quietly on phones or creates generic, low-trust pages that make serious buyers hesitate.",
      },
      {
        title: "What we built",
        body: "PARÉ is one studio for designing high-level products without the AI slop problem. It pairs a visual direction system with strict usability gates and pre-ship security review so every page reads like senior craft.",
      },
      {
        title: "How it scales",
        body: "No bloated subscription stack. MACS installs PARÉ into your workflow so every future landing page, offer, or product update passes the same high quality bar before it ever reaches a client.",
      },
    ],
  },
  {
    slug: "posta-studio",
    lane: "Scale",
    name: "Posta Studio",
    visibility: "internal",
    format: "product",
    credit: "Developed by Stavarai McSwain",
    industry: "Social Publishing Automation",
    stage: "Installed for MACS Clients",
    headline: "Automate your entire social media publishing rhythm.",
    summary:
      "Posta Studio is an in-house MACS social publishing system developed by Stavarai. We install it for founders, local businesses, and eCommerce brands that need repeatable short-form content and scheduled distribution without posting by hand.",
    heroImage: "/work/posta-studios-hero.webp",
    beforeAfter: [
      {
        topic: "Consistency",
        before: "Posting in random bursts whenever the owner finds spare time, then going silent for weeks.",
        after: "A repeatable weekly publishing cadence across your core social channels on autopilot.",
      },
      {
        topic: "Production Time",
        before: "Spending hours manually reformatting, captioning, and uploading every clip across platforms.",
        after: "Structured creative templates and scheduled distribution that turn one shoot into weeks of presence.",
      },
    ],
    highlights: [
      "Built from real eCommerce operator experience running PostaTees",
      "Automates scripted ads, recurring brand formats, and multi-platform scheduling",
      "Keeps human review in charge of brand voice while removing repetitive manual posting",
    ],
    ownershipNote: "Installed around your channels and brand assets so you keep full control of your audience.",
    sections: [
      {
        title: "Why it exists",
        body: "Consistent short-form content depends on repeatable formats and a reliable publishing rhythm, not one-off bursts of inspiration. Without a system, every post starts from zero.",
      },
      {
        title: "What Stavarai developed",
        body: "Stavarai and our team built Posta Studio to turn UGC-style content and social posts into a dependable engine: structured scripts, brand-consistent formats, and a publishing workflow that ships on schedule.",
      },
      {
        title: "How it becomes leverage",
        body: "Reusable social production saves hours every week and keeps your offers visible across platforms. Built for local service leaders, eCommerce brands, creators, and podcasts.",
      },
    ],
  },
  {
    slug: "fish-on",
    lane: "Momentum",
    name: "Fish On",
    visibility: "internal",
    format: "product",
    industry: "Source-Grounded AI Agents",
    stage: "Private Client Pattern",
    headline: "A source-grounded AI assistant that cites real rules instead of guessing.",
    summary:
      "Fish On is an in-house MACS reference agent pattern we adapt and install for businesses that need a bilingual assistant answering strictly from verified documents, policies, and live data sources.",
    heroImage: "/work/fish-on-hero.webp",
    beforeAfter: [
      {
        topic: "Accuracy",
        before: "Generic chatbots that hallucinate rules, pricing, or availability and erode customer trust.",
        after: "Source-grounded answers that show verified dates and cite the exact official source every time.",
      },
      {
        topic: "Bilingual Reach",
        before: "Dense English-only PDFs that leave Spanish-speaking customers stuck or calling support.",
        after: "Plain-English and Spanish answers delivered instantly from your real company knowledge base.",
      },
    ],
    highlights: [
      "Answers strictly from trusted sources with visible citations and checked dates",
      "Native English and Spanish support out of the box",
      "Installed privately under client authentication and operating rules",
    ],
    ownershipNote: "Deployed as a private, client-controlled system using your own verified documents and guardrails.",
    sections: [
      {
        title: "The problem",
        body: "Critical rules and customer answers often live in dense PDFs and scattered pages. Getting a straight, reliable answer should not require digging through five documents.",
      },
      {
        title: "What MACS built",
        body: "A specialized agent grounded in official Texas Parks and Wildlife sources that shows checked dates, cites every answer, and speaks both English and Spanish.",
      },
      {
        title: "How it is delivered",
        body: "MACS adapts this exact architecture into a private customer-controlled assistant for your business, connected to your own SOPs, pricing rules, and approval gates.",
      },
    ],
  },
  {
    slug: "foundry-fleet",
    lane: "Scale",
    name: "Foundry",
    visibility: "internal",
    format: "product",
    industry: "AI Agent Infrastructure",
    stage: "Installed for MACS Clients",
    headline: "Give your AI operator its own private computer.",
    summary:
      "Foundry is MACS Digital Media’s in-house agent-computer system. We install it for businesses that need AI operators to safely browse dashboards, collect market intelligence, follow up on leads, and handle repetitive software work under strict human approval gates.",
    heroImage: "/work/foundry-fleet-hero.webp",
    beforeAfter: [
      {
        topic: "Real Execution",
        before: "Chatbots that only write suggestions while your team still copies, pastes, and clicks through dashboards.",
        after: "Dedicated AI operators running in isolated browsers that gather data, update systems, and prep work automatically.",
      },
      {
        topic: "Control & Safety",
        before: "Unchecked automation scripts or third-party tools holding your credentials in someone else’s cloud.",
        after: "Private, client-owned infrastructure where you define exact permissions and human approval gates.",
      },
    ],
    highlights: [
      "Runs dedicated browser and software workflows across your real business tools",
      "Supports parallel research, lead follow-up, dashboard checks, and reporting",
      "Hard human approval gates on spending, publishing, and sensitive actions",
    ],
    ownershipNote: "Your agent, its own computer, your rules. Installed on client-owned infrastructure with full handoff.",
    sections: [
      {
        title: "The problem",
        body: "Most AI tools can answer questions, but they cannot perform real browser work inside the websites and software your business uses every day. Teams still waste hours copying data, filling forms, and checking dashboards manually.",
      },
      {
        title: "Why you would use one",
        body: "When your team spends hours on repetitive digital chores, Foundry takes over the routine clicks, research, and prep while your team keeps final approval on every consequential action.",
      },
      {
        title: "What it can do",
        body: "Foundry operators can research markets, monitor websites for changes, organize files, operate browser-based dashboards, prep reports, and trigger 60-second lead follow-up across your stack.",
      },
      {
        title: "Ownership and control",
        body: "MACS installs and configures Foundry around the exact workflows your company needs. You decide what it can access, what runs automatically, and where human sign-off is required.",
      },
    ],
  },
];

export const clientWork = caseStudies.filter((study) => study.visibility === "client");
export const maxxSuiteWork = caseStudies.filter((study) => study.visibility === "internal");

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
