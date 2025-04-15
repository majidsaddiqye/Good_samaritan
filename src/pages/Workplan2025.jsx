import React from 'react';

const Workplan2025 = () => {
  const workplanItems = [
    { month: "January", events: [
      { date: "Saturday 11th", activity: "Beginning of year Executive", location: "Kigowa Parish" },
      { date: "Saturday 25th", activity: "Beginning of year Retreat (Parish Heads only)", location: "Kigowa Parish" }
    ]},
    { month: "February", events: [
      { date: "Tuesday 11th", activity: "Lunaku lw'Abakulembeze mu nsi yonna", location: "Buli Parish enetegeka" }
    ]},
    { month: "March", events: [
      { date: "Saturday 8th", activity: "Executive meeting", location: "Deanery & Committee Heads" }
    ]},
    { month: "May", events: [
      { date: "Sunday May 4th", activity: "Okutongoza kwa Jubileewo", location: "Abasamaliya okuva ku Bubondo" }
    ]},
    { month: "June", events: [
      { date: "Saturday 7th", activity: "Okukiika kw'Abakulira Parish okw'okubiri", location: "Abakulembera Parish n'Abawandiisi baabwe" }
    ]},
    { month: "July", events: [
      { date: "Sunday 27th", activity: "Lunaku lwa bajjaja n’Abakadde", location: "Buli Parish etegeka" }
    ]},
    { month: "August", events: [
      { date: "Saturday 9th", activity: "Olukiiko lw’Abakulira Parish olw’okusatu (Matugga Parish)", location: "Abakulembera Parish n'Abawandiisi baabwe" }
    ]},
    { month: "October", events: [
      { date: "Sun 5th-Sat11th", activity: "Week y'Omusamaliya Omulungi", location: "Abasamalia Abalungi bonna" },
      { date: "Sunday 12th", activity: "Lunaku lw'Omusamaliya Omulungi ku Ssaza", location: "Abasamalia Abalungi bonna" }
    ]},
    { month: "November", events: [
      { date: "Saturday 8th", activity: "Olukiiko oluggalawo omwaka 2025 (Buloba Parish)", location: "Abakulembera Parish" },
      { date: "Sunday 9th", activity: "Olunaku okujjukira Abaavu mu nsi Tunakwatagana ne Caritas", location: "Buli Parish etegeke" }
    ]},
    { month: "December", events: [
      { date: "Monday 1st", activity: "kujjukira siriimu munsi yonna ", location: "Buli Parish etegeke" }
    ]}
  ];

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="bg-red-800 text-white py-16 bg-gradient-to-b from-cream-50/10 to-transparent">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            Workplan Y'omusamaliya Omulungi 2025
          </h1>
          <p className="text-xl max-w-2xl mx-auto font-sans">
            Amuzalibwa Amalung'i ne 2026 ow'emirembe
          </p>
        </div>
      </section>

      {/* Workplan Section */}
      <section className="py-12 bg-cream-100">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-red-800 text-white">
                    <th className="px-6 py-3 text-left text-sm font-semibold">Month</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Date</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Activity</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Location/Participants</th>
                  </tr>
                </thead>
                <tbody className="divide-y text-black">
                  {workplanItems.map((item, index) => (
                    item.events.map((event, eventIndex) => (
                      <tr key={`${index}-${eventIndex}`} className="hover:bg-cream-50">
                        {eventIndex === 0 && (
                          <td className="px-6 py-4 align-top font-medium" rowSpan={item.events.length}>
                            {item.month}
                          </td>
                        )}
                        <td className="px-6 py-4 whitespace-nowrap">{event.date}</td>
                        <td className="px-6 py-4">{event.activity}</td>
                        <td className="px-6 py-4">{event.location}</td>
                      </tr>
                    ))
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

export default Workplan2025; 