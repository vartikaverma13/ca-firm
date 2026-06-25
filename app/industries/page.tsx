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
      <div style={{ paddingTop: '100px' }}></div>

      <Section eyebrow="Industry Expertise" title="Industries We Serve" centered>
        <ScrollReveal>
          <IndustryGrid industries={industries} />
        </ScrollReveal>
      </Section>

      <section className="cta-banner">
        <div>
          <span className="eyebrow">Industry Advisory</span>
          <h2>Need sector-specific financial guidance?</h2>
        </div>
        <Link className="button" href="/contact" data-consultation-trigger>
          <Phone size={17} aria-hidden="true" /> Book Consultation
        </Link>
      </section>
    </>
  );
}
