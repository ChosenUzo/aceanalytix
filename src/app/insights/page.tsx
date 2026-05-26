import ContactCTA from "@/components/home/ContactCTA";
import Container from "@/components/layout/Container";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Reveal from "@/components/motion/Reveal";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import { insightCategories, insights, publication, site } from "@/lib/content";
import { ArrowUpRight, Mail, PenLine } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights",
  description: `${publication.name} — ${publication.tagline}`,
};

export default function InsightsPage() {
  const published = insights.filter((i) => i.status === "published");
  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title={publication.name}
        intro={`${publication.tagline} ${publication.cadence} — one question, one argument, signed by name.`}
      />

      <Section tone="paper">
        <Container>
          {published.length > 0 ? (
            <div className="grid gap-6 lg:grid-cols-2">
              {published.map((item, i) => (
                <Reveal key={item.slug} delay={(i % 2) * 0.08}>
                  <Link
                    href={`/insights/${item.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-line bg-paper-2 p-8 transition-all hover:-translate-y-1 hover:shadow-card"
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                      {item.category}
                    </span>
                    <h2 className="display mt-3 text-2xl text-text">{item.title}</h2>
                    <p className="mt-3 flex-1 text-pretty leading-relaxed text-muted">
                      {item.dek}
                    </p>
                    <div className="mt-6 flex items-center justify-between text-sm text-muted">
                      <span>{item.author}</span>
                      <span>
                        {formatDate(item.date)} · {item.readingTime}
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          ) : (
            // Audit fix: an empty Insights section is a liability. Rather than
            // dead category links, present the first edition as imminent with a
            // single clear action — turning absence into anticipation.
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border border-line bg-ink p-8 text-ondark sm:p-14">
                <div aria-hidden className="absolute inset-0 grid-lines-dark opacity-40" />
                <div className="relative z-10 max-w-2xl">
                  <span className="inline-flex items-center gap-2 rounded-full border border-line-ondark bg-white/5 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-brand-400">
                    <PenLine size={13} /> First edition in progress
                  </span>
                  <h2 className="display mt-6 text-[clamp(1.8rem,4vw,3rem)] text-ondark">
                    {publication.name}, No. 1 — landing soon.
                  </h2>
                  <p className="mt-5 text-pretty text-lg leading-relaxed text-ondark-muted">
                    A boutique firm that argues a clear position monthly is in a different
                    category from one that only promises thinking. The first edition is being
                    written now. Be the first to read it.
                  </p>
                  <div className="mt-9 flex flex-wrap gap-3">
                    <Button
                      href={`mailto:${site.email}?subject=Notify%20me%20—%20The%20Position`}
                      variant="onDark"
                      size="lg"
                    >
                      <Mail size={16} /> Get the first edition
                    </Button>
                    <Button
                      href={site.social.linkedin}
                      variant="ghost"
                      size="lg"
                      className="text-ondark hover:bg-white/10"
                    >
                      Follow on LinkedIn
                      <ArrowUpRight size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          )}

          {/* What The Position will cover */}
          <div className="mt-16">
            <Reveal>
              <Eyebrow>What it covers</Eyebrow>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {insightCategories.map((c, i) => (
                <Reveal key={c.id} delay={i * 0.06}>
                  <div id={c.id} className="h-full scroll-mt-28 rounded-2xl border border-line bg-paper-2 p-6">
                    <h3 className="text-lg font-semibold tracking-tight text-text">{c.title}</h3>
                    <p className="mt-2 text-pretty text-sm leading-relaxed text-muted">
                      {c.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <ContactCTA />
    </>
  );
}
