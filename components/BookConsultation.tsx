"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";

export function BookConsultation() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const services = [
    "Income Tax",
    "GST Services",
    "Company Registration",
    "Audit & Assurance",
    "Accounting & Bookkeeping",
    "Other",
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.service) newErrors.service = "Please select a service";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit consultation details");
      }

      setSubmitStatus("success");
      setFormData({ fullName: "", email: "", phone: "", service: "", message: "" });
    } catch (error) {
      console.error("Booking Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-gray-50 flex justify-center items-center px-6 sm:px-8 lg:px-10 font-sans">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-5">
          {/* Left panel - Branding */}
          <div className="md:col-span-2 bg-[#1F2A44] text-white p-10 md:p-12 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563EB] rounded-full filter blur-[80px] opacity-20 -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4AF37] rounded-full filter blur-[80px] opacity-10 -ml-20 -mb-20"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 leading-tight">
                Book a <span className="text-[#D4AF37]">Consultation</span>
              </h2>
              <p className="text-gray-300 text-[15px] leading-relaxed mb-8">
                Schedule a consultation with our experts and get personalized financial, taxation, audit, GST, and compliance guidance.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#0d274f] flex items-center justify-center border border-[#1a3869]">
                    <span className="text-[#D4AF37] font-bold">1</span>
                  </div>
                  <span className="text-sm text-gray-200">Fill out the form</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#0d274f] flex items-center justify-center border border-[#1a3869]">
                    <span className="text-[#D4AF37] font-bold">2</span>
                  </div>
                  <span className="text-sm text-gray-200">Our team reviews your request</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#0d274f] flex items-center justify-center border border-[#1a3869]">
                    <span className="text-[#D4AF37] font-bold">3</span>
                  </div>
                  <span className="text-sm text-gray-200">We schedule a meeting</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right panel - Form */}
          <div className="md:col-span-3 p-8 md:p-14 lg:p-16">
            {submitStatus === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-[#1F2A44]">Request Confirmed</h3>
                <p className="text-gray-600 max-w-sm">
                  Thank you. We will contact you in 24 hours.
                </p>
                <button
                  onClick={() => setSubmitStatus("idle")}
                  className="mt-8 px-6 py-2 border border-[#1F2A44] text-[#1F2A44] font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {submitStatus === "error" && (
                  <div className="p-4 bg-red-50 border border-red-100 rounded-lg flex items-start space-x-3 text-red-800 text-sm">
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p>There was an error sending your request. Please try again later or contact us directly.</p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all outline-none text-gray-900 ${
                        errors.fullName ? "border-red-400" : "border-gray-200"
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.fullName && <p className="text-xs text-red-500">{errors.fullName}</p>}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all outline-none text-gray-900 ${
                        errors.phone ? "border-red-400" : "border-gray-200"
                      }`}
                      placeholder="+91 98765 43210"
                    />
                    {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all outline-none text-gray-900 ${
                      errors.email ? "border-red-400" : "border-gray-200"
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                </div>

                {/* Service */}
                <div className="space-y-1.5">
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                    Service Required *
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all outline-none appearance-none text-gray-900 ${
                        errors.service ? "border-red-400" : "border-gray-200"
                      }`}
                    >
                      <option value="" disabled>Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                  {errors.service && <p className="text-xs text-red-500">{errors.service}</p>}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all outline-none resize-none text-gray-900"
                    placeholder="Briefly describe your requirements..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center py-4 px-8 border border-transparent rounded-lg shadow-sm text-[15px] font-medium text-[#1F2A44] bg-[#D4AF37] hover:bg-[#c49d2b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4AF37] transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-3"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Schedule Consultation"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
