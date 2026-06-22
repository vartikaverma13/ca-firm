import { Award, BriefcaseBusiness, Target } from "lucide-react";
import { FeatureGrid } from "@/components/Cards";
import { Section } from "@/components/Section";
import { firm, leader, values } from "@/lib/data";

const whyChoose = [
  { title: "Expert Guidance", text: "Advice is led by CA Rohit Aggarwal with deep exposure to tax, GST, audit and business finance matters." },
  { title: "Transparent Process", text: "Every engagement follows clear scope, documentation, timelines and practical communication." },
  { title: "Timely Compliance", text: "Calendar-led execution helps clients avoid penalties, last-minute filings and missed obligations." },
  { title: "Personalized Solutions", text: "Recommendations are shaped around your income profile, business model, industry and growth stage." }
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">About the Firm</span>
        <h1>{firm.name}</h1>
        <p>A premium Chartered Accountancy practice built for clients who need dependable compliance, careful tax thinking and practical financial clarity.</p>
      </section>

      <Section eyebrow="Our Story" title="Professional Journey">
        <div className="split editorial-split">
          <p>Founded in {firm.established}, the firm has grown around a simple professional promise: combine technical accuracy with clear, actionable advice. CA Rohit Aggarwal works closely with clients through tax filings, GST compliance, audits, accounting systems and financial advisory decisions.</p>
          <p>The practice serves individuals, startups, SMEs and corporate clients with a focus on disciplined documentation, proactive communication and long-term financial confidence.</p>
        </div>
      </Section>

      <Section eyebrow="Foundation" title="Vision, Mission and Values">
        <div className="grid">
          <article className="card">
            <div className="icon-badge"><Target size={22} aria-hidden="true" /></div>
            <h3>Vision</h3>
            <p>To become a trusted financial advisory partner for growth-focused clients who value governance, clarity and compliance.</p>
          </article>
          <article className="card">
            <div className="icon-badge"><BriefcaseBusiness size={22} aria-hidden="true" /></div>
            <h3>Mission</h3>
            <p>To simplify taxation, compliance and financial decisions through precise, ethical and commercially practical advice.</p>
          </article>
          <article className="card">
            <div className="icon-badge"><Award size={22} aria-hidden="true" /></div>
            <h3>Values</h3>
            <p>{values.join(" • ")}</p>
          </article>
        </div>
      </Section>

      <Section eyebrow="Why Choose Us" title="Professional advice, delivered with precision">
        <FeatureGrid items={whyChoose} />
      </Section>

      <Section eyebrow="Leadership" title="Leadership Profile">
        <article className="profile-card">
          <div className="profile-mark">RA</div>
          <div>
            <span className="eyebrow">Principal Advisor</span>
            <h2>{leader.name}</h2>
            <p>{leader.bio}</p>
            <div className="profile-details">
              <span><strong>Qualification</strong>{leader.qualification}</span>
              <span><strong>Experience</strong>{leader.experience}</span>
              <span><strong>Expertise</strong>{leader.expertise}</span>
            </div>
            <ul className="list compact-list">
              {leader.achievements.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </article>
      </Section>
    </>
  );
}
