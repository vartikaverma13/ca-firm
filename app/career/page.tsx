import { Metadata } from "next";
import { BriefcaseBusiness, TrendingUp, Users, GraduationCap } from "lucide-react";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CareerForm } from "@/components/CareerForm";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join Rohit Aggarwal & Company. We are always looking for talented CA professionals, Article Assistants, and financial experts.",
};

export default function CareerPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <div className="gradient-sphere" style={{ top: "10%", left: "20%" }} />
          <div className="gradient-sphere" style={{ bottom: "10%", right: "20%" }} />
        </div>
        <div className="page-hero-content reveal-up">
          <span className="eyebrow">Join Our Team</span>
          <h1>Build Your Career With Us</h1>
          <p className="page-hero-subtitle">
            We are always looking for passionate professionals, article assistants, and tax experts to join our growing firm.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <Section
        eyebrow="Why Join Us"
        title="A Culture of Growth & Excellence"
        subtitle="At Rohit Aggarwal & Company, we foster an environment of continuous learning, professional development, and high-impact work."
        dark={false}
      >
        <div className="services-grid" style={{ marginBottom: "64px" }}>
          <ScrollReveal>
            <div className="card service-card">
              <div className="service-icon"><GraduationCap size={24} /></div>
              <h3>Continuous Learning</h3>
              <p>Gain hands-on exposure across diverse industries, from complex audits to international tax advisory.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <div className="card service-card">
              <div className="service-icon"><TrendingUp size={24} /></div>
              <h3>Career Growth</h3>
              <p>We believe in promoting from within and providing clear pathways for our team to reach leadership roles.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <div className="card service-card">
              <div className="service-icon"><Users size={24} /></div>
              <h3>Collaborative Culture</h3>
              <p>Work alongside seasoned Chartered Accountants in a supportive, deeply collaborative environment.</p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <CareerForm />
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
