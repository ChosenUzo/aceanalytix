import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import { insightCategories, publication } from "@/lib/content";
import { ArrowUpRight } from "lucide-react";

export default function InsightsTeaser() {
  return (
    <Section tone="paper">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Insights</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display mt-6 text-[clamp(2rem,4vw,3rem)] text-text">
                {publication.name}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-muted">
                {publication.tagline} {publication.cadence} — one question, one argument,
                signed.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <Button href="/insights" variant="outline">
              Read Insights
              <ArrowUpRight size={16} />
            </Button>
          </Reveal>
        </div>

        <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {insightCategories.map((c) => (
            <StaggerItem key={c.id}>
              <a
                href={`/insights#${c.id}`}
                className="group flex h-full flex-col rounded-2xl border border-line bg-paper-2 p-6 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-card"
              >
                <h3 className="text-lg font-semibold tracking-tight text-text">{c.title}</h3>
                <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted">
                  {c.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand">
                  Explore
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </a>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
