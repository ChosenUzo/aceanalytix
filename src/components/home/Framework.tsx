"use client";

import Container from "@/components/layout/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { framework } from "@/lib/content";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Framework() {
  const [active, setActive] = useState(framework.length - 1); // default to "Deliver"
  const stage = framework[active];

  return (
    <section id="framework" className="relative scroll-mt-24 bg-ink py-24 text-ondark sm:py-32">
      <div aria-hidden className="absolute inset-0 grid-lines-dark opacity-40" />
      <Container className="relative z-10">
        <div className="max-w-2xl">
          <Eyebrow tone="light">How we work</Eyebrow>
          <h2 className="display mt-6 text-[clamp(2rem,4.5vw,3.4rem)] text-ondark">
            Design. Develop. Deliver.
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-ondark-muted">
            Three stages, one continuous discipline. Most firms stop after the strategy.
            Our work is built around the stage they skip.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Stage selector */}
          <div className="flex flex-col">
            {framework.map((s, i) => {
              const isActive = i === active;
              return (
                <button
                  key={s.id}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={cn(
                    "group relative border-t border-line-ondark py-6 text-left transition-colors last:border-b",
                    isActive ? "opacity-100" : "opacity-55 hover:opacity-90",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="frame-bar"
                      className="absolute left-0 top-0 h-full w-[3px] bg-brand-400"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <div className="flex items-baseline gap-4 pl-5">
                    <span className="font-mono text-sm text-brand-400">{s.step}</span>
                    <span className="display text-3xl text-ondark sm:text-4xl">{s.title}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Stage detail */}
          <div className="relative rounded-2xl border border-line-ondark bg-white/[0.03] p-8 backdrop-blur-sm sm:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease }}
              >
                <span className="font-mono text-sm text-brand-400">{stage.step} / 03</span>
                <h3 className="display mt-3 text-3xl text-ondark">{stage.title}</h3>
                <p className="mt-4 text-pretty text-lg leading-relaxed text-ondark-muted">
                  {stage.body}
                </p>
                <ul className="mt-7 space-y-3">
                  {stage.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-ondark/90">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand text-white">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
