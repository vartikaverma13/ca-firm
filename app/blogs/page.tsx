import { FAQ } from "@/components/FAQ";
import { Section } from "@/components/Section";
import { blogs, faqs } from "@/lib/data";

export default function BlogsPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Knowledge Hub</span>
        <h1>Updates, resources and practical financial insights</h1>
        <p>Curated tax, GST, compliance and business finance resources for clients who want to stay informed without the noise.</p>
      </section>

      <Section eyebrow="Resources" title="Latest Updates and Resources">
        <div className="grid">
          {blogs.map((blog) => (
            <article className="card knowledge-card" key={blog.title}>
              <span className="pill">{blog.type}</span>
              <h3>{blog.title}</h3>
              <p>Prepared for practical decision-making, compliance planning and better financial conversations.</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Frequently Asked Questions">
        <FAQ items={faqs} />
      </Section>
    </>
  );
}
