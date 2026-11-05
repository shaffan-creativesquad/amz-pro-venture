import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "./HeroSection";
import ChallengeSection from "./ChallengeSection";
import StrategySolutionSection from "./StrategySolutionSection";
import ResultsSection from "./ResultsSection";

export const metadata = {
  title: "Meta Ads Case Study: Growing Shopify Revenue by 238% in One Month | AMZ ProVenture",
  description: "See how AMZ ProVenture helped SpeedBump increase Shopify traffic by 341%, grow revenue by 238%, and scale orders by 318% in one month through Meta Ads.",
};

export default function MetaAdsCaseStudyPage() {
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
