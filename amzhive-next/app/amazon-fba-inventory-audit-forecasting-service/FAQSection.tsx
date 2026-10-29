"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is Amazon FBA inventory management?",
    answer: "Amazon FBA inventory management involves tracking and optimizing your stock in Amazon's warehouses to meet customer demand. It includes auditing inventory, forecasting future needs, and managing stock levels to avoid issues like stockouts or overstocking. This ensures your products are available, rankings are protected, and costs are minimized.",
  },
  {
    question: "How often will I receive inventory reports?",
    answer: "You will receive a detailed inventory audit & forecast once a month, along with alerts if urgent action is required. The reports provide comprehensive overviews of your inventory performance, such as health, stock status, risk, and opportunities. Forecast and restock recommendations include updated order quantities and timing suggestions to keep your FBA account balanced.",
  },
  {
    question: "Can you guarantee I'll never run out of stock?",
    answer: "We provide highly accurate forecasts and recommendations, but actual restocking depends on supplier lead times, purchase decisions, and logistics. Our role is to give you the data and guidance needed to minimize risk.",
  },
  {
    question: "What if my sales are seasonal?",
    answer: "Our forecasts adjust for seasonality and sales spikes, such as the Q4 holiday rush and Prime Day. We recommend sharing past seasonal sales data for maximum accuracy.",
  },
  {
    question: "Do you place purchase orders on my behalf?",
    answer: "Yes, we can help you navigate this issue by identifying the root cause and guiding you on the proper steps to resolve issues related to the linked account suspension.",
  },
  {
    question: "What if I sell new products without much history?",
    answer: "For new ASINs, we use competitor data, category trends, and early sales velocity to provide forecasts. Accuracy improves as more data becomes available.",
  },
  {
    question: "Is this service automated or human-managed?",
    answer: "We take a hybrid approach. We integrate AI automation with expert oversight and recommendations from our team. This balance helps us maintain accuracy and provide quick results.",
  },
  {
    question: "How to avoid stockouts with Amazon inventory tools?",
    answer: "Using AI-powered tools like Jungle Scout or Helium 10, you can forecast demand based on sales trends, seasonality, and lead times. These tools provide restock alerts and safety stock calculations to ensure you reorder products on time, preventing stockouts and maintaining sales momentum.",
  },
  {
    question: "How to optimize Amazon inventory for better sales?",
    answer: "Optimize inventory by conducting regular audits to identify overstocked or slow-moving items, using AI-driven forecasting for accurate restocking, and monitoring sales trends. This keeps your products in stock, reduces storage fees, and boosts rankings, leading to better sales and customer trust.",
  },
  {
    question: "What are the costs of Amazon inventory management solutions?",
    answer: "The cost of our Amazon FBA Inventory Audit & Forecasting Service varies based on your subscription plan. We provide customized solutions to help you manage inventory effectively and reduce unnecessary expenses.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full py-20" style={{ backgroundColor: "#f4f4f4" }}>
      <div className="max-w-[1140px] mx-auto px-10 flex flex-col lg:flex-row gap-14">

        {/* Left */}
        <div className="lg:w-[480px] flex-shrink-0">
          <h2 className="font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "45px", color: "#1e293b" }}>
            Frequently Asked <span style={{ color: "#E91C59" }}>Questions</span>
          </h2>
          <p className="text-[#67768e] text-[16px] leading-relaxed mb-8">
            Got questions about our Amazon FBA Inventory Audit &amp; Forecasting service? We have got the answers. If you do not find what you are looking for, feel free to reach out directly.
          </p>
          <a href="/contact-us" className="svc-btn">
            <span className="svc-btn-inner">
              <span className="svc-btn-top">Lets Talk</span>
              <span className="svc-btn-bottom">Lets Talk</span>
            </span>
          </a>
        </div>

        {/* Right — Accordion */}
        <div className="flex-1">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-300">
              <button
                className="w-full flex items-center justify-between py-5 text-left gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-[16px]" style={{ color: "#1e293b" }}>{faq.question}</span>
                <span className="flex-shrink-0 text-[22px] font-light transition-transform duration-300" style={{ color: "#1e293b", transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
              </button>
              {open === i && (
                <p className="text-[#67768e] text-[15px] leading-relaxed pb-5">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
