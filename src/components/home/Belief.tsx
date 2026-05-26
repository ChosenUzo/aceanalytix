import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Reveal from "@/components/motion/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import { belief } from "@/lib/content";

export default function Belief() {
  return (
    <Section tone="paper-2" className="relative overflow-hidden">
      <div
        aria-hidden
        className="brand-glow absolute -right-40 top-1/2 h-[520px] w-[520px] -translate-y-1/2 blur-3xl"
      />
      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <Eyebrow className="justify-center">{belief.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <blockquote className="display mt-8 text-balance text-[clamp(2rem,5vw,3.6rem)] leading-[1.08] text-text">
              “{belief.statement}”
            </blockquote>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
              {belief.body}
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
