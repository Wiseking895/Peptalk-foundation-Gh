import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import VideoBackground from "../components/VideoBackground";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <VideoBackground videoSrc="/videos/about.mp4">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Peptalk Foundation</h1>
          <p className="text-lg md:text-2xl">
            We empower individuals through education, health, wealth creation, career guidance, and inspiration.
          </p>
        </div>
      </VideoBackground>

      <section className="py-16 px-6 text-center max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="mb-6">
          To provide resources and guidance that help Ghanaians and Africans live better lives through knowledge, skills, and inspiration.
        </p>

        <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
        <p className="mb-6">
          A society where education, health, career guidance, and personal development are accessible to all.
        </p>

        <h2 className="text-3xl font-bold mb-6">10-Year Plan & Goals</h2>
        <p>
          Expand our educational programs, provide marketplace support, inspire through stories and testimonies, and help thousands achieve their career and life goals.
        </p>
      </section>
      <Footer />
    </div>
  );
}
