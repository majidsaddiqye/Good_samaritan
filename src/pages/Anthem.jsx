import React from 'react';

const Anthem = () => {
  const anthemVerses = [
    "Ababatize ffena tuli Basamaliya,",
    "Nga tukola ebyekisa mu bonna abadaaga",
    "Kristu Yezu Omwagalwayatuwa okwagala kwe,",
    "Nga tukola ebyekisa mu bonna abadaaga",
    "Kale naffe tutuuno tubawe okwagala kwe,",
    "Nga tukola ebyekisa mu bonna abadaaga",
    "Yezu tumwagale nga, tumulabe mu banaku.",
    "Obwenkanya nekisa mu bonna abadaaga"
  ];

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="bg-red-800 text-white py-16 bg-gradient-to-b from-cream-50/10 to-transparent">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            Our Anthem
          </h1>
          <p className="text-xl max-w-2xl mx-auto font-sans">
            Anthem of the Good Samaritans Kampala Archdiocese
          </p>
        </div>
      </section>

      {/* Anthem Content */}
      <section className="py-12 bg-cream-100">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-red-800">
            <div className="space-y-6">
              {anthemVerses.map((verse, index) => (
                <div key={index} className="text-center">
                  <p className="text-xl text-gray-800 italic leading-relaxed">
                    {verse}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Anthem; 