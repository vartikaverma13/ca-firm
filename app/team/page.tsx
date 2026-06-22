import { Section } from "@/components/Section";
import { leader } from "@/lib/data";

const teams = ["Tax Advisory Desk", "GST Compliance Team", "Audit and Assurance Team", "Accounting Operations Team", "Corporate Compliance Desk", "Client Support Desk"];

export default function TeamPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Leadership</span>
        <h1>Led by CA Rohit Aggarwal</h1>
        <p>Client engagements are guided by senior professional oversight and supported by specialist compliance and accounting teams.</p>
      </section>

      <Section eyebrow="Founder" title="Founder Profile">
        <article className="profile-card">
          <div className="profile-mark">RA</div>
          <div>
            <span className="eyebrow">Principal Advisor</span>
            <h2>{leader.name}</h2>
            <p>{leader.qualification}</p>
            <p><strong>{leader.role}</strong> • {leader.experience}</p>
            <p>{leader.expertise}</p>
            <p>{leader.bio}</p>
          </div>
        </article>
      </Section>

      <Section eyebrow="Teams" title="Practice Teams">
        <div className="grid">
          {teams.map((team) => (
            <article className="card" key={team}>
              <h3>{team}</h3>
              <p>Specialist support for accurate delivery, timely coordination and documented client communication.</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
