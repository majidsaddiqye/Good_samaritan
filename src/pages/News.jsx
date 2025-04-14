"use client";

const News = () => {
  const articles = [
    {
      title: "Prison Visit Brings Hope to Inmates",
      date: "March 15",
      summary:
        "Our recent visit to Luzira Prison provided spiritual support and essential supplies to inmates.",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      categories: ["OUTREACH", "MINISTRY", "NEWS"],
    },
    {
      title: "Jubilee Pilgrimage Unites Community",
      date: "February 10",
      summary:
        "Hundreds joined our pilgrimage to Namugongo, celebrating faith and unity.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      categories: ["EVENTS", "COMMUNITY", "NEWS"],
    },
    {
      title: "Needy Home Visits Expand Reach",
      date: "January 5",
      summary:
        "Volunteers visited over 50 homes, delivering food and prayers to those in need.",
      image:
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      categories: ["OUTREACH", "VOLUNTEERS", "NEWS"],
    },
  ];

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="bg-red-800 text-cream-100 py-16 bg-gradient-to-b from-cream-50/10 to-transparent">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            News
          </h1>
          <p className="text-xl max-w-2xl mx-auto font-sans">
            Stay updated with the latest activities of the Good Samaritans
            Ministry.
          </p>
        </div>
      </section>

      {/* News Articles Section */}
      <section className="py-12 bg-cream-100">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 font-serif">
            Recent Updates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {articles.map((article, index) => (
              <div
                key={index}
                className="bg-cream-100 rounded-lg shadow-md overflow-hidden border border-red-800"
              >
                {/* Date box */}
                <div className="relative">
                  <div className="absolute top-0 left-0 bg-yellow-200 p-3 z-10">
                    <div className="text-sm font-medium text-red-800 font-sans">
                      {article.date.split(" ")[0]}
                    </div>
                    <div className="text-3xl font-bold text-red-800 font-serif">
                      {article.date.split(" ")[1]}
                    </div>
                  </div>

                  {/* Logo placeholder */}
                  <div className="flex items-center justify-end p-8 bg-cream-200">
                    <div className="text-red-800 font-bold text-xl font-serif">
                      GOOD SAMARITAN
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold font-serif mb-3">
                    {article.title}
                  </h3>
                  <p className="text-gray-700 mb-6 font-sans">{article.summary}</p>

                  <div className="flex flex-col space-y-4">
                    <button className="border-2 border-red-800 text-red-800 rounded-full px-6 py-2 font-medium hover:bg-red-800 hover:text-white  transition-colors self-end font-sans">
                      Read more
                    </button>

                    <div className="text-xs text-gray-600 font-medium font-sans">
                      {article.categories.join(", ")}
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

export default News;