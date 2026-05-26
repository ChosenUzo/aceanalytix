import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import Eyebrow from "@/components/ui/Eyebrow";
import { values } from "@/lib/content";

export default function Values() {
  return (
    <Section tone="paper">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <Eyebrow>What holds us to standard</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display mt-6 text-[clamp(2rem,4vw,3rem)] text-text">
                Five values that survive contact with the work.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-muted">
                Not posters on a wall. These are the standards we are held to when the
                engagement gets hard — which, with the problems we take on, it always does.
              </p>
            </Reveal>
          </div>

          <StaggerGroup className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {values.map((v, i) => (
              <StaggerItem
                key={v.title}
                className="group bg-paper p-7 transition-colors hover:bg-paper-2"
              >
                <span className="font-mono text-xs text-brand">0{i + 1}</span>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-text">
                  {v.title}
                </h3>
                <p className="mt-2.5 text-pretty text-[15px] leading-relaxed text-muted">
                  {v.body}
                </p>
              </StaggerItem>
            ))}
            <StaggerItem className="hidden bg-brand p-7 text-white sm:block">
              <p className="display text-2xl leading-snug">
                The standard is simple: work that still functions after we’ve gone.
              </p>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </Container>
    </Section>
  );
}
