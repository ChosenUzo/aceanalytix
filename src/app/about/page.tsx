import Belief from "@/components/home/Belief";
import ContactCTA from "@/components/home/ContactCTA";
import Values from "@/components/home/Values";
import Container from "@/components/layout/Container";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Reveal from "@/components/motion/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import Figure from "@/components/ui/Figure";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "ACE Analytix is a boutique strategy and execution firm working at the intersection of government, institutions, and delivery.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A firm built around the stage most consultants skip."
        intro="ACE Analytix exists because strategy is everywhere and delivery is rare. We work where complexity is high, alignment is hard, and the result is what gets remembered."
      />

      <Section tone="paper">
        <Container>
          <Reveal>
            <Figure
              alt="ACE Analytix at work"
              label="Firm at work"
              ratio="16/7"
              className="mb-16"
              // src="/images/about-banner.jpg"
            />
          </Reveal>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <Eyebrow>Who we are</Eyebrow>
            </Reveal>
            <div className="space-y-6 text-pretty text-lg leading-relaxed text-muted">
              <Reveal delay={0.05}>
                <p>
                  We are a selective advisory and execution firm. Our work spans policy and
                  governance reform, institutional transformation, programme design and
                  delivery, and the leadership capacity that holds it all together.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  What sets us apart is not another framework. It is that we stay through
                  delivery — running a war-room execution model alongside your teams, milestone
                  by milestone, until the strategy on paper becomes a result in the world.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                {/* Audit fix: replaces the "we have done it all!" template CTA that
                    contradicted the firm's selective positioning. */}
                <p>
                  We do not take every engagement. We take the hard ones — the high-stakes
                  priorities where the gap between intent and outcome is widest. That is where
                  the value hides, and closing it is the whole of the work.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <Belief />
      <Values />
      <ContactCTA />
    </>
  );
}
