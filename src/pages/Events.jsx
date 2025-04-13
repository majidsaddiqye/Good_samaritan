"use client"
import prison from "../assets/prison.jpg";
import jubilee from "../assets/jubilee.jpg";
import img1 from "../assets/img1.jpg";

const Events = () => {
  const events = [
    {
      title: "Prison Visit Outreach",
      image:prison,
      date: "May 20",
      year: "2025",
      location: "Luzira Prison, Kampala",
      description: "Join us to provide spiritual nourishment and support to inmates and their families.",
      categories: ["OUTREACH", "MINISTRY", "EVENTS"],
    },
    {
      title: "Jubilee Pilgrimage",
      image: jubilee,
      date: "June 15",
      year: "2025",
      location: "Namugongo Martyrs Shrine",
      description: "A spiritual journey to celebrate faith and unity in our community.",
      categories: ["PILGRIMAGE", "COMMUNITY", "EVENTS"],
    },
    {
      title: "Needy Home Visits",
      image: img1,
      date: "July 10",
      year: "2025",
      location: "Various Parishes, Kampala",
      description: "Volunteer to deliver essentials and prayers to those in need across Kampala.",
      categories: ["OUTREACH", "VOLUNTEERS", "EVENTS"],
    },
  ]

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Events</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Participate in our upcoming events to make a difference in Kampala.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 text-blue-900">Upcoming Events</h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            {events.map((event, index) => (
              <div key={index} className="bg-white rounded-sm shadow-md overflow-hidden border border-gray-100">
                <div className="relative">
                  {/* Date box */}
                  <div className="absolute top-0 left-0 bg-yellow-200 p-3 z-10">
                    <div className="text-sm font-medium text-gray-700">{event.date.split(" ")[0]}</div>
                    <div className="text-3xl font-bold text-gray-900">{event.date.split(" ")[1]}</div>
                  </div>

                  {/* Logo placeholder - replace with your actual logo */}
                  <div className="flex items-center justify-end p-4 bg-gray-50">
                    <div className="text-blue-900 font-bold text-lg">GOOD SAMARITAN</div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row">
                  {/* Image placeholder - replace with your own image */}
                  <div className="w-full md:w-1/3 h-64 bg-gray-200 flex items-center justify-center">
                    <img className="w-full h-full object-cover" src={event.image} alt="" />
                  </div>

                  <div className="p-6 flex-1">
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {event.date}, {event.year} | {event.location}
                    </p>
                    <p className="text-gray-700 mb-6">{event.description}</p>

                    <div className="flex flex-col space-y-4">
                      <a
                        href="/support"
                        className="border-2 border-blue-900 text-blue-900 rounded-full px-6 py-2 font-medium hover:bg-blue-900 hover:text-white transition-colors self-end"
                      >
                        Join Event
                      </a>

                      <div className="text-xs text-gray-600 font-medium">{event.categories.join(", ")}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Events
