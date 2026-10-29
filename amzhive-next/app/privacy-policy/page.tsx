import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PrivacyPolicyContent from "./PrivacyPolicyContent";

export const metadata = {
  title: "Privacy Policy | AMZ Hive",
  description: "Privacy Policy for AMZ Hive - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <PrivacyPolicyContent />
      <Footer />
    </>
  );
}
