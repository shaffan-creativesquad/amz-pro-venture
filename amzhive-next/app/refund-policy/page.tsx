import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RefundPolicyContent from "./RefundPolicyContent";

export const metadata = {
  title: "Refund Policy | AMZ Hive",
  description: "Refund Policy for AMZ Hive - Learn about our 100% money back guarantee and refund terms.",
};

export default function RefundPolicyPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <RefundPolicyContent />
      <Footer />
    </>
  );
}
