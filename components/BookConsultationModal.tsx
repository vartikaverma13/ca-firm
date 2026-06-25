"use client";

import { useEffect, useState } from "react";
import { X, ChevronDown, Phone, CheckCircle2 } from "lucide-react";
import { useUiStore } from "@/store/uiStore";

const services = [
  { label: "Audit & Assurance", value: "Audit & Assurance" },
  { label: "Direct Taxation", value: "Direct Taxation" },
  { label: "GST & Indirect Tax", value: "GST & Indirect Tax" },
  { label: "Corporate Compliance", value: "Corporate Compliance" },
  { label: "Financial Planning & Analysis", value: "Financial Planning & Analysis" },
  { label: "Risk Management", value: "Risk Management" },
  { label: "Startup Advisory", value: "Startup Advisory" },
  { label: "Virtual CFO Services", value: "Virtual CFO Services" },
  { label: "Financial Advisory", value: "Financial Advisory" },
  { label: "Business Consultancy", value: "Business Consultancy" },
];

export function BookConsultationModal() {
  const isOpen = useUiStore((state) => state.isConsultationOpen);
  const setConsultationOpen = useUiStore((state) => state.setConsultationOpen);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ fullName: "", email: "", phone: "", service: "" });
      setConsultationOpen(false);
    }, 2000);
  };

  const closeModal = () => {
    setIsSuccess(false);
    setFormData({ fullName: "", email: "", phone: "", service: "" });
    setConsultationOpen(false);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [closeModal]);

  if (!isOpen) return null;

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "10px",
    border: "1px solid #e5e7eb",
    backgroundColor: "#f9fafb",
    color: "#111827",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s, background-color 0.2s",
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ background: "rgba(31, 42, 68, 0.92)", backdropFilter: "blur(12px)" }}
      onClick={closeModal}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-300"
        style={{ maxWidth: "460px", borderRadius: "20px" }}
      >
        {/* Top bar: close button */}
        <div style={{ display: "flex", justifyContent: "flex-end", padding: "16px 16px 0 16px" }}>
          <button
            onClick={closeModal}
            aria-label="Close modal"
            className="flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700 transition-all duration-200"
            style={{ width: "32px", height: "32px", flexShrink: 0 }}
          >
            <X size={15} strokeWidth={2.5} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: "12px 40px 36px 40px" }}>
          {isSuccess ? (
            <div className="text-center" style={{ padding: "24px 0" }}>
              <div
                className="flex items-center justify-center mx-auto rounded-full bg-green-50"
                style={{ width: "60px", height: "60px", marginBottom: "16px" }}
              >
                <CheckCircle2 size={32} style={{ color: "var(--accent-gold)" }} />
              </div>
              <h3 className="font-serif text-gray-900" style={{ fontSize: "22px", marginBottom: "8px" }}>
                Request Submitted!
              </h3>
              <p className="text-gray-500" style={{ fontSize: "14px" }}>
                We&apos;ll get back to you shortly.
              </p>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="text-center" style={{ marginBottom: "24px" }}>
                <p
                  className="eyebrow"
                  style={{ fontSize: "11px", letterSpacing: "0.12em", marginBottom: "8px" }}
                >
                  CONSULTATION REQUEST
                </p>
                <h2
                  className="font-serif text-gray-900"
                  style={{ fontSize: "clamp(22px, 4vw, 28px)", lineHeight: 1.2, marginBottom: "8px" }}
                >
                  Book a Consultation
                </h2>
                <p className="text-gray-500" style={{ fontSize: "14px", lineHeight: 1.5 }}>
                  Share your details and we&apos;ll get back to you shortly.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {/* Full Name */}
                <div>
                  <label
                    className="text-gray-700"
                    style={{ display: "block", fontSize: "13px", fontWeight: 500, marginBottom: "6px" }}
                  >
                    Full Name <span style={{ color: "var(--accent-gold)" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                  />
                </div>

                {/* Email & Phone grid */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  <div>
                    <label
                      className="text-gray-700"
                      style={{ display: "block", fontSize: "13px", fontWeight: 500, marginBottom: "6px" }}
                    >
                      Email <span style={{ color: "var(--accent-gold)" }}>*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label
                      className="text-gray-700"
                      style={{ display: "block", fontSize: "13px", fontWeight: 500, marginBottom: "6px" }}
                    >
                      Phone <span style={{ color: "var(--accent-gold)" }}>*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      style={inputStyle}
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label
                    className="text-gray-700"
                    style={{ display: "block", fontSize: "13px", fontWeight: 500, marginBottom: "6px" }}
                  >
                    Service Required <span style={{ color: "var(--accent-gold)" }}>*</span>
                  </label>
                  <div style={{ position: "relative" }}>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      style={{ ...inputStyle, paddingRight: "40px", appearance: "none", cursor: "pointer" }}
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s.value} value={s.value}>{s.label}</option>
                      ))}
                    </select>
                    <ChevronDown
                      size={15}
                      className="text-gray-400 pointer-events-none"
                      style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)" }}
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="font-semibold text-gray-900 flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90"
                  style={{
                    background: "var(--accent-gold)",
                    width: "100%",
                    padding: "13px 20px",
                    borderRadius: "10px",
                    fontSize: "14px",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    opacity: isSubmitting ? 0.7 : 1,
                    marginTop: "4px",
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div
                        className="border-2 border-gray-900/30 border-t-gray-900 rounded-full animate-spin"
                        style={{ width: "16px", height: "16px" }}
                      />
                      Submitting...
                    </>
                  ) : (
                    "Submit Consultation Request"
                  )}
                </button>

                {/* Divider */}
                <div style={{ position: "relative", padding: "2px 0" }}>
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
                    <div style={{ width: "100%", borderTop: "1px solid #f3f4f6" }} />
                  </div>
                  <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
                    <span
                      className="text-gray-400 bg-white"
                      style={{ padding: "0 12px", fontSize: "12px", fontWeight: 500 }}
                    >
                      or
                    </span>
                  </div>
                </div>

                {/* Call link */}
                <div className="text-center">
                  <a
                    href="tel:+919953864565"
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors font-medium"
                    style={{ fontSize: "14px" }}
                  >
                    <Phone size={14} style={{ color: "var(--accent-gold)" }} />
                    Call us on{" "}
                    <span style={{ color: "var(--accent-gold)" }}>+91 99538 64565</span>
                  </a>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
