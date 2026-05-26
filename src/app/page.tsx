import Belief from "@/components/home/Belief";
import ClientFilter from "@/components/home/ClientFilter";
import ContactCTA from "@/components/home/ContactCTA";
import Framework from "@/components/home/Framework";
import Hero from "@/components/home/Hero";
import InsightsTeaser from "@/components/home/InsightsTeaser";
import Leadership from "@/components/home/Leadership";
import Values from "@/components/home/Values";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientFilter />
      <Framework />
      <Belief />
      <Values />
      <Leadership />
      <InsightsTeaser />
      <ContactCTA />
    </>
  );
}
