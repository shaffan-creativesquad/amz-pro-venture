"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CultureSection() {
  return (
    <section className="w-full" style={{ backgroundColor: "#000000" }}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-14 md:py-20 flex flex-col md:flex-row gap-8 md:gap-16 items-start">

        {/* Left */}
        <motion.div className="w-full md:w-1/2 flex flex-col gap-6"
          initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.65 }}>
          <p className="font-semibold uppercase tracking-widest" style={{ fontSize: "13px", color: "#67768e" }}>
            Our Culture
          </p>
          <h2
            className="font-bold leading-tight"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "24px", color: "#ffffff" }}
          >
            We don't just get on board with a project, we get invested in achieving our clients' goals as if they were our own.
          </h2>
          <div className="relative w-full" style={{ minHeight: "480px" }}>
            <Image
              src="/image-27-2.png"
              alt="Our Culture"
              fill
              unoptimized
              className="object-cover rounded-sm"
            />
          </div>
        </motion.div>

        {/* Right */}
        <motion.div className="w-full md:w-1/2 flex flex-col gap-5 md:pt-10"
          initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.65, delay: 0.15 }}>
          <p style={{ fontSize: "15px", color: "#a0aec0", lineHeight: "1.8" }}>
            When you work with AMZ Pro Venture you don't just get access to digital experts, you get access to our people and our values as a collaborative, supportive team of talented individuals who have been working together since 2012. We don't just get on board with a project, we get invested in achieving our clients' goals as if they were our own.
          </p>
          <p style={{ fontSize: "15px", color: "#a0aec0", lineHeight: "1.8" }}>
            We know who we are and we know what we're good at, that's why we don't pretend to be digital giants. We're your local agency committed to bringing your project to life.
          </p>
          <p style={{ fontSize: "15px", color: "#a0aec0", lineHeight: "1.8" }}>
            Fancy a cup of coffee or a quick think tank? We want to chat with you about your business so we can understand what it is you're looking to achieve. Once we've noted this, we pass on the particulars to our team of experts who make the magic happen, keeping you in the loop all the way.
          </p>
          <p style={{ fontSize: "15px", color: "#a0aec0", lineHeight: "1.8" }}>
            Our extensive experience in building interactive digital products has taught us that each project is different to the next, but whatever the unique requirements we tackle the challenge using our three-staged approach: Create, Develop, Grow.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
