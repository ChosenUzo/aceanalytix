import ContactCTA from "@/components/home/ContactCTA";
import Container from "@/components/layout/Container";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import Avatar from "@/components/ui/Avatar";
import { team } from "@/lib/content";
import { Award } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team",
  description: "The people behind ACE Analytix — principal-led, delivery-focused.",
};

export default function TeamPage() {
  const [principal, ...rest] = team;

  return (
    <>
      <PageHeader
        eyebrow="Team"
        title="Principal-led, delivery-focused."
        intro="A firm like ours is its people. The work is led by senior practitioners who stay on the ground through delivery — not handed down to a junior bench."
      />

      <Section tone="paper">
        <Container>
          {/* Principal — full credibility treatment (audit fix). */}
          <Reveal>
            <article className="grid gap-10 rounded-3xl border border-line bg-paper-2 p-7 sm:p-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
              <div className="mx-auto w-full max-w-xs">
                <Avatar name={principal.name} src={principal.photo} />
              </div>
              <div>
                <h2 className="display text-4xl text-text">{principal.name}</h2>
                <p className="mt-1 text-lg font-medium text-brand">{principal.role}</p>
                <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted">
                  {principal.bio}
                </p>
                <div className="mt-7">
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    <Award size={14} className="text-brand" />
                    Selected mandates
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2.5">
                    {principal.credentials.map((c) => (
                      <li
                        key={c}
                        className="rounded-full border border-line bg-paper px-3.5 py-1.5 text-sm font-medium text-text"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>

          {/* Wider team grid. Add members to `team` in src/lib/content.ts and they
              render here automatically (with photos from /public/team). */}
          {rest.length > 0 && (
            <StaggerGroup className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((m) => (
                <StaggerItem key={m.id}>
                  <article className="flex h-full flex-col rounded-2xl border border-line bg-paper-2 p-5">
                    <div className="mb-5">
                      <Avatar name={m.name} src={m.photo} />
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight text-text">{m.name}</h3>
                    <p className="mt-0.5 text-sm font-medium text-brand">{m.role}</p>
                    {m.bio && (
                      <p className="mt-3 text-pretty text-sm leading-relaxed text-muted">
                        {m.bio}
                      </p>
                    )}
                  </article>
                </StaggerItem>
              ))}
            </StaggerGroup>
          )}
        </Container>
      </Section>

      <ContactCTA />
    </>
  );
}
