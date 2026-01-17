import VideoBackground from "../components/VideoBackground";


export default function HeroSection() {
  return (
    <div>
    
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
      </div>
    </VideoBackground>
    </div>
    
    
  );
}
