import { useState } from "react";
import { Link } from "react-router-dom";

const Locations = () => {
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

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Locations</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Find a Good Samaritans parish near you to join our mission of mercy.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 text-blue-900">
            Search Parishes
          </h2>
          <div className="max-w-3xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Type parish name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900"
              />
              <select
                value={selectedVicariate}
                onChange={(e) => setSelectedVicariate(e.target.value)}
                className="px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900"
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
                className="px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900"
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
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    {parish.name}
                  </h3>
                  <p className="text-gray-600">{parish.deanery}</p>
                </Link>
              ))
            ) : (
              <p className="text-center text-gray-600 col-span-full">
                No parishes found.
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Locations;