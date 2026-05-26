import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Reveal from "@/components/motion/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import Figure from "@/components/ui/Figure";

export default function Fieldwork() {
  return (
    <Section tone="paper-2">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image collage — drop photos into /public/images and set src below */}
          <Reveal direction="right">
            <div className="grid grid-cols-5 grid-rows-6 gap-4">
              <Figure
                alt="ACE Analytix advisory team in a working session"
                label="Working session"
                ratio="4/5"
                className="col-span-3 row-span-6"
                src="/images/advisory.webp"
              />
              <Figure
                alt="On-site delivery with client teams"
                label="On the ground"
                ratio="1/1"
                className="col-span-2 row-span-3"
                src="/images/delivery.webp"
              />
              <Figure
                alt="Working with institutional partners"
                label="Partners"
                ratio="1/1"
                className="col-span-2 row-span-3"
                src="/images/partners.webp"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <Eyebrow>On the ground</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display mt-6 text-[clamp(1.9rem,4vw,3rem)] text-text">
                We don’t advise from a distance. We deliver in the room.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-muted">
                Our work happens where decisions are made and delivery is felt — in
                ministries, institutions, and programme war-rooms. We embed with your teams,
                hold the milestones, and stay until the result is real.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <dl className="mt-9 grid grid-cols-2 gap-6 border-t border-line pt-7">
                <div>
                  <dt className="text-sm text-muted">Where we work</dt>
                  <dd className="mt-1 text-lg font-semibold text-text">
                    Government & institutions
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-muted">How we work</dt>
                  <dd className="mt-1 text-lg font-semibold text-text">
                    Embedded, milestone by milestone
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
