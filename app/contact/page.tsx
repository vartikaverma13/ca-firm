import { Metadata } from "next";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
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

            <ContactForm title="Book a Consultation" />
          </div>
        </ScrollReveal>
      </Section>

      <Section eyebrow="Location" title="Find Us">
        <ScrollReveal>
          <div className="map">Google Maps — {firm.address}</div>
        </ScrollReveal>
      </Section>
    </>
  );
}
