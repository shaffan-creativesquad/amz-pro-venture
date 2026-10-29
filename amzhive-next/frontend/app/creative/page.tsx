import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "./HeroSection";
import CreativitySection from "./CreativitySection";
import PortfolioGrid from "./PortfolioGrid";
import OurProcessSection from "./OurProcessSection";
import PortfolioRow from "./PortfolioRow";
import CreativeAgencySection from "./CreativeAgencySection";
import FadeIn from "../components/FadeIn";

export default function Creative() {
  return (
    <main>
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <CreativitySection />
      <PortfolioGrid />
      <OurProcessSection />
      <PortfolioRow />
      <CreativeAgencySection />
      <Footer />
    </main>
  );
}
