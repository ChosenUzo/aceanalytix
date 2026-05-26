import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Reveal from "@/components/motion/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import { serviceOfferings } from "@/lib/content";
import {
  Briefcase,
  HeartPulse,
  Landmark,
  MonitorSmartphone,
  Network,
  ScrollText,
  Sprout,
  Zap,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  "private-sector-development": Briefcase,
  "agriculture-transformation": Sprout,
  "technology-policy-development": ScrollText,
  "healthcare-systems": HeartPulse,
  "sustainable-energy-markets": Zap,
  "tech-ecosystems": Network,
  "digital-transformation-government": MonitorSmartphone,
  "civil-service-reforms": Landmark,
};

export default function ServiceOfferings() {
  return (
    <Section tone="paper">
      <Container>
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>What we do</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display mt-6 text-[clamp(2rem,4.5vw,3.2rem)] text-text">
              Eight areas where we go deep.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted">
              From the private sector to the heart of government, our services span the
              systems that move economies forward — each delivered with the same discipline.
            </p>
          </Reveal>
        </div>

        {/* Editorial index — numbered rows with hover highlight */}
        <div className="mt-14 border-t border-line">
          {serviceOfferings.map((s, i) => {
            const Icon = icons[s.id] ?? Briefcase;
            return (
              <Reveal key={s.id}>
                <div
                  id={s.id}
                  className="group relative grid scroll-mt-28 grid-cols-1 gap-x-8 gap-y-4 border-b border-line py-8 transition-colors duration-300 hover:bg-paper-2 lg:grid-cols-[96px_minmax(220px,1fr)_1.5fr] lg:items-center lg:py-10"
                >
                  {/* red accent bar grows from top on hover */}
                  <span
                    aria-hidden
                    className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-brand transition-transform duration-300 group-hover:scale-y-100"
                  />

                  {/* index + icon */}
                  <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-3 lg:pl-5">
                    <span className="display text-3xl text-muted/40 transition-colors duration-300 group-hover:text-brand">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                      <Icon size={20} strokeWidth={1.75} />
                    </span>
                  </div>

                  {/* title */}
                  <h3 className="text-xl font-semibold leading-snug tracking-tight text-text lg:text-2xl">
                    {s.title}
                  </h3>

                  {/* description */}
                  <p className="max-w-2xl text-pretty leading-relaxed text-muted">
                    {s.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
