"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const budgetOptions = [
  { label: "$1,000",  value: 1000  },
  { label: "$2,000",  value: 2000  },
  { label: "$3,000",  value: 3000  },
  { label: "$5,000+", value: 5000  },
];

const productOptions = [
  { label: "Lightweight product",          revenueMultiplier: 2.6, margin: 0.38 },
  { label: "Branded private label product", revenueMultiplier: 3.0, margin: 0.45 },
  { label: "Everyday Essentials",           revenueMultiplier: 2.2, margin: 0.32 },
  { label: "Not sure yet",                  revenueMultiplier: 2.4, margin: 0.35 },
];

const involvementOptions = [
  { label: "Hands-off",     efficiencyMultiplier: 0.75 },
  { label: "Want to learn", efficiencyMultiplier: 1.00 },
  { label: "Not sure yet",  efficiencyMultiplier: 0.88 },
];

function fmt(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

export default function ROICalculatorSection() {
  const [budgetIdx,      setBudgetIdx]      = useState(0);
  const [productIdx,     setProductIdx]     = useState(0);
  const [involvementIdx, setInvolvementIdx] = useState(0);
  const [goal,           setGoal]           = useState(1000);
  const [result,         setResult]         = useState<null | { revenue: number; profit: number; roi: number }>(null);

  function calculate() {
    const budget     = budgetOptions[budgetIdx].value;
    const product    = productOptions[productIdx];
    const inv        = involvementOptions[involvementIdx];
    const goalBoost  = goal * 0.08;
    const revenue    = budget * product.revenueMultiplier * inv.efficiencyMultiplier + goalBoost;
    const profit     = revenue * product.margin;
    const roi        = ((profit - budget) / budget) * 100;
    setResult({ revenue, profit, roi });
  }

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-10">

        <div className="flex flex-col lg:flex-row gap-14 items-start">

          {/* LEFT — heading */}
          <div className="flex-1 lg:pt-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="font-bold leading-tight mb-5"
              style={{
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                fontSize: "clamp(26px, 3.5vw, 42px)",
                color: "#000000",
              }}
            >
              Shopify ROI Calculator:{" "}
              <span style={{ color: "#ff9900" }}>See How Much You Could Earn</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-[#67768e] text-[15px] leading-relaxed"
            >
              We&apos;ll help you estimate your potential profit, even if you don&apos;t know where to start.
            </motion.p>
          </div>

          {/* RIGHT — calculator card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="w-full lg:w-[520px] flex-shrink-0 rounded-2xl p-8"
            style={{ border: "1.5px solid #e5e7eb", background: "#ffffff" }}
          >

            {/* Budget */}
            <div className="mb-5">
              <label className="block text-[13px] font-semibold text-[#374151] mb-2">
                What&apos;s Your Monthly Budget to Invest?
              </label>
              <select
                value={budgetIdx}
                onChange={(e) => { setBudgetIdx(Number(e.target.value)); setResult(null); }}
                className="w-full rounded-lg px-4 py-3 text-[14px] text-[#374151] outline-none appearance-none cursor-pointer"
                style={{ border: "1.5px solid #d1d5db", background: "#f9fafb" }}
              >
                {budgetOptions.map((o, i) => (
                  <option key={o.label} value={i}>{o.label}</option>
                ))}
              </select>
            </div>

            {/* Product type */}
            <div className="mb-5">
              <label className="block text-[13px] font-semibold text-[#374151] mb-2">
                What Type of Product Do You Want to Sell?
              </label>
              <select
                value={productIdx}
                onChange={(e) => { setProductIdx(Number(e.target.value)); setResult(null); }}
                className="w-full rounded-lg px-4 py-3 text-[14px] text-[#374151] outline-none appearance-none cursor-pointer"
                style={{ border: "1.5px solid #d1d5db", background: "#f9fafb" }}
              >
                {productOptions.map((o, i) => (
                  <option key={o.label} value={i}>{o.label}</option>
                ))}
              </select>
            </div>

            {/* Involvement */}
            <div className="mb-6">
              <label className="block text-[13px] font-semibold text-[#374151] mb-2">
                How Involved Do You Want to Be?
              </label>
              <select
                value={involvementIdx}
                onChange={(e) => { setInvolvementIdx(Number(e.target.value)); setResult(null); }}
                className="w-full rounded-lg px-4 py-3 text-[14px] text-[#374151] outline-none appearance-none cursor-pointer"
                style={{ border: "1.5px solid #d1d5db", background: "#f9fafb" }}
              >
                {involvementOptions.map((o, i) => (
                  <option key={o.label} value={i}>{o.label}</option>
                ))}
              </select>
            </div>

            {/* Goal slider */}
            <div className="mb-7">
              <label className="block text-[13px] font-semibold text-[#374151] mb-2">
                Estimated Monthly Goal:{" "}
                <span style={{ color: "#ff9900" }}>{goal.toLocaleString()}</span>
              </label>
              <input
                type="range"
                min={500}
                max={50000}
                step={500}
                value={goal}
                onChange={(e) => { setGoal(Number(e.target.value)); setResult(null); }}
                className="w-full cursor-pointer"
                style={{ accentColor: "#ff9900" }}
              />
              <div className="flex justify-between text-[11px] text-[#9ca3af] mt-1">
                <span>$500</span><span>$50,000</span>
              </div>
            </div>

            {/* Calculate button */}
            <button
              onClick={calculate}
              className="w-full rounded-full py-3 font-bold text-[15px] text-white transition-opacity hover:opacity-90"
              style={{ background: "#ff9900" }}
            >
              Calculate
            </button>

            {/* Result */}
            <AnimatePresence>
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-5 rounded-2xl px-5 py-4"
                  style={{ background: "#f0fdf4", border: "1.5px solid #bbf7d0" }}
                >
                  <p className="text-[14px] leading-relaxed" style={{ color: "#374151" }}>
                    🎉 With a{" "}
                    <span className="font-semibold" style={{ color: "#15803d" }}>
                      {budgetOptions[budgetIdx].label} starting budget
                    </span>{" "}
                    and a{" "}
                    <span className="font-semibold" style={{ color: "#15803d" }}>
                      {productOptions[productIdx].label.toLowerCase()}
                    </span>
                    , you could earn up to{" "}
                    <span className="font-semibold" style={{ color: "#15803d" }}>
                      {fmt(result.profit)} in net profit per month
                    </span>{" "}
                    — with the right product, strategy, and listing.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
