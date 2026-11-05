import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import LogoCarousel from "./components/LogoCarousel";
import TestimonialsSection from "./components/TestimonialsSection";
import ExpertSection from "./components/ExpertSection";
import CaseStudiesSection from "./components/CaseStudiesSection";
import UnlockSection from "./components/UnlockSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import Link from "next/link";
import StatsCounter from "./amazon-influencer-marketing-service/StatsCounter";
import ConsultationSection from "./components/ConsultationSection";

export default function Home() {
  return (
    <main>
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <LogoCarousel />
      <TestimonialsSection />
      <ExpertSection />

      {/* Trusted By Stats Section */}
      <section className="w-full bg-white py-14">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="rounded-2xl px-10 py-12" style={{ backgroundColor: "#f4f4f4" }}>
            <h2 className="text-center font-bold mb-10" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(22px, 3.5vw, 36px)", color: "#000000" }}>
              Trusted by 1,200+ Amazon Sellers
            </h2>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <StatsCounter />
              {/* Expert Advice Card */}
              <div className="flex-shrink-0 flex flex-col items-center text-center gap-3 bg-white rounded-xl px-8 py-6 shadow-sm min-w-[180px]">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-1" style={{ backgroundColor: "#ff9900" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-8 h-8">
                    <path fill="#ffffff" d="M203.45,255.03h-29.15v-44.94c0-1.49-7.46-12.84-9.76-14.53-7.44-5.44-21.56-5.49-29.06,0-2.31,1.69-9.76,13.04-9.76,14.53v44.94h-29.15V110.5c0-4.59,8.9-36.83,12.05-38.96l81.16-.79c4.97,1.71,13.69,34.5,13.69,39.76v144.54ZM144.55,95.23c-43.52,6.28-37.89,73.26,6.43,72.12,49.45-1.27,43.36-79.31-6.43-72.12Z"/>
                    <path fill="#ffffff" d="M181.58,55.84h-63.17c9.04-13.87,17.37-31.43,27.1-44.56,1.5-2.03,2.31-4.83,5.67-4.02l30.4,48.58Z"/>
                    <path fill="#ffffff" d="M159.72,285.4c-2.05,12.16-19.44,6.87-19.44,2.43v-75.3c0-1.21,6.1-6.34,8.63-6.19,3.1-1.28,10.8,4.41,10.8,6.19,0,20.16,3.03,54.89,0,72.88Z"/>
                    <path fill="#ffffff" d="M81.98,261.1l-18.23,18.21c-1.35-18.49,5.14-41.59,18.23-55.86v37.65Z"/>
                    <path fill="#ffffff" d="M218.02,223.45c13.09,14.27,19.58,37.36,18.23,55.86l-18.23-18.21v-37.65Z"/>
                    <path fill="#ffffff" d="M146.99,109.69c26.23-4.24,35.93,42.13,1.78,41.1-27.21-.82-24.33-37.45-1.78-41.1Z"/>
                  </svg>
                </div>
                <p className="font-bold text-[13px]" style={{ color: "#000000" }}>Linda Davis</p>
                <p className="text-[11px]" style={{ color: "#67768e" }}>Account Lead</p>
                <p className="font-bold text-[16px] leading-tight" style={{ color: "#ff9900" }}>Need Expert<br />Advice?</p>
                <p className="text-[12px]" style={{ color: "#67768e" }}>Book Your Strategy Call Today!</p>
                <Link
                  href="/contact-us"
                  className="mt-1 inline-block bg-[#ff9900] text-white font-semibold uppercase tracking-wider rounded-full hover:bg-black transition-colors"
                  style={{ fontSize: "12px", padding: "9px 20px" }}
                >
                  Book a Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CaseStudiesSection />
      <UnlockSection />
      <FAQSection />
      <ConsultationSection />
      <Footer />
    </main>
  );
}
