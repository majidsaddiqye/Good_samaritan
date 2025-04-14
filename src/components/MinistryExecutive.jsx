import president from "../assets/president.jpeg";
import director from "../assets/director.jpg";
import vice from "../assets/mam.jpg";

const MinistryExecutive = () => {
  const executives = [
    {
      role: "President",
      name: "Annet Sseruma Katende",
      image: president,
      bio: "Leading with vision and compassion.",
    },
    {
      role: "Director of Good Samaritans Ministry",
      name: "Rev. Fr Achilles Mayanja",
      image: director,
      bio: "Guiding our spiritual mission.",
    },
    {
      role: "Vice President",
      name: "Matia Njuki",
      image: vice,
      bio: "Supporting our community initiatives.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-[#f3f1ec] text-[#bd0f2f] text-sm font-medium mb-3">
            Ministry Team
          </span>
          <h3 className="text-3xl font-bold text-center mb-3 text-[#bd0f2f]">
            Our Leadership
          </h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Committed to serving our community through faith, hope, and love
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {executives.map((exec, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative">
                <div className="h-56 bg-gradient-to-b from-[#f3f1ec] to-white flex items-center justify-center overflow-hidden">
                  <img
                    src={exec.image}
                    alt={`${exec.name}'s profile`}
                    className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#793f49]/70 to-transparent "></div>
              </div>

              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-[#bd0f2f] mb-1">
                  {exec.name}
                </h4>
                <p className="text-[#0d1540] font-medium mb-3">{exec.role}</p>
                <p className="text-gray-600 italic text-sm">{exec.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MinistryExecutive;