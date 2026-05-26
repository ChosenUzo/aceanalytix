import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Reveal from "@/components/motion/Reveal";
import Avatar from "@/components/ui/Avatar";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import { team } from "@/lib/content";
import { ArrowRight } from "lucide-react";

export default function Leadership() {
  const principal = team[0];

  return (
    <Section tone="paper-2">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal direction="right">
            <div className="relative mx-auto max-w-sm">
              <Avatar name={principal.name} src={principal.photo} />
              <div className="absolute -bottom-5 -right-5 hidden rounded-xl border border-line bg-paper px-5 py-4 shadow-card sm:block">
                <p className="display text-2xl text-brand">Principal-led</p>
                <p className="text-xs text-muted">Senior attention, start to finish</p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <Eyebrow>Leadership</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display mt-6 text-[clamp(2rem,4vw,3rem)] text-text">
                {principal.name}
              </h2>
            </Reveal>
            {/* Audit fix: correct title. */}
            <Reveal delay={0.08}>
              <p className="mt-1 text-lg font-medium text-brand">{principal.role}</p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted">
                {principal.bio[0]}
              </p>
            </Reveal>

            {/* Audit fix: named mandates / credentials, not just a name. */}
            <Reveal delay={0.16}>
              <ul className="mt-7 flex flex-wrap gap-2.5">
                {principal.credentials.map((c) => (
                  <li
                    key={c}
                    className="rounded-full border border-line bg-paper px-3.5 py-1.5 text-sm font-medium text-text"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-9">
                <Button href="/team" variant="outline">
                  Meet the full team
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
