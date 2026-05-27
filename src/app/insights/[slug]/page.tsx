import ContactCTA from "@/components/home/ContactCTA";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Reveal from "@/components/motion/Reveal";
import { insightCategories, insights } from "@/lib/content";
import { ArrowLeft, ArrowRight, CalendarDays, Clock } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const published = insights.filter((i) => i.status === "published");

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function generateStaticParams() {
  return published.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = published.find((i) => i.slug === slug);
  if (!item) return { title: "Insights" };
  return {
    title: item.title,
    description: item.dek,
    openGraph: {
      type: "article",
      title: item.title,
      description: item.dek,
      images: item.cover ? [{ url: item.cover }] : undefined,
    },
  };
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const idx = published.findIndex((i) => i.slug === slug);
  if (idx === -1) notFound();

  const item = published[idx];
  const category = insightCategories.find((c) => c.id === item.category);
  const next = published[(idx + 1) % published.length];

  return (
    <>
      {/* Article header */}
      <Section tone="paper" className="pb-12 pt-32 sm:pt-40">
        <Container className="max-w-3xl">
          <Reveal>
            <Link
              href={`/insights#${item.category}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-brand"
            >
              <ArrowLeft size={16} /> All insights
            </Link>
          </Reveal>
          <Reveal delay={0.04}>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              {category?.title}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="display mt-4 text-[clamp(2.1rem,5vw,3.4rem)] text-text">
              {item.title}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 text-pretty text-xl leading-relaxed text-muted">{item.dek}</p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line pt-6 text-sm text-muted">
              <span className="font-medium text-text">{item.author}</span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays size={15} className="text-brand" />
                {formatDate(item.date)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={15} className="text-brand" />
                {item.readingTime}
              </span>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Cover */}
      {item.cover && (
        <Container className="max-w-4xl">
          <Reveal>
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-paper-2 shadow-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.cover}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </Container>
      )}

      {/* Body */}
      <Section tone="paper" className="pt-12">
        <Container className="max-w-2xl">
          <div className="space-y-6 text-pretty text-lg leading-relaxed text-text/85">
            {item.body.map((para, i) => (
              <Reveal key={i} delay={Math.min(i * 0.03, 0.15)}>
                <p>{para}</p>
              </Reveal>
            ))}
          </div>

          {/* Next piece */}
          <div className="mt-16 border-t border-line pt-8">
            <p className="text-xs uppercase tracking-[0.16em] text-muted">Read next</p>
            <Link
              href={`/insights/${next.slug}`}
              className="group mt-3 flex items-center justify-between gap-4 rounded-2xl border border-line bg-paper-2 p-6 transition-all hover:-translate-y-0.5 hover:shadow-card"
            >
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                  {insightCategories.find((c) => c.id === next.category)?.title}
                </span>
                <span className="mt-1 block text-lg font-semibold text-text">{next.title}</span>
              </span>
              <ArrowRight size={20} className="shrink-0 text-brand transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Container>
      </Section>

      <ContactCTA />
    </>
  );
}
