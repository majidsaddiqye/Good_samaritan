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
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Donate Now</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Your generosity helps us serve the most vulnerable in Kampala.
          </p>
        </div>
      </section>

      {/* Needs List Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 text-blue-900">
            Archdiocese Needs List
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full max-w-3xl mx-auto bg-white rounded-xl shadow-lg">
              <thead>
                <tr className="bg-blue-50">
                  <th className="px-6 py-3 text-left text-blue-900">Item</th>
                  <th className="px-6 py-3 text-left text-blue-900">Quantity</th>
                  <th className="px-6 py-3 text-left text-blue-900">Urgency</th>
                </tr>
              </thead>
              <tbody>
                {needsList.map((need, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-6 py-4 text-gray-700">{need.item}</td>
                    <td className="px-6 py-4 text-gray-700">{need.quantity}</td>
                    <td className="px-6 py-4 text-gray-700">{need.urgency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Search Parishes Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 text-blue-900">
            Support a Parish
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

      {/* Donation Options Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 text-blue-900">
            How to Donate
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                Donate via Airtel Money
              </h3>
              <p className="text-gray-700">
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
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                Donate via Bank Transfer
              </h3>
              <p className="text-gray-700">
                Bank: Centenary Bank
                <br />
                Account Title: Good Samaritans Kampala Archdiocese
                <br />
                Account Number: 3200654641
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-700 mb-4">
              You can also contribute in the book of the good-hearted at your local parish.
              For more information, contact{" "}
              <a
                href="mailto:goodsamaritanskampala@gmail.com"
                className="text-blue-900 underline hover:text-blue-700"
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