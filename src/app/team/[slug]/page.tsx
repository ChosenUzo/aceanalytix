import ContactCTA from "@/components/home/ContactCTA";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Reveal from "@/components/motion/Reveal";
import { site, team } from "@/lib/content";
import { Award, ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.3c0-1.26-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9V9Z" />
    </svg>
  );
}

export function generateStaticParams() {
  return team.map((m) => ({ slug: m.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = team.find((m) => m.id === slug);
  if (!member) return { title: "Team" };
  return {
    title: `${member.name} — ${member.role}`,
    description: member.summary,
    openGraph: {
      title: `${member.name} · ${site.name}`,
      description: member.summary,
      images: member.photo ? [{ url: member.photo }] : undefined,
    },
  };
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const idx = team.findIndex((m) => m.id === slug);
  if (idx === -1) notFound();

  const member = team[idx];
  const prev = team[(idx - 1 + team.length) % team.length];
  const next = team[(idx + 1) % team.length];
  const linkedin = member.linkedin || site.social.linkedin;

  return (
    <>
      {/* Dark hero — portrait + identity */}
      <section className="relative overflow-hidden bg-ink pb-16 pt-32 text-ondark sm:pb-20 sm:pt-40">
        <div aria-hidden className="absolute inset-0 grid-lines-dark opacity-40" />
        <div
          aria-hidden
          className="brand-glow absolute -top-28 right-0 h-[460px] w-[520px] blur-3xl"
        />
        <Container className="relative z-10">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-sm font-medium text-ondark-muted transition-colors hover:text-ondark"
          >
            <ArrowLeft size={16} /> All team
          </Link>

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal direction="right">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl bg-ink-2 shadow-float lg:mx-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.photo}
                  alt={member.name}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              </div>
            </Reveal>

            <div>
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-400">
                  ACE Analytix · Team
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="display mt-4 text-[clamp(2.4rem,5vw,3.8rem)] text-ondark">
                  {member.name}
                </h1>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-2 text-lg font-medium text-brand-400">{member.role}</p>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ondark-muted">
                  {member.summary}
                </p>
              </Reveal>

              {member.credentials.length > 0 && (
                <Reveal delay={0.16}>
                  <ul className="mt-7 flex flex-wrap gap-2.5">
                    {member.credentials.map((c) => (
                      <li
                        key={c}
                        className="inline-flex items-center gap-1.5 rounded-full border border-line-ondark px-3.5 py-1.5 text-sm font-medium text-ondark/90"
                      >
                        <Award size={13} className="text-brand-400" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )}

              <Reveal delay={0.2}>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-ondark px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-white"
                >
                  <LinkedInIcon size={17} /> Connect on LinkedIn
                </a>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Full biography */}
      <Section tone="paper">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                Biography
              </p>
              <h2 className="display mt-4 text-3xl text-text">
                About {member.name.split(" ")[0]}
              </h2>
            </div>
            <div className="max-w-2xl space-y-6 text-pretty text-lg leading-relaxed text-muted">
              {member.bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Prev / next */}
      <Section tone="paper-2" className="py-16">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href={`/team/${prev.id}`}
              className="group flex items-center gap-4 rounded-2xl border border-line bg-paper p-5 transition-all hover:-translate-y-0.5 hover:shadow-card"
            >
              <ArrowLeft size={18} className="shrink-0 text-brand" />
              <span>
                <span className="block text-xs uppercase tracking-[0.14em] text-muted">
                  Previous
                </span>
                <span className="font-semibold text-text">{prev.name}</span>
              </span>
            </Link>
            <Link
              href={`/team/${next.id}`}
              className="group flex items-center justify-end gap-4 rounded-2xl border border-line bg-paper p-5 text-right transition-all hover:-translate-y-0.5 hover:shadow-card"
            >
              <span>
                <span className="block text-xs uppercase tracking-[0.14em] text-muted">
                  Next
                </span>
                <span className="font-semibold text-text">{next.name}</span>
              </span>
              <ArrowRight size={18} className="shrink-0 text-brand" />
            </Link>
          </div>
        </Container>
      </Section>

      <ContactCTA />
    </>
  );
}
