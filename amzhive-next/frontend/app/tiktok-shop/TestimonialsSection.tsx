"use client";

import { motion } from "framer-motion";

const row1 = [
  { name: "Olivia Harper",    text: "I started my Amazon business with little knowledge, but AMZ ProVenture helped me every step of the way. They set up my account, improved my listings, and managed my ads. Thanks to them, my sales grew quickly!" },
  { name: "James Thompson",   text: "We were having trouble managing our inventory and shipping. AMZ ProVenture helped us with FBA services and inventory planning. They made everything more organized and saved us time and money." },
  { name: "Sarah Mitchell",   text: "AMZ ProVenture completely changed our product listings. We went from having no visibility to showing up on the first page of search results. Their help with Amazon SEO and writing good descriptions was key." },
  { name: "Brian Knight",     text: "After having my account suspended, I was stuck. I contacted AMZ ProVenture, and they worked fast to get everything back in line. They helped us stay compliant and avoid future issues." },
  { name: "Rebecca Lee",      text: "At the start, I didn't know how to set up my brand on Amazon. AMZ ProVenture helped me build a brand store, create better content, and run ads. Their support has made a big difference!" },
  { name: "Daniel Perez",     text: "We had problems with customer complaints and bad reviews. AMZ ProVenture took over customer service and handled reviews. They turned things around, and now we have a much better reputation." },
];

const row2 = [
  { name: "Lisa Williams",    text: "AMZ ProVenture helped us turn our Amazon business around. They helped us find good suppliers, improve our listings, and run ads that fit our budget. Our sales went up by 40% in just one month!" },
  { name: "Mark Stevenson",   text: "At first, I wasn't sure about getting outside help for our Amazon store, but AMZ ProVenture proved me wrong. They handled everything from product research to shipping. Now, our business is growing steadily." },
  { name: "Jessica Daniels",  text: "AMZ ProVenture helped us improve our product listings and made our ads more effective. Now we're getting more attention, and our sales are going up. I'm very happy with their support." },
  { name: "Steven Green",     text: "We had issues with shipping delays, and our product listings weren't bringing in customers. AMZ ProVenture fixed both problems. Their help with FBA and listing updates has made a huge difference." },
  { name: "Michelle Foster",  text: "Working with AMZ ProVenture was the best decision we made. They helped us with Amazon ads and improving our product pages. Thanks to them, we've seen a clear increase in sales." },
  { name: "Emma Harrison",    text: "We needed help to organize our Amazon store, and AMZ ProVenture delivered. From FBA preparation to managing account health, they took care of everything. It's great to know they've got it all under control." },
];


function Card({ name, text }: { name: string; text: string }) {
  return (
    <div
      className="flex-shrink-0 w-[290px] rounded-2xl flex flex-col"
      style={{ background: "#ffffff", border: "1px solid #ebebeb", boxShadow: "0 2px 14px rgba(0,0,0,0.07)" }}
    >
      {/* Top content */}
      <div className="p-5 flex flex-col gap-4 flex-1">
        {/* Avatar + name + verified */}
        <div className="flex items-center gap-3">
          {/* Generic gray avatar */}
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: "#e5e7eb" }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#9ca3af">
              <circle cx="12" cy="8" r="4"/>
              <path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8" fill="#9ca3af"/>
            </svg>
          </div>
          <span className="font-bold text-[14px]" style={{ color: "#000000", fontFamily: "var(--font-poppins), Poppins, sans-serif" }}>
            {name}
          </span>
          {/* Blue verified tick */}
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" className="flex-shrink-0">
            <circle cx="8.5" cy="8.5" r="8.5" fill="#3b82f6"/>
            <path d="M5 8.5l2.5 2.5 4.5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        {/* Review text */}
        <p className="text-[13px] leading-relaxed" style={{ color: "#6b7280" }}>{text}</p>
      </div>

      {/* Divider + badge */}
      <div className="px-5 pb-4 pt-3" style={{ borderTop: "1px solid #f0f0f0" }}>
        <img src="/favicon-icon.png" alt="AMZ ProVenture" className="h-8 w-auto" />
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const doubled1 = [...row1, ...row1];
  const doubled2 = [...row2, ...row2];

  return (
    <section className="w-full py-20 bg-white overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-5 md:px-10 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center font-bold"
          style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(24px, 3.5vw, 40px)", color: "#000000" }}
        >
          See what people say about <span style={{ color: "#ff9900" }}>AMZ ProVenture</span>
        </motion.h2>
      </div>

      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-left  { animation: marquee-left  30s linear infinite; }
        .marquee-right { animation: marquee-right 30s linear infinite; }
      `}</style>

      {/* Row 1 — scrolls left */}
      <div className="mb-5 overflow-hidden">
        <div className="marquee-left flex gap-4 w-max">
          {doubled1.map((t, i) => <Card key={i} {...t} />)}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="overflow-hidden">
        <div className="marquee-right flex gap-4 w-max">
          {doubled2.map((t, i) => <Card key={i} {...t} />)}
        </div>
      </div>

    </section>
  );
}
