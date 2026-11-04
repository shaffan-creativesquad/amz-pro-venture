import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "./HeroSection";
import ChallengeSection from "./ChallengeSection";
import StrategySolutionSection from "./StrategySolutionSection";
import ResultsSection from "./ResultsSection";

export const metadata = {
  title: "Amazon Listing Optimization Service Case Study: Increasing Annual Sales by 215% | AMZ ProVenture",
  description: "See how AMZ ProVenture helped SpeedBump increase product sales by 215%, grow units ordered by 190%, and boost total orders by 178% through Amazon listing optimization.",
};

export default function AmazonCaseStudyPage() {
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
