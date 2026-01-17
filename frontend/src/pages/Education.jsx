import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import VideoBackground from "../components/VideoBackground";
import StoryCard from "../components/StoryCard";

export default function Education() {
  const courses = [
    { image: "/images/math.jpg", title: "Basic Math", description: "Learn math basics." },
    { image: "/images/bece.jpg", title: "BECE Prep", description: "Prepare for BECE exams." },
    { image: "/images/wassce.jpg", title: "WASSCE Prep", description: "Prepare for WASSCE exams." },
    { image: "/images/career.jpg", title: "Career Guidance", description: "Choose the right career path." },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <section id="video-background-section">
      <VideoBackground videoSrc="/videos/education.mp4">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Education</h1>
          <p className="text-lg md:text-2xl">
            Empowering Ghanaians with knowledge and skills for a brighter future.
          </p>
        </div>
      </VideoBackground>
      </section>

      <section className="py-16 px-6 text-center max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Courses & Tutorials</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <StoryCard key={index} {...course} />
          ))}
        </div>
      </section>
      
    </div>
  );
}
