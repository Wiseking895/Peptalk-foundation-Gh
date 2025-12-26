import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import VideoBackground from "../components/VideoBackground";

export default function HealthWealth() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <VideoBackground videoSrc="/videos/health-wealth.mp4">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Health & Wealth</h1>
          <p className="text-lg md:text-2xl">
            Insights on personal development, health, wealth creation, and better living.
          </p>
        </div>
      </VideoBackground>

      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Wellness Tips</h2>
        <p className="mb-6">Learn healthy habits, wealth strategies, and productivity tips for your daily life.</p>
        <h2 className="text-3xl font-bold mb-6">Financial Education</h2>
        <p>Understand how to manage money, start businesses, and plan for long-term wealth.</p>
      </section>

      <Footer />
    </div>
  );
}
