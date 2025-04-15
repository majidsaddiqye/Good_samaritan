import React from 'react';

const History = () => {
  const impactData = [
    { item: "Retreats", quantity: "25" },
    { item: "Homes Supported", quantity: "10,659" },
    { item: "Homes with needy people", quantity: "2,301" },
    { item: "The number of sick people supported", quantity: "2,652" },
    { item: "People with special needs", quantity: "752" },
    { item: "Homes that got Ssabasumba covid-19 relief food", quantity: "17,500" },
    { item: "Special lent package", quantity: "52,500 individuals" },
    { item: "Sacraments administered", quantity: "60,356 people from 8,978 homes" },
    { item: "Visits to Prisons", quantity: "19" },
    { item: "Patients treated in Hospitals", quantity: "765" }
  ];

  const pastLeaders = [
    { role: "President", name: "Mrs. Yiga Regina" },
    { role: "Vice President", name: "Zachariah Isabirye" }
  ];

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="bg-red-800 text-white py-16 bg-gradient-to-b from-cream-50/10 to-transparent">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            Our History
          </h1>
          <p className="text-xl max-w-2xl mx-auto font-sans">
            The journey of Good Samaritans and Prisons Ministry Kampala Archdiocese
          </p>
        </div>
      </section>

      {/* History Content */}
      <section className="py-12 bg-cream-100 text-black">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="prose max-w-4xl mx-auto">
            <p className="text-lg mb-6">
              The Good Samaritans and Prisons Ministry Kampala Archdiocese was incepted in 2008 and 
              the first chairperson of the ministry was Mrs. Prossy Matovu.
            </p>
            <p className="text-lg mb-6">
              We are grateful to the late Emmanuel Cardinal Nsubuga for starting up the Good Samaritan 
              sister's home at Nalukolongo which looks after the elderly.
            </p>
            <p className="text-lg mb-6">
              Grateful to Emmanuel Cardinal Wamala (Emeritus) for hosting the AMECEA conference for All 
              Bishops from East Africa who deliberated and agreed on starting up this ministry in the church. 
              He also convened the Archdiocesan synod to deliberate and come up with the ministry 
              guidelines in 2006.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-12 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 font-serif">
            Our Impact (2014-2021)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {impactData.map((item, index) => (
              <div key={index} className="bg-cream-100 rounded-lg p-6 shadow-md border border-red-800">
                <h3 className="text-xl font-semibold mb-2 text-red-800">{item.item}</h3>
                <p className="text-3xl font-bold text-gray-800">{item.quantity}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Leaders */}
      <section className="py-12 bg-cream-100">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 font-serif">
            Past Leaders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pastLeaders.map((leader, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md border border-red-800">
                <h3 className="text-xl font-semibold mb-2 text-red-800">{leader.role}</h3>
                <p className="text-lg text-gray-800">{leader.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default History;