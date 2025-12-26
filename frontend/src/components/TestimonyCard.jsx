export default function TestimonyCard({ name, testimony, avatar }) {
  return (
    <div className="bg-white/20 backdrop-blur-md rounded-lg p-6 shadow-lg max-w-sm mx-auto text-center hover:shadow-xl transition">
      {avatar && (
        <img
          src={avatar}
          alt={name}
          className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
        />
      )}
      <p className="italic mb-4">"{testimony}"</p>
      <h4 className="font-bold">{name}</h4>
    </div>
  );
}
