import { Routes, Route } from "react-router-dom";
import PageLayout from "../layouts/PageLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Education from "../pages/Education";
import HealthWealth from "../pages/HealthWealth";
import CareerAdvice from "../pages/CareerAdvice";
import Marketplace from "../pages/Marketplace";
import Inspirations from "../pages/Inspirations";
import Donate from "../pages/Donate";
import NotFound from "../pages/NotFound";
import SplashScreen from "../components/SplashScreen";

export default function AppRouter() {
  return (
    <Routes>
      {/* Splash screen route */}
      <Route path="/splash" element={<SplashScreen />} />

      {/* Main routes */}
      <Route path="/" element={<PageLayout><Home /></PageLayout>} />
      <Route path="/about" element={<PageLayout><About /></PageLayout>} />
      <Route path="/contact" element={<PageLayout><Contact /></PageLayout>} />
      <Route path="/education" element={<PageLayout><Education /></PageLayout>} />
      <Route path="/health-wealth" element={<PageLayout><HealthWealth /></PageLayout>} />
      <Route path="/career-advice" element={<PageLayout><CareerAdvice /></PageLayout>} />
      <Route path="/marketplace" element={<PageLayout><Marketplace /></PageLayout>} />
      <Route path="/inspirations" element={<PageLayout><Inspirations /></PageLayout>} />
      <Route path="/donate" element={<PageLayout><Donate /></PageLayout>} />

      {/* Fallback */}
      <Route path="*" element={<PageLayout><NotFound /></PageLayout>} />
    </Routes>
  );
}
