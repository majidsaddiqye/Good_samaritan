import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import logo from "../assets/goodlogo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const menuItems = [
    { name: "Contact Us", path: "/contact" },
    { name: "Donate Now", path: "/donate", special: true },
  ];

  const navBlocks = [
    { name: "Locations", path: "/locations" },
    { name: "Services & Programs", path: "/services" },
    { name: "Ways to Support", path: "/support" },
  ];

  const aboutSubRoutes = [
    { name: "Leadership", path: "/about/leadership" },
    { name: "History", path: "/about/history" },
    { name: "News", path: "/about/news" },
    { name: "Events", path: "/about/events" },
  ];

  return (
    <header className="bg-[#f3f1ec] text-[#bd0f2f] py-3 shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink 
          to="/" 
          className="flex items-center gap-4 transition-transform duration-300 hover:scale-105"
        >
          <div className="relative">
            <img
              src={logo}
              alt="Logo"
              className="h-16 w-16 rounded-full object-cover shadow-md"
            />
            <div className="absolute inset-0 rounded-full bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
          </div>
          <div className="hidden md:block">
            <h1 className="font-bold text-sm tracking-wider leading-tight text-[#bd0f2f]">GOOD SAMARITANS</h1>
            <p className="text-xs font-medium tracking-wide text-[#0d1540]">KAMPALA ARCHIDIOCESE</p>
          </div>
        </NavLink>

        {/* Hamburger icon with improved animation */}
        <div className="md:hidden">
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md hover:bg-gray-200 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {menuOpen ? <IoClose size={28} className="text-[#bd0f2f]" /> : <FaBars size={24} className="text-[#bd0f2f]" />}
          </button>
        </div>

        {/* Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-4">
          <div className="relative group">
            <NavLink
              to="/about"
              className="text-sm font-semibold px-4 py-2 hover:text-[#bd0f2f] transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#bd0f2f] after:transition-all group-hover:after:w-full"
            >
              About Us
            </NavLink>
            <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-xl rounded-lg overflow-hidden z-50 w-48 mt-1 transform opacity-0 group-hover:opacity-100 transition-all duration-300">
              {aboutSubRoutes.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className="block px-6 py-3 text-sm hover:bg-[#f3f1ec] text-[#0d1540] hover:text-[#bd0f2f] transition-colors duration-200 border-l-2 border-transparent hover:border-[#bd0f2f]"
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          {navBlocks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className="text-sm font-semibold px-4 py-2 hover:text-[#bd0f2f] transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#bd0f2f] after:transition-all hover:after:w-full"
            >
              {item.name}
            </NavLink>
          ))}

          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={`text-sm font-semibold px-5 py-2.5 transition-all duration-300 ${
                item.special
                  ? "bg-[#bd0f2f] text-white rounded-md hover:bg-[#a00a25] shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  : "hover:text-[#bd0f2f] relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#bd0f2f] after:transition-all hover:after:w-full"
              }`}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Mobile Menu with animation */}
      <div 
        className={`md:hidden px-4 py-2 bg-[#f3f1ec] space-y-1 overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <NavLink
          to="/about"
          onClick={(e) => {
            e.preventDefault();
            setAboutOpen(!aboutOpen);
          }}
          className="block text-sm font-semibold px-4 py-3 hover:text-[#bd0f2f] transition-colors duration-200 rounded-md hover:bg-gray-100 flex justify-between items-center"
        >
          <span>About Us</span> 
          <span className="transition-transform duration-300 transform">{aboutOpen ? "▲" : "▼"}</span>
        </NavLink>

        <div 
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            aboutOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {aboutSubRoutes.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="block text-sm px-8 py-2.5 text-[#0d1540] hover:text-[#bd0f2f] hover:bg-gray-100 transition-colors duration-200 border-l border-gray-200"
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {navBlocks.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            onClick={() => setMenuOpen(false)}
            className="block text-sm font-semibold px-4 py-3 hover:text-[#bd0f2f] transition-colors duration-200 rounded-md hover:bg-gray-100"
          >
            {item.name}
          </NavLink>
        ))}

        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            onClick={() => setMenuOpen(false)}
            className={`block text-sm font-semibold px-4 py-3 transition-colors duration-200 ${
              item.special
                ? "bg-[#bd0f2f] text-white rounded-md hover:bg-[#a00a25] shadow-md mt-4"
                : "hover:text-[#bd0f2f] hover:bg-gray-100 rounded-md"
            }`}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </header>
  );
};

export default Header;