"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "What is Amazon Vendor Central, and how does it differ from Seller Central?",
    answer: "Vendor Central is an invite only platform where you sell your goods directly to Amazon (1P) and Amazon then resells them to the customer. In Seller Central (3P) you sell directly to the customer. Vendor Central has the benefit of larger bulk orders and access to some exclusive programmes, but Amazon sets the price and the vendor is at the mercy of things like chargebacks and longer payment terms.",
  },
  {
    question: "Chargebacks are my biggest problem. How do you help?",
    answer: "We dispute invalid chargebacks, trace them back to the root cause and then build SOPs to stop the same thing happening again and again, thus protecting your margins over time.",
  },
  {
    question: "How do you forecast inventory and avoid stockouts or overstock?",
    answer: "We combine Amazon Retail Analytics with AI-assisted forecasting to forecast demand and thus ensure your POs are correct and your inventory is balanced.",
  },
  {
    question: "Can you help negotiate our annual vendor agreement with Amazon?",
    answer: "Yes. As your Vendor Central consultant we'll get the data, the benchmarks and the strategy in place so you can go into negotiations with confidence and with a real understanding of what you're negotiating for.",
  },
  {
    question: "What results can I expect from your Vendor Central services?",
    answer: "Every account is different, but with good Amazon Vendor Central management you'll generally see fewer chargebacks, cleaner books, better inventory and better margins.",
  },
  {
    question: "What does onboarding with AMZ Pro Venture look like?",
    answer: "We do a full account audit to start with, then we'll share our findings and a clear action plan. Once access is in place we'll start on the highest impact bits first.",
  },
  {
    question: "How do you deal with new product launches or catalog expansions?",
    answer: "We set up new items correctly, optimize their listings, and coordinate POs and inventory so new products launch properly and get off the ground quickly.",
  },
  {
    question: "How do we keep our Vendor Central account compliant?",
    answer: "We're monitoring account health 24/7, responding to any flags immediately and providing you with the documentation and Plans of Action as and when Amazon raises any issues.",
  },
  {
    question: "Will I still have full access to and control of my account?",
    answer: "Absolutely. We operate purely via child user access. You're the account owner and you can at any time adjust or remove our access.",
  },
  {
    question: "Does your service include advertising management for Vendor Central?",
    answer: "We can provide advertising management on its own separate from our Vendor Central agency services. A lot of vendors will combine the two and we're more than happy to recommend the appropriate set up for your objectives.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }} className="w-full py-20" style={{ backgroundColor: "#f4f4f4" }}>
      <div className="max-w-[1280px] mx-auto px-10 flex flex-col lg:flex-row gap-14">

        {/* Left */}
        <div className="lg:w-[480px] flex-shrink-0 text-center lg:text-left">
          <h2 className="font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px, 5vw, 45px)", color: "#000000" }}>
            Frequently Asked <span style={{ color: "#ff9900" }}>Questions</span>
          </h2>
          <p className="text-[#67768e] text-[15px] leading-relaxed mb-8">
            Have questions about our Amazon 1P vendor services? You&apos;ll find clear answers here. If not, our team is always happy to talk.
          </p>
          <div className="flex justify-center lg:justify-start">
            <a href="/contact-us" className="svc-btn">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">Let&apos;s Talk</span>
                <span className="svc-btn-bottom">Let&apos;s Talk</span>
              </span>
            </a>
          </div>
        </div>

        {/* Right — Accordion */}
        <div className="flex-1">
          {faqs.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.06 }} className="border-b border-gray-300">
              <button
                className="w-full flex items-center justify-between py-5 text-left gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-[15px]" style={{ color: "#000000" }}>{faq.question}</span>
                <span className="flex-shrink-0 text-[18px] font-light transition-transform duration-300" style={{ color: "#000000", transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
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
