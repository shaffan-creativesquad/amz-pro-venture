"use client";

import { motion } from "framer-motion";

export default function ContactDetailsSection() {
  return (
    <section className="w-full" style={{ backgroundColor: "#000000" }}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-16 flex flex-col gap-10">

        {/* Top */}
        <motion.div className="flex flex-col gap-3"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}>
          <p className="font-semibold" style={{ fontSize: "15px", color: "#ff9900" }}>
            Contact Details
          </p>
          <h2
            className="font-bold leading-tight"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(22px, 4vw, 42px)", color: "#ffffff" }}
          >
            Telephone : (206) 704-6094
          </h2>
          <h2
            className="font-bold leading-tight"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(22px, 4vw, 42px)", color: "#ffffff" }}
          >
            email : info@amzproventure.com
          </h2>
        </motion.div>

        {/* Office columns */}
        <motion.div className="flex flex-col md:flex-row items-start gap-6 md:gap-0"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="flex-1 flex flex-col gap-2 md:pr-8">
            <p className="font-bold" style={{ fontSize: "16px", color: "#ffffff" }}>Sales & Operations</p>
            <p style={{ fontSize: "15px", color: "#a0aec0" }}>Herndon VA 20171</p>
          </div>
          <div className="hidden md:block" style={{ width: "1px", backgroundColor: "#3a3f4e", alignSelf: "stretch" }} />
          <div className="flex-1 flex flex-col gap-2 md:px-8">
            <p className="font-bold" style={{ fontSize: "16px", color: "#ffffff" }}>Back Office Support</p>
            <p style={{ fontSize: "15px", color: "#a0aec0" }}>Miami FL, 33131</p>
          </div>
          <div className="hidden md:block" style={{ width: "1px", backgroundColor: "#3a3f4e", alignSelf: "stretch" }} />
          <div className="flex-1 flex flex-col gap-2 md:pl-8">
            <p className="font-bold" style={{ fontSize: "16px", color: "#ffffff" }}>Registered Office</p>
            <p style={{ fontSize: "15px", color: "#a0aec0" }}>Lewisville TX, 75056</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
