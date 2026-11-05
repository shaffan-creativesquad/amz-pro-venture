"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/Mobile-report-01.png",
  "/Mobile-report-02.png",
  "/Mobile-report-03.png",
  "/Mobile-report-04.png",
  "/Mobile-report-05.png",
  "/Mobile-report-06.png",
];

const total = images.length;
const BASE_W = 210;
const BASE_H = 430;
const FRAME = 13;
const SPACING = 230;

function getConfig(offset: number) {
  const abs = Math.abs(offset);
  if (abs === 0) return { scale: 1.00, opacity: 1.00, zIndex: 5 };
  if (abs === 1) return { scale: 0.72, opacity: 0.85, zIndex: 3 };
  if (abs === 2) return { scale: 0.54, opacity: 0.60, zIndex: 2 };
  return              { scale: 0.40, opacity: 0.00, zIndex: 1 };
}

function PhoneMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div style={{
      width: "100%", height: "100%",
      borderRadius: "20px",
      overflow: "hidden",
      position: "relative",
      boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
    }}>
      <Image src={src} alt={alt} fill unoptimized className="object-cover object-top" />
    </div>
  );
}

export default function SuccessStoriesSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((p) => (p + 1) % total), 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="w-full overflow-hidden" style={{ background: "#f5edd8", padding: "72px 0" }}>
      <div className="max-w-[1200px] mx-auto px-4">

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center font-semibold mb-16"
          style={{
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
            fontSize: "clamp(24px, 3.5vw, 42px)",
            color: "#1a1a1a",
          }}
        >
          Success <span style={{ color: "#ff9900" }}>Stories</span>
        </motion.h2>

      </div>

      {/* Carousel — full section width */}
      <div
        className="relative w-full"
        style={{ height: `${BASE_H + 20}px`, overflow: "hidden" }}
      >
        {images.map((src, i) => {
          let offset = i - active;
          if (offset > total / 2)  offset -= total;
          if (offset < -total / 2) offset += total;

          const cfg = getConfig(offset);

          return (
            <motion.div
              key={i}
              animate={{
                x: offset * SPACING,
                scale: cfg.scale,
                opacity: cfg.opacity,
                zIndex: cfg.zIndex,
              }}
              transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                marginLeft: `-${BASE_W / 2}px`,
                marginTop: `-${BASE_H / 2}px`,
                width: `${BASE_W}px`,
                height: `${BASE_H}px`,
                cursor: "pointer",
              }}
              onClick={() => setActive(i)}
            >
              <PhoneMockup src={src} alt={`Success story ${i + 1}`} />
            </motion.div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              width: active === i ? "28px" : "8px",
              height: "8px",
              borderRadius: "9999px",
              background: active === i ? "#ff9900" : "#c8b99a",
              transition: "all 0.3s ease",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          />
        ))}
      </div>

    </section>
  );
}
