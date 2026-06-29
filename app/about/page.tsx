import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, BriefcaseBusiness, Award, Phone, CalendarCheck } from "lucide-react";
import { FeatureGrid, ValueGrid } from "@/components/Cards";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import { firm, leader, coreValues, whyChooseUs, credibility, vision, mission } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Rohit Aggarwal & Company — a premium Chartered Accountancy practice built on precision, integrity, and professional excellence.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">About the Firm</span>
        <h1>{firm.name}</h1>
        <p>{firm.overview}</p>
      </section>

      <Section eyebrow="Our Journey" title="Built on Precision, Driven by Trust">
        <ScrollReveal>
          <div className="split editorial-split">
            <p>
              Established in {firm.established}, Rohit Aggarwal & Company has grown from a focused
              chartered accountancy practice into a full-spectrum financial advisory firm. Over the
              years, we have built deep expertise across audit, taxation, corporate compliance, and
              strategic financial advisory — serving corporates, startups, and high-net-worth
              individuals with equal dedication.
            </p>
            <p>
              Our firm is built on the pillars of {firm.pillars.join(", ")}. Every
              engagement reflects our commitment to delivering measurable value, maintaining the
              highest ethical standards, and building relationships that stand the test of time.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      <Section eyebrow="Foundation" title="Vision, Mission & Core Values">
        <ScrollReveal>
          <div className="grid">
            <article className="card">
              <div className="icon-badge">
                <Target size={22} aria-hidden="true" />
              </div>
              <h3>Vision</h3>
              <p>{vision}</p>
            </article>
            <article className="card">
              <div className="icon-badge">
                <BriefcaseBusiness size={22} aria-hidden="true" />
              </div>
              <h3>Mission</h3>
              <p>{mission}</p>
            </article>
            <article className="card">
              <div className="icon-badge">
                <Award size={22} aria-hidden="true" />
              </div>
              <h3>Core Values</h3>
              <p>{coreValues.map((v) => v.title).join(" • ")}</p>
            </article>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div style={{ marginTop: 32 }}>
            <ValueGrid values={coreValues} />
          </div>
        </ScrollReveal>
      </Section>

      <Section eyebrow="Our Differentiators" title="Why Leading Businesses Choose Us">
        <ScrollReveal>
          <FeatureGrid items={whyChooseUs} variant="why-choose" />
        </ScrollReveal>
      </Section>

      <Section eyebrow="By The Numbers" title="Our Track Record" centered>
        <ScrollReveal>
          <div className="grid" style={{ maxWidth: 900, margin: "0 auto" }}>
            {credibility.map((stat) => (
              <article className="card" key={stat.label} style={{ textAlign: "center" }}>
                <strong className="metric">{stat.value}</strong>
                <h3>{stat.label}</h3>
                <p>{stat.text}</p>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </Section>

      <section className="partner-quote">
        <blockquote>{leader.message}</blockquote>
        <cite>
          {leader.name}, {leader.suffix} — {leader.role}
        </cite>
      </section>

      <section className="cta-banner">
        <div>
          <span className="eyebrow">Let&apos;s Work Together</span>
          <h2>Ready to experience advisory that makes a difference?</h2>
        </div>
        <button className="button" data-consultation-trigger>
          <CalendarCheck size={18} aria-hidden="true" /> Book a Consultation
        </button>
      </section>
    </>
  );
}
