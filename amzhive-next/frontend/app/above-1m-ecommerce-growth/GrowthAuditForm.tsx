"use client";

import { useState } from "react";

export default function GrowthAuditForm() {
  const [fields, setFields] = useState({ name: "", email: "", phone: "", store_url: "" });
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFields((f) => ({ ...f, [e.target.name]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    try {
      await fetch("http://localhost:5000/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "growth",
          "Name": fields.name,
          "Email": fields.email,
          "Phone": fields.phone,
          "Store / Brand URL": fields.store_url,
        }),
      });
    } catch { /* show success anyway */ }
    setSending(false);
    setDone(true);
  }

  if (done) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "#ff9900" }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-bold text-[18px] mb-2" style={{ color: "#000000" }}>Request Received!</h3>
        <p className="text-[#67768e] text-[14px]">We&apos;ll reach out shortly with your growth audit.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1">
          <label className="text-[14px] font-semibold" style={{ color: "#000000" }}>Name</label>
          <input required type="text" name="name" value={fields.name} onChange={handleChange}
            className="border border-gray-200 rounded-lg px-4 py-3 text-[14px] bg-gray-50 focus:outline-none focus:border-[#ff9900]" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[14px] font-semibold" style={{ color: "#000000" }}>Email</label>
          <input required type="email" name="email" value={fields.email} onChange={handleChange}
            className="border border-gray-200 rounded-lg px-4 py-3 text-[14px] bg-gray-50 focus:outline-none focus:border-[#ff9900]" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[14px] font-semibold" style={{ color: "#000000" }}>Phone</label>
          <input required type="tel" name="phone" value={fields.phone} onChange={handleChange}
            className="border border-gray-200 rounded-lg px-4 py-3 text-[14px] bg-gray-50 focus:outline-none focus:border-[#ff9900]" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[14px] font-semibold" style={{ color: "#000000" }}>Store Or Brand URL</label>
          <input type="url" name="store_url" value={fields.store_url} onChange={handleChange}
            className="border border-gray-200 rounded-lg px-4 py-3 text-[14px] bg-gray-50 focus:outline-none focus:border-[#ff9900]" />
        </div>
      </div>
      <button type="submit" disabled={sending}
        className="w-full font-bold uppercase tracking-widest text-white rounded-lg py-4 text-[14px] hover:bg-black transition-colors disabled:opacity-70"
        style={{ backgroundColor: "#ff9900" }}>
        {sending ? "SENDING..." : "NEXT"}
      </button>
    </form>
  );
}
