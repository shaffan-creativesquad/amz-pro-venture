import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TermsConditionContent from "./TermsConditionContent";

export const metadata = {
  title: "Terms & Conditions | AMZ Hive",
  description: "Terms and Conditions for AMZ Hive - Please read these terms carefully before using our services.",
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
