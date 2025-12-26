import VideoBackground from "./VideoBackground";

export default function HeroSection() {
  return (
    <VideoBackground videoSrc="/hero-background.mp4">
      <div className="text-center text-white max-w-3xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Peptalk Foundation
        </h1>
        <p className="mb-6 text-lg md:text-2xl">
          Mission: Empowering people through education, health, career guidance, and inspiration.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {["Vision", "Problems", "Solutions"].map((title) => (
            <div
              key={title}
              className="bg-white/20 p-4 rounded shadow-md hover:bg-white/30 transition"
            >
              <h2 className="font-bold text-xl">{title}</h2>
              <p className="mt-2 text-sm md:text-base">
                Brief description of {title}.
              </p>
            </div>
          ))}
        </div>
      </div>
    </VideoBackground>
  );
}
