import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";
import Button from "@/components/ui/Button";
import { site } from "@/lib/content";
import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 text-ondark sm:py-36">
      <div aria-hidden className="absolute inset-0 grid-lines-dark opacity-50" />
      <div
        aria-hidden
        className="brand-glow absolute bottom-0 left-1/2 h-[600px] w-[900px] -translate-x-1/2 translate-y-1/3 blur-3xl"
      />
      <Container className="relative z-10 text-center">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-400">
            Let’s start the conversation
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="display mx-auto mt-6 max-w-3xl text-balance text-[clamp(2.2rem,5.5vw,4rem)] text-ondark">
            Tell us what you’re working on.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ondark-muted">
            If you’re carrying a high-stakes priority where delivery is what matters, we
            should talk. We’ll tell you honestly whether we’re the right firm for it.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button href={site.primaryCta.href} variant="onDark" size="lg">
              {site.primaryCta.label}
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              href={`mailto:${site.email}`}
              variant="ghost"
              size="lg"
              className="text-ondark hover:bg-white/10"
            >
              {site.email}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
