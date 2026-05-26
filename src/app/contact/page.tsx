import ContactForm from "@/components/contact/ContactForm";
import Container from "@/components/layout/Container";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Reveal from "@/components/motion/Reveal";
import { site } from "@/lib/content";
import { Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start the conversation with ACE Analytix.",
};

export default function ContactPage() {
  const details = [
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phoneHref}` },
    { icon: MapPin, label: "Office", value: site.address },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell us what you’re working on."
        intro="If you’re carrying a high-stakes priority where delivery is what matters, we should talk. We’ll be honest about whether we’re the right firm for it."
      />

      <Section tone="paper">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <Reveal>
              <ContactForm />
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-8 lg:pl-8">
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
                    Reach us directly
                  </h2>
                  <ul className="mt-5 space-y-5">
                    {details.map((d) => (
                      <li key={d.label} className="flex items-start gap-4">
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                          <d.icon size={18} />
                        </span>
                        <div>
                          <p className="text-xs uppercase tracking-[0.14em] text-muted">
                            {d.label}
                          </p>
                          {d.href ? (
                            <a href={d.href} className="text-text transition-colors hover:text-brand">
                              {d.value}
                            </a>
                          ) : (
                            <p className="text-text">{d.value}</p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-line bg-paper-2 p-6">
                  <p className="display text-2xl text-text">We reply personally.</p>
                  <p className="mt-2 text-pretty text-muted">
                    Every enquiry is read by the team — not a queue. Expect a reply within two
                    business days.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
