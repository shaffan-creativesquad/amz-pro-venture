import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "./HeroSection";
import ChallengeSection from "./ChallengeSection";
import StrategySolutionSection from "./StrategySolutionSection";
import ResultsSection from "./ResultsSection";

export const metadata = {
  title: "WooCommerce Case Study: How Walmart Integration Increased Total Sales by 23% | AMZ ProVenture",
  description: "Discover how AMZ ProVenture resolved synchronization issues between a WooCommerce store and Walmart marketplace, increasing total sales by 23%.",
};

export default function WooCommerceCaseStudyPage() {
  return (
    <main>
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <ChallengeSection />
      <StrategySolutionSection />
      <ResultsSection />
      <Footer />
    </main>
  );
}
