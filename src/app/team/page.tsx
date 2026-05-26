import ContactCTA from "@/components/home/ContactCTA";
import Container from "@/components/layout/Container";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import TeamMemberRow from "@/components/team/TeamMemberRow";
import { team } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team",
  description:
    "The people behind ACE Analytix — experienced across strategy, institutional development, governance, transformation, and implementation.",
};

export default function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Team & Expertise"
        title="The people behind the work."
        intro="Our work is led by professionals with experience across strategy, institutional development, governance, transformation, and implementation — bringing together analytical thinking, operational discipline, and a practical understanding of how complex environments function."
      />

      <Section tone="paper">
        <Container>
          <div className="space-y-24 lg:space-y-32">
            {team.map((member, i) => (
              <TeamMemberRow key={member.id} member={member} index={i} />
            ))}
          </div>
        </Container>
      </Section>

      <ContactCTA />
    </>
  );
}
