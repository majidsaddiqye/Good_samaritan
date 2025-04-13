"use client"

const News = () => {
  const articles = [
    {
      title: "Prison Visit Brings Hope to Inmates",
      date: "March 15",
      summary: "Our recent visit to Luzira Prison provided spiritual support and essential supplies to inmates.",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      categories: ["OUTREACH", "MINISTRY", "NEWS"],
    },
    {
      title: "Jubilee Pilgrimage Unites Community",
      date: "February 10",
      summary: "Hundreds joined our pilgrimage to Namugongo, celebrating faith and unity.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      categories: ["EVENTS", "COMMUNITY", "NEWS"],
    },
    {
      title: "Needy Home Visits Expand Reach",
      date: "January 5",
      summary: "Volunteers visited over 50 homes, delivering food and prayers to those in need.",
      image:
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      categories: ["OUTREACH", "VOLUNTEERS", "NEWS"],
    },
  ]

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">News</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Stay updated with the latest activities of the Good Samaritans Ministry.
          </p>
        </div>
      </section>

      {/* News Articles Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 text-blue-900">Recent Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {articles.map((article, index) => (
              <div key={index} className="bg-white rounded-sm shadow-md overflow-hidden border border-gray-100">
                {/* Date box */}
                <div className="relative">
                  <div className="absolute top-0 left-0 bg-yellow-200 p-3 z-10">
                    <div className="text-sm font-medium text-gray-700">{article.date.split(" ")[0]}</div>
                    <div className="text-3xl font-bold text-gray-900">{article.date.split(" ")[1]}</div>
                  </div>

                  {/* Logo placeholder - replace with your actual logo */}
                  <div className="flex items-center justify-end p-8 bg-gray-50">
                    <div className="text-blue-900 font-bold text-xl">GOOD SAMARITAN</div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">{article.title}</h3>
                  <p className="text-gray-700 mb-6">{article.summary}</p>

                  <div className="flex flex-col space-y-4">
                    <button className="border-2 border-blue-900 text-blue-900 rounded-full px-6 py-2 font-medium hover:bg-blue-900 hover:text-white transition-colors self-end">
                      Read more
                    </button>

                    <div className="text-xs text-gray-600 font-medium">{article.categories.join(", ")}</div>
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

export default News
