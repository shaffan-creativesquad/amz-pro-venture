"use client";

import { motion } from "framer-motion";

import { useEffect, useRef, useState } from "react";

const stats = [
  { target: 500, prefix: "", suffix: "+", label: "Accounts Managed", display: (n: number) => n.toLocaleString() },
  { target: 8, prefix: "$", suffix: "M+", label: "Managed in Revenue", display: (n: number) => String(n) },
  { target: 33, prefix: "", suffix: "%", label: "Average Sales Increase", display: (n: number) => String(n) },
];

function CountUp({ target, prefix, suffix, display }: { target: number; prefix: string; suffix: string; display: (n: number) => string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="font-bold text-[28px] relative z-10" style={{ color: "#000000" }}>
      {prefix}{display(count)}{suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <div className="flex flex-col sm:flex-row gap-10 items-center justify-center flex-1">
      {stats.map((stat, i) => (
        <motion.div key={stat.label} initial={{ opacity: 0, y: 30, scale: 0.92 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }} className="flex flex-col items-center gap-4">
          <div className="relative flex items-center justify-center" style={{ width: "160px", height: "160px" }}>
            <div className="absolute inset-0 rounded-full" style={{ border: "2px solid #e5e7eb" }} />
            <div className="absolute rounded-full" style={{ inset: "10px", border: "2px solid #ff9900" }} />
            <CountUp target={stat.target} prefix={stat.prefix} suffix={stat.suffix} display={stat.display} />
          </div>
          <p className="text-[#67768e] text-[15px] text-center">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
