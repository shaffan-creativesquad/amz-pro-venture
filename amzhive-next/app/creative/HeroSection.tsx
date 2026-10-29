export default function HeroSection() {
  return (
    <section className="w-full" style={{ backgroundColor: "#f7f7f7" }}>
      <div className="max-w-[1440px] mx-auto px-10 pt-16 pb-10">

        <p className="text-[#1e293b] text-sm font-medium mb-4 tracking-wide">
          Creative
        </p>

        <h1
          className="font-bold leading-tight mb-6"
          style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "48px", color: "#1e293b" }}
        >
          Our aim is to give your <span style={{ color: "#E91C59" }}>brand</span> a clear and{" "}
          <span style={{ color: "#E91C59" }}>distinctive</span> identity{" "}
          that is communicated <span style={{ color: "#E91C59" }}>effectively.</span>
        </h1>

        <p className="text-[#67768e] text-[16px] leading-relaxed max-w-[780px] mb-10">
          We create digital and print materials that are based around the user experience and backed by strong visual strategy.
        </p>

      </div>
    </section>
  );
}
