import { ServiceGrid } from "@/components/Cards";
import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Section";
import { services } from "@/lib/data";

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Services</span>
        <h1>Complete CA, tax and financial advisory services</h1>
        <p>Structured service lines for individuals, founders, SMEs and corporate clients who need tax clarity, accurate records and compliance confidence.</p>
      </section>

      <Section eyebrow="Service Portfolio" title="What We Offer">
        <ServiceGrid services={services} columns={3} />
      </Section>

      <Section eyebrow="Appointment" title="Discuss Your Requirement">
        <ContactForm title="Discuss Your Requirement" />
      </Section>
    </>
  );
}
