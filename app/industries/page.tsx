import { FeatureGrid } from "@/components/Cards";
import { Section } from "@/components/Section";
import { detailedIndustries, industries } from "@/lib/data";

export default function IndustriesPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Industry Expertise</span>
        <h1>Financial clarity for different client realities</h1>
        <p>From individual professionals to startups, SMEs and corporate clients, the firm adapts compliance and advisory support to your operating model.</p>
      </section>

      <Section eyebrow="Client Segments" title="Who We Serve">
        <FeatureGrid items={industries} />
      </Section>

      <Section eyebrow="Sector Solutions" title="Industry-Specific Advisory">
        <FeatureGrid items={detailedIndustries} />
      </Section>
    </>
  );
}
