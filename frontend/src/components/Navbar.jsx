import { useState } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/60 backdrop-blur-md z-50">
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
