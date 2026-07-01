import Link from "next/link";
import {
  ArrowUpRight,
  BadgeCheck,
  ShieldCheck,
  Calculator,
  ReceiptText,
  ClipboardCheck,
  ChartNoAxesCombined,
  ShieldAlert,
  Rocket,
  UserCog,
  Landmark,
  Scale,
  Factory,
  Hotel,
  Building2,
  ShoppingCart,
  HeartPulse,
  Banknote,
  Globe,
  Target,
  Handshake,
  ScanSearch,
  UserCheck,
} from "lucide-react";

/* ── Icon maps ── */

const serviceIcons: Record<string, React.ElementType> = {
  "Audit & Assurance": ShieldCheck,
  "Direct Taxation": Calculator,
  "GST & Indirect Tax": ReceiptText,
  "Corporate Compliance": ClipboardCheck,
  "Financial Planning & Analysis": ChartNoAxesCombined,
  "Risk Management & Internal Controls": ShieldAlert,
  "Startup Advisory": Rocket,
  "Virtual CFO Services": UserCog,
  "Financial Advisory": Landmark,
  "Business Consultancy": Scale,
};

const industryIcons: Record<string, React.ElementType> = {
  "Manufacturing": Factory,
  "Hospitality": Hotel,
  "Real Estate": Building2,
  "Retail & FMCG": ShoppingCart,
  "Healthcare": HeartPulse,
  "Financial Services": Banknote,
};

const whyChooseIcons: Record<string, React.ElementType> = {
  "Structured Process": Target,
  "Trusted Partnership": Handshake,
  "Proactive Advisory": ScanSearch,
  "Single Point Accountability": UserCheck,
};

/* ── Service Grid ── */

export function ServiceGrid({
  services,
  columns,
}: {
  services: { title: string; intro: string; slug: string }[];
  columns?: number;
}) {
  return (
    <div className={columns === 3 ? "grid services-grid-full" : "grid services-grid"}>
      {services.map((service) => {
        const Icon = serviceIcons[service.title] || ShieldCheck;
        return (
          <Link href={`/services/${service.slug}`} className="card service-card" key={service.slug} style={{ textDecoration: 'none', display: 'block' }}>
            <div className="icon-badge">
              <Icon size={22} aria-hidden="true" />
            </div>
            <h3>{service.title}</h3>
            <p style={{ margin: 0 }}>{service.intro}</p>
          </Link>
        );
      })}
    </div>
  );
}

/* ── Feature Grid (Why Choose Us, Stats, etc.) ── */

export function FeatureGrid({
  items,
  variant,
}: {
  items: {
    title?: string;
    label?: string;
    name?: string;
    value?: string;
    text?: string;
    help?: string;
    description?: string;
  }[];
  variant?: "why-choose" | "default";
}) {
  return (
    <div className="grid">
      {items.map((item) => {
        const displayTitle = item.title || item.label || item.name || "";
        const displayText = item.text || item.help || item.description || "";
        const Icon =
          variant === "why-choose"
            ? whyChooseIcons[displayTitle] || BadgeCheck
            : BadgeCheck;

        return (
          <article className="card feature-card" key={displayTitle}>
            <div className="icon-badge">
              <Icon size={20} aria-hidden="true" />
            </div>
            {item.value && <strong className="metric">{item.value}</strong>}
            <h3>{displayTitle}</h3>
            <p>{displayText}</p>
          </article>
        );
      })}
    </div>
  );
}

/* ── Industry Grid ── */

export function IndustryGrid({
  industries,
}: {
  industries: { name: string; description: string; icon?: string; image?: string }[];
}) {
  return (
    <div className="grid">
      {industries.map((industry) => {
        const Icon = industryIcons[industry.name] || Globe;
        return (
          <article className="card industry-card" key={industry.name} style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            {industry.image && (
              <div style={{ width: '100%', height: '180px', position: 'relative' }}>
                <img src={industry.image} alt={industry.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(16, 25, 45, 1) 0%, rgba(16, 25, 45, 0.4) 50%, transparent 100%)' }} />
                <div className="icon-badge" style={{ position: 'absolute', bottom: '16px', left: '24px', margin: 0, border: '1px solid rgba(200, 165, 77, 0.3)', background: 'rgba(16, 25, 45, 0.6)', backdropFilter: 'blur(8px)', color: 'var(--accent-gold)' }}>
                  <Icon size={20} aria-hidden="true" />
                </div>
              </div>
            )}
            <div style={{ padding: industry.image ? '20px 24px 32px' : '32px' }}>
              {!industry.image && (
                <div className="icon-badge">
                  <Icon size={22} aria-hidden="true" />
                </div>
              )}
              <h3 style={{ marginTop: industry.image ? '4px' : undefined, fontSize: '20px' }}>{industry.name}</h3>
              <p style={{ margin: 0 }}>{industry.description}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

/* ── Team Card Grid ── */

export function TeamGrid({
  members,
}: {
  members: {
    name: string;
    suffix: string;
    role: string;
    expertise: string[];
    industries?: string[];
  }[];
}) {
  return (
    <div className="grid team-grid">
      {members.map((member) => {
        const initials = member.name
          .replace("CA ", "")
          .split(" ")
          .map((w) => w[0])
          .join("")
          .slice(0, 2);

        return (
          <article className="card team-card" key={member.name}>
            {/* <div className="team-avatar">
              <span>{initials}</span>
            </div> */}
            <div className="team-info">
              <h3>{member.name}, {member.suffix}</h3>
              <span className="team-role-badge">{member.role}</span>
            </div>
            <div className="tag-list">
              {member.expertise.map((skill) => (
                <span className="tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
            {member.industries && member.industries.length > 0 && (
              <div className="team-industries">
                <strong>Industries:</strong>
                <span>{member.industries.join(" • ")}</span>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}

/* ── Value Card Grid ── */

export function ValueGrid({
  values,
}: {
  values: { title: string; description: string }[];
}) {
  return (
    <div className="grid">
      {values.map((value) => (
        <article className="card value-card" key={value.title}>
          <div className="icon-badge">
            <BadgeCheck size={20} aria-hidden="true" />
          </div>
          <h3>{value.title}</h3>
          <p>{value.description}</p>
        </article>
      ))}
    </div>
  );
}

/* ── International Country Badges ── */

export function CountryBadges({ countries }: { countries: string[] }) {
  return (
    <div className="country-badges">
      {countries.map((country) => (
        <span className="country-badge" key={country}>
          <Globe size={14} aria-hidden="true" />
          {country}
        </span>
      ))}
    </div>
  );
}

/* ── International Service Cards ── */

export function InternationalServiceGrid({
  services,
}: {
  services: { title: string; description: string }[];
}) {
  return (
    <div className="grid grid-2">
      {services.map((service) => (
        <article className="card international-card" key={service.title}>
          <div className="icon-badge">
            <Globe size={22} aria-hidden="true" />
          </div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </article>
      ))}
    </div>
  );
}

/* ── Process Timeline ── */

export function ProcessTimeline({ steps }: { steps: string[] }) {
  return (
    <div className="grid process-grid">
      {steps.map((step, index) => (
        <article className="card process-card" key={step}>
          <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
          <p>{step}</p>
        </article>
      ))}
    </div>
  );
}
