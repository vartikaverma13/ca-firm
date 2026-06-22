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
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    setForm({ name: "", phone: "", email: "", service: "", city: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  }

  return (
    <form className="form" onSubmit={submitForm}>
      <span className="form-eyebrow">Get In Touch</span>
      <h3>{title}</h3>

      {submitted && (
        <div className="form-success">
          Thank you. Rohit Aggarwal & Company will contact you shortly.
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

      <button type="submit">
        <Send size={17} aria-hidden="true" /> Submit Enquiry
      </button>
    </form>
  );
}
