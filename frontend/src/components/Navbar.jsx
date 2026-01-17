import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolledPastVideo, setScrolledPastVideo] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Look for VideoBackground section
      const videoSection = document.getElementById("video-background-section");

      if (!videoSection) {
        // No VideoBackground on this page → navbar always black
        setScrolledPastVideo(true);
        return;
      }

      // Bottom of video relative to viewport
      const videoBottom = videoSection.getBoundingClientRect().bottom;

      // Switch to black when fully scrolled past
      if (videoBottom <= 0) {
        setScrolledPastVideo(true);
      } else {
        setScrolledPastVideo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]); // Re-run on route change

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300
        ${scrolledPastVideo ? "bg-black shadow-lg" : "bg-transparent backdrop-blur-md"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        <Link to="/">
          <img src={logo} alt="Peptalk Foundation" className="h-10" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-white font-semibold">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/education">Education</Link>
          <Link to="/health-wealth">Health & Wealth</Link>
          <Link to="/career-advice">Career Advice</Link>
          <Link to="/marketplace">Marketplace</Link>
          <Link to="/inspirations">Inspirations</Link>
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && <HamburgerMenu setIsOpen={setIsOpen} />}
    </nav>
  );
}
