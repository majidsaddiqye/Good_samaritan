import { useState } from "react";
import { Link } from "react-router-dom";

const Donate = () => {
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

  const needsList = [
    { item: "Food Supplies", quantity: "500 kits", urgency: "High" },
    { item: "Medical Supplies", quantity: "200 units", urgency: "Medium" },
    { item: "Clothing", quantity: "1000 pieces", urgency: "Low" },
  ];

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="bg-red-800 text-cream-100 py-16 bg-gradient-to-b from-cream-50/10 to-transparent">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            Donate Now
          </h1>
          <p className="text-xl max-w-2xl mx-auto font-sans">
            Your generosity helps us serve the most vulnerable in Kampala.
          </p>
        </div>
      </section>

      {/* Needs List Section */}
      <section className="py-12 bg-cream-100">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 font-serif">
            Archdiocese Needs List
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full max-w-3xl mx-auto bg-cream-100 rounded-xl shadow-lg">
              <thead>
                <tr className="bg-red-800 text-cream-100">
                  <th className="px-6 py-3 text-left font-serif">Item</th>
                  <th className="px-6 py-3 text-left font-serif">Quantity</th>
                  <th className="px-6 py-3 text-left font-serif">Urgency</th>
                </tr>
              </thead>
              <tbody>
                {needsList.map((need, index) => (
                  <tr key={index} className="border-t border-cream-200">
                    <td className="px-6 py-4 text-gray-700 font-sans">{need.item}</td>
                    <td className="px-6 py-4 text-gray-700 font-sans">{need.quantity}</td>
                    <td className="px-6 py-4 text-gray-700 font-sans">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          need.urgency === "High"
                            ? "bg-red-200 text-red-800"
                            : need.urgency === "Medium"
                            ? "bg-yellow-200 text-yellow-800"
                            : "bg-blue-200 text-blue-900"
                        }`}
                      >
                        {need.urgency}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Search Parishes Section */}
      <section className="py-12 bg-cream-100">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 font-serif">
            Support a Parish
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

      {/* Donation Options Section */}
      <section className="py-12 bg-cream-100">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 font-serif">
            How to Donate
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-cream-100 rounded-xl shadow-lg p-6 border-t-4 border-red-800">
              <h3 className="text-xl font-semibold font-serif mb-4">
                Donate via Airtel Money
              </h3>
              <p className="text-gray-700 font-sans">
                1. Dial *185*9#
                <br />
                2. Enter Merchant Code: 1178250
                <br />
                3. Enter the amount
                <br />
                4. Reason: Donation
                <br />
                5. Proceed with your PIN
              </p>
            </div>
            <div className="bg-cream-100 rounded-xl shadow-lg p-6 border-t-4 border-red-800">
              <h3 className="text-xl font-semibold font-serif mb-4">
                Donate via Bank Transfer
              </h3>
              <p className="text-gray-700 font-sans">
                Bank: Centenary Bank
                <br />
                Account Title: Good Samaritans Kampala Archdiocese
                <br />
                Account Number: 3200654641
              </p>
            </div>
          </div>
          <div className="mt-8 text-center font-sans">
            <p className="text-gray-700 mb-4">
              You can also contribute in the book of the good-hearted at your
              local parish. For more information, contact{" "}
              <a
                href="mailto:goodsamaritanskampala@gmail.com"
                className="text-red-800 underline hover:text-red-900"
              >
                goodsamaritanskampala@gmail.com
              </a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Donate;