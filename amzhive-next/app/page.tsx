import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import LogoCarousel from "./components/LogoCarousel";
import TestimonialsSection from "./components/TestimonialsSection";
import ExpertSection from "./components/ExpertSection";
import UnlockSection from "./components/UnlockSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <LogoCarousel />
      <TestimonialsSection />
      <ExpertSection />
      <UnlockSection />
      <Footer />
    </main>
  );
}
