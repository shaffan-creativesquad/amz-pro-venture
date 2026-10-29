"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is this service for private label sellers?",
    answer: "No, this service is specifically designed for Amazon FBA wholesale sellers who list products under existing ASINs. Our expertise lies in managing the unique complexities of wholesale operations, including inventory, pricing, and account health for established brands. We do not provide services for creating new private label listings or product development under this specific management plan.",
  },
  {
    question: "Do I need to own the brand to use this service?",
    answer: "No, you do not need to own the brand. This service is created precisely for wholesale sellers who operate without brand ownership. We focus on optimizing your ability to sell established, trusted brands by leveraging existing product listings and brand recognition on Amazon.",
  },
  {
    question: "Will you handle sourcing and supplier negotiation?",
    answer: "This core management service focuses on the efficient operation and growth of your already sourced products on Amazon. While sourcing and supplier negotiations are not included in the standard management plan, they can absolutely be provided as a separate, specialized add-on service upon request. We understand the importance of a strong supply chain for wholesale success.",
  },
  {
    question: "Do you offer reinstatement support if my account is suspended?",
    answer: "This Amazon FBA Wholesale Seller Account Management service is designed for active, operating accounts to maintain their health and performance. If your account unfortunately faces a suspension, we offer a separate, dedicated Amazon Account Reinstatement Service with specialized expertise to help you get back to selling.",
  },
  {
    question: "What is Amazon brand ungating?",
    answer: "Amazon brand ungating is the process of gaining approval from Amazon to sell products from specific brands or within restricted categories. Since 2016, Amazon has significantly expanded its list of restricted brands and categories. To sell a gated product, you need Amazon's explicit permission. Our Amazon ungating service streamlines this process, helping you submit the correct documentation to get approved faster.",
  },
  {
    question: "How long does it take for Amazon to ungate a brand or category?",
    answer: "The ungating process time can vary depending on Amazon's review queues and the specific brand or category. Typically, when handled by our Amazon ungating service, the process often completes within 1 to 3 business days after we've submitted your documents. While some cases can take a few weeks if Amazon requires additional information, having a good selling history and providing all the requested documents efficiently can significantly affect the time duration.",
  },
  {
    question: "What is your pricing model for FBA Wholesale Account Management?",
    answer: "Our pricing for FBA Wholesale Account Management is typically structured as a monthly retainer, which varies based on the scope of services needed and your sales volume. We'll discuss your specific business needs during our free consultation call to provide a custom quote that aligns with your goals.",
  },
  {
    question: "How do you ensure my inventory doesn't run out or become excessive?",
    answer: "We utilize a data-driven approach to inventory management and forecasting. Our team uses advanced tools and analytics to provide AI-driven restock recommendations, monitor your Inventory Performance Index (IPI) score, and proactively help with removal orders or stranded inventory. Our goal is to optimize your inventory levels to avoid stockouts while minimizing costly storage fees.",
  },
  {
    question: "Do you manage FBA shipments to Amazon warehouses?",
    answer: "No. While we handle inventory forecasting and replenishment recommendations, the physical preparation and shipment of products to Amazon FBA warehouses are managed by the seller or their designated prep center.",
  },
  {
    question: "Do you handle customer service or customer returns for my wholesale products?",
    answer: "For products fulfilled via Amazon FBA, Amazon handles the direct customer service and manages customer returns as part of their FBA service. Our management plan focuses on the operational aspects of your wholesale business within Seller Central, ensuring your listings, inventory, and account health are optimized for success.",
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
            Got questions about our FBA Wholesale Account Management service? We have got the answers. If you do not find what you are looking for, feel free to reach out directly.
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
