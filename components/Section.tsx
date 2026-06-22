import { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  subtitle,
  centered,
  children,
  dark,
  id,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  children: ReactNode;
  dark?: boolean;
  id?: string;
}) {
  return (
    <section className={`section ${dark ? "section-dark" : ""}`} id={id}>
      <div className={`section-heading ${centered ? "centered" : ""}`}>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}
