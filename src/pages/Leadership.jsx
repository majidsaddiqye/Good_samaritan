import president from "../assets/president.jpeg";
import director from "../assets/director.jpg";
import vice from "../assets/vice.jpg";

const Leadership = () => {
  const leaders = [
    {
      role: "President",
      name: "Annet Sseruma Katende",
      image: president,
      description:
        "Leading with compassion, Annet guides the ministry in serving the vulnerable.",
    },
    {
      role: "Director of Good Samaritans Ministry",
      name: "Rev. Fr Achilles Mayanja",
      image: director,
      description:
        "Rev. Fr Achilles provides spiritual direction to uplift our community.",
    },
    {
      role: "Vice President",
      name: "Zachariah Isabirye",
      image: vice,
      description: "Zachariah supports the mission with dedication and unity.",
    },
  ];

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Leadership
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Meet the dedicated team guiding the Good Samaritans Ministry.
          </p>
        </div>
      </section>

      {/* Leaders Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    {leader.role}
                  </h3>
                  <p className="text-lg font-medium text-gray-800 mb-3">
                    {leader.name}
                  </p>
                  <p className="text-gray-600">{leader.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Leadership;
