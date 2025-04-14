import { Link } from "react-router-dom";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";

const WaysToSupport = () => {
  const supportOptions = [
    {
      title: "Volunteer with Us",
      description:
        "Join our team of volunteers to make a direct impact. Help with prison visits, home visits, or organize pilgrimages in your parish.",
      image: img5,
     cta: "Sign Up to Volunteer",
      link: "/contact",
    },
    {
      title: "Make a Donation",
      description:
        "Your financial support helps us provide essentials to the needy. Donate via Airtel Money, bank transfer, or at your local parish.",
      image: img6,
      cta: "Donate Now",
      link: "/donate",
    },
    {
      title: "Join the Book of the Gold-Hearted",
      description:
        "Contribute to our mission by adding your name to the book of the gold-hearted at your local parish, showing your commitment to acts of mercy.",
      image: img7,
      cta: "Learn More",
      link: "/contact",
    },
    {
      title: "Collaborate with Us",
      description:
        "Join hands with us on various projects. We collaborate with other parish departments like Caritas and teaching departments to maximize our impact.",
      image: img5,
      cta: "Contact Us",
      link: "/contact",
    },
    {
      title: "Purchase Our Success Story Book",
      description:
        "Support our mission by purchasing the 'Success Story of the Good Samaritans Ministry of Kampala Archdiocese Book' for 200,000 UGX. Contact our office for details.",
      image: img6,
      cta: "Contact Office",
      link: "/contact",
    },
  ];

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="bg-red-800 text-cream-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Ways to Support</h1>
          <p className="text-xl max-w-2xl mx-auto font-sans">
            Be a Good Samaritan by supporting our mission with compassion and generosity.
          </p>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-12 bg-cream-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 text-red-900 font-serif">
            How You Can Help
          </h2>
          <div className="space-y-12">
            {supportOptions.map((option, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="w-full md:w-1/2">
                  <img
                    src={option.image}
                    alt={option.title}
                    className="w-full h-64 object-cover rounded-lg shadow-md border border-red-600"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-semibold text-red-900 font-serif mb-4">
                    {option.title}
                  </h3>
                  <p className="text-gray-800 font-sans mb-4">{option.description}</p>
                  <Link
                    to={option.link}
                    className="bg-yellow-400 text-red-900 px-6 py-3 rounded-lg font-semibold font-sans hover:bg-yellow-200 transition-colors"
                  >
                    {option.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-cream-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-red-900 font-serif mb-4">
            Have Questions?
          </h2>
          <p className="text-gray-800 font-sans mb-6">
            Contact us for more information on how you can support our mission.
          </p>
          <p className="text-gray-800 font-sans">
            Email:{" "}
            <a
              href="mailto:goodsamaritanskampala@gmail.com"
              className="text-red-900 underline hover:text-red-700"
            >
              goodsamaritanskampala@gmail.com
            </a>
            <br />
            Phone: +256 987 654 321
          </p>
        </div>
      </section>
    </main>
  );
};

export default WaysToSupport;