"use client";

import Container from "@/components/layout/Container";
import AnimatedNumber from "@/components/motion/AnimatedNumber";
import Button from "@/components/ui/Button";
import MouseGlow from "@/components/ui/MouseGlow";
import { hero, site } from "@/lib/content";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-ondark">
      {/* layered backdrop */}
      <div aria-hidden className="absolute inset-0 grid-lines-dark opacity-60" />
      <div
        aria-hidden
        className="brand-glow absolute -top-40 left-1/2 h-[640px] w-[640px] -translate-x-1/2 blur-3xl"
      />
      <MouseGlow size={560} />

      <Container className="relative z-10 grid min-h-[92vh] items-center gap-16 pb-20 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:pt-28">
        {/* Left: copy */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-line-ondark bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-ondark-muted backdrop-blur"
          >
            {hero.eyebrow}
          </motion.span>

          <h1 className="display mt-7 text-[clamp(2.6rem,6.5vw,5rem)] text-ondark">
            {"Complex problems".split(" ").map((w, i) => (
              <motion.span
                key={i}
                className="mr-[0.25em] inline-block"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease }}
              >
                {w}
              </motion.span>
            ))}
            <br className="hidden sm:block" />
            <motion.span
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32, ease }}
              className="text-brand-400"
            >
              carry hidden value.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease }}
            className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-ondark-muted"
          >
            {hero.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.58, ease }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button href={site.primaryCta.href} variant="onDark" size="lg">
              {site.primaryCta.label}
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button href="#framework" variant="ghost" size="lg" className="text-ondark hover:bg-white/10">
              See how we work
            </Button>
          </motion.div>

          {/* trust stats */}
          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-line-ondark pt-8"
          >
            {hero.stats.map((s) => (
              <div key={s.label}>
                <dd className="display text-3xl text-ondark sm:text-4xl">
                  <AnimatedNumber value={Number(s.value)} suffix={s.suffix} />
                </dd>
                <dt className="mt-1.5 text-xs leading-snug text-ondark-muted">{s.label}</dt>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Right: floating analytics visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease }}
          className="relative hidden lg:block"
        >
          <DashboardMock />
        </motion.div>
      </Container>
    </section>
  );
}

/** Abstract enterprise-analytics panel — the "data intelligence" cue. */
function DashboardMock() {
  const bars = [38, 52, 44, 67, 59, 78, 71, 92];
  return (
    <div className="animate-float relative mx-auto w-full max-w-md">
      <div className="rounded-2xl border border-line-ondark bg-white/[0.04] p-5 shadow-float backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-ondark-muted">
              Delivery index
            </p>
            <p className="display mt-1 text-2xl text-ondark">On track · 94%</p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-brand/20 px-2.5 py-1 text-xs font-medium text-brand-400">
            <TrendingUp size={13} /> +18%
          </span>
        </div>

        <div className="mt-6 flex h-32 items-end gap-2">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 0.8, delay: 0.7 + i * 0.06, ease }}
              className="flex-1 rounded-t-md bg-gradient-to-t from-brand/40 to-brand-400"
            />
          ))}
        </div>

        <div className="mt-5 space-y-2.5">
          {["Strategy designed", "Systems developed", "Milestones delivered"].map((label, i) => (
            <div key={label} className="flex items-center gap-3">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-brand text-[10px] text-white">
                {i + 1}
              </span>
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${[100, 80, 64][i]}%` }}
                  transition={{ duration: 1, delay: 1 + i * 0.15, ease }}
                  className="h-full rounded-full bg-brand-400"
                />
              </div>
              <span className="w-28 text-xs text-ondark-muted">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* floating chip */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-8 bottom-10 rounded-xl border border-line-ondark bg-ink-2/90 px-4 py-3 shadow-float backdrop-blur"
      >
        <p className="text-xs text-ondark-muted">War-room status</p>
        <p className="text-sm font-medium text-ondark">Milestone 7 / 9 cleared</p>
      </motion.div>
    </div>
  );
}
