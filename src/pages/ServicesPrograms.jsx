import { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import prison from "../assets/prison.jpg";
import jubilee from "../assets/jubilee.jpg";
import img1 from "../assets/img1.jpg";

const ServicesPrograms = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVicariate, setSelectedVicariate] = useState("Entebbe Vicariate");
  const [selectedDeanery, setSelectedDeanery] = useState("");

  const vicariates = ["Entebbe Vicariate"];
  const deaneries = ["Entebbe Deanery", "Kibiri Deanery", "Nabbingo Deanery"];
  const parishes = [
    // Entebbe Deanery
    { name: "Entebbe-Bugonga Parish", deanery: "Entebbe Deanery", id: "entebbe-bugonga" },
    { name: "Buyege Parish", deanery: "Entebbe Deanery", id: "buyege" },
    { name: "Kabulamuliro Parish", deanery: "Entebbe Deanery", id: "kabulamuliro" },
    { name: "Kisubi Parish", deanery: "Entebbe Deanery", id: "kisubi" },
    { name: "Lweza Parish", deanery: "Entebbe Deanery", id: "lweza" },
    { name: "Kiwamirembe Marian Shrine", deanery: "Entebbe Deanery", id: "kiwamirembe" },
    { name: "Mpala Parish", deanery: "Entebbe Deanery", id: "mpala" },
    // Kibiri Deanery
    { name: "Kibiri Parish", deanery: "Kibiri Deanery", id: "kibiri" },
    { name: "Masajja Parish", deanery: "Kibiri Deanery", id: "masajja" },
    { name: "Namasuba Parish", deanery: "Kibiri Deanery", id: "namasuba" },
    { name: "Ndejje Parish", deanery: "Kibiri Deanery", id: "ndejje" },
    // Nabbingo Deanery
    { name: "Buloba Parish", deanery: "Nabbingo Deanery", id: "buloba" },
    { name: "Bunnamwaya Parish", deanery: "Nabbingo Deanery", id: "bunnamwaya" },
    { name: "Kyengera Parish", deanery: "Nabbingo Deanery", id: "kyengera" },
    { name: "Nabbingo Parish", deanery: "Nabbingo Deanery", id: "nabbingo" },
    { name: "Nakawuka Parish", deanery: "Nabbingo Deanery", id: "nakawuka" },
  ];

  const filteredParishes = parishes.filter((parish) => {
    const matchesSearch = parish.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDeanery = selectedDeanery ? parish.deanery === selectedDeanery : true;
    return matchesSearch && matchesDeanery;
  });

  const programs = [
    {
      title: "Prison Visits",
      description:
        "Our Prison Visits program provides spiritual nourishment and material support to inmates, helping them find hope and redemption. We organize regular visits to prisons like Luzira, offering prayers, counseling, and essentials to inmates and their families.",
      image: prison,
    },
    {
      title: "Jubilee Pilgrimage",
      description:
        "The Jubilee Pilgrimage brings the community together for spiritual journeys to sacred sites like Namugongo Martyrs Shrine. These pilgrimages strengthen faith, foster unity, and provide an opportunity for reflection and prayer.",
      image: jubilee,
    },
    {
      title: "Needy Home Visits",
      description:
        "Through Needy Home Visits, we reach out to the most vulnerable in our parishes, delivering food, clothing, and prayers. Volunteers visit homes to offer support, ensuring no one is left behind in our mission of mercy.",
      image: img1,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="bg-red-800 text-cream-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Services & Programs</h1>
          <p className="text-xl max-w-2xl mx-auto font-sans">
            Discover how our Good Samaritans serve the community with compassion and faith.
          </p>
        </div>
      </section>

      {/* Key Programs Slider */}
      <section className="py-12 bg-cream-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 text-red-900 font-serif">
            Our Key Programs
          </h2>
          <Slider {...settings}>
            {programs.map((program, index) => (
              <div key={index} className="px-3">
                <div className="bg-cream-50 rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 border border-red-600">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-60 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-red-900 font-serif mb-3">
                      {program.title}
                    </h4>
                    <p className="text-gray-800 font-sans">{program.description.split(". ")[0]}.</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Search Programs by Location */}
      {/* <section className="py-12 bg-cream-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 text-red-900 font-serif">
            Find Programs by Location
          </h2>
          <div className="max-w-3xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Type parish name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900 bg-cream-100 border border-red-600 font-sans"
              />
              <select
                value={selectedVicariate}
                onChange={(e) => setSelectedVicariate(e.target.value)}
                className="px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900 bg-cream-100 border border-red-600 font-sans"
              >
                {vicariates.map((vicariate) => (
                  <option key={vicariate} value={vicariate}>
                    {vicariate}
                  </option>
                ))}
              </select>
              <select
                value={selectedDeanery}
                onChange={(e) => setSelectedDeanery(e.target.value)}
                className="px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900 bg-cream-100 border border-red-600 font-sans"
              >
                <option value="">All Deaneries</option>
                {deaneries.map((deanery) => (
                  <option key={deanery} value={deanery}>
                    {deanery}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {filteredParishes.length > 0 ? (
              filteredParishes.map((parish) => (
                <Link
                  key={parish.id}
                  to={`/locations/${parish.id}`}
                  className="bg-cream-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-red-600"
                >
                  <h3 className="text-xl font-semibold text-red-900 font-serif mb-2">
                    {parish.name}
                  </h3>
                  <p className="text-gray-800 font-sans">{parish.deanery}</p>
                </Link>
              ))
            ) : (
              <p className="text-center text-gray-800 font-sans col-span-full">
                No parishes found.
              </p>
            )}
          </div>
        </div>
      </section> */}
      <section className="py-12 bg-cream-100">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 font-serif">
            Search Parishes
          </h2>
          <div className="max-w-3xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Type parish name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg shadow-sm bg-cream-50 border border-cream-200 focus:outline-none focus:ring-2 focus:ring-red-800 text-gray-900 font-sans"
              />
              <select
                value={selectedVicariate}
                onChange={(e) => setSelectedVicariate(e.target.value)}
                className="px-4 py-3 rounded-lg shadow-sm bg-cream-50 border border-cream-200 focus:outline-none focus:ring-2 focus:ring-red-800 text-gray-900 font-sans"
              >
                {vicariates.map((vicariate) => (
                  <option key={vicariate} value={vicariate}>
                    {vicariate}
                  </option>
                ))}
              </select>
              <select
                value={selectedDeanery}
                onChange={(e) => setSelectedDeanery(e.target.value)}
                className="px-4 py-3 rounded-lg shadow-sm bg-cream-50 border border-cream-200 focus:outline-none focus:ring-2 focus:ring-red-800 text-gray-900 font-sans"
              >
                <option value="">All Deaneries</option>
                {deaneries.map((deanery) => (
                  <option key={deanery} value={deanery}>
                    {deanery}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Parish List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {filteredParishes.length > 0 ? (
              filteredParishes.map((parish) => (
                <Link
                  key={parish.id}
                  to={`/locations/${parish.id}`}
                  className="bg-cream-100 rounded-xl shadow-lg p-6 hover:bg-cream-200 transition-shadow border-l-4 border-red-800"
                >
                  <h3 className="text-xl font-semibold font-serif mb-2">
                    {parish.name}
                  </h3>
                  <p className="text-gray-600 font-sans">{parish.deanery}</p>
                </Link>
              ))
            ) : (
              <p className="text-center text-gray-600 col-span-full font-sans">
                No parishes found.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-12 bg-cream-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 text-red-900 font-serif">
            Program Details
          </h2>
          <div className="space-y-12">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="w-full md:w-1/2">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-64 object-cover rounded-lg shadow-md border border-red-600"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-semibold text-red-900 font-serif mb-4">
                    {program.title}
                  </h3>
                  <p className="text-gray-800 font-sans">{program.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPrograms;