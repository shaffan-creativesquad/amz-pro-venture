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
      <CaseStudiesSection />
      <ExpertSection />

      <UnlockSection />
      <FAQSection />
      <ConsultationSection />
      <Footer />
    </main>
  );
}
