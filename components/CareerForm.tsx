"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function CareerForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    qualification: "",
    experience: "",
    resumeLink: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/career", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit application");
      }

      setIsSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        qualification: "",
        experience: "",
        resumeLink: "",
        message: "",
      });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err: any) {
      setError(err.message || "An error occurred while submitting your application.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: "10px",
    border: "1px solid rgba(229, 231, 235, 0.5)",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    color: "#111827",
    fontSize: "15px",
    outline: "none",
    transition: "border-color 0.2s, background-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    marginBottom: "8px",
    fontSize: "14px",
    fontWeight: 600,
    color: "var(--primary-dark)",
  };

  if (isSuccess) {
    return (
      <div style={{ textAlign: "center", padding: "40px", backgroundColor: "rgba(255,255,255,0.9)", borderRadius: "16px", border: "1px solid var(--border-light)", boxShadow: "var(--shadow-md)" }}>
        <CheckCircle2 size={64} style={{ color: "#10b981", margin: "0 auto 20px" }} />
        <h3 style={{ fontSize: "24px", color: "var(--primary-dark)", marginBottom: "12px", fontFamily: "var(--font-serif)" }}>Application Received!</h3>
        <p style={{ color: "var(--text-muted)", fontSize: "16px", lineHeight: 1.6 }}>
          Thank you for applying to Rohit Aggarwal & Company. Our HR team will review your profile and get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "rgba(255,255,255,0.85)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", borderRadius: "16px", padding: "40px", border: "1px solid var(--border-light)", boxShadow: "var(--shadow-lg)" }}>
      <h3 style={{ fontSize: "28px", color: "var(--primary-dark)", marginBottom: "8px", fontFamily: "var(--font-serif)" }}>Submit Your Application</h3>
      <p style={{ color: "var(--text-muted)", marginBottom: "32px", fontSize: "15px" }}>Join our team of dedicated financial professionals.</p>

      {error && (
        <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "16px", backgroundColor: "#fee2e2", color: "#b91c1c", borderRadius: "10px", marginBottom: "24px", fontSize: "14px" }}>
          <AlertCircle size={20} />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
          <div>
            <label style={labelStyle}>Full Name *</label>
            <input
              type="text"
              required
              style={inputStyle}
              placeholder="e.g. Rahul Sharma"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
          </div>
          <div>
            <label style={labelStyle}>Email Address *</label>
            <input
              type="email"
              required
              style={inputStyle}
              placeholder="e.g. rahul@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
          <div>
            <label style={labelStyle}>Phone Number *</label>
            <input
              type="tel"
              required
              style={inputStyle}
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          <div>
            <label style={labelStyle}>Highest Qualification *</label>
            <select
              required
              style={{ ...inputStyle, appearance: "auto" }}
              value={formData.qualification}
              onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
            >
              <option value="" disabled>Select Qualification</option>
              <option value="CA Final">CA Final</option>
              <option value="CA Inter">CA Inter</option>
              <option value="Article Assistant">Article Assistant</option>
              <option value="B.Com / M.Com">B.Com / M.Com</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
          <div>
            <label style={labelStyle}>Years of Experience</label>
            <select
              style={{ ...inputStyle, appearance: "auto" }}
              value={formData.experience}
              onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
            >
              <option value="" disabled>Select Experience</option>
              <option value="Fresher">Fresher</option>
              <option value="1-3 Years">1-3 Years</option>
              <option value="3-5 Years">3-5 Years</option>
              <option value="5+ Years">5+ Years</option>
            </select>
          </div>
          <div>
            <label style={labelStyle}>Resume Link (Optional)</label>
            <input
              type="url"
              style={inputStyle}
              placeholder="Google Drive, LinkedIn, etc."
              value={formData.resumeLink}
              onChange={(e) => setFormData({ ...formData, resumeLink: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label style={labelStyle}>Cover Letter / Message (Optional)</label>
          <textarea
            style={{ ...inputStyle, minHeight: "120px", resize: "vertical" }}
            placeholder="Tell us why you'd be a great fit for our firm..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="button"
          style={{ width: "100%", justifyContent: "center", padding: "16px", fontSize: "16px", marginTop: "10px", position: "relative" }}
        >
          {isSubmitting ? (
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Loader2 className="animate-spin" size={20} /> Submitting...
            </span>
          ) : (
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              Submit Application <Send size={18} />
            </span>
          )}
        </button>
      </form>
    </div>
  );
}
