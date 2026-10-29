"use client";

import { motion } from "framer-motion";

import { useState } from "react";

const platforms = ["Shopify", "Amazon", "Walmart", "eBay", "Not sure yet", "Others"];
const primaryPlatforms = ["Shopify", "Amazon", "Walmart", "eBay", "Others"];
const hurdles = [
  "Order Processing", "Order Verification",
  "Pricing Strategies", "Sales",
  "Catalog Management", "ASIN/UPC Collections",
  "Returns", "Claims & Chargebacks",
  "Manual Redundant Tasks", "Other",
];

export default function AuditFormSection() {
  const [hasStore, setHasStore] = useState<string>("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [primaryPlatform, setPrimaryPlatform] = useState("");
  const [selectedHurdles, setSelectedHurdles] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function toggleCheckbox(list: string[], setList: (v: string[]) => void, value: string) {
    setList(list.includes(value) ? list.filter((i) => i !== value) : [...list, value]);
  }

  function validate() {
    const e: Record<string, string> = {};
    if (!hasStore) e.hasStore = "Please choose one.";
    if (!fullName.trim()) e.fullName = "Please enter your name.";
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) e.email = "Please enter a valid email address.";
    if (!phone.trim()) e.phone = "Please enter a valid phone number.";
    if (selectedPlatforms.length === 0) e.platforms = "Select at least one platform.";
    if (!primaryPlatform) e.primaryPlatform = "Please choose your primary platform.";
    if (selectedHurdles.length === 0) e.hurdles = "Select at least one.";
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSubmitted(true);
  }

  function handleReset() {
    setHasStore(""); setFullName(""); setEmail(""); setPhone("");
    setSelectedPlatforms([]); setPrimaryPlatform(""); setSelectedHurdles([]);
    setErrors({}); setSubmitted(false);
  }

  const inputClass =
    "w-full bg-white border border-[#e2e6ed] text-[#000000] text-sm rounded-[7px] px-4 py-3 outline-none focus:border-[#ff9900] transition-colors placeholder-[#b0bac9]";
  const labelClass = "block text-[11px] font-bold tracking-widest text-[#ff9900] mb-2 uppercase";
  const sectionHeadClass =
    "text-[12px] font-bold tracking-widest text-[#000000] uppercase pb-3 border-b border-[#e2e6ed]";
  const errorClass = "text-[#ff9900] text-[12px] mt-1";

  if (submitted) {
    return (
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }} className="w-full py-16 px-4 bg-[#F2F5F7]">
        <div className="max-w-[780px] mx-auto bg-white rounded-2xl p-10 text-center border border-[#e2e6ed] shadow-sm">
          <div className="w-14 h-14 rounded-full bg-[#ff9900] flex items-center justify-center mx-auto mb-5">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3 className="text-[#000000] text-2xl font-bold mb-3">Details Submitted!</h3>
          <p className="text-[#67768e] mb-8">Thank you! We&apos;ll be in touch with your free operations audit shortly.</p>
          <button onClick={handleReset} className="bg-[#ff9900] text-white px-8 py-3 rounded-[7px] font-semibold hover:bg-black transition-colors">
            Submit Another
          </button>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section className="w-full py-16 px-4 bg-[#F2F5F7]">
      <div className="max-w-[780px] mx-auto bg-white rounded-2xl overflow-hidden border border-[#e2e6ed] shadow-sm">

        {/* Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-[#e2e6ed] bg-white">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-[7px] bg-[#ff9900]/10 flex items-center justify-center">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M9 9h6M9 13h6M9 17h4" />
              </svg>
            </div>
            <h2 className="text-[#000000] font-bold text-[17px]">Get your free operations audit</h2>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="px-8 py-8 space-y-8">

          {/* Store question */}
          <div>
            <p className="text-[11px] font-bold tracking-widest text-[#000000] uppercase mb-1 flex flex-wrap items-center gap-2">
              DO YOU HAVE A STORE YET?
              {errors.hasStore && (
                <span className="text-[#ff9900] normal-case font-normal tracking-normal text-[12px]">{errors.hasStore}</span>
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-3">
              {["Yes, I already sell", "No, I'm starting from zero"].map((opt) => (
                <label
                  key={opt}
                  className={`flex-1 flex items-center gap-3 px-4 py-3 rounded-[7px] border cursor-pointer transition-colors ${
                    hasStore === opt
                      ? "border-[#ff9900] bg-[#ff9900]/5"
                      : "border-[#e2e6ed] bg-white hover:border-[#ff9900]/40"
                  }`}
                >
                  <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${hasStore === opt ? "border-[#ff9900]" : "border-[#cbd5e0]"}`}>
                    {hasStore === opt && <span className="w-2 h-2 rounded-full bg-[#ff9900]" />}
                  </span>
                  <span className="text-[#67768e] text-sm">{opt}</span>
                  <input type="radio" className="sr-only" value={opt} checked={hasStore === opt}
                    onChange={() => { setHasStore(opt); setErrors((p) => ({ ...p, hasStore: "" })); }} />
                </label>
              ))}
            </div>
          </div>

          {/* Client Details */}
          <div>
            <p className={sectionHeadClass}>Client Details</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">
              <div>
                <label className={labelClass}>Full Name *</label>
                <input className={inputClass} placeholder="" value={fullName}
                  onChange={(e) => { setFullName(e.target.value); setErrors((p) => ({ ...p, fullName: "" })); }} />
                {errors.fullName && <p className={errorClass}>{errors.fullName}</p>}
              </div>
              <div>
                <label className={labelClass}>Business Email *</label>
                <input className={inputClass} placeholder="" type="email" value={email}
                  onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: "" })); }} />
                {errors.email && <p className={errorClass}>{errors.email}</p>}
              </div>
              <div>
                <label className={labelClass}>Phone Number *</label>
                <input className={inputClass} placeholder="" type="tel" value={phone}
                  onChange={(e) => { setPhone(e.target.value); setErrors((p) => ({ ...p, phone: "" })); }} />
                {errors.phone && <p className={errorClass}>{errors.phone}</p>}
              </div>
            </div>
          </div>

          {/* Infrastructure Stack */}
          <div>
            <p className={sectionHeadClass}>Infrastructure Stack</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">

              {/* Platforms Used */}
              <div>
                <label className={`${labelClass} flex flex-wrap items-center gap-2`}>
                  Platforms Used *
                  {errors.platforms && (
                    <span className="text-[#ff9900] normal-case font-normal tracking-normal text-[12px]">{errors.platforms}</span>
                  )}
                </label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {platforms.map((p) => (
                    <label key={p}
                      className={`flex items-center gap-2 px-3 py-2 rounded-[7px] border cursor-pointer transition-colors ${
                        selectedPlatforms.includes(p)
                          ? "border-[#ff9900] bg-[#ff9900]/5"
                          : "border-[#e2e6ed] bg-white hover:border-[#ff9900]/40"
                      }`}
                    >
                      <span className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 transition-colors ${selectedPlatforms.includes(p) ? "border-[#ff9900] bg-[#ff9900]" : "border-[#cbd5e0] bg-white"}`}>
                        {selectedPlatforms.includes(p) && (
                          <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                            <polyline points="2 6 5 9 10 3" />
                          </svg>
                        )}
                      </span>
                      <span className="text-[#67768e] text-sm">{p}</span>
                      <input type="checkbox" className="sr-only" checked={selectedPlatforms.includes(p)}
                        onChange={() => { toggleCheckbox(selectedPlatforms, setSelectedPlatforms, p); setErrors((prev) => ({ ...prev, platforms: "" })); }} />
                    </label>
                  ))}
                </div>
              </div>

              {/* Primary Platform */}
              <div>
                <label className={labelClass}>Primary Platform *</label>
                <select className={`${inputClass} appearance-none cursor-pointer`} value={primaryPlatform}
                  onChange={(e) => { setPrimaryPlatform(e.target.value); setErrors((prev) => ({ ...prev, primaryPlatform: "" })); }}>
                  <option value="" disabled>Select primary...</option>
                  {primaryPlatforms.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
                {errors.primaryPlatform && <p className={errorClass}>{errors.primaryPlatform}</p>}
              </div>
            </div>
          </div>

          {/* Primary Operational Hurdles */}
          <div>
            <p className={`${sectionHeadClass} flex flex-wrap items-center gap-2`}>
              Primary Operational Hurdles *
              {errors.hurdles && (
                <span className="text-[#ff9900] normal-case font-normal tracking-normal text-[12px]">{errors.hurdles}</span>
              )}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {hurdles.map((h) => (
                <label key={h}
                  className={`flex items-center gap-3 px-4 py-3 rounded-[7px] border cursor-pointer transition-colors ${
                    selectedHurdles.includes(h)
                      ? "border-[#ff9900] bg-[#ff9900]/5"
                      : "border-[#e2e6ed] bg-white hover:border-[#ff9900]/40"
                  }`}
                >
                  <span className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 transition-colors ${selectedHurdles.includes(h) ? "border-[#ff9900] bg-[#ff9900]" : "border-[#cbd5e0] bg-white"}`}>
                    {selectedHurdles.includes(h) && (
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                        <polyline points="2 6 5 9 10 3" />
                      </svg>
                    )}
                  </span>
                  <span className="text-[#67768e] text-sm">{h}</span>
                  <input type="checkbox" className="sr-only" checked={selectedHurdles.includes(h)}
                    onChange={() => { toggleCheckbox(selectedHurdles, setSelectedHurdles, h); setErrors((prev) => ({ ...prev, hurdles: "" })); }} />
                </label>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-4 pt-2 border-t border-[#e2e6ed]">
            <button type="button" onClick={handleReset}
              className="mt-4 px-6 py-2.5 rounded-[7px] border border-[#e2e6ed] text-[#67768e] text-sm font-semibold hover:border-[#ff9900]/50 hover:text-[#ff9900] transition-colors">
              Cancel
            </button>
            <button type="submit"
              className="mt-4 px-8 py-2.5 rounded-[7px] bg-[#ff9900] text-white text-sm font-semibold hover:bg-black transition-colors">
              Send my details
            </button>
          </div>

        </form>
      </div>
    </motion.section>
  );
}
