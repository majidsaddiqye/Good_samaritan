import president from "../assets/president.jpeg";
import director from "../assets/director.jpg";
import vice from "../assets/vice.jpg";
import Head  from "../assets/Head.jpeg";
import paulw  from "../assets/paulw.jpg";
import Rachael  from "../assets/Rachael.jpeg";
import menpng  from "../assets/menpng.png";
import womenpng  from "../assets/womenpng.png";

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
      image: menpng,
      description: "Leading financial and administrative matters with expertise.",
    },
    {
      role: "Head Liturgy",
      name: "Florence",
      image: menpng,
      description: "Overseeing liturgical activities and spiritual guidance.",
    },
    {
      role: "Head of Planning & Development",
      name: "Rachael",
      image: womenpng,
      description: "Driving strategic planning and development initiatives.",
    },
    {
      role: "Head Welfare",
      name: "Patrick",
      image: menpng,
      description: "Managing welfare programs and support services.",
    },
    {
      role: "Head Teaching",
      name: "Paul",
      image: menpng,
      description: "Leading educational and teaching initiatives.",
    },
  ];

  const executiveList = [
    { id: "01", name: "Fr. Mayanja Achilles", role: "Director", phone: "0772 508 252" },
    { id: "02", name: "Mrs Annet S. Katende", role: "President", phone: "0700 115 430" },
    { id: "03", name: "Mr Njuki Mathias", role: "Vice - President", phone: "0782 227 504" },
    { id: "04", name: "Mr Kitemagira Damian", role: "Finance", phone: "0772 459 845" },
    { id: "05", name: "Mrs Florence Kyambadde", role: "Liturgy", phone: "0704 760 685" },
    { id: "06", name: "Ms Nalweyiso Teddy", role: "Teaching", phone: "0750 861 919" },
    { id: "07", name: "Mr Bogere Patrick", role: "Welfare & Events", phone: "0705 545 269" },
    { id: "08", name: "Dr Kyaddondo Betty", role: "Secretary", phone: "0772 507 533" },
    { id: "09", name: "Ms Natukunda Lydia", role: "Vice Secretary", phone: "0774 954 749" },
    { id: "10", name: "Ms Talagwa Rachael", role: "Christ the king", phone: "0779 302 292" },
    { id: "11", name: "Ms Birungi Angella", role: "Entebbe", phone: "0774 106 026" },
    { id: "12", name: "Ms Rutagi Agnes", role: "Ggayaaza", phone: "0772 624 379" },
    { id: "13", name: "Ms Harriet Ssenkungu", role: "Kibiri", phone: "0701 700 244" },
    { id: "14", name: "Mr Kasozi Peter", role: "Lubaga", phone: "0754 002 357" },
    { id: "15", name: "Ms Nampilima Matovu Ana", role: "Matugga", phone: "0782 680 807" },
    { id: "16", name: "Ms Nabaweesi Teddy", role: "Mitalamaliya", phone: "0783 287 925" },
    { id: "17", name: "Mr Mukwaya Emmanuel", role: "Mpigi", phone: "0701 638 503" },
    { id: "18", name: "Mr Kabugo Achilles", role: "Nabbingo", phone: "0782 382 269" },
    { id: "19", name: "", role: "Naddangira", phone: "" },
    { id: "20", name: "Mr Kirunda Joseph", role: "Naggulu", phone: "0774 198 888" },
    { id: "21", name: "", role: "Nakulabye", phone: "" },
    { id: "22", name: "Ms Mubiru Maryann K", role: "Nsambya", phone: "0705 089 830" }
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

      {/* Full Executive List */}
      <section className="py-12 bg-cream-100">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 font-serif">
            AOK GOOD SAMARITANS AND PRISON MINISTRY EXECUTIVE 2024
          </h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-red-800 text-white">
                    <th className="px-6 py-3 text-left text-sm font-semibold">#</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Erinnya</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Obutuume</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold"># y'Essimu</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Omukono</th>
                  </tr>
                </thead>
                <tbody className="divide-y text-black">
                  {executiveList.map((member) => (
                    <tr key={member.id} className="hover:bg-cream-50">
                      <td className="px-6 py-4 whitespace-nowrap">{member.id}</td>
                      <td className="px-6 py-4">{member.name}</td>
                      <td className="px-6 py-4">{member.role}</td>
                      <td className="px-6 py-4">{member.phone}</td>
                      <td className="px-6 py-4"></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Leadership;