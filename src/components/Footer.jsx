const Footer = () => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Placeholder for newsletter submission logic
    alert("Thank you for subscribing!");
  };

  return (
    <footer className="bg-red-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4">
              Good Samaritans Kampala Archdiocese
            </h4>
            <p className="text-gray-100">
              Let us be good Samaritans by doing acts of mercy. Join us in serving
              the most vulnerable in Kampala.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-[#f3f1ec]">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-[#f3f1ec]">
                  Services & Programs
                </a>
              </li>
              <li>
                <a href="/donate" className="hover:text-[#f3f1ec]">Donate</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#f3f1ec]">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Stay Connected</h4>
            <p className="text-gray-100 mb-4">
              Subscribe to our newsletter for updates.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg border-[0.2px] border-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#f3f1ec]"
                required
              />
              <button
                type="submit"
                className="bg-[#f3f1ec] text-[#bd0f2f] px-4 py-2 rounded-lg font-semibold hover:bg-white"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-[#f3f1ec] border-opacity-20 text-center">
          <p>
            © 2025 Good Samaritans Kampala Archdiocese. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="hover:text-[#f3f1ec]">
              Facebook
            </a>
            <a href="#" className="hover:text-[#f3f1ec]">
              Twitter
            </a>
            <a href="#" className="hover:text-[#f3f1ec]">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;