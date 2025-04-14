const Roles = () => {
  const roles = [
    "Reminding everyone that they're good Samaritans too.",
    "Mobilizing good Samaritans at every parish to prepare needy lists.",
    "Mobilizing Christians at every parish to give out part of what they have to the needy.",
    "Visiting Prisoners and nourishing them spiritually plus supporting their families left behind.",
    "Mobilizing the institution of a support office at every parish for the needy.",
    "Visiting the sick, especially those with chronic diseases, and supporting them spiritually.",
  ];

  return (
    <section className="py-12 bg-[#f3f1ec]"> {/* Cream background */}
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-semibold text-center mb-6 text-[#bd0f2f]"> {/* Red text */}
          Main Roles of A Good Samaritan
        </h3>
        <ul className="list-disc list-inside max-w-3xl mx-auto space-y-3">
          {roles.map((role, index) => (
            <li key={index} className="text-lg text-[#333] hover:text-[#bd0f2f] transition-colors duration-300 flex items-start"> {/* Dark text with red hover */}
              <span className="text-[#bd0f2f] mr-2">•</span> {/* Red bullet point */}
              <span>{role}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <a href="/donate" className="inline-block px-6 py-2 bg-[#bd0f2f] text-white rounded hover:bg-[#a00d29] transition-colors duration-300 shadow-md">
            Join Our Ministry
          </a>
        </div>
      </div>
    </section>
  );
};

export default Roles;