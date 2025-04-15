import React from 'react';

const Prayer = () => {
  const prayerLines = [
    "O God Eternal Father, merciful and giver of all blessings, You sent us Your only begotten Son our Lord Jesus Christ to bring us Your mercy; he taught us and instructed us to extend your mercy to our neighbors.",
    "Grant we beseech you, that you make us Good Samaritans, to love all people and extend your mercy towards all by helping those in most need.",
    "We pray through Christ our Lord. Amen."
  ];

  const intercessions = [
    { title: "The Most Sacred Heart of Jesus, full of compassion and love", response: "Have mercy on us" },
    { title: "Holy Mary, Health of the sick", response: "pray for us" },
    { title: "St. Joseph, Patron of the afflicted", response: "pray for us" },
    { title: "The Uganda Martyrs", response: "pray for us" }
  ];

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="bg-red-800 text-white py-16 bg-gradient-to-b from-cream-50/10 to-transparent">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            Our Prayer
          </h1>
          <p className="text-xl max-w-2xl mx-auto font-sans">
            Prayer for the Good Samaritans Kampala Archdiocese
          </p>
        </div>
      </section>

      {/* Prayer Content */}
      <section className="py-12 bg-cream-100">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-red-800">
            <div className="text-center mb-8">
              <p className="text-lg font-semibold text-red-800 italic">
                In the name of the Father and of the Son and of the Holy Spirit. Amen
              </p>
            </div>

            <div className="space-y-6 mb-8">
              {prayerLines.map((line, index) => (
                <p key={index} className="text-lg text-gray-800 leading-relaxed">
                  {line}
                </p>
              ))}
            </div>

            <div className="space-y-4">
              {intercessions.map((intercession, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 bg-cream-50 rounded-lg">
                  <p className="text-lg text-gray-800">{intercession.title}</p>
                  <p className="text-lg text-red-800 italic">- {intercession.response}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-lg font-semibold text-red-800 italic">
                In the name of the Father and of the Son and of the Holy Spirit. Amen
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Prayer; 