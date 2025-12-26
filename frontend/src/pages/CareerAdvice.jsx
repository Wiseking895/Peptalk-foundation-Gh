import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import VideoBackground from "../components/VideoBackground";

export default function CareerAdvice() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <VideoBackground videoSrc="/videos/career-advice.mp4">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Career Advice</h1>
          <p className="text-lg md:text-2xl">
            Helping you choose the right career path based on market trends and future opportunities.
          </p>
        </div>
      </VideoBackground>

      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Career Insights</h2>
        <p>Learn which careers will thrive in the next 5 years and how to prepare for them.</p>
      </section>

      
    </div>
  );
}
