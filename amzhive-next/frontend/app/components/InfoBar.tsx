"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function InfoBar() {
  return (
    <section className="w-full bg-white border-t border-b border-gray-100 py-8">
      <div className="max-w-[1440px] mx-auto px-10 flex flex-col lg:flex-row items-center justify-between gap-6">

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[#000000] text-[18px] leading-relaxed max-w-[600px]"
        >
          Welcome to our digital haven, where creativity meets performance, and data guides every step.
          We specialize in crafting captivating WordPress, WooCommerce, and Shopify e-commerce
          platforms that transcend boundaries across digital landscapes. As fervent advocates of
          optimized digital commerce, our mission is to propel your online success to new heights.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col items-end gap-2 flex-shrink-0"
        >
          <Link href="mailto:info@amzproventure.com" className="text-[#000000] text-2xl font-bold hover:text-[#ff9900] transition-colors">
            info@amzproventure.com
          </Link>
          <Link href="tel:2067046094" className="text-[#000000] text-2xl font-bold hover:text-[#ff9900] transition-colors">
            (206) 704-6094
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
