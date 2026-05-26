import ContactCTA from "@/components/home/ContactCTA";
import Framework from "@/components/home/Framework";
import PageHeader from "@/components/layout/PageHeader";
import ServiceOfferings from "@/components/services/ServiceOfferings";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Private sector development, agriculture and agri-tech, technology policy, healthcare systems, sustainable energy markets, tech ecosystems, digital government, and civil service reform.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="What we do, and how far we stay."
        intro="Our services span the systems that move economies forward — from the private sector to the heart of government — each carried through with the same discipline: design the right thing, build what holds it, and deliver until it works."
      />

      {/* Mirrored content from the live /our-services page, redesigned */}
      <ServiceOfferings />

      <Framework />
      <ContactCTA />
    </>
  );
}
