import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Section";
import { openings } from "@/lib/data";

export default function CareersPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Careers</span>
        <h1>Build your CA career in a disciplined advisory practice</h1>
        <p>Work across tax, GST, audit, accounting and compliance assignments with structured mentorship and meaningful client exposure.</p>
      </section>

      <Section eyebrow="Culture" title="Why Join Us">
        <div className="grid grid-2">
          {["Professional mentorship", "Practical client exposure", "Technical learning", "Modern work systems"].map((item) => (
            <article className="card" key={item}>
              <h3>{item}</h3>
              <p>Develop strong professional habits in a calm, precise and client-focused environment.</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Openings" title="Current Openings">
        <ul className="list">
          {openings.map((opening) => <li key={opening}>{opening}</li>)}
        </ul>
      </Section>

      <Section eyebrow="Apply" title="Career Application">
        <ContactForm title="Career Application" />
      </Section>
    </>
  );
}
