"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

const serviceOptions = [
  "Audit & Assurance",
  "Direct Taxation",
  "GST & Indirect Tax",
  "Corporate Compliance",
  "Financial Planning & Analysis",
  "Risk Management",
  "Startup Advisory",
  "Virtual CFO Services",
  "Financial Advisory",
  "Business Consultancy",
  "International Services",
  "Other",
];

export function ContactForm({ title = "Book a Consultation" }: { title?: string }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    city: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError(false);
    setSubmitted(false);

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          city: form.city,
          message: form.message,
        }),
      });

      if (!response.ok) throw new Error("Failed to submit enquiry");

      setSubmitted(true);
      setForm({ name: "", phone: "", email: "", service: "", city: "", message: "" });
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="form" onSubmit={submitForm}>
      <span className="form-eyebrow">Get In Touch</span>
      <h3>{title}</h3>

      {submitted && (
        <div className="form-success">
          Thank you. We will contact you in 24 hours.
        </div>
      )}

      {error && (
        <div className="form-error" style={{ color: "#ef4444", backgroundColor: "#fef2f2", padding: "1rem", borderRadius: "8px", border: "1px solid #fee2e2", marginBottom: "1.5rem", fontSize: "0.9rem" }}>
          Unable to submit your enquiry. Please check your network and try again.
        </div>
      )}

      <div className="form-grid">
        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-grid">
        <input
          name="email"
          placeholder="Email Address"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
        />
      </div>

      <select
        name="service"
        value={form.service}
        onChange={handleChange}
        required
      >
        <option value="">Select Service of Interest</option>
        {serviceOptions.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      <textarea
        name="message"
        placeholder="Tell us about your requirement..."
        value={form.message}
        onChange={handleChange}
        rows={5}
      />

      <button type="submit" disabled={isSubmitting}>
        <Send size={17} aria-hidden="true" /> {isSubmitting ? "Submitting..." : "Submit Enquiry"}
      </button>
    </form>
  );
}
