import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { Section } from "@/components/Section";
import { ServiceSelector } from "@/components/ServiceSelector";
import { faqs, services } from "@/lib/data";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find((item) => item.slug === params.slug);
  return { title: service ? `${service.title} | CA Rohit Aggarwal` : "Service | CA Rohit Aggarwal" };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((item) => item.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Service Detail</span>
        <h1>{service.title}</h1>
        <p>{service.intro}</p>
        <div className="hero-actions">
          <Link className="button" href="/contact">Book Consultation <ArrowRight size={18} aria-hidden="true" /></Link>
          <Link className="button secondary" href="/services">All Services</Link>
        </div>
      </section>

      <Section eyebrow="Navigate" title="Service Navigation">
        <ServiceSelector services={services} />
      </Section>

      <Section eyebrow="Overview" title="Service Overview">
        <div className="split editorial-split">
          <p>{service.intro}</p>
          <p>Every engagement is structured around accurate documentation, clear timelines, risk review and practical advisory so clients understand what is being filed, why it matters and how it affects decisions.</p>
        </div>
      </Section>

      <Section eyebrow="Deliverables" title="What You Receive">
        <ul className="list">
          {service.provide.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </Section>

      <Section eyebrow="Workflow" title="Process">
        <div className="grid process-grid">
          {service.process.map((item, index) => (
            <article className="card process-card" key={item}>
              <span className="step-number">0{index + 1}</span>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Advantages" title="Benefits">
        <ul className="list">
          {service.benefits.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </Section>

      <Section eyebrow="FAQ" title="Frequently Asked Questions">
        <FAQ items={faqs} />
      </Section>

      <Section eyebrow="Appointment" title={`${service.title} Consultation`}>
        <ContactForm title={`${service.title} Consultation`} />
      </Section>
    </>
  );
}
