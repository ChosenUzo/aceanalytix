import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import Eyebrow from "@/components/ui/Eyebrow";
import { services } from "@/lib/content";
import { Building2, Landmark, Target, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  "policy-governance": Landmark,
  "institutional-transformation": Building2,
  "programme-delivery": Workflow,
  "leadership-execution": Target,
};

export default function OurWork() {
  return (
    <Section id="our-work" tone="paper">
      <Container>
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>Our Work</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display mt-6 text-[clamp(2rem,4.5vw,3.2rem)] text-text">
              Where we do our most important work.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted">
              Our work spans national priorities, institutional reform, and enterprise
              transformation — particularly where execution, coordination, and long-term
              systems change are essential.
            </p>
          </Reveal>
        </div>

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = icons[s.id] ?? Landmark;
            return (
              <StaggerItem key={s.id} className="h-full">
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper-2 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-card">
                  {/* red top accent grows on hover */}
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100"
                  />
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                      <Icon size={22} strokeWidth={1.75} />
                    </span>
                    <span className="font-mono text-sm text-muted/70">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-semibold leading-snug tracking-tight text-text">
                    {s.title}
                  </h3>
                  <p className="mt-3 flex-1 text-pretty text-[15px] leading-relaxed text-muted">
                    {s.summary}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
