"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const models = [
  {
    title: "TikTok Shop Private Label",
    description: "Our Private label services help you create your own branded products. From product design and supplier sourcing to packaging and listing optimization, we work with you to build a strong brand presence on TikTok.",
    icon: "/TikTok-Shop-Private-Label.svg",
  },
  {
    title: "TikTok Shop White Label",
    description: "White-label products allow you to sell items under your brand without the need to manufacture them yourself. Our TikTok shop white label services include sourcing high-quality products, customizing packaging, optimizing listings, and helping you present your brand to the TikTok audience effectively.",
    icon: "/TikTok-Shop-White-Label.svg",
  },
  {
    title: "TikTok Shop Wholesale",
    description: "AMZ ProVenture helps you to sell products from trusted suppliers without the stress of manufacturing with trusted TikTok shop wholesale services. We handle product listings, inventory, and order fulfillment to help your TikTok store grow quickly and reliably.",
    icon: "/TikTok-Shop-Wholesale.svg",
  },
  {
    title: "TikTok Shop Dropshipping",
    description: "Our TikTok shop dropshipping services enable you to sell products directly from suppliers without the need to hold inventory. We take care of everything, from finding reliable suppliers to automating the order process, ensuring a great experience for both you and your customers.",
    icon: "/TikTok-Shop-Dropshipping.svg",
  },
];

export default function BusinessModelsSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-10"
        >
          <h2
            className="font-bold leading-tight mb-4"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(26px, 4vw, 44px)", color: "#000000" }}
          >
            AMZ ProVenture Manages These{" "}
            <span style={{ color: "#ff9900" }}>TikTok Shop Business Models</span>{" "}
            to Launch &amp; Grow Your Store
          </h2>
          <p className="text-[15px] leading-relaxed" style={{ color: "#374151" }}>
            We specialize in multiple{" "}
            <span style={{ color: "#ff9900" }}>TikTok Shop business models, offering full-service management</span>{" "}
            for different types of sellers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {models.map((model, i) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="mb-4">
                <Image
                  src={model.icon}
                  alt={model.title}
                  width={56}
                  height={56}
                  unoptimized
                  className="h-14 w-auto"
                  style={{ filter: "invert(60%) sepia(100%) saturate(1500%) hue-rotate(1deg) brightness(102%)" }}
                />
              </div>
              <h3
                className="font-bold text-[16px] text-[#000000] mb-3"
                style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}
              >
                {model.title}
              </h3>
              <p className="text-[#67768e] text-[13.5px] leading-relaxed">{model.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
