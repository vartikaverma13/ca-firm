import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, CalendarCheck } from "lucide-react";
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
            {/* ── Left: Photo column ── */}
            <div className="profile-left">
              <div className="profile-photo-wrap">
                <Image
                  src="/rohit.jpeg"
                  alt="CA Rohit Aggarwal"
                  fill
                  className="profile-photo"
                  priority
                  sizes="(max-width: 640px) 180px, (max-width: 768px) 240px, 300px"
                />
              </div>
              <div className="profile-photo-caption">
                <strong>{leader.name}</strong>
                <span>{leader.suffix} · {leader.role}</span>
              </div>
            </div>

            {/* ── Right: Content column ── */}
            <div className="profile-content">
              <span className="eyebrow">{leader.role}</span>
              <h2 style={{ marginTop: 8 }}>
                {leader.name}, {leader.suffix}
              </h2>
              <p style={{ marginTop: 16, lineHeight: 1.8 }}>{leader.bio}</p>
              <div className="profile-details" style={{ textAlign: 'left' }}>
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
        <button className="button" data-consultation-trigger>
          <CalendarCheck size={18} aria-hidden="true" /> Book a Consultation
        </button>
      </section>
    </>
  );
}
