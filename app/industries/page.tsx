import { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { IndustryGrid } from "@/components/Cards";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import { industries } from "@/lib/data";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Sector-specific financial, tax, and compliance advisory for Manufacturing, Hospitality, Real Estate, Retail & FMCG, Healthcare, and Financial Services.",
};

export default function IndustriesPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Industry Expertise</span>
        <h1>Industries We Serve</h1>
        <p>
          Deep domain expertise across key sectors, delivering industry-specific tax structuring,
          compliance frameworks, and advisory solutions.
        </p>
      </section>

      <Section eyebrow="Sectors" title="Sector-Specific Advisory" centered>
        <ScrollReveal>
          <IndustryGrid industries={industries} />
        </ScrollReveal>
      </Section>

      <section className="cta-banner">
        <div>
          <span className="eyebrow">Industry Advisory</span>
          <h2>Need sector-specific financial guidance?</h2>
        </div>
        <Link className="button" href="/contact">
          <Phone size={17} aria-hidden="true" /> Book Consultation
        </Link>
      </section>
    </>
  );
}
