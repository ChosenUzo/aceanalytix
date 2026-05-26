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

export type ServiceOffering = {
  id: string;
  title: string;
  description: string;
};

// Mirrored verbatim from the live /our-services page. Drives the Services page.
export const serviceOfferings: ServiceOffering[] = [
  {
    id: "private-sector-development",
    title: "Private Sector Development",
    description:
      "We offer guidance and assistance to organizations seeking to improve their capabilities, encourage innovation, and navigate the challenges of the private sector.",
  },
  {
    id: "agriculture-transformation",
    title: "Agriculture Transformation & Agri-Tech",
    description:
      "Our expertise in agricultural transformation and AgTech empowers clients to optimize operations, adopt technology-driven solutions, and contribute to the advancement of sustainable agriculture.",
  },
  {
    id: "technology-policy-development",
    title: "Technology Policy Development",
    description:
      "ACE Analytix assists governments and organizations in formulating policies that address the challenges and opportunities presented by the rapidly evolving technology landscape.",
  },
  {
    id: "healthcare-systems",
    title: "Development of Healthcare Systems",
    description:
      "Our healthcare system development services focus on enhancing accessibility, efficiency, and inclusivity in healthcare delivery, ultimately improving the overall well-being of communities.",
  },
  {
    id: "sustainable-energy-markets",
    title: "Development of Sustainable Energy Markets",
    description:
      "ACE Analytix is dedicated to advancing sustainable energy solutions, guiding clients through market development, and supporting the transition to cleaner and more sustainable energy sources.",
  },
  {
    id: "tech-ecosystems",
    title: "Development of Tech Ecosystems",
    description:
      "We work towards creating thriving technology ecosystems by facilitating partnerships, supporting startups, and fostering an environment conducive to innovation.",
  },
  {
    id: "digital-transformation-government",
    title: "Digital Transformation Across Government",
    description:
      "We assist governments in embracing digital transformation, optimizing processes, and enhancing citizen services through the strategic application of technology.",
  },
  {
    id: "civil-service-reforms",
    title: "Civil Service Reforms",
    description:
      "Our civil service reform services aim to streamline government operations, improve accountability, and build a more responsive and efficient civil service.",
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
  photo?: string; // place files in /public/team/<id>.webp
  linkedin?: string; // individual profile URL (falls back to company page)
};

// NOTE (content): bios for non-founders are professional drafts written from
// each person's role — review and replace with their own words. Replace each
// `linkedin` with the individual's profile URL when available.
export const team: TeamMember[] = [
  {
    id: "daniel",
    name: "Daniel Ikuenobe",
    role: "Founder and Managing Partner",
    bio: "Daniel leads ACE Analytix and its work at the intersection of government, institutions, and delivery. He has advised and embedded at the highest levels of public reform — from national open-government programmes to state economic management — and built the firm around a single conviction: strategy is only as good as what gets delivered.",
    credentials: [
      "TBI Regional Director — Southern Africa & Malawi",
      "Open Government Partnership (OGP) Malawi, 2023–2025",
      "Edo State Economic Management Team",
      "Former Palladium",
    ],
    photo: "/team/daniel.webp",
    linkedin: "https://www.linkedin.com/company/aceanalytix",
  },
  {
    id: "megor",
    name: "Dr. Megor Ikuenobe",
    role: "Co-Founder",
    bio: "Megor co-founded ACE Analytix and helps set the firm's direction and standards. She brings depth across leadership, institutional development, and the human dimension of transformation — the part that determines whether change actually holds.",
    credentials: [],
    photo: "/team/megor.webp",
    linkedin: "https://www.linkedin.com/company/aceanalytix",
  },
  {
    id: "martin-kalima",
    name: "Martin Kalima",
    role: "Director of Operations and Delivery",
    bio: "Martin leads operations and delivery, turning strategy into milestones and milestones into results. He keeps engagements moving — coordinating teams, tracking progress, and holding the line on execution.",
    credentials: [],
    photo: "/team/martin-kalima.webp",
    linkedin: "https://www.linkedin.com/company/aceanalytix",
  },
  {
    id: "olamide-dauda",
    name: "Olamide Dauda",
    role: "Lead Consultant",
    bio: "Olamide leads client engagements, translating complex problems into clear, workable plans and staying close to delivery on the ground until the work lands.",
    credentials: [],
    photo: "/team/olamide-dauda.webp",
    linkedin: "https://www.linkedin.com/company/aceanalytix",
  },
  {
    id: "michelle-makhumula",
    name: "Michelle Makhumula",
    role: "Senior Analyst, Strategic Communication & Delivery",
    bio: "Michelle works across strategic communication and delivery, making sure the firm's thinking lands clearly and that programmes stay aligned as they move from plan to result.",
    credentials: [],
    photo: "/team/michelle-makhumula.webp",
    linkedin: "https://www.linkedin.com/company/aceanalytix",
  },
  {
    id: "ikenna-ekeh",
    name: "Ikenna Ekeh",
    role: "Programme Associate, Growth & Partnerships",
    bio: "Ikenna supports growth and partnerships, building the relationships and opportunities that extend the firm's reach and the impact of its work.",
    credentials: [],
    photo: "/team/ikenna-ekeh.webp",
    linkedin: "https://www.linkedin.com/company/aceanalytix",
  },
  {
    id: "oluchi-okechukwu",
    name: "Oluchi Okechukwu",
    role: "Programme Associate, People & Operations",
    bio: "Oluchi supports people and operations, keeping the firm organised and its teams supported so that every engagement runs smoothly.",
    credentials: [],
    photo: "/team/oluchi-okechukwu.webp",
    linkedin: "https://www.linkedin.com/company/aceanalytix",
  },
  {
    id: "wisdom-onoriode",
    name: "Wisdom Onoriode",
    role: "Programme Associate, Brand & Digital Strategy",
    bio: "Wisdom leads brand and digital strategy, shaping how ACE Analytix shows up and communicates clearly across every channel.",
    credentials: [],
    photo: "/team/wisdom-onoriode.webp",
    linkedin: "https://www.linkedin.com/company/aceanalytix",
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
