import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Reveal from "@/components/motion/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import { hero } from "@/lib/content";

export default function ClientFilter() {
  return (
    <Section tone="paper" className="py-24 sm:py-28">
      <Container>
        <Reveal>
          <Eyebrow>Who we work with</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          {/* Audit fix: a filter, not an invitation to everyone. */}
          <p className="mt-7 max-w-4xl text-balance text-2xl font-medium leading-snug tracking-tight text-text sm:text-3xl lg:text-[2.4rem]">
            {hero.clientDefinition}
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
            We are deliberately selective. The firms and institutions we serve are not
            looking for another slide deck — they need the gap between strategy and result
            closed, and the discipline to keep it closed.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
