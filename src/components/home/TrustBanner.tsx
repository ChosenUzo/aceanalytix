import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";
import { clients } from "@/lib/content";

export default function TrustBanner() {
  return (
    <section className="border-b border-line bg-paper-2 py-12 sm:py-14">
      <Container>
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Trusted by leading institutions &amp; partners
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <ul className="mt-9 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 lg:gap-x-20">
            {clients.map((c) => (
              <li key={c.name}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.logo}
                  alt={c.name}
                  className="h-12 w-auto object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-14"
                />
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
