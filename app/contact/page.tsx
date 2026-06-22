import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Section";
import { firm } from "@/lib/data";

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Contact</span>
        <h1>Book a confidential consultation</h1>
        <p>Share your requirement for income tax, GST, audit, compliance, accounting or advisory support. The office will respond with the next steps.</p>
      </section>

      <Section eyebrow="Reach Us" title="Office Details">
        <div className="split contact-layout">
          <div className="contact-stack">
            <article className="contact-item">
              <MapPin size={22} aria-hidden="true" />
              <div>
                <h3>Office</h3>
                <p>{firm.address}</p>
              </div>
            </article>
            <article className="contact-item">
              <Phone size={22} aria-hidden="true" />
              <div>
                <h3>Phone</h3>
                <p>{firm.phone}</p>
              </div>
            </article>
            <article className="contact-item">
              <Mail size={22} aria-hidden="true" />
              <div>
                <h3>Email</h3>
                <p>{firm.email}</p>
              </div>
            </article>
            <article className="contact-item">
              <Clock size={22} aria-hidden="true" />
              <div>
                <h3>Working Hours</h3>
                <p>{firm.hours}</p>
              </div>
            </article>
          </div>
          <div className="map">Google Map Integration</div>
        </div>
      </Section>

      <Section eyebrow="Get Started" title="Appointment Booking">
        <ContactForm />
      </Section>
    </>
  );
}
