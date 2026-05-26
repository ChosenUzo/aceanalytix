import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ScrollProgress from "@/components/layout/ScrollProgress";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { site } from "@/lib/content";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
// Broad, corporate display face (replaces the tall serif).
const display = Montserrat({
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "ACE Analytix — Strategy, Structure & Execution",
    template: "%s · ACE Analytix",
  },
  description: site.shortDescription,
  keywords: [
    "strategy consulting",
    "governance reform",
    "institutional transformation",
    "programme delivery",
    "Africa",
    "public sector",
    "execution",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: "ACE Analytix — Strategy, Structure & Execution",
    description: site.shortDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "ACE Analytix — Strategy, Structure & Execution",
    description: site.shortDescription,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: site.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    description: site.shortDescription,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. 6 Valentine Nwabueze Street, Jahi",
      addressLocality: "Abuja",
      addressCountry: "NG",
    },
    sameAs: [site.social.linkedin, site.social.instagram],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${display.variable} antialiased`}
    >
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollProgress />
        <Navbar />
        <SmoothScroll>
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
