import { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { CountryBadges, InternationalServiceGrid } from "@/components/Cards";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  internationalCountries,
  internationalServices,
  internationalExpertise,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "International Services",
  description:
    "International accounting, tax, and regulatory advisory services for businesses operating across the United States, Netherlands, Spain, Poland, and Germany.",
};

export default function InternationalPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Global Expertise</span>
        <h1>International Advisory Services</h1>
        <p>{internationalExpertise}</p>
      </section>

      <Section eyebrow="Jurisdictions" title="Countries We Serve" centered>
        <ScrollReveal>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CountryBadges countries={internationalCountries} />
          </div>
          <p
            style={{
              textAlign: "center",
              maxWidth: 640,
              margin: "24px auto 0",
              color: "var(--text-dark-sec)",
              fontSize: 16,
            }}
          >
            Our international advisory practice supports businesses and high-net-worth individuals
            with cross-border tax structuring, regulatory compliance, and financial reporting across
            multiple jurisdictions.
          </p>
        </ScrollReveal>
      </Section>

      <Section eyebrow="What We Offer" title="International Service Lines">
        <ScrollReveal>
          <InternationalServiceGrid services={internationalServices} />
        </ScrollReveal>
      </Section>

      <section className="cta-banner">
        <div>
          <span className="eyebrow">Global Advisory</span>
          <h2>Need cross-border tax or compliance support?</h2>
        </div>
        <Link className="button" href="/contact" data-consultation-trigger>
          <Phone size={17} aria-hidden="true" /> Book International Consultation
        </Link>
      </section>
    </>
  );
}
