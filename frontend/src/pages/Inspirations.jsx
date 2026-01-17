import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import VideoBackground from "../components/VideoBackground";
import StoryCard from "../components/StoryCard";
import TestimonyCard from "../components/TestimonyCard";

export default function Inspirations() {
  const stories = [
    { image: "/images/story1.jpg", title: "Success Story 1", description: "Short summary." },
    { image: "/images/story2.jpg", title: "Success Story 2", description: "Short summary." },
  ];

  const testimonies = [
    { name: "Mary Johnson", testimony: "This platform changed my life!", avatar: "/images/avatar1.jpg" },
    { name: "David Kofi", testimony: "Highly inspiring and educational.", avatar: "/images/avatar2.jpg" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <section id="video-background-section">
      <VideoBackground videoSrc="/videos/inspirations.mp4">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Inspirations</h1>
          <p className="text-lg md:text-2xl">Stories, testimonies, and motivational content to inspire better living.</p>
        </div>
      </VideoBackground>
      </section>

      <section className="py-16 px-6 text-center max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <StoryCard key={index} {...story} />
          ))}
        </div>
      </section>

      <section className="py-16 px-6 text-center max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonies.map((test, index) => (
            <TestimonyCard key={index} {...test} />
          ))}
        </div>
      </section>

     
    </div>
  );
}
