"use client";

import { useState } from "react";

export default function ConsultationSection() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      await fetch("http://localhost:5000/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "consultation",
          "Name": name,
          "Email": email,
          "Company": company,
          "Phone": phone,
          "Website": website,
          "Message": message,
        }),
      });
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    }
    setSending(false);
  }

  const inputClass = "w-full rounded-xl px-4 py-3.5 text-[14px] text-[#374151] outline-none transition-all";
  const inputStyle = { border: "1.5px solid #e5e7eb", background: "#f9fafb" };

  return (
    <section className="w-full relative overflow-hidden bg-white">
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-5" style={{ background: "#ff9900" }} />
      <div className="absolute -bottom-32 -right-16 w-[500px] h-[500px] rounded-full opacity-5" style={{ background: "#ff9900" }} />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 py-24 flex flex-col lg:flex-row items-center gap-16">

        {/* LEFT */}
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6" style={{ background: "rgba(255,153,0,0.15)", border: "1px solid rgba(255,153,0,0.3)" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#ff9900" }} />
            <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "#ff9900" }}>Consultation</span>
          </div>

          <h2
            className="font-bold leading-tight mb-8"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px, 4vw, 48px)", color: "#000000" }}
          >
            Boost Your Marketplace &amp;<br />
            <span style={{ color: "#ff9900" }}>Ecommerce Performance</span>
          </h2>

          <p className="text-[#67768e] text-[15px] leading-relaxed mb-10 max-w-[460px]">
            Book a strategy session with our experts and walk away with a clear action plan tailored to your business.
          </p>

          <div className="space-y-5">
            {[
              "Identify gaps in visibility, listing quality, and ad performance",
              "Get actionable steps to improve conversions and profitability",
              "Review your content, branding, and positioning for growth",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "#ff9900" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-4 h-4">
                    <path d="M4 10.5l4 4 8-8" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>
                <p className="text-[#374151] text-[15px] leading-relaxed pt-1">{item}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-6 mt-10 pt-10" style={{ borderTop: "1px solid #e5e7eb" }}>
            <div className="text-center">
              <p className="font-bold text-[22px]" style={{ color: "#000000" }}>1,200+</p>
              <p className="text-[12px]" style={{ color: "#67768e" }}>Sellers Helped</p>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div className="text-center">
              <p className="font-bold text-[22px]" style={{ color: "#000000" }}>$20M+</p>
              <p className="text-[12px]" style={{ color: "#67768e" }}>Revenue Managed</p>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div className="text-center">
              <p className="font-bold text-[22px]" style={{ color: "#000000" }}>100%</p>
              <p className="text-[12px]" style={{ color: "#67768e" }}>No Obligation</p>
            </div>
          </div>
        </div>

        {/* RIGHT — form card */}
        <div className="flex-shrink-0 w-full lg:w-[460px]">
          <div className="rounded-3xl p-8 sm:p-10" style={{ background: "#ffffff", boxShadow: "0 8px 40px rgba(0,0,0,0.1)", border: "1px solid #f0f0f0" }}>

            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "#ff9900" }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.72A2 2 0 012 .9h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="font-bold text-[16px]" style={{ color: "#000" }}>Get Your Consultation</p>
                <p className="text-[12px]" style={{ color: "#67768e" }}>No Obligation</p>
              </div>
            </div>

            {/* Step indicator */}
            <div className="flex items-center gap-2 my-6">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold transition-all duration-300"
                    style={{ background: step >= s ? "#ff9900" : "#e5e7eb", color: step >= s ? "#fff" : "#9ca3af" }}
                  >
                    {s}
                  </div>
                  {s < 3 && <div className="h-px w-8" style={{ background: step > s ? "#ff9900" : "#e5e7eb" }} />}
                </div>
              ))}
              <span className="ml-2 text-[12px]" style={{ color: "#67768e" }}>Step {step} of 3</span>
            </div>

            <div style={{ borderTop: "1px solid #f0f0f0" }} className="mb-6" />

            {submitted ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full bg-[#ff9900] flex items-center justify-center mx-auto mb-4">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-[#000000] text-xl font-bold mb-2">Message Sent!</h3>
                <p className="text-[#67768e] text-[14px]">We&apos;ll get back to you shortly.</p>
              </div>
            ) : step === 1 ? (
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-[12px] font-semibold mb-1.5" style={{ color: "#374151" }}>Your Name</label>
                  <input
                    type="text"
                    placeholder="e.g. John Smith"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputClass}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "#ff9900")}
                    onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-semibold mb-1.5" style={{ color: "#374151" }}>Email Address</label>
                  <input
                    type="email"
                    placeholder="e.g. john@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClass}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "#ff9900")}
                    onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                  />
                </div>
                <button
                  onClick={() => { if (name && email) setStep(2); }}
                  className="w-full rounded-xl py-4 font-bold text-[14px] uppercase tracking-widest text-white mt-2 hover:opacity-90 transition-opacity"
                  style={{ background: "#000000" }}
                >
                  NEXT
                </button>
                <p className="text-center text-[11px]" style={{ color: "#9ca3af" }}>
                  No credit card required · No obligation
                </p>
              </div>
            ) : step === 2 ? (
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-[12px] font-semibold mb-1.5" style={{ color: "#374151" }}>Company Name</label>
                  <input
                    type="text"
                    placeholder="Company name"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className={inputClass}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "#ff9900")}
                    onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-semibold mb-1.5" style={{ color: "#374151" }}>Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={inputClass}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "#ff9900")}
                    onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                  />
                </div>
                <div className="flex gap-3 mt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 rounded-xl py-4 font-bold text-[14px] uppercase tracking-widest transition-opacity hover:opacity-80"
                    style={{ background: "#000000", color: "#ffffff" }}
                  >
                    PREVIOUS
                  </button>
                  <button
                    type="button"
                    onClick={() => { if (company && phone) setStep(3); }}
                    className="flex-1 rounded-xl py-4 font-bold text-[14px] uppercase tracking-widest transition-opacity hover:opacity-90"
                    style={{ background: "#000000", color: "#ffffff" }}
                  >
                    NEXT
                  </button>
                </div>
                <p className="text-center text-[11px]" style={{ color: "#9ca3af" }}>
                  No credit card required · No obligation
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-[12px] font-semibold mb-1.5" style={{ color: "#374151" }}>Website</label>
                  <input
                    type="text"
                    placeholder="Website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    className={inputClass}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "#ff9900")}
                    onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-semibold mb-1.5" style={{ color: "#374151" }}>Message</label>
                  <textarea
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full rounded-xl px-4 py-3.5 text-[14px] text-[#374151] outline-none transition-all resize-y"
                    style={{ border: "1.5px solid #e5e7eb", background: "#f9fafb" }}
                    onFocus={(e) => (e.target.style.borderColor = "#ff9900")}
                    onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                  />
                </div>

                {error && <p className="text-red-500 text-[12px]">{error}</p>}

                <div className="flex gap-3 mt-1">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex-1 rounded-xl py-4 font-bold text-[14px] uppercase tracking-widest transition-opacity hover:opacity-80 whitespace-nowrap"
                    style={{ background: "#000000", color: "#ffffff" }}
                  >
                    PREVIOUS
                  </button>
                  <button
                    type="submit"
                    disabled={sending}
                    className="flex-1 rounded-xl py-4 font-bold text-[11px] uppercase tracking-wider transition-opacity hover:opacity-90 flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-70"
                    style={{ background: "#000000", color: "#ffffff" }}
                  >
                    {sending ? "SENDING..." : (
                      <>
                        SEND MY PROPOSAL
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 21 12" fill="none">
                          <path d="M1 5.5L19.5809 5.50003" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M14.6914 11.5L20.0002 6L14.6914 0.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-center text-[11px]" style={{ color: "#9ca3af" }}>
                  No credit card required · No obligation
                </p>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
