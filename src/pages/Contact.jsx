import { useState } from "react";
import Slider from "react-slick";

const Contact = () => {
  const [formData, setFormData] = useState({
    inquiryType: "",
    name: "",
    role: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });

  const spiritualActs = [
    "Instruct the ignorant",
    "Counsel the doubtful",
    "Admonish sinners",
    "Bear wrongs patiently",
    "Forgive offenses willingly",
    "Pray for the living & the dead",
    "Comfort the afflicted",
  ];

  const corporalActs = [
    "Feed the hungry",
    "Give drink to the thirsty",
    "Clothe the naked",
    "Shelter the homeless",
    "Visit the sick and imprisoned",
    "Bury the dead",
  ];

  const allActs = [...spiritualActs, ...corporalActs];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission logic
    alert("Thank you for your message!");
    setFormData({
      inquiryType: "",
      name: "",
      role: "",
      email: "",
      phone: "",
      program: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Let us be good Samaritans by doing acts of mercy.
          </p>
        </div>
      </section>

      {/* Contact Info and Form Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-semibold text-blue-900 mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-blue-900">
                    Head Office
                  </h3>
                  <p className="text-gray-700">
                    Lubaga Cathedral, Kampala Archdiocese
                    <br />
                    Next to Centenary Bank Building
                    <br />
                    Phone: +256 987 654 321
                    <br />
                    Email: goodsamaritanskampala@gmail.com
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-900">
                    General Inquiries
                  </h3>
                  <p className="text-gray-700">
                    Phone: +256 123 456 789
                    <br />
                    Email: info@goodsamaritans.org
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-900">
                    Program Support
                  </h3>
                  <p className="text-gray-700">
                    Phone: +256 456 789 123
                    <br />
                    Email: programs@goodsamaritans.org
                  </p>
                </div>
              </div>
              <div className="mt-6 flex items-center">
                <div className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-semibold">
                  Send Kudos – A Message of Gratitude
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                We’d Love to Hear From You
              </h3>
              <p className="text-gray-700 mb-6">
                We encourage you to bring forward your feedback as this provides us
                the opportunity to improve.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  >
                    <option value="">I have a...</option>
                    <option value="question">Question</option>
                    <option value="feedback">Feedback</option>
                    <option value="request">Request</option>
                  </select>
                </div>
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name*"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </div>
                <div>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  >
                    <option value="">I am a...</option>
                    <option value="volunteer">Volunteer</option>
                    <option value="donor">Donor</option>
                    <option value="community-member">Community Member</option>
                  </select>
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email*"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your daytime telephone number*"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </div>
                <div>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  >
                    <option value="">Care Home / Program Name</option>
                    <option value="prison-visits">Prison Visits</option>
                    <option value="jubilee-pilgrimage">Jubilee Pilgrimage</option>
                    <option value="needy-home-visits">Needy Home Visits</option>
                  </select>
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message*"
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 w-full"
                >
                  Send Message
                </button>
              </form>
              <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white rounded-full px-4 py-2 flex items-center gap-2">
                <span className="text-xl">❤️</span>
                <span className="font-semibold">WELL WISHES</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Acts of Mercy Slider */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 text-blue-900">
            Acts of Mercy
          </h2>
          <Slider {...settings}>
            {allActs.map((act, index) => (
              <div key={index} className="px-2">
                <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center text-gray-700">
                  {act}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </main>
  );
};

export default Contact;