import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "./HeroSection";
import ContactDetailsSection from "./ContactDetailsSection";

export default function ContactUs() {
  return (
    <main>
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <ContactDetailsSection />
      <Footer />
    </main>
  );
}
