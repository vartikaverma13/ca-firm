"use client";

import { useEffect, useState } from "react";
import { X, ChevronDown } from "lucide-react";

import { useUiStore } from "@/store/uiStore";

export function BookConsultationModal() {
  const isOpen = useUiStore((state) => state.isConsultationOpen);
  const setConsultationOpen = useUiStore((state) => state.setConsultationOpen);

  const onClose = () => setConsultationOpen(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
  });

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const trigger = target.closest("[data-consultation-trigger]");
      if (trigger) {
        e.preventDefault();
        setConsultationOpen(true);
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("click", handleGlobalClick);

    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("click", handleGlobalClick);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, setConsultationOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form Submitted:", formData);

    // Add API call here
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#081325]/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[95vh] w-full max-w-6xl overflow-y-auto rounded-[32px] bg-[#FCFAF7] shadow-[0_20px_80px_rgba(0,0,0,0.25)]"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-6 top-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#E8E0D8] bg-white text-slate-500 transition hover:bg-slate-50"
        >
          <X size={30} />
        </button>

        {/* Header */}
        <div className="border-b border-[#E9E0D7] px-8 py-10 text-center md:px-16 md:py-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#8A6A3E]">
            Consultation Request
          </p>

          <h2
            className="text-5xl leading-none text-[#162846] md:text-7xl"
            style={{
              fontFamily:
                'Playfair Display, Georgia, "Times New Roman", serif',
            }}
          >
            Book a consultation
          </h2>

          <p className="mt-4 text-lg text-slate-500 md:text-xl">
            Share your details and we&apos;ll get back to you shortly.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-8 py-8 md:px-16">
          <div className="space-y-8">
            {/* Full Name */}
            <div>
              <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.15em] text-[#162846]">
                Full Name <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="h-20 w-full rounded-2xl border border-[#D8D8D8] bg-white px-7 text-lg text-slate-700 outline-none transition focus:border-[#162846]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.15em] text-[#162846]">
                Email Address <span className="text-red-500">*</span>
              </label>

              <input
                type="email"
                name="email"
                placeholder="name@company.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="h-20 w-full rounded-2xl border border-[#D8D8D8] bg-white px-7 text-lg text-slate-700 outline-none transition focus:border-[#162846]"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.15em] text-[#162846]">
                Phone Number <span className="text-red-500">*</span>
              </label>

              <input
                type="tel"
                name="phone"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={handleChange}
                required
                className="h-20 w-full rounded-2xl border border-[#D8D8D8] bg-white px-7 text-lg text-slate-700 outline-none transition focus:border-[#162846]"
              />
            </div>

            {/* Service Required */}
            <div>
              <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.15em] text-[#162846]">
                Service Required <span className="text-red-500">*</span>
              </label>

              <div className="relative">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="h-20 w-full appearance-none rounded-2xl border border-[#D8D8D8] bg-white px-7 pr-16 text-lg text-slate-700 outline-none transition focus:border-[#162846]"
                >
                  <option value="">Select a service</option>
                  <option value="Interior Design">
                    Interior Design
                  </option>
                  <option value="Architecture">
                    Architecture
                  </option>
                  <option value="Construction">
                    Construction
                  </option>
                  <option value="Consultation">
                    Consultation
                  </option>
                </select>

                <ChevronDown
                  size={26}
                  className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 text-slate-500"
                />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-10 border-t border-[#E9E0D7] pt-10 text-center">
            <button
              type="submit"
              className="h-20 min-w-[320px] rounded-2xl bg-[#162846] px-12 text-xl font-semibold text-white transition hover:bg-[#0f1f39]"
            >
              Submit consultation
            </button>

            <p className="mt-5 text-xl text-slate-500">
              Or call us on{" "}
              <span className="font-bold text-[#162846]">
                +91 99538 64565
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}