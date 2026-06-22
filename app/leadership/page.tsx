import { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import { leader } from "@/lib/data";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Meet CA Rohit Aggarwal, FCA — Managing Partner of Rohit Aggarwal & Company, a Fellow Chartered Accountant with 10+ years of experience.",
};

export default function LeadershipPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Leadership</span>
        <h1>Visionary Leadership</h1>
        <p>
          Guided by a commitment to excellence, integrity, and client-first advisory that sets the
          standard for every engagement.
        </p>
      </section>

      <Section eyebrow="Managing Partner" title={leader.name}>
        <ScrollReveal>
          <article className="profile-card">
            <div className="profile-mark">RA</div>
            <div>
              <span className="eyebrow">{leader.role}</span>
              <h2 style={{ marginTop: 8 }}>
                {leader.name}, {leader.suffix}
              </h2>
              <p style={{ marginTop: 12 }}>{leader.bio}</p>
              <div className="profile-details">
                <span>
                  <strong>Qualification</strong>
                  {leader.qualification}
                </span>
                <span>
                  <strong>Experience</strong>
                  {leader.experience}
                </span>
                <span>
                  <strong>Expertise</strong>
                  {leader.expertise.join(", ")}
                </span>
              </div>
              <ul className="list compact-list">
                {leader.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
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
          <span className="eyebrow">Connect</span>
          <h2>Schedule a consultation with our Managing Partner</h2>
        </div>
        <Link className="button" href="/contact">
          <Phone size={17} aria-hidden="true" /> Book Consultation
        </Link>
      </section>
    </>
  );
}
