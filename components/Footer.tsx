import Link from "next/link";

export function Footer() {
  const services = [
    { label: "Audit & Assurance", href: "/services/audit-assurance" },
    { label: "Direct Taxation", href: "/services/direct-taxation" },
    { label: "GST & Indirect Tax", href: "/services/gst-indirect-tax" },
    { label: "Corporate Compliance", href: "/services/corporate-compliance" },
    { label: "Startup Advisory", href: "/services/startup-advisory" },
    { label: "Virtual CFO Services", href: "/services/virtual-cfo" },
  ];

  const quickLinks = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "International", href: "/international" },
    { label: "Team", href: "/team" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="footer">
      <div className="footer-brand">
        <div className="footer-logo">
          <span className="brand-mark">RA</span>
          <h3>Rohit Aggarwal & Company</h3>
        </div>
        <p className="footer-tagline">Delivering Trust Through Expertise</p>
        <p className="footer-desc">
          A premium Chartered Accountancy practice delivering end-to-end financial, tax,
          compliance, and advisory services to corporates, startups, and high-net-worth individuals.
        </p>
        <div className="footer-socials">
          <a href="#" aria-label="LinkedIn">LinkedIn</a>
          <a href="#" aria-label="X (Twitter)">X</a>
        </div>
      </div>

      <div>
        <h4>Quick Links</h4>
        {quickLinks.map((item) => (
          <Link key={item.label} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>

      <div>
        <h4>Services</h4>
        {services.map((service) => (
          <Link key={service.href} href={service.href}>
            {service.label}
          </Link>
        ))}
      </div>

      <div>
        <h4>Contact Us</h4>
        <p>216/100, Shalimar Garden Ext-1, Ghaziabad, Uttar Pradesh 201005, India</p>
        <p>
          <strong>Phone:</strong>{" "}
          <a href="tel:+919953864565">+91 99538 64565</a>
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:audit@carohitaggarwal.org.in">audit@carohitaggarwal.org.in</a>
        </p>
        <p>
          <strong>Hours:</strong> Monday to Saturday, 10:00 AM – 6:30 PM
        </p>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Rohit Aggarwal & Company. All rights reserved.</span>
        <span>Chartered Accountants • Financial Advisors • Tax Consultants</span>
      </div>
    </footer>
  );
}
