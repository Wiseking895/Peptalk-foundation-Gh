export default function StoryCard({ image, title, description, position = "50% 30%" }) {
  return (
    <section
      className="w-full min-h-[50vh] md:min-h-[105vh] relative flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: position,
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-4xl px-6 text-center text-white">
        <h3 className="text-4xl md:text-5xl font-bold mb-6">
          {title}
        </h3>
        <p className="text-lg md:text-xl leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
