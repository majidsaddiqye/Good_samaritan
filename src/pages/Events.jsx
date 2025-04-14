"use client";
import prison from "../assets/prison.jpg";
import jubilee from "../assets/jubilee.jpg";
import img1 from "../assets/img1.jpg";

const Events = () => {
  const events = [
    {
      title: "Prison Visit Outreach",
      image: prison,
      date: "May 20",
      year: "2025",
      location: "Luzira Prison, Kampala",
      description:
        "Join us to provide spiritual nourishment and support to inmates and their families.",
      categories: ["OUTREACH", "MINISTRY", "EVENTS"],
    },
    {
      title: "Jubilee Pilgrimage",
      image: jubilee,
      date: "June 15",
      year: "2025",
      location: "Namugongo Martyrs Shrine",
      description:
        "A spiritual journey to celebrate faith and unity in our community.",
      categories: ["PILGRIMAGE", "COMMUNITY", "EVENTS"],
    },
    {
      title: "Needy Home Visits",
      image: img1,
      date: "July 10",
      year: "2025",
      location: "Various Parishes, Kampala",
      description:
        "Volunteer to deliver essentials and prayers to those in need across Kampala.",
      categories: ["OUTREACH", "VOLUNTEERS", "EVENTS"],
    },
  ];

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="bg-red-800 text-cream-100 py-16 bg-gradient-to-b from-cream-50/10 to-transparent">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            Events
          </h1>
          <p className="text-xl max-w-2xl mx-auto font-sans">
            Participate in our upcoming events to make a difference in Kampala.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-12 bg-cream-100">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 font-serif">
            Upcoming Events
          </h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-cream-100 rounded-lg shadow-md overflow-hidden border border-red-800"
              >
                <div className="relative">
                  {/* Date box */}
                  <div className="absolute top-0 left-0 bg-yellow-200 p-3 z-10">
                    <div className="text-sm font-medium text-red-800 font-sans">
                      {event.date.split(" ")[0]}
                    </div>
                    <div className="text-3xl font-bold text-red-800 font-serif">
                      {event.date.split(" ")[1]}
                    </div>
                  </div>

                  {/* Logo placeholder */}
                  <div className="flex items-center justify-end p-4 bg-cream-200">
                    <div className="text-red-800 font-bold text-lg font-serif">
                      GOOD SAMARITAN
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3 h-64">
                    <img
                      className="w-full h-full object-cover"
                      src={event.image}
                      alt={event.title}
                    />
                  </div>

                  <div className="p-6 flex-1">
                    <h3 className="text-xl font-semibold font-serif mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 font-sans">
                      {event.date}, {event.year} | {event.location}
                    </p>
                    <p className="text-gray-700 mb-6 font-sans">
                      {event.description}
                    </p>

                    <div className="flex flex-col space-y-4">
                      <a
                        href="/support"
                        className="border-2 border-red-800 text-red-800 rounded-full px-6 py-2 font-medium hover:bg-red-800 hover:text-white transition-colors self-end font-sans"
                      >
                        Join Event
                      </a>

                      <div className="text-xs text-gray-600 font-medium font-sans">
                        {event.categories.join(", ")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Events;