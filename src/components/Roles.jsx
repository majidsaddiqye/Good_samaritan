const Roles = () => {
    const roles = [
      "Reminding everyone that they’re good Samaritans too.",
      "Mobilizing good Samaritans at every parish to prepare needy lists.",
      "Mobilizing Christians at every parish to give out part of what they have to the needy.",
      "Visiting Prisoners and nourishing them spiritually plus supporting their families left behind.",
      "Mobilizing the institution of a support office at every parish for the needy.",
      "Visiting the sick, especially those with chronic diseases, and supporting them spiritually.",
    ];
  
    return (
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-semibold text-center mb-6">
            Main Roles of A Good Samaritan
          </h3>
          <ul className="list-disc list-inside max-w-3xl mx-auto space-y-2">
            {roles.map((role, index) => (
              <li key={index} className="text-lg">
                {role}
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  };
  
  export default Roles;