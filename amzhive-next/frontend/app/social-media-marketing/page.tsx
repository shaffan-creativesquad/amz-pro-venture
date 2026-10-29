import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import FadeIn from "../components/FadeIn";

export default function WebDesign() {
  return (
    <main>
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <Footer />
    </main>
  );
}
