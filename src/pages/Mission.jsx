import React from 'react';

const Mission = () => {
  const missionPoints = [
    "Endeavour to instill into all Catholics the spirit of charity to all needy persons particularly those in the same locality.",
    "Identify the needy; the widows, widowers, the elderly, the sick, and others right from the Basic Christian Communities to the Parish level.",
    "Solicit all kinds of assistance (money, food) from all categories of Catholics: men, women, youth, and children for distribution to the identified needy.",
    "Establish a need fund at every level.",
    "Establish programs through which the needy, particularly victims of chronic diseases, can get counseling and where possible donors.",
    "Prisons: To pray for, visit, and help Prisoners and their families in our communities, for both their physical and spiritual needs."
  ];

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="bg-red-800 text-white py-16 bg-gradient-to-b from-cream-50/10 to-transparent">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            Our Mission
          </h1>
          <p className="text-xl max-w-2xl mx-auto font-sans">
            Serving with compassion, guided by faith
          </p>
        </div>
      </section>

      {/* Mission Content */}
      <section className="py-12 bg-cream-100">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-8 font-serif">
              Mission of the Good Samaritans Kampala Archdiocese
            </h2>
            <div className="space-y-6">
              {missionPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md border border-red-800">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-800 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </span>
                  <p className="text-lg text-gray-800">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Mission; 