import ContactCTA from "@/components/home/ContactCTA";
import Container from "@/components/layout/Container";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Reveal from "@/components/motion/Reveal";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import { insightCategories, insights, publication } from "@/lib/content";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights",
  description: `${publication.name} — ${publication.tagline}`,
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function InsightsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Ideas, briefs & frameworks."
        intro={`${publication.tagline} Articles, briefs, frameworks, and perspectives — signed, argued, and grounded in the work.`}
      />

      {insightCategories.map((category, ci) => {
        const items = insights.filter(
          (i) => i.category === category.id && i.status === "published",
        );

        return (
          <Section
            key={category.id}
            id={category.id}
            tone={ci % 2 === 0 ? "paper" : "paper-2"}
          >
            <Container>
              <div className="flex flex-col gap-3 border-b border-line pb-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <Reveal>
                    <Eyebrow>{category.title}</Eyebrow>
                  </Reveal>
                  <Reveal delay={0.05}>
                    <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
                      {category.description}
                    </p>
                  </Reveal>
                </div>
                <span className="shrink-0 text-sm text-muted">
                  {items.length} {items.length === 1 ? "piece" : "pieces"}
                </span>
              </div>

              {items.length > 0 ? (
                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  {items.map((item, i) => (
                    <Reveal key={item.slug} delay={(i % 2) * 0.08}>
                      <Link
                        href={`/insights/${item.slug}`}
                        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-card"
                      >
                        {item.cover && (
                          <div className="relative aspect-[16/9] overflow-hidden">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={item.cover}
                              alt={item.title}
                              loading="lazy"
                              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                            />
                          </div>
                        )}
                        <div className="flex flex-1 flex-col p-7">
                          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.14em] text-muted">
                            <span className="font-semibold text-brand">{category.title}</span>
                            <span aria-hidden>·</span>
                            <span>{item.readingTime}</span>
                          </div>
                          <h3 className="mt-3 text-xl font-semibold leading-snug tracking-tight text-text">
                            {item.title}
                          </h3>
                          <p className="mt-3 flex-1 text-pretty leading-relaxed text-muted">
                            {item.dek}
                          </p>
                          <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
                            <span className="text-sm text-muted">
                              {item.author} · {formatDate(item.date)}
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                              Read more
                              <ArrowRight
                                size={15}
                                className="transition-transform group-hover:translate-x-1"
                              />
                            </span>
                          </div>
                        </div>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              ) : (
                <Reveal>
                  <p className="mt-10 rounded-2xl border border-dashed border-line bg-paper px-6 py-10 text-center text-muted">
                    New {category.title.toLowerCase()} are on the way.{" "}
                    <a
                      href="mailto:info@aceanalytix.com?subject=Notify%20me%20—%20Insights"
                      className="inline-flex items-center gap-1 font-semibold text-brand"
                    >
                      <Mail size={14} /> Get notified
                    </a>
                  </p>
                </Reveal>
              )}
            </Container>
          </Section>
        );
      })}

      <Section tone="ink" className="py-16">
        <Container className="flex flex-col items-center gap-5 text-center">
          <Reveal>
            <p className="display text-2xl text-ondark sm:text-3xl">
              {publication.name} lands in your inbox.
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <Button
              href="mailto:info@aceanalytix.com?subject=Subscribe%20—%20The%20Position"
              variant="onDark"
            >
              <Mail size={16} /> Subscribe
            </Button>
          </Reveal>
        </Container>
      </Section>

      <ContactCTA />
    </>
  );
}
