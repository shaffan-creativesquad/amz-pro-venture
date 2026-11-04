import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ValuesSection from "./ValuesSection";
import ProcessSection from "./ProcessSection";
import ConsultationSection from "../components/ConsultationSection";

export default function AboutUs() {
  return (
    <main>
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ValuesSection />
      <ProcessSection />
      <ConsultationSection />
      <Footer />
    </main>
  );
}
