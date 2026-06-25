import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, CheckCircle2, ArrowRight } from "lucide-react";
import { ProcessTimeline } from "@/components/Cards";
import { FAQ } from "@/components/FAQ";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import { services } from "@/lib/data";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.title,
    description: service.intro,
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const relatedServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Services</span>
        <h1>{service.title}</h1>
        <p>{service.intro}</p>
      </section>

      <Section eyebrow="What We Provide" title="Service Scope">
        <ScrollReveal>
          <ul className="list">
            {service.provide.map((item) => (
              <li key={item}>
                <CheckCircle2
                  size={16}
                  style={{ display: "inline", marginRight: 10, color: "var(--gold)", verticalAlign: "middle" }}
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </Section>

      <Section eyebrow="Our Approach" title="Engagement Process">
        <ScrollReveal>
          <ProcessTimeline steps={service.process} />
        </ScrollReveal>
      </Section>

      <Section eyebrow="Impact" title="Key Benefits" centered>
        <ScrollReveal>
          <div className="grid">
            {service.benefits.map((benefit) => (
              <article className="card" key={benefit} style={{ textAlign: "center" }}>
                <div className="icon-badge" style={{ margin: "0 auto" }}>
                  <CheckCircle2 size={20} aria-hidden="true" />
                </div>
                <h3>{benefit}</h3>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </Section>

      {service.faqs && service.faqs.length > 0 && (
        <Section eyebrow="FAQ" title={`${service.title} — Frequently Asked Questions`}>
          <ScrollReveal>
            <FAQ items={service.faqs} />
          </ScrollReveal>
        </Section>
      )}

      {/* Related Services */}
      <Section eyebrow="Explore More" title="Related Services" centered>
        <ScrollReveal>
          <div className="grid">
            {relatedServices.map((rs) => (
              <article className="card" key={rs.slug}>
                <h3>{rs.title}</h3>
                <p>{rs.intro}</p>
                <Link className="text-link" href={`/services/${rs.slug}`}>
                  Learn More <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </Section>

      <section className="cta-banner">
        <div>
          <span className="eyebrow">Get Expert Guidance</span>
          <h2>Ready to discuss your {service.title.toLowerCase()} needs?</h2>
        </div>
        <Link className="button" href="/contact" data-consultation-trigger>
          <Phone size={17} aria-hidden="true" /> Book Consultation
        </Link>
      </section>
    </>
  );
}
