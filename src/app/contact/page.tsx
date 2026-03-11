"use client";
import { useState } from "react";

const services = [
  "Exterior Refresh",
  "Full Interior",
  "Full Detail",
  "Paint Correction",
  "Ceramic Coating",
  "Not Sure — Need a Quote",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    vehicle: "",
    message: "",
    location: "",
    preferredDate: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up to email service (e.g., Resend, EmailJS, or form endpoint)
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-[#111111] border border-[#2a2a2a] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#c9a84c] transition-colors placeholder:text-[#555]";

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-[#0a0a0a] text-center">
        <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-3">Get in Touch</p>
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl text-white font-bold mb-6">
          Book a Detail
        </h1>
        <div className="w-16 h-px bg-[#c9a84c] mx-auto mb-6" />
        <p className="text-[#9ca3af] text-lg max-w-xl mx-auto">
          Fill out the form and we&apos;ll get back to you within 24 hours with a quote and available dates.
        </p>
      </section>

      <section className="py-12 px-6 pb-24 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase mb-4 font-medium">Contact</h3>
              <ul className="space-y-4">
                <li>
                  <p className="text-[#9ca3af] text-xs tracking-widest uppercase mb-1">Phone</p>
                  <a href="tel:+19785551234" className="text-white hover:text-[#c9a84c] transition-colors">
                    (978) 555-1234
                  </a>
                </li>
                <li>
                  <p className="text-[#9ca3af] text-xs tracking-widest uppercase mb-1">Email</p>
                  <a href="mailto:info@mandcluxurydetailing.com" className="text-white hover:text-[#c9a84c] transition-colors text-sm break-all">
                    info@mandcluxurydetailing.com
                  </a>
                </li>
                <li>
                  <p className="text-[#9ca3af] text-xs tracking-widest uppercase mb-1">Based In</p>
                  <p className="text-white">Beverly, MA</p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase mb-4 font-medium">Hours</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { day: "Monday – Friday", hours: "8am – 6pm" },
                  { day: "Saturday", hours: "8am – 5pm" },
                  { day: "Sunday", hours: "By appointment" },
                ].map((h) => (
                  <li key={h.day} className="flex justify-between gap-4">
                    <span className="text-[#9ca3af]">{h.day}</span>
                    <span className="text-white">{h.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase mb-4 font-medium">Service Area</h3>
              <p className="text-[#9ca3af] text-sm leading-relaxed">
                Beverly, Salem, Danvers, Peabody, Manchester, Gloucester, Marblehead, and surrounding North Shore communities.
              </p>
            </div>

            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="text-[#9ca3af] hover:text-[#c9a84c] transition-colors text-xs tracking-widest uppercase border border-[#2a2a2a] px-4 py-2 hover:border-[#c9a84c]">
                Instagram
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="text-[#9ca3af] hover:text-[#c9a84c] transition-colors text-xs tracking-widest uppercase border border-[#2a2a2a] px-4 py-2 hover:border-[#c9a84c]">
                Facebook
              </a>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="border border-[#c9a84c]/40 bg-[#111111] p-12 text-center">
                <div className="text-[#c9a84c] text-3xl mb-4">✦</div>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-white font-bold mb-3">
                  Request Received!
                </h3>
                <p className="text-[#9ca3af] text-sm leading-relaxed max-w-md mx-auto">
                  Thanks for reaching out. We&apos;ll get back to you within 24 hours to confirm your booking and details.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#9ca3af] text-xs tracking-widest uppercase mb-2">
                      Name <span className="text-[#c9a84c]">*</span>
                    </label>
                    <input
                      type="text" name="name" required placeholder="John Smith"
                      value={formData.name} onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-[#9ca3af] text-xs tracking-widest uppercase mb-2">
                      Phone <span className="text-[#c9a84c]">*</span>
                    </label>
                    <input
                      type="tel" name="phone" required placeholder="(978) 000-0000"
                      value={formData.phone} onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#9ca3af] text-xs tracking-widests uppercase mb-2">
                    Email <span className="text-[#c9a84c]">*</span>
                  </label>
                  <input
                    type="email" name="email" required placeholder="john@example.com"
                    value={formData.email} onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#9ca3af] text-xs tracking-widest uppercase mb-2">
                      Service Interested In
                    </label>
                    <select
                      name="service" value={formData.service} onChange={handleChange}
                      className={`${inputClass} appearance-none cursor-pointer`}
                    >
                      <option value="" className="bg-[#111111]">Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-[#111111]">{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[#9ca3af] text-xs tracking-widest uppercase mb-2">
                      Vehicle (Year, Make, Model)
                    </label>
                    <input
                      type="text" name="vehicle" placeholder="2022 BMW M3"
                      value={formData.vehicle} onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#9ca3af] text-xs tracking-widest uppercase mb-2">
                      Service Location / City
                    </label>
                    <input
                      type="text" name="location" placeholder="Beverly, MA"
                      value={formData.location} onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-[#9ca3af] text-xs tracking-widest uppercase mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date" name="preferredDate"
                      value={formData.preferredDate} onChange={handleChange}
                      className={`${inputClass} [color-scheme:dark]`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#9ca3af] text-xs tracking-widest uppercase mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    name="message" rows={5}
                    placeholder="Tell us about your vehicle's condition, any specific concerns, or questions..."
                    value={formData.message} onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#c9a84c] text-black py-4 text-sm tracking-widest uppercase font-semibold hover:bg-[#f5e6c8] transition-all duration-300"
                >
                  Submit Booking Request
                </button>
                <p className="text-[#9ca3af] text-xs text-center">
                  We&apos;ll respond within 24 hours to confirm availability and pricing.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
