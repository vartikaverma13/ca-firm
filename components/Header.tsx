"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const services = [
  { label: "Audit & Assurance", href: "/services/audit-assurance" },
  { label: "Direct Taxation", href: "/services/direct-taxation" },
  { label: "GST & Indirect Tax", href: "/services/gst-indirect-tax" },
  { label: "Corporate Compliance", href: "/services/corporate-compliance" },
  { label: "Financial Planning & Analysis", href: "/services/financial-planning-analysis" },
  { label: "Risk Management", href: "/services/risk-management" },
  { label: "Startup Advisory", href: "/services/startup-advisory" },
  { label: "Virtual CFO Services", href: "/services/virtual-cfo" },
  { label: "Financial Advisory", href: "/services/financial-advisory" },
  { label: "Business Consultancy", href: "/services/business-consultancy" },
];

const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", dropdown: true },
  { label: "Industries", href: "/industries" },
  { label: "International", href: "/international" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <Link className="brand" href="/" aria-label="Rohit Aggarwal & Company home">
          <span className="brand-mark">RA</span>
          <span className="brand-text">
            Rohit Aggarwal & Co.
          </span>
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          {nav.map((item) =>
            item.dropdown ? (
              <div
                key={item.label}
                className="nav-dropdown-wrapper"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link href={item.href} className="nav-dropdown-trigger">
                  {item.label}
                  <ChevronDown size={14} aria-hidden="true" />
                </Link>
                {servicesOpen && (
                  <div className="nav-dropdown">
                    {services.map((s) => (
                      <Link key={s.href} href={s.href}>
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            )
          )}
        </nav>

        <Link className="header-cta" href="/contact">
          <Phone size={15} aria-hidden="true" />
          Book Consultation
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav ${mobileOpen ? "open" : ""}`}>
        <nav aria-label="Mobile navigation">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          {/* Show services sub-links in mobile */}
          <div className="mobile-nav-services">
            <span className="mobile-nav-label">Our Services</span>
            {services.map((s) => (
              <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)}>
                {s.label}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            className="button mobile-nav-cta"
            onClick={() => setMobileOpen(false)}
          >
            <Phone size={16} aria-hidden="true" />
            Book Consultation
          </Link>
        </nav>
      </div>
    </>
  );
}
