import { Metadata } from "next";
import { ServiceGrid } from "@/components/Cards";
import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive audit, taxation, compliance, financial advisory, startup advisory, and virtual CFO services by Rohit Aggarwal & Company.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Services</span>
        <h1>Comprehensive Financial & Advisory Solutions</h1>
        <p>
          Structured service lines for corporates, startups, SMEs, and high-net-worth individuals
          who demand excellence in tax, compliance, and strategic advisory.
        </p>
      </section>

      <Section eyebrow="Core Services" title="Assurance, Tax & Compliance">
        <ScrollReveal>
          <ServiceGrid services={services.slice(0, 4)} columns={2} />
        </ScrollReveal>
      </Section>

      <Section eyebrow="Advisory Services" title="Financial Planning & Risk Management">
        <ScrollReveal>
          <ServiceGrid services={services.slice(4, 6)} columns={2} />
        </ScrollReveal>
      </Section>

      <Section eyebrow="Growth & Strategy" title="Startup, CFO & Business Advisory">
        <ScrollReveal>
          <ServiceGrid services={services.slice(6, 10)} columns={2} />
        </ScrollReveal>
      </Section>

      <Section eyebrow="Appointment" title="Discuss Your Requirement" centered>
        <ScrollReveal>
          <ContactForm title="Schedule a Service Consultation" />
        </ScrollReveal>
      </Section>
    </>
  );
}
