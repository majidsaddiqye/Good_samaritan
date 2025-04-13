const History = () => {
    const milestones = [
      {
        year: "2000",
        title: "Founding of Good Samaritans Ministry",
        description:
          "The ministry was established under the Kampala Archdiocese to serve the vulnerable, inspired by the Parable of the Good Samaritan.",
        image:
          "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
      {
        year: "2010",
        title: "Expansion of Prison Ministry",
        description:
          "Launched regular prison visits to provide spiritual nourishment and support to inmates and their families.",
        image:
          "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
      {
        year: "2020",
        title: "Jubilee Pilgrimage Initiative",
        description:
          "Introduced community pilgrimages to strengthen faith and unity across parishes.",
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
    ];
  
    return (
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our History</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Discover the journey of the Good Samaritans Ministry in serving Kampala’s most vulnerable.
            </p>
          </div>
        </section>
  
        {/* Timeline Section */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-8 text-blue-900">
              Milestones
            </h2>
            <div className="space-y-12 max-w-4xl mx-auto">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="w-full md:w-1/2">
                    <img
                      src={milestone.image}
                      alt={milestone.title}
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <h3 className="text-2xl font-semibold text-blue-900 mb-2">
                      {milestone.year} - {milestone.title}
                    </h3>
                    <p className="text-gray-700">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  };
  
  export default History;