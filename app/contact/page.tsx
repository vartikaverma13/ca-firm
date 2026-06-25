import { Metadata } from "next";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
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

      <Section eyebrow="Location" title="Find Us">
        <ScrollReveal>
          <div className="map">
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.569931818167!2d77.3323048!3d28.672591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfae60975877f%3A0xb3abaf4c502b457a!2sRohit%20Aggarwal%20%26%20Company!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Premium Google Reviews Block */}
          <div className="w-full mt-10 relative overflow-hidden rounded-[24px] bg-[#1F2A44] px-8 py-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            {/* Decorative Glow */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#B8945F]/15 blur-[60px]" />
            <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-[#B8945F]/10 blur-[60px]" />
            
            <div className="relative z-10 flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" width="40" height="40" />
            </div>
            
            <div className="relative z-10 flex-1">
              <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-5 mb-2">
                <h3 className="font-serif text-3xl md:text-4xl text-white m-0">Excellent</h3>
                <div className="flex text-[#FBBC04] text-2xl tracking-widest drop-shadow-sm">
                  ★★★★★
                </div>
              </div>
              <p className="text-[16px] text-[#A5B4CD] m-0">
                Rated <strong className="text-white font-medium">4.9 out of 5</strong> based on Google Reviews from our trusted clients.
              </p>
            </div>
            
            <div className="relative z-10 mt-4 md:mt-0 flex-shrink-0">
              <a 
                href="https://google.com/search?q=Rohit+Aggarwal+%26+Company" 
                target="_blank"
                rel="noopener noreferrer"
                className="button light"
              >
                Read Reviews
              </a>
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
