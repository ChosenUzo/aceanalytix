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
  summary: string; // short snippet for the team listing
  bio: string[]; // one entry per paragraph
  credentials: string[];
  photo?: string; // place files in /public/team/<id>.webp
  linkedin?: string; // individual profile URL (falls back to company page)
};

export const team: TeamMember[] = [
  {
    id: "daniel",
    name: "Daniel Ikuenobe",
    role: "Founder and Managing Partner",
    summary:
      "Working at the intersection of government, institutions, and delivery — built on one conviction: strategy is only as good as what gets delivered.",
    bio: [
      "Daniel leads ACE Analytix and its work at the intersection of government, institutions, and delivery. He has advised and embedded at the highest levels of public reform — from national open-government programmes to state economic management — and built the firm around a single conviction: strategy is only as good as what gets delivered.",
    ],
    credentials: [
      "TBI Regional Director — Southern Africa & Malawi",
      "Open Government Partnership (OGP) Malawi, 2023–2025",
      "Edo State Economic Management Team",
      "Former Palladium",
    ],
    photo: "/team/daniel.webp",
    linkedin: "https://www.linkedin.com/in/dikuenobe01/",
  },
  {
    id: "megor",
    name: "Dr. Megor Ikuenobe",
    role: "Co-Founder",
    summary:
      "International development and systems-strengthening specialist, trained as a medical doctor — spanning health, education, gender, and social protection.",
    bio: [
      "Dr. Megor Ikuenobe is an international development and systems-strengthening specialist with a cross-sector portfolio spanning health, education, early childhood development (ECD), gender, and social protection. Trained as a medical doctor, she brings a rare blend of technical depth, analytical rigour, and contextual understanding to complex human capital and institutional challenges.",
      "She has advised governments, public sector institutions, and development partners in Africa, supporting strategy design, program implementation, organisational development, and capability building.",
      "As Co-Founder of ACE Analytix, Dr. Megor co-leads the firm's strategy, technical direction, and people-centred consulting culture. Her work is grounded in a commitment to building systems that deliver sustainable results, strengthening institutions, improving service delivery, and enabling outcomes that transform the lives of women, children, and communities.",
    ],
    credentials: [],
    photo: "/team/megor.webp",
    linkedin: "https://www.linkedin.com/in/drmegor/",
  },
  {
    id: "martin-kalima",
    name: "Martin Kalima",
    role: "Director of Operations and Delivery",
    summary:
      "Development leader with 14+ years across public sector reform, government engagement, innovation, and communications.",
    bio: [
      "Martin Kalima is a results-driven development leader with over fourteen years of experience providing strategic leadership across public sector reform, international development, and not-for-profit organizations. He has built a distinguished career leading complex, high-impact initiatives at the intersection of government engagement, innovation, communications, and social change.",
      "He previously served as Senior Manager, External Relations at GiveDirectly, where he led national government and stakeholder engagement in Malawi. In this role, he provided strategic leadership on external outreach, political and technical engagement, and donor-facing communications—strengthening awareness of cash transfer programs and securing high-level political buy-in. He was instrumental in shaping stakeholder strategies, managing external risk, leading media engagement that generated both local and international coverage, and strengthening internal knowledge management and storytelling capacity.",
      "He has also held a senior leadership role at the Tony Blair Institute for Global Change, where he managed government relations and led the end-to-end delivery of transformative public sector technology initiatives. He advised senior government leaders on innovation for service delivery, drove visibility of reform outcomes through strategic communications, and managed complex work plans and budgets. His leadership included designing and delivering Malawi's first Artificial Intelligence for Leaders' Summit, leading national digital skills and leadership programs for civil servants, and supporting policy reforms such as the migration to electronic payments in government institutions.",
      "Earlier in his career, Martin provided country-level leadership as Senior Campaigns Manager at Development Media International, overseeing national strategy, budgets, and teams as part of a global consortium delivering large-scale public health campaigns. He previously held leadership roles at Population Services International and Human Network International, where he led the design and implementation of mass media, youth engagement, and technology-enabled behavior change programs reaching millions of people nationwide.",
      "Across his career, Martin's leadership is guided by a strong commitment to integrity, efficiency, and innovation—values that shape how he builds trust, delivers results, and drives sustainable impact.",
    ],
    credentials: [],
    photo: "/team/martin-kalima.webp",
    linkedin: "https://www.linkedin.com/in/martin-kalima-45150b9/",
  },
  {
    id: "olamide-dauda",
    name: "Olamide Dauda",
    role: "Lead Consultant",
    summary:
      "A practitioner at the intersection of policy, strategy, and social innovation, with 15+ years designing and managing social development programs.",
    bio: [
      "Olamide Dauda is a practitioner at the intersection of policy, strategy, and social innovation with extensive experience in public policy, strategy formulation, and implementation. She is a seasoned policy expert with over 15 years of experience designing and managing social development programs using evidence-based approaches at community, national, and international levels.",
      "She played a key role in supporting the take-off of the newly created Federal Ministry of Art, Culture and Creative Economy, leading the formulation of its policy and strategic framework. Olamide has also served as a Policy Consultant with the UN World Food Programme and as the pioneer Director of Policy and Advocacy at the Nigerian Center for Climate Renewal.",
      "Olamide is the Lead Consultant of ACE Analytix and Co-Founder of Impact Pointe Consultancy Limited, a boutique social-impact firm focused on creating mutual benefits for public, private, and third sector actors. Impact Pointe specializes in scaling social impact solutions by maximizing access to financial and technical assistance for both clients and beneficiaries. She is also Co-Founder and Trustee of Aveaba Charity Foundation, a non-profit dedicated to improving the quality of education in underprivileged communities in Nigeria by providing essential school supplies and critical support.",
      "Previously, Olamide served as Technical Assistant to the Honourable Minister of Humanitarian Affairs, Disaster Management and Social Development, providing strategic technical expertise for national programs promoting social inclusion, disaster risk resilience, and strategic partnerships to combat food insecurity and drive national development. Her technical competencies span economic growth, gender programs, maternal and child health, WASH, education, inclusive growth, humanitarian aid, impact assessment, social and political inclusion, and governance, law, and justice. She is highly skilled in leading cross-functional teams and managing complex multi-stakeholder initiatives.",
    ],
    credentials: [],
    photo: "/team/olamide-dauda.webp",
    linkedin: "https://www.linkedin.com/in/olamide-dauda-7990855/",
  },
  {
    id: "michelle-makhumula",
    name: "Michelle Makhumula",
    role: "Senior Analyst, Strategic Communication & Delivery",
    summary:
      "Governance and public policy professional driving strategic communications and delivery across government and development contexts.",
    bio: [
      "Michelle is a governance and public policy professional supporting Malawi's Open Government Partnership through strategic coordination, policy analysis, and high-level stakeholder engagement. As Senior Analyst responsible for Strategic Communications and Delivery at ACE Analytix, she brings experience across government, international advisory, and development contexts, having worked with the Tony Blair Institute for Global Change, the Ministry of Finance, and in financial and economic analysis roles in Malawi. Her work spans drafting National Action Plans, facilitating inclusive multi-stakeholder reform processes, and producing executive-level briefs and knowledge products that inform policy and delivery.",
      "With a strong foundation in economics and quantitative analysis, she combines technical rigor with practical delivery experience, particularly in transparency, digital governance, and public financial management reforms. Her background includes economic research, financial reporting, and policy evaluation, enabling her to translate data into actionable insights for decision-makers. Michelle is committed to strengthening accountable, citizen-centered governance systems and contributing to institutional reform efforts across Malawi and the region.",
    ],
    credentials: [],
    photo: "/team/michelle-makhumula.webp",
    linkedin: "https://www.linkedin.com/in/michelle-makhumula-53551523a/",
  },
  {
    id: "ikenna-ekeh",
    name: "Ikenna Ekeh",
    role: "Programme Associate, Growth & Partnerships",
    summary:
      "Operations and logistics professional optimizing workflows, supply chains, and program delivery across technology, healthcare, and non-profit sectors.",
    bio: [
      "Ikenna Ekeh is a versatile operations and logistics professional with over 5 years of experience across technology, healthcare, and non-profit sectors. He specializes in optimizing workflows, managing supply chains, coordinating programs, and leading cross-functional teams, leveraging data and technology to drive operational efficiency. Ikenna holds a Bachelor of Pharmacy from Rajiv Gandhi University of Health Science, India, and a BSc in Physics from the University of Abuja, Nigeria. He is certified in Supply Chain Management (American Institute of Supply and Transport, 2024), Procurement & Logistics for Humanitarian Operations (Mercy Corps, 2022), and is registered with the Pharmacists Council of Nigeria (2021).",
      "His expertise spans strategic planning, stakeholder engagement, performance improvement, and program coordination, making him a results-driven professional committed to excellence in every project he undertakes. He has a proven track record in operational excellence and program leadership, including designing and implementing innovative pharmacy processes, optimizing workflows, managing inventory, and improving patient satisfaction. He is experienced in planning and executing high-impact programs, leading conferences, mentoring teams, coordinating outreach initiatives, and enhancing program quality through strategic feedback systems.",
    ],
    credentials: [],
    photo: "/team/ikenna-ekeh.webp",
    linkedin:
      "https://www.linkedin.com/in/ikenna-e-662278141?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: "oluchi-okechukwu",
    name: "Oluchi Okechukwu",
    role: "Programme Associate, People & Operations",
    summary:
      "People and operations professional driving delivery systems, workforce processes, and organisational efficiency.",
    bio: [
      "Oluchi Okechukwu is a People and Operations professional with experience spanning project delivery, programme coordination, and organisational efficiency within consulting and policy-focused environments. At ACE Analytix, she drives operational systems, workforce processes, and delivery execution, enabling high-performance teams and seamless project implementation. She previously worked with the Nigerian Economic Summit Group (NESG), where she led editorial strategy and coordinated the delivery of large-scale national policy engagements.",
    ],
    credentials: [],
    photo: "/team/oluchi-okechukwu.webp",
    linkedin:
      "https://www.linkedin.com/in/oluchiokechukwu?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    id: "wisdom-onoriode",
    name: "Wisdom Onoriode",
    role: "Programme Associate, Brand & Digital Strategy",
    summary:
      "Brand and technology strategist building scalable digital platforms and growth-focused technology architecture.",
    bio: [
      "Wisdom Onoriode is a brand and technology strategist at ACE Analytix, specializing in building scalable digital platforms and enhancing user experiences. He has strong expertise in digital branding, web design, learning management systems, and growth-focused technology architecture, supporting teams from concept to developer-ready execution. With experience across startups, educational platforms, and enterprise initiatives in Nigeria, he is known for practical problem-solving and turning strategy into actionable solutions.",
    ],
    credentials: [],
    photo: "/team/wisdom-onoriode.webp",
    linkedin: "https://www.linkedin.com/in/wisdom-onoriode/",
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

export type InsightCategoryId = "articles" | "briefs" | "frameworks" | "perspectives";

export type Insight = {
  slug: string;
  category: InsightCategoryId;
  title: string;
  dek: string; // short standfirst shown on cards + detail
  author: string;
  date: string; // ISO
  readingTime: string;
  cover?: string; // hero/cover image (place in /public/insights or reuse /images)
  body: string[]; // one entry per paragraph
  status: "published" | "draft";
};

export const publication = {
  name: "The Position",
  tagline: "ACE Analytix's intelligence on African governance, reform, and delivery.",
  cadence: "Monthly",
};

// NOTE (content): the entries below are SAMPLE pieces that populate the four
// Insights sections and their detail pages. Replace the title/dek/body/cover
// with real published content. Add or remove freely — pages generate from this.
export const insights: Insight[] = [
  // ---------- ARTICLES ----------
  {
    slug: "delivery-is-the-real-test",
    category: "articles",
    title: "Delivery is the real test of governance reform",
    dek: "Strategy is abundant and cheap. Delivery is rare and expensive — and it is the only thing citizens ever actually feel.",
    author: "Daniel Ikuenobe",
    date: "2026-05-20",
    readingTime: "7 min read",
    cover: "/images/working-session.jpg",
    body: [
      "Across the continent, the gap is rarely between a country and a good plan. The gap is between the plan and the result. Reform agendas are written, launched, and celebrated — and then quietly stall in the distance between intent and execution.",
      "That distance is where value hides. Closing it is unglamorous work: aligning the people who must act, sequencing the decisions that unlock the next ones, and holding the line on milestones long after the launch event is forgotten.",
      "We argue that delivery should be designed in from the first day of any reform — not bolted on at the end. The institutions that succeed are the ones that treat execution as a discipline, not an afterthought.",
    ],
    status: "published",
  },
  {
    slug: "closing-the-execution-gap",
    category: "articles",
    title: "Closing the execution gap in African institutions",
    dek: "Why so many well-designed programmes never reach the people they were built for — and what actually closes the gap.",
    author: "Martin Kalima",
    date: "2026-04-28",
    readingTime: "6 min read",
    cover: "/images/advisory.webp",
    body: [
      "Most programmes do not fail at the idea stage. They fail in the long, quiet middle — where coordination breaks down, accountability blurs, and momentum leaks away one missed deadline at a time.",
      "The fix is rarely a new strategy. It is a delivery rhythm: clear owners, short feedback loops, and a small team whose only job is to keep the work moving and surface problems early.",
      "When institutions build that muscle, the same strategy that was stalling suddenly ships. The difference is not ambition — it is the discipline of follow-through.",
    ],
    status: "published",
  },

  // ---------- BRIEFS ----------
  {
    slug: "ogp-malawi-2023-2025",
    category: "briefs",
    title: "Open Government in Malawi: where the 2023–2025 cycle stands",
    dek: "A short read on the commitments, the progress, and what the next action plan needs to prioritise.",
    author: "Michelle Makhumula",
    date: "2026-05-10",
    readingTime: "4 min read",
    body: [
      "Malawi's current Open Government Partnership cycle has moved transparency commitments from paper into early implementation, with multi-stakeholder coordination at its core.",
      "The progress is real but uneven. The commitments with clear owners and delivery routines are advancing; those without are drifting — a familiar pattern, and a fixable one.",
      "The next action plan should concentrate on fewer, deeper commitments with named accountability and public milestones, rather than a longer list that dilutes attention.",
    ],
    status: "published",
  },
  {
    slug: "digital-payments-public-sector",
    category: "briefs",
    title: "Digital payments in the public sector: a short brief",
    dek: "Moving government institutions onto electronic payments is less about technology and more about trust and process.",
    author: "Martin Kalima",
    date: "2026-03-30",
    readingTime: "3 min read",
    body: [
      "The migration to electronic payments in government is often framed as a technology project. In practice, the hard part is process redesign and the trust of the people who must use it.",
      "Where adoption succeeds, it is because the rollout paired the system with clear guidance, training, and a feedback channel for when things go wrong.",
      "The lesson generalises: digital reform lands when it is delivered as a change-management effort, not a software install.",
    ],
    status: "published",
  },

  // ---------- FRAMEWORKS ----------
  {
    slug: "design-develop-deliver",
    category: "frameworks",
    title: "The Design / Develop / Deliver model, explained",
    dek: "The three-stage discipline behind our work — and why most firms stop at the stage that matters most.",
    author: "ACE Analytix",
    date: "2026-02-15",
    readingTime: "5 min read",
    cover: "/images/partners.webp",
    body: [
      "Design clarifies priorities, defines the strategic choices that matter, and shapes policy that will hold under pressure. It is where the problem is framed honestly.",
      "Develop builds the structures, systems, capabilities, and processes a team needs to carry the strategy forward. It turns intent into something operable.",
      "Deliver is where most firms stop and we do not. We run a war-room execution model — sitting with teams and driving delivery milestone by milestone until strategy becomes result.",
    ],
    status: "published",
  },
  {
    slug: "war-room-execution",
    category: "frameworks",
    title: "War-room execution: how we run delivery",
    dek: "A practical look at the delivery rhythm we embed with client teams to keep complex programmes moving.",
    author: "Daniel Ikuenobe",
    date: "2026-01-22",
    readingTime: "5 min read",
    body: [
      "A war-room is not a meeting. It is a standing rhythm: a small group, a visible set of milestones, and a cadence that surfaces blockers while they are still small.",
      "Every milestone has an owner. Every blocker has a next action and a date. Progress is tracked in the open, so problems cannot hide until they are expensive.",
      "The point is not control for its own sake — it is momentum. The rhythm keeps the work moving on the days when nothing is on fire, which is most days.",
    ],
    status: "published",
  },

  // ---------- PERSPECTIVES ----------
  {
    slug: "hardest-problems-biggest-opportunities",
    category: "perspectives",
    title: "Africa's hardest problems are its biggest opportunities",
    dek: "Why we deliberately take on the problems where the gap between a good strategy and a delivered result is widest.",
    author: "Daniel Ikuenobe",
    date: "2026-05-01",
    readingTime: "4 min read",
    body: [
      "Africa's most difficult challenges are also some of its greatest opportunities for transformation. That is not a slogan for us — it is the basis on which we choose our work.",
      "The problems where complexity is high, alignment is difficult, and delivery is uncertain are precisely the ones where the value is largest and the field is least crowded.",
      "We would rather close one of those gaps than add another report to an easy problem. That conviction shapes who we work with and how we measure ourselves.",
    ],
    status: "published",
  },
  {
    slug: "why-we-stay-through-delivery",
    category: "perspectives",
    title: "Why we stay through delivery",
    dek: "The case for an advisory firm that does not hand over a deck and leave.",
    author: "Dr. Megor Ikuenobe",
    date: "2026-04-05",
    readingTime: "4 min read",
    body: [
      "Advice that ends at the recommendation puts all the risk on the client and none on the adviser. We think that model is part of why so much good strategy never lands.",
      "Staying through delivery changes the incentives. When you are accountable for the result, you design differently — for what can actually be implemented, by real teams, under real constraints.",
      "It is harder, slower, and more demanding. It is also the only honest way to be judged by outcomes rather than intentions.",
    ],
    status: "published",
  },
];
