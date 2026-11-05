"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  style?: React.CSSProperties;
}

export default function FadeIn({ children, delay = 0, direction = "up", className = "", style }: FadeInProps) {
  const directionOffset = {
    up: { y: 25, x: 0 },
    down: { y: -25, x: 0 },
    left: { y: 0, x: 15 },
    right: { y: 0, x: -15 },
    none: { y: 0, x: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directionOffset[direction] }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={`max-w-full ${className}`}
      style={style}
    >
      {children}
    </motion.div>
  );
}
