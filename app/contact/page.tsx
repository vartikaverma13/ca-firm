import { Metadata } from "next";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { BookConsultation } from "@/components/BookConsultation";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import { firm } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Rohit Aggarwal & Company for audit, tax, compliance, and financial advisory services. Call +91 99538 64565 or email audit@carohitaggarwal.org.in.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Contact</span>
        <h1>Get In Touch</h1>
        <p>
          Schedule a confidential consultation or reach out with your enquiry. Our team responds
          within 24 hours.
        </p>
      </section>

      <Section eyebrow="Reach Us" title="Contact Information">
        <ScrollReveal>
          <div className="split">
            <div className="contact-stack">
              <div className="contact-item">
                <MapPin size={22} aria-hidden="true" />
                <div>
                  <h3>Office Address</h3>
                  <p>{firm.address}</p>
                </div>
              </div>
              <div className="contact-item">
                <Mail size={22} aria-hidden="true" />
                <div>
                  <h3>Email</h3>
                  <p>
                    <a href={`mailto:${firm.email}`}>{firm.email}</a>
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <Phone size={22} aria-hidden="true" />
                <div>
                  <h3>Phone</h3>
                  <p>
                    <a href={`tel:${firm.phone.replace(/\s/g, "")}`}>{firm.phone}</a>
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <Clock size={22} aria-hidden="true" />
                <div>
                  <h3>Office Hours</h3>
                  <p>{firm.hours}</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      <BookConsultation />

      <Section eyebrow="Location" title="Find Us">
        <ScrollReveal>
          <div className="map">
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.569931818167!2d77.3323048!3d28.672591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfae60975877f%3A0xb3abaf4c502b457a!2sRohit%20Aggarwal%20%26%20Company!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "12px", marginBottom: "2rem" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="google-reviews" style={{ textAlign: 'center' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', background: 'var(--white)', padding: '1.5rem', borderRadius: '12px', boxShadow: 'var(--shadow-md)', border: '1px solid var(--border-light)' }}>
                <div style={{ textAlign: 'left' }}>
                  <h3 style={{ fontSize: '1.2rem', margin: 0, color: 'var(--text-dark)' }}>Excellent</h3>
                  <div style={{ color: '#FBBC04', fontSize: '1.5rem', letterSpacing: '2px' }}>★★★★★</div>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>Based on Google Reviews</p>
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Logo" width="40" height="40" />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
