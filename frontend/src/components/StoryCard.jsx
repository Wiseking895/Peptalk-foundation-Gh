export default function StoryCard({ image, title, description }) {
  return (
    <div className="bg-white/20 backdrop-blur-md rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition w-full max-w-sm mx-auto text-center p-4">
      <img src={image} alt={title} className="w-full h-48 object-cover mb-4 rounded" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
}
