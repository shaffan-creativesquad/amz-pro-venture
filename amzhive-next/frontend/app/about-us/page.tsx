import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "./HeroSection";
import ProcessSection from "./ProcessSection";
import CultureSection from "./CultureSection";
import FadeIn from "../components/FadeIn";

export default function AboutUs() {
  return (
    <main>
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <ProcessSection />
      <CultureSection />
      <Footer />
    </main>
  );
}
