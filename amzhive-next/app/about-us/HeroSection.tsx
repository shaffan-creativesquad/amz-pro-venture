"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <>
      <section className="w-full" style={{ backgroundColor: "#e2e2e2" }}>
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 pt-10 md:pt-16 pb-10 md:pb-16 flex flex-col items-start text-left">

          <motion.p className="font-medium mb-4 tracking-wide" style={{ fontSize: "16px", color: "#1e293b" }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            About Us
          </motion.p>

          <motion.h1 className="font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(26px, 4vw, 45px)", color: "#1e293b" }}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            We design and develop ecommerce{" "}
            <span style={{ color: "#E91C59" }}>websites and help brands</span>
            {" "}grow across digital marketing channels
          </motion.h1>

          <motion.p className="leading-relaxed w-full" style={{ fontSize: "16px", color: "#1e293b", lineHeight: "1.7" }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}>
            Pop in to visit the team in our Herndon, Lewisville or Miami offices, check up on your project progress in real time, or just say stop by to say hello and join for a brew or a cold drink. Or perhaps, get in touch to arrange a screen share call. See our contact information below, and feel free to drop by at any time. Alternatively, if you are considering sending a new project brief to get a full quote or if you wish to arrange a discovery briefing session, please complete this form.
          </motion.p>

        </div>
      </section>

      <style>{`
        .brief-btn {
          position: relative; overflow: hidden; display: inline-block;
          background-color: #1e293b; color: #ffffff; font-weight: 600;
          text-transform: uppercase; letter-spacing: 0.1em; padding: 16px 48px; font-size: 14px; text-decoration: none;
        }
        .brief-btn::before { content: ''; position: absolute; bottom: 0; left: 0; width: 100%; height: 0; background-color: #E91C59; transition: height 0.35s ease; z-index: 0; }
        .brief-btn:hover::before { height: 100%; }
        .brief-btn-inner { position: relative; z-index: 1; display: block; overflow: hidden; height: 1.2em; }
        .brief-btn-top { display: block; transition: transform 0.35s ease; }
        .brief-btn:hover .brief-btn-top { transform: translateY(-100%); }
        .brief-btn-bottom { display: block; position: absolute; top: 100%; left: 0; transition: transform 0.35s ease; }
        .brief-btn:hover .brief-btn-bottom { transform: translateY(-100%); }
      `}</style>
      <motion.section className="w-full py-16 flex items-center justify-center" style={{ backgroundColor: "#4f46e5" }}
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <a href="/contact-us" className="brief-btn">
          <span className="brief-btn-inner">
            <span className="brief-btn-top">SEND A BRIEF</span>
            <span className="brief-btn-bottom">SEND A BRIEF</span>
          </span>
        </a>
      </motion.section>
    </>
  );
}
