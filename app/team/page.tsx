import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { TeamGrid } from "@/components/Cards";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import { leader, teamMembers } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the qualified professionals at Rohit Aggarwal & Company — chartered accountants with deep expertise across audit, taxation, compliance, and advisory.",
};

export default function TeamPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Our People</span>
        <h1>Meet Our Team</h1>
        <p>
          A team of qualified professionals committed to delivering excellence across audit,
          taxation, compliance, and advisory.
        </p>
      </section>

      <Section eyebrow="Leadership" title="Managing Partner">
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
            </div>
          </article>
        </ScrollReveal>
      </Section>

      <Section eyebrow="Professional Team" title="Senior Professionals" centered>
        <ScrollReveal>
          <TeamGrid members={teamMembers} />
        </ScrollReveal>
      </Section>

      <section className="cta-banner">
        <div>
          <span className="eyebrow">Join Us</span>
          <h2>Interested in building your career with a leading CA firm?</h2>
        </div>
        <Link className="button" href="/contact">
          <Phone size={17} aria-hidden="true" /> Get In Touch
        </Link>
      </section>
    </>
  );
}
