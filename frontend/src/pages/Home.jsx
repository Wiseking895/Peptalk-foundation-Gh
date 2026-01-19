import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import StoryCard from "../components/StoryCard";
import TestimonyCard from "../components/TestimonyCard";
import AboutHighlights from "../components/AboutHighlights";
import NewsletterPopup from "../components/NewsletterPopup";


export default function Home() {
  const pages = [
    {
      title: "Education",
      description: "Learn basics, BECE & WASSCE prep, and career guidance.",
      link: "/education",
      image: "/images/img8.jpg",
    },
    {
      title: "Health & Wealth",
      description: "Insights on health, wealth creation, and personal growth.",
      link: "/health-wealth",
      image: "/images/img9.png",
    },
    {
      title: "Marketplace",
      description: "Browse products and services we offer.",
      link: "/marketplace",
      image: "/images/img10.png",
    },
    {
      title: "Inspirations",
      description: "Stories, testimonies, and motivational content.",
      link: "/inspirations",
      image: "/images/img11.png",
    },
  ];

  const stories = [
    {
      image: "/images/story1.jpg",
      title: "Spreading Christmas Joy at Fawoade Orphanage",
      description:
        "In December 2025, we visited Fawoade Orphanage in Kumasi to celebrate Christmas with less privileged children. The day was filled with gifts, food, laughter, and festive cheer, spreading love and hope while creating unforgettable memories for the children and everyone involved.",
      position: "50% 30%",
    },
    {
      image: "/images/img8.jpg",
      title: "Inspiring Pupils in Adwumakase",
      description:
        "In early 2025, we visited Adwumakase, Ahafo Region, to motivate pupils to study diligently and pursue a bright future. The visit encouraged focus, determination, and belief in their potential.",
      position: "50% 5%",
    },
    {
      image: "/images/story3.jpg",
      title: "Bringing Joy and Hope Through Haircuts",
      description:
        "We organized a fun hair-cutting session for orphans, filling the day with laughter and smiles. The activity aimed to inspire the children with hope, showing them that the world cares and supports their dreams.",
      position: "50% 20%",
    },
  ];

  const testimonies = [
    { name: "John Doe", testimony: "This platform changed my life!", avatar: "/images/avatar1.jpg" },
    { name: "Jane Smith", testimony: "Amazing education and inspiration.", avatar: "/images/avatar2.jpg" },
    { name: "Samuel Lee", testimony: "I found great resources here.", avatar: "/images/avatar3.jpg" },
    { name: "Emily Davis", testimony: "Truly a life-changing experience.", avatar: "/images/avatar4.jpg" },
    { name: "Michael Brown", testimony: "The support I received was incredible.", avatar: "/images/avatar5.jpg" },
    { name: "Sarah Wilson", testimony: "Highly recommend to everyone!", avatar: "/images/avatar6.jpg" },
  ];

  /* ===== AUTO SLIDE LOGIC ===== */
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const itemsPerPage = 2;

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);

      setTimeout(() => {
        setCurrentIndex((prev) =>
          prev + itemsPerPage >= testimonies.length ? 0 : prev + itemsPerPage
        );
        setIsFading(false);
      }, 500); // fade duration
    }, 4000); // slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = testimonies.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );
  /* =========================== */

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="video-background-section">
        <HeroSection />
      </section>

      <section>
        <AboutHighlights />
      </section>

      {/* Explore Our Pages Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Explore Our Pages</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {pages.map((page, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105 min-h-[300px]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center filter blur-sm scale-110"
                style={{ backgroundImage: `url(${page.image})` }}
              ></div>

              <div className="absolute inset-0 bg-black/40"></div>

              <div className="relative z-10 p-6 flex flex-col justify-center">
                <h3 className="font-bold text-xl mt-2 text-white">{page.title}</h3>
                <p className="text-white mt-12">{page.description}</p>
                <a
                  href={page.link}
                  className="mt-auto inline-block text-blue-600 font-semibold hover:underline"
                >
                  Explore
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stories Section */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-12 px-6">Our Stories</h2>
        <div className="flex flex-col">
          {stories.map((story, index) => (
            <StoryCard key={index} {...story} />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-gray-100 text-center overflow-hidden">
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto transition-all duration-500 ease-in-out
            ${isFading ? "opacity-0 translate-x-10" : "opacity-100 translate-x-0"}
          `}
        >
          {visibleTestimonials.map((test, index) => (
            <TestimonyCard key={index} {...test} />
          ))}
        </div>
      </section>
      <NewsletterPopup />
    </div>
  );
}
