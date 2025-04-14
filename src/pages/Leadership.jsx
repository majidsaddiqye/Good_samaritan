import president from "../assets/president.jpeg";
import director from "../assets/director.jpg";
import vice from "../assets/vice.jpg";
import Head  from "../assets/Head.jpeg";
import paulw  from "../assets/paulw.jpg";
import Rachael  from "../assets/Rachael.jpeg";

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
      name: "Matia Njuki",
      image: vice,
      description: "Matia supports the mission with dedication and unity.",
    },
  ];

  const committeeLeaders = [
    {
      role: "Head of Finance and Administration",
      name: "Annet",
      image: president,
      description: "Leading financial and administrative matters with expertise.",
    },
    {
      role: "Head Liturgy",
      name: "Florence",
      image: director,
      description: "Overseeing liturgical activities and spiritual guidance.",
    },
    {
      role: "Head of Planning & Development",
      name: "Rachael",
      image: Rachael,
      description: "Driving strategic planning and development initiatives.",
    },
    {
      role: "Head Welfare",
      name: "Patrick",
      image: Head,
      description: "Managing welfare programs and support services.",
    },
    {
      role: "Head Teaching",
      name: "Paul",
      image: paulw,
      description: "Leading educational and teaching initiatives.",
    },
  ];

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="bg-red-800 text-cream-100 py-16 bg-gradient-to-b from-cream-50/10 to-transparent">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            Our Leadership
          </h1>
          <p className="text-xl max-w-2xl mx-auto font-sans">
            Meet the dedicated team guiding the Good Samaritans Ministry.
          </p>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="py-12 bg-cream-100">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 font-serif">
            Executive Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className="bg-cream-100 rounded-xl shadow-lg p-6 text-center border border-red-800"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border border-cream-200"
                />
                <h3 className="text-xl font-semibold font-serif">{leader.role}</h3>
                <p className="text-gray-700 font-medium font-sans">{leader.name}</p>
                <p className="text-gray-600 mt-2 font-sans">{leader.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Committee Leaders */}
      <section className="py-12 bg-cream-100">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 font-serif">
            Committee Leaders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {committeeLeaders.map((leader, index) => (
              <div
                key={index}
                className="bg-cream-100 rounded-xl shadow-lg p-6 text-center border border-red-800"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border border-cream-200"
                />
                <h3 className="text-xl font-semibold font-serif">{leader.role}</h3>
                <p className="text-gray-700 font-medium font-sans">{leader.name}</p>
                <p className="text-gray-600 mt-2 font-sans">{leader.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Leadership;