import Belief from "@/components/home/Belief";
import ClientFilter from "@/components/home/ClientFilter";
import ContactCTA from "@/components/home/ContactCTA";
import Fieldwork from "@/components/home/Fieldwork";
import Framework from "@/components/home/Framework";
import Hero from "@/components/home/Hero";
import InsightsTeaser from "@/components/home/InsightsTeaser";
import Leadership from "@/components/home/Leadership";
import OurWork from "@/components/home/OurWork";
import TrustBanner from "@/components/home/TrustBanner";
import Values from "@/components/home/Values";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBanner />
      <ClientFilter />
      <Framework />
      <Belief />
      <Fieldwork />
      <Values />
      <Leadership />
      <OurWork />
      <InsightsTeaser />
      <ContactCTA />
    </>
  );
}
