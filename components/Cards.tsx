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
          <article className="card service-card" key={service.slug}>
            <div className="icon-badge">
              <Icon size={22} aria-hidden="true" />
            </div>
            <h3>{service.title}</h3>
            <p>{service.intro}</p>
            <Link className="text-link" href={`/services/${service.slug}`}>
              Learn More <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </article>
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
  industries: { name: string; description: string; icon?: string }[];
}) {
  return (
    <div className="grid">
      {industries.map((industry) => {
        const Icon = industryIcons[industry.name] || Globe;
        return (
          <article className="card industry-card" key={industry.name}>
            <div className="icon-badge">
              <Icon size={22} aria-hidden="true" />
            </div>
            <h3>{industry.name}</h3>
            <p>{industry.description}</p>
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
            <div className="team-avatar">
              <span>{initials}</span>
            </div>
            <div className="team-info">
              <h3>{member.name}</h3>
              <span className="team-suffix">{member.suffix}</span>
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
