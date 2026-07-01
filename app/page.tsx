import Link from "next/link";
import { ArrowRight, CalendarCheck, CheckCircle2, Phone } from "lucide-react";
import { ServiceGrid, FeatureGrid, IndustryGrid, CountryBadges } from "@/components/Cards";
import { FAQ } from "@/components/FAQ";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  credibility,
  faqs,
  firm,
  services,
  whyChooseUs,
  industries,
  internationalCountries,
  internationalExpertise,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg-pattern" />
        <div className="hero-content">
          <div className="hero-copy reveal-up">
            <span className="eyebrow">Chartered Accountants &amp; Financial Advisors</span>
            <h1>Delivering Trust Through Expertise since 2015</h1>
            <p className="hero-subtitle">{firm.overview}</p>
            <div className="hero-actions">
              <button className="button" data-consultation-trigger>
                <CalendarCheck size={18} aria-hidden="true" /> Book Consultation
              </button>
              <Link className="button outline" href="/services">
                Explore Services <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
            <div className="hero-phone">
              <Phone size={28} aria-hidden="true" style={{ color: 'var(--accent-gold)' }} />
              <a href="tel:+919953864565" style={{ color: 'var(--white)', textDecoration: 'none', fontSize: '1.75rem', fontWeight: 700, letterSpacing: '0.05em', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>+91 99538 64565</a>
            </div>
            <div className="hero-trustline">
              <span>
                <CheckCircle2 size={17} aria-hidden="true" /> ICAI-led Professional Standards
              </span>
              <span>
                <CheckCircle2 size={17} aria-hidden="true" /> 10+ Years of Expertise
              </span>
            </div>
          </div>
          <div className="hero-stats reveal-up delay-1">
            {credibility.map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <Section eyebrow="Our Firm" title="A Premium Practice Built on Precision and Integrity" centered>
        <ScrollReveal>
          <div className="editorial-split">
            <p>
              Rohit Aggarwal &amp; Company is a distinguished Chartered Accountancy practice
              established with the vision of delivering Big 4-caliber advisory with the personal
              commitment of a trusted partner. Under the leadership of CA Rohit Aggarwal, FCA, the
              firm has built a reputation for precision-driven financial, tax, compliance, and
              advisory services across corporates, startups, and high-net-worth individuals.
            </p>
            <p>
              Every engagement is anchored in the firm&apos;s founding pillars — precision, integrity,
              professional excellence, and long-term client relationships. From strategic tax planning
              and regulatory compliance to business advisory and international taxation, the firm
              provides end-to-end solutions that support confident decision-making and sustainable
              growth.
            </p>
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link className="text-link" href="/about">
              Learn More About Our Firm <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </ScrollReveal>
      </Section>

      {/* ── SERVICES ── */}
      <Section eyebrow="Our Services" title="Comprehensive Financial & Advisory Solutions" centered>
        <ScrollReveal>
          <ServiceGrid services={services.slice(0, 6)} />
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link className="text-link" href="/services">
              View All Services <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </ScrollReveal>
      </Section>

      {/* ── WHY CHOOSE US ── */}
      <Section eyebrow="Why Choose Us" title="What Sets Us Apart" centered>
        <ScrollReveal>
          <FeatureGrid items={whyChooseUs} variant="why-choose" />
        </ScrollReveal>
      </Section>

      {/* ── INTERNATIONAL PRESENCE ── */}
      <Section eyebrow="Global Reach" title="International Advisory Expertise" centered>
        <ScrollReveal>
          <p style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 2rem auto", fontSize: "1.1rem", lineHeight: 1.6, color: "var(--text-dark-secondary)" }}>
            {internationalExpertise}
          </p>
          <CountryBadges countries={internationalCountries} />
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link className="text-link" href="/international">
              Explore International Services <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </ScrollReveal>
      </Section>

      {/* ── INDUSTRIES ── */}
      <Section eyebrow="Industries We Serve" title="Sector-Specific Expertise" centered>
        <ScrollReveal>
          <IndustryGrid industries={industries} />
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link className="text-link" href="/industries">
              View All Industries <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </ScrollReveal>
      </Section>

      {/* ── MANAGING PARTNER QUOTE ── */}
      <ScrollReveal>
        <section className="partner-quote">
          <blockquote>{firm.managingPartnerMessage}</blockquote>
          <cite>CA Rohit Aggarwal, FCA — Managing Partner</cite>
        </section>
      </ScrollReveal>


      {/* ── FAQ ── */}
      <Section eyebrow="FAQ" title="Frequently Asked Questions" centered>
        <ScrollReveal>
          <FAQ items={faqs} />
        </ScrollReveal>
      </Section>
    </>
  );
}
