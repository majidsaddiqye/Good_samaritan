import React from "react";

const GoodSamaritan = () => {
  const spiritualActs = [
    "Instruct the ignorant",
    "Counsel the doubtful",
    "Admonish sinners",
    "Bear wrongs patiently",
    "Forgive offenses willingly",
    "Pray for the living & the dead",
    "Comfort the afflicted",
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-semibold text-center mb-4 text-blue-900">
          Who's A Good Samaritan?
        </h3>
        <p className="text-lg text-center mb-8 max-w-2xl mx-auto text-gray-700">
          A person who does Spiritual Acts of Mercy.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {spiritualActs.map((act, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded border border-gray-200 shadow-sm text-center"
            >
              <p className="font-medium text-gray-800">{act}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="/learn-more" 
            className="inline-block px-6 py-2 bg-blue-800 text-white font-medium rounded-md hover:bg-blue-900 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoodSamaritan;