"use client";

import { motion } from "framer-motion";

import { useState } from "react";

const faqs = [
  {
    question: "Does this service include all A+ Content types?",
    answer: "Yes, our service includes the creation of standard A+ Content (up to 5 modules) using your provided assets. Premium A+ Content, which offers advanced features, is available as an upgrade for an additional fee if your brand is eligible as per Amazon’s criteria.",
  },
  {
    question: "Is PPC (Pay-Per-Click) advertising or Customer Support included in the core service?",
    answer: "No, these are specialized areas. While our core service focuses on comprehensive account management, both PPC Campaign Management and Customer Service (including buyer-seller messaging and review management) are offered as separate, specialized add-on services tailored to your specific needs.",
  },
  {
    question: "Will you create visuals for our Brand Story and Storefront?",
    answer: "If you already have branded visuals and design assets, we will expertly integrate them into your Brand Story and Storefront design. If you require new visual creation from scratch, we can provide this design service at an additional charge.",
  },
  {
    question: "How do you securely access our Amazon Seller Central account?",
    answer: "We prioritize your account security. We require child user access (secondary user permissions) via Amazon Seller Central with precisely the necessary permissions for us to perform our services. For individual accounts or those based in the EU, we will guide you through setting up secure remote access.",
  },
  {
    question: "Do you handle logistics, third-party storage, or direct fulfillment?",
    answer: "Our service includes comprehensive FBA Coordination, such as managing FBA shipment plans, optimizing inventory levels (IPI management), and recommending restock dates. However, we do not directly provide third-party storage facilities or handle physical shipping/fulfillment services ourselves.",
  },
  {
    question: "What is the typical onboarding process, and how long does it take?",
    answer: "Our onboarding begins with a deep dive audit of your account, followed by a collaborative session to define a customized action plan. The actual time will depend on the complexity of your catalog and the completeness of the provided information.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }} className="w-full py-20" style={{ backgroundColor: "#f4f4f4" }}>
      <div className="max-w-[1140px] mx-auto px-10 flex flex-col lg:flex-row gap-14">

        {/* Left */}
        <div className="lg:w-[480px] flex-shrink-0">
          <h2 className="font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "45px", color: "#000000" }}>
            Frequently Asked <span style={{ color: "#ff9900" }}>Questions</span>
          </h2>
          <p className="text-[#67768e] text-[16px] leading-relaxed mb-8">
            Got questions about our Amazon Account Management service? We have got the answers. If you do not find what you are looking for, feel free to reach out directly.
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
            <motion.div key={i} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.06 }} className="border-b border-gray-300">
              <button
                className="w-full flex items-center justify-between py-5 text-left gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-[16px]" style={{ color: "#000000" }}>{faq.question}</span>
                <span className="flex-shrink-0 text-[22px] font-light transition-transform duration-300" style={{ color: "#000000", transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
              </button>
              {open === i && (
                <p className="text-[#67768e] text-[15px] leading-relaxed pb-5">{faq.answer}</p>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}
