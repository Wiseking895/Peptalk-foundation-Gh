import VideoBackground from "../components/VideoBackground";

export default function HeroSection() {
  return (
    <VideoBackground>
      <div className="text-center text-white max-w-3xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Peptalk Foundation
        </h1>
        <p className="mb-6 text-lg md:text-2xl">
          Mission: We Empower Learners in underserved schools in Ghana through inclusive
                     and equitable quality education, nurturing confident readers, writers,
                     and future change-makers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {["Vision", "Problems", "Solutions"].map((title) => (
            <div
              key={title}
              className="bg-white/20 p-4 rounded shadow-md hover:bg-white/30 transition"
            >
              <h2 className="font-bold text-xl">{title}</h2>
              <p className="mt-2 text-sm md:text-base">
                A Ghana where every learner has equal access to quality education.
                and the opportunity to become confident readers and writers, responsible
                individuals, and change-makers transforming their schools and communities.
              </p>
            </div>
          ))}
        </div>
      </div>
    </VideoBackground>
  );
}
