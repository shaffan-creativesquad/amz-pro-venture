import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "./HeroSection";
import ContactDetailsSection from "./ContactDetailsSection";
import AuditFormSection from "./AuditFormSection";
import FadeIn from "../components/FadeIn";

export default function ContactUs() {
  return (
    <main>
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <AuditFormSection />
      <ContactDetailsSection />
      <Footer />
    </main>
  );
}
