import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TermsConditionContent from "./TermsConditionContent";
import FadeIn from "../components/FadeIn";

export const metadata = {
  title: "Terms & Conditions | AMZ Pro Venture",
  description: "Terms and Conditions for AMZ Pro Venture - Please read these terms carefully before using our services.",
};

export default function TermsConditionPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <TermsConditionContent />
      <Footer />
    </>
  );
}
