"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function Footer() {
  const [showFullMap, setShowFullMap] = useState(false);

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
    <>
      <footer className="footer">
        <div className="footer-brand">
          <div className="footer-logo">
            <Image 
              src="/india-logo.png" 
              alt="India Flag Logo" 
              width={60}
              height={60}
              style={{ marginBottom: '16px', objectFit: 'contain' }}
            />
            <h3>Rohit Aggarwal & Company</h3>
          </div>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/company/rohit-aggarwal-company" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              LinkedIn
            </a>
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
        <div className="footer-contact-with-map">
          <div className="footer-map-container">
            <button 
              className="footer-map-button"
              onClick={() => setShowFullMap(true)}
              aria-label="Open full screen map"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5563169385206!2d77.6735!3d28.6649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef7265a5a5a5%3A0x12345678!2s216%20Shalimar%20Garden%20Ext-1%2C%20Ghaziabad!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="120"
                style={{ border: 0, borderRadius: '8px', pointerEvents: 'none' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="footer-map-iframe"
              />
            </button>
          </div>
          <div className="footer-contact-details">
            <p>216, Shalimar Garden Ext-1, Ghaziabad, Uttar Pradesh 201005, India</p>
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
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Rohit Aggarwal & Company. All rights reserved.</span>
        <span>Chartered Accountants • Financial Advisors • Tax Consultants</span>
      </div>
      </footer>

      {showFullMap && (
        <div className="full-screen-map-modal" onClick={() => setShowFullMap(false)}>
          <div className="full-screen-map-container" onClick={(e) => e.stopPropagation()}>
            <button 
              className="close-map-button"
              onClick={() => setShowFullMap(false)}
              aria-label="Close full screen map"
            >
              ✕
            </button>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5563169385206!2d77.6735!3d28.6649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef7265a5a5a5%3A0x12345678!2s216%20Shalimar%20Garden%20Ext-1%2C%20Ghaziabad!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      )}
    </>
  );
}
