import ContactCTA from "@/components/home/ContactCTA";
import Framework from "@/components/home/Framework";
import Container from "@/components/layout/Container";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Reveal from "@/components/motion/Reveal";
import { services } from "@/lib/content";
import { Check } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Policy & governance reform, institutional transformation, programme design & delivery, and leadership & execution capacity.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="What we do, and how far we stay."
        intro="Four areas of work, one discipline running through all of them: design the right thing, build what carries it, and deliver until it holds."
      />

      <Section tone="paper">
        <Container>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={(i % 2) * 0.08}>
                <article
                  id={s.id}
                  className="flex h-full scroll-mt-28 flex-col bg-paper p-8 sm:p-10"
                >
                  <span className="font-mono text-sm text-brand">0{i + 1}</span>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-text">
                    {s.title}
                  </h2>
                  <p className="mt-4 text-pretty text-lg leading-relaxed text-muted">
                    {s.summary}
                  </p>
                  <ul className="mt-7 space-y-3">
                    {s.outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-3 text-text">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                          <Check size={12} strokeWidth={3} />
                        </span>
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Framework />
      <ContactCTA />
    </>
  );
}
