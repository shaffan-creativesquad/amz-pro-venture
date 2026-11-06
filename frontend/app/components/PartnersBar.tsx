import Image from "next/image";

const partners = [
  { src: "/Amazon-Ads-Partner-Badge-1.webp", alt: "Amazon Ads Verified Partner" },
  { src: "/Amazon-SPN-Badge-1.webp", alt: "Amazon Service Partner" },
  { src: "/Google-Badge-1.webp", alt: "Google Partner" },
  { src: "/Walmart-Marketplace-Badge-1.webp", alt: "Walmart Trusted Partner" },
  { src: "/Shopify-Badge-4.webp", alt: "Shopify Partner" },
  { src: "/Tiktok-Badge-1.webp", alt: "TikTok Shop Partner" },
];

export default function PartnersBar() {
  return (
    <div className="w-full bg-white" style={{ borderTop: "1px solid #f0f0f0", borderBottom: "1px solid #f0f0f0" }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 py-8 flex flex-col items-center gap-6">
        <span className="text-[15px] font-black uppercase tracking-[0.2em] text-[#000000]">
          PARTNERS WITH
        </span>
        <div className="flex flex-wrap items-center justify-center gap-5">
          {partners.map((p) => (
            <div
              key={p.alt}
              className="flex items-center justify-center px-3 py-2"
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={180}
                height={80}
                unoptimized
                className="h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
