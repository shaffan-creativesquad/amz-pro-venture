export default function HeroSection() {
  return (
    <section className="w-full" style={{ backgroundColor: "#f7f7f7" }}>
      <div className="max-w-[1440px] mx-auto px-10 pt-16 pb-16">

        <h1
          className="font-bold leading-tight mb-6 uppercase"
          style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(32px, 4.5vw, 58px)", color: "#1e293b" }}
        >
          Is Your Amazon Account <br />
          <span style={{ color: "#E91C59" }}>Health at Risk?</span>
        </h1>

        <p className="text-[#67768e] text-[16px] leading-relaxed max-w-[480px] mb-8">
          Protect, preserve, and grow your Amazon business with 24/7 compliance support.
        </p>

        <div className="space-y-4 mb-10">
          {[
            "Stay alert with 24/7 performance monitoring",
            "Proactively handle violations",
            "Fix root causes, not just the surface",
            "Stay compliant and future-proof",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-shrink-0 w-[22px] h-[22px]" fill="none">
                <circle cx="12" cy="12" r="12" fill="#E91C59" />
                <path d="M6 12.5l4 4 8-8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="text-[#1e293b] text-[16px] font-medium">{item}</p>
            </div>
          ))}
        </div>

        <a
          href="/contact-us"
          className="inline-block bg-[#E91C59] text-white font-semibold uppercase tracking-wider text-[14px] rounded-full hover:bg-black transition-colors"
          style={{ padding: "14px 32px" }}
        >
          Get My Free Health Scorecard →
        </a>

      </div>
    </section>
  );
}
