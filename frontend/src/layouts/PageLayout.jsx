import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingDonateButton from "../components/FloatingDonateButton";

export default function PageLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <FloatingDonateButton /> {/* Floating Donate button */}
      <Footer />
    </>
  );
}
