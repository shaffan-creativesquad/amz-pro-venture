import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PartnersBar from "../components/PartnersBar";
import Image from "next/image";
import ServicesSection from "./ServicesSection";
import PartnersSection from "./PartnersSection";
import FAQSection from "./FAQSection";
import FadeIn from "../components/FadeIn";

export default function PolicyViolationResolution() {
  return (
    <main>
      <AnnouncementBar />
      <Navbar />

      {/* Hero Section */}
      <FadeIn><section className="w-full overflow-visible" style={{ backgroundColor: "#000000" }}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-16 pb-0 flex flex-col items-center lg:items-start text-center lg:text-left">

          {/* Label */}
          <FadeIn>
          <p className="text-white/70 text-sm font-medium mb-4 tracking-wide text-center lg:text-left">
            Policy Violation Resolution
          </p>
          </FadeIn>

          {/* Heading */}
          <FadeIn delay={0.15}>
          <h1
            className="font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(26px, 5vw, 48px)", color: "#ffffff" }}
          >
            Fix Amazon Policy Violations{" "}
            <span style={{ color: "#ff9900" }}>Before They Become Suspensions.</span>
          </h1>
          </FadeIn>

          {/* Description */}
          <FadeIn delay={0.3}>
          <p className="text-white/60 text-[16px] leading-relaxed max-w-[720px] mb-5 text-center lg:text-left">
            Getting a policy warning from Amazon can be stressful, especially when it starts affecting your listings or sales. A violation can lead to removed products, suppressed listings, or even account suspension. We help you understand what went wrong, fix the issue, and get your account back on track before things get worse.
          </p>
          </FadeIn>

          <p className="text-white/80 font-semibold text-[16px] mb-4">We help you:</p>

          <div className="space-y-3 mb-12">
            {["Catch violations before they do damage.", "Stop suspensions before they start.", "Keep your account protected going forward."].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-shrink-0 w-[22px] h-[22px]" fill="none">
                  <circle cx="12" cy="12" r="12" fill="#ff9900" />
                  <path d="M6 12.5l4 4 8-8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-white/80 text-[16px]">{item}</p>
              </div>
            ))}
          </div>

          <a href="/contact-us" className="inline-block bg-[#ff9900] text-white font-semibold uppercase tracking-wider text-[14px] rounded-[6px] hover:bg-black transition-colors" style={{ padding: "14px 28px" }}>
            Get My Free Violation Risk Report ?
          </a>

          {/* Hero Image */}
          <div className="w-full max-w-[700px] relative z-10 mb-[-60px] sm:mb-[-120px] lg:mb-[-180px] self-center">
            <Image
              src="/Banner-Image-4.webp"
              alt="Policy Violation Resolution"
              width={700}
              height={700}
              unoptimized
              className="w-full h-auto object-contain"
            />
          </div>

        </div>
      </section></FadeIn>

      {/* Spacer */}
      <div className="bg-white pt-[80px] sm:pt-[140px] lg:pt-[200px]" />

      <PartnersBar />

      <ServicesSection />
      <PartnersSection />

      {/* CTA Section */}
      <FadeIn><section className="w-full bg-white py-16 px-6">
        <div className="max-w-[900px] mx-auto rounded-2xl px-10 py-16 text-center" style={{ backgroundColor: "#f4f4f4" }}>
          <h2
            className="font-bold leading-tight mb-5"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px, 4vw, 42px)", color: "#000000" }}
          >
            Violations Only Get Worse<br />When You Wait.
          </h2>
          <p style={{ fontSize: "16px", color: "#67768e", lineHeight: "1.7", marginBottom: "32px" }}>
            Get a <strong style={{ color: "#000000" }}>Free Amazon Account Assessment</strong> and clear your violations before they turn into a suspension.
          </p>
          <a
            href="/contact-us"
            className="inline-block bg-[#ff9900] text-white font-semibold uppercase tracking-wider text-[13px] rounded-full hover:bg-black transition-colors"
            style={{ padding: "14px 32px" }}
          >
            GET ACCOUNT ASSESSMENT
          </a>
        </div>
      </section></FadeIn>
      <FAQSection />
      <Footer />
    </main>
  );
}
