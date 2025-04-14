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
      <section className="bg-red-800 text-cream-100 py-16 bg-gradient-to-b from-cream-50/10 to-transparent">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            Contact Us
          </h1>
          <p className="text-xl max-w-2xl mx-auto font-sans">
            Let us be good Samaritans by doing acts of mercy.
          </p>
        </div>
      </section>

      {/* Contact Info and Form Section */}
      <section className="py-12 bg-cream-100">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-semibold mb-6 font-serif">
                Get in Touch
              </h2>
              <div className="space-y-6 font-sans">
                <div>
                  <h3 className="text-xl font-semibold font-serif">
                    Head Office
                  </h3>
                  <p className="text-gray-700">
                    Located at The Museum Building Rubaga, Next to Rubaga
                    Cathedral
                    <br />
                    Phone: +256700115430
                    <br />
                    Email: admin@goodsamaritanskampalaarchdiocese.org
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-serif">
                    General Inquiries
                  </h3>
                  <p className="text-gray-700">
                    Email: admin@goodsamaritanskampalaarchdiocese.org
                  </p>
                </div>
              </div>
              <div className="mt-6 flex items-center">
                <div className="bg-yellow-400 text-red-800 px-4 py-2 rounded-full font-semibold font-sans">
                  Send Kudos – A Message of Gratitude
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative bg-cream-100 rounded-xl shadow-lg p-8 border-t-4 border-red-800">
              <h3 className="text-2xl font-semibold mb-4 font-serif">
                We'd Love to Hear From You
              </h3>
              <p className="text-gray-700 mb-6 font-sans">
                We encourage you to bring forward your feedback as this provides us
                the opportunity to improve.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                <div>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-cream-200 bg-cream-50 focus:outline-none focus:ring-2 focus:ring-red-800"
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
                    className="w-full px-4 py-3 rounded-lg border border-cream-200 bg-cream-50 focus:outline-none focus:ring-2 focus:ring-red-800"
                    required
                  />
                </div>
                <div>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-cream-200 bg-cream-50 focus:outline-none focus:ring-2 focus:ring-red-800"
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
                    className="w-full px-4 py-3 rounded-lg border border-cream-200 bg-cream-50 focus:outline-none focus:ring-2 focus:ring-red-800"
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
                    className="w-full px-4 py-3 rounded-lg border border-cream-200 bg-cream-50 focus:outline-none focus:ring-2 focus:ring-red-800"
                    required
                  />
                </div>
                <div>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-cream-200 bg-cream-50 focus:outline-none focus:ring-2 focus:ring-red-800"
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
                    className="w-full px-4 py-3 rounded-lg border border-cream-200 bg-cream-50 focus:outline-none focus:ring-2 focus:ring-red-800"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-red-800 text-cream-100 px-6 py-3 rounded-lg font-semibold hover:bg-red-900 w-full transition-colors"
                >
                  Send Message
                </button>
              </form>
              <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-800 text-cream-100 rounded-full px-4 py-2 flex items-center gap-2">
                <span className="text-xl">❤️</span>
                <span className="font-semibold">WELL WISHES</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Acts of Mercy Slider */}
      <section className="py-12 bg-cream-100">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 font-serif">
            Acts of Mercy
          </h2>
          <Slider {...settings}>
            {allActs.map((act, index) => (
              <div key={index} className="px-2">
                <div className="bg-cream-200 p-6 rounded-lg shadow-md text-center text-gray-700 border-b-2 border-red-800 hover:bg-cream-300 transition-colors font-sans">
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