import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import StoryCard from "../components/StoryCard";
import TestimonyCard from "../components/TestimonyCard";
import AboutHighlights from "../components/AboutHighlights";

export default function Home() {
  const stories = [
    { image: "/images/story1.jpg", title: "Success Story 1", description: "Brief description." },
    { image: "/images/story2.jpg", title: "Success Story 2", description: "Brief description." },
    { image: "/images/story3.jpg", title: "Success Story 3", description: "Brief description." },
  ];

  const testimonies = [
    { name: "John Doe", testimony: "This platform changed my life!", avatar: "/images/avatar1.jpg" },
    { name: "Jane Smith", testimony: "Amazing education and inspiration.", avatar: "/images/avatar2.jpg" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Video Background Section for scroll detection */}
      <section id="video-background-section">
        <HeroSection />
      </section>
      <section>
      <AboutHighlights />
      </section>

      {/* Overview Section */}
      <section className="py-16 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8">Explore Our Pages</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2">Education</h3>
            <p>Learn basics, BECE & WASSCE prep, and career guidance.</p>
            <a href="/education" className="mt-4 inline-block text-blue-600 hover:underline">Explore</a>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2">Health & Wealth</h3>
            <p>Insights on health, wealth creation, and personal growth.</p>
            <a href="/health-wealth" className="mt-4 inline-block text-blue-600 hover:underline">Explore</a>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2">Marketplace</h3>
            <p>Browse products and services we offer.</p>
            <a href="/marketplace" className="mt-4 inline-block text-blue-600 hover:underline">Explore</a>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2">Inspirations</h3>
            <p>Stories, testimonies, and motivational content.</p>
            <a href="/inspirations" className="mt-4 inline-block text-blue-600 hover:underline">Explore</a>
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {stories.map((story, index) => (
            <StoryCard key={index} {...story} />
          ))}
        </div>
      </section>

      {/* Testimonies Section */}
      <section className="py-16 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonies.map((test, index) => (
            <TestimonyCard key={index} {...test} />
          ))}
        </div>
      </section>

    </div>
  );
}
