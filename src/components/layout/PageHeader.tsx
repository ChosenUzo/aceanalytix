import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";

export default function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink pb-16 pt-36 text-ondark sm:pb-20 sm:pt-44">
      <div aria-hidden className="absolute inset-0 grid-lines-dark opacity-40" />
      <div
        aria-hidden
        className="brand-glow absolute -top-32 left-1/2 h-[480px] w-[680px] -translate-x-1/2 blur-3xl"
      />
      <Container className="relative z-10">
        <Reveal>
          <Eyebrow tone="light">{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="display mt-6 max-w-4xl text-balance text-[clamp(2.4rem,5.5vw,4.2rem)] text-ondark">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ondark-muted">
              {intro}
            </p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
