/**
 * Single source of truth for site content.
 * Typed and structured so it can be swapped for a CMS (Sanity/Contentful)
 * with minimal change — each export maps cleanly to a content model.
 *
 * Every value here reflects ACE Analytix's real positioning and fixes the
 * issues raised in the website audit (correct titles, no template copy,
 * named-mandate structure, single clear CTA).
 */

export const site = {
  name: "ACE Analytix",
  // Audit fix: the old header tagline "Transforming Challenges into Opportunities
  // for Global Impact" was generic and contradicted the body copy. The hero now
  // carries the point of view; the nav stays clean.
  shortDescription:
    "A boutique strategy and execution firm helping leaders, institutions, and systems uncover value.",
  url: "https://www.aceanalytix.com",
  // Audit fix: replaces the template footer line "We understand that business
  // can be chaotic. That's where we come in."
  footerLine: "We help leaders, institutions, and systems uncover value.",
  email: "info@aceanalytix.com",
  phone: "+234 806 800 6877",
  phoneHref: "+2348068006877",
  address: "No. 6 Valentine Nwabueze Street, Jahi, Abuja, Nigeria",
  social: {
    linkedin: "https://www.linkedin.com/company/aceanalytix",
    instagram: "https://www.instagram.com/aceanalytix",
  },
  // Audit fix: one firm, one ask. No more dual "Engage With Us" / "Plan With Us".
  primaryCta: { label: "Start the conversation", href: "/contact" },
};

export type Client = { name: string; logo: string };

// Trust-banner partners. Drop logos in /public/clients and add entries here.
export const clients: Client[] = [
  { name: "Chandler Foundation", logo: "/clients/chandler-foundation.png" },
  { name: "Elevate Africa", logo: "/clients/elevate-africa.png" },
  { name: "Teno Energy", logo: "/clients/teno-energy.png" },
];

export const nav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Team", href: "/team" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const hero = {
  eyebrow: "Strategy · Structure · Execution",
  // Audit win — kept and strengthened. This is a real, ownable point of view.
  title: "Complex problems carry hidden value.",
  body: "We help leaders, institutions, and systems uncover that value — through clear strategy, durable structure, and disciplined execution.",
  // Audit fix: a filter, not an invitation to everyone.
  clientDefinition:
    "We work with leaders facing high-stakes priorities — where complexity is high, alignment is difficult, and delivery is what matters most.",
  stats: [
    { value: "3", suffix: "", label: "Countries of active mandate" },
    { value: "12", suffix: "+", label: "Years across government & institutions" },
    { value: "1", suffix: "", label: "Standard: work that ships" },
  ],
};

export type FrameworkStage = {
  id: string;
  step: string;
  title: string;
  body: string;
  points: string[];
};

// Audit win: Design / Develop / Deliver, above the fold, with the war-room
// execution language on Deliver — the firm's strongest differentiator.
export const framework: FrameworkStage[] = [
  {
    id: "design",
    step: "01",
    title: "Design",
    body: "We clarify priorities, define the strategic choices that matter, and shape the policy that will hold under pressure.",
    points: [
      "Priority and problem definition",
      "Strategic options and trade-offs",
      "Policy and governance design",
    ],
  },
  {
    id: "develop",
    step: "02",
    title: "Develop",
    body: "We build the structures, systems, capabilities, and processes your team needs to carry the strategy forward.",
    points: [
      "Operating models and institutional structure",
      "Systems, processes, and delivery routines",
      "Capability and capacity building",
    ],
  },
  {
    id: "deliver",
    step: "03",
    title: "Deliver",
    body: "This is where most firms stop. We don't. We run a war-room execution model — we sit with your teams and drive delivery milestone by milestone until strategy becomes result.",
    points: [
      "Embedded war-room execution",
      "Milestone-by-milestone delivery",
      "Accountability that outlasts the engagement",
    ],
  },
];

export const belief = {
  eyebrow: "Our belief",
  // Audit win: a real conviction statement, not a generic value proposition.
  statement:
    "Africa's most difficult challenges are also some of its greatest opportunities for transformation.",
  body: "We take on problems that are genuinely hard — the ones where the gap between a good strategy and a delivered result is widest. That gap is where value hides, and closing it is the work.",
};

export type Service = {
  id: string;
  title: string;
  summary: string;
  outcomes: string[];
};

