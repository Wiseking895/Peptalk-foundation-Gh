export default function AboutHighlights() {
  return (
    <section className="py-16 bg-gray-50 w-full">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Vision, Mission & Impact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
          {[
            {
              title: "Vision",
              description:
                "A Ghana where every learner has equal access to quality education and the opportunity to become confident readers and writers, responsible individuals, and change-makers transforming their schools and communities.",
            },
            {
              title: "Problems",
              description:
                "Limited access to quality education in underserved schools, lack of resources, and inadequate support for learners.",
            },
            {
              title: "Solutions",
              description:
                "Providing educational resources, training teachers, and creating inclusive learning environments.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center w-80"
            >
              <h3 className="font-bold text-xl mb-3">{item.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