export const services: Service[] = [
  {
    id: "policy-governance",
    title: "Policy & Governance Reform",
    summary:
      "We help governments and institutions design policy that is implementable — and reform the governance that lets it hold.",
    outcomes: [
      "Reform strategy and roadmaps",
      "Open-government and transparency programmes",
      "Regulatory and institutional design",
    ],
  },
  {
    id: "institutional-transformation",
    title: "Institutional Transformation",
    summary:
      "We rebuild how institutions are structured and run so they perform — long after we leave.",
    outcomes: [
      "Operating-model redesign",
      "Performance and delivery systems",
      "Leadership and culture change",
    ],
  },
  {
    id: "programme-delivery",
    title: "Programme Design & Delivery",
    summary:
      "We design programmes that can be delivered, then embed with your teams to deliver them.",
    outcomes: [
      "Programme architecture and design",
      "War-room delivery and milestone tracking",
      "Monitoring, evaluation, and course-correction",
    ],
  },
  {
    id: "leadership-execution",
    title: "Leadership & Execution Capacity",
    summary:
      "We build the leadership muscle and execution discipline that turns intent into outcomes.",
    outcomes: [
      "Executive advisory and coaching",
      "Delivery-unit and PMO standup",
      "Capability transfer to in-house teams",
    ],
  },
];

export type Value = {
  title: string;
  body: string;
};

// Audit win: these are genuinely strong and specific. Kept verbatim in spirit.
export const values: Value[] = [
  {
    title: "Sustainability",
    body: "We build for the long term. Our work is judged by what still functions after we've gone, not by what looked good on the day.",
  },
  {
    title: "Trust",
    body: "We operate at government and institutional level, where discretion and reliability are non-negotiable. We earn trust before we ask for it.",
  },
  {
    title: "Execution",
    body: "Strategy without delivery is theatre. We measure ourselves by results that ship, milestone by milestone.",
  },
  {
    title: "Authenticity",
    body: "We say what we actually think, including when it's inconvenient. Honest counsel is the most valuable thing we offer.",
  },
  {
    title: "Rigour",
    body: "We do the hard analysis, test our own assumptions, and hold the line on quality even under pressure.",
  },
];

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  credentials: string[];
  photo?: string; // place files in /public/team/<id>.jpg
};

// Audit fixes applied here:
//  - Daniel's role corrected to "Founder and Managing Partner"
//    (was wrongly "Co-founder/Lead Consultant").
//  - A real biography + named mandates added (was name + title only).
//
// TODO (content): add the other 9 team members. The photos exist on the live
// site; drop them in /public/team and add entries below. Each renders
// automatically — no code change needed.
export const team: TeamMember[] = [
  {
    id: "daniel",
    name: "Daniel", // TODO: confirm full name for display
    role: "Founder and Managing Partner",
    bio: "Daniel leads ACE Analytix and its work at the intersection of government, institutions, and delivery. He has advised and embedded at the highest levels of public reform — from national open-government programmes to state economic management — and built the firm around a single conviction: strategy is only as good as what gets delivered.",
    credentials: [
      "TBI Regional Director — Southern Africa & Malawi",
      "Open Government Partnership (OGP) Malawi, 2023–2025",
      "Edo State Economic Management Team",
      "Former Palladium",
    ],
    // Drop the real photo at /public/team/daniel.jpg and set the path here.
    // Until then, a designed monogram renders in its place.
    photo: undefined,
  },
];

export type InsightCategory = {
  id: string;
  title: string;
  description: string;
};

export const insightCategories: InsightCategory[] = [
  {
    id: "articles",
    title: "Articles",
    description: "Longer-form arguments on governance, reform, and delivery in Africa.",
  },
  {
    id: "briefs",
    title: "Briefs",
    description: "Short, sharp reads on a single development worth your attention.",
  },
  {
    id: "frameworks",
    title: "Frameworks",
    description: "The models and methods we use to design and deliver.",
  },
  {
    id: "perspectives",
    title: "Perspectives",
    description: "Point-of-view pieces — what we believe and why.",
  },
];

export type Insight = {
  slug: string;
  category: string;
  title: string;
  dek: string;
  author: string;
  date: string; // ISO
  readingTime: string;
  status: "published" | "draft";
};

// Audit's #1 action: "Publish the first edition of The Position."
// The publication is modelled here. Add real editions to make the section live.
export const publication = {
  name: "The Position",
  tagline: "ACE Analytix's monthly intelligence brief on African governance.",
  cadence: "Monthly",
};

export const insights: Insight[] = [
  // When the first edition of The Position is ready, set status to "published".
  {
    slug: "the-position-no-1",
    category: "perspectives",
    title: "The Position — No. 1",
    dek: "One question, one argument, one signature. The first edition of our monthly brief on what governance in Africa gets wrong about delivery.",
    author: "Daniel, Founder & Managing Partner",
    date: "2026-06-01",
    readingTime: "6 min",
    status: "draft",
  },
];
