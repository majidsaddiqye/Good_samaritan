import { useParams, Link } from "react-router-dom";
import church from "../assets/church.jpg"
import paul from "../assets/paul.jpg"
import sec from "../assets/secong.jpg"

const Parish = () => {
  const { id } = useParams();

  const parishes = [
    // Entebbe Deanery
    {
      id: "entebbe-bugonga",
      name: "Entebbe-Bugonga Parish",
      deanery: "Entebbe Deanery",
      priest: "Rev. Fr. John Bosco",
      chairperson: "Mary Nakitto",
      needyList: [
        { name: "Jane Doe", need: "Food Supplies" },
        { name: "Peter Okello", need: "Medical Care" },
      ],
      churchImage:
        church,
    },
    {
      id: "buyege",
      name: "Buyege Parish",
      deanery: "Entebbe Deanery",
      priest: "Rev. Fr. Paul Mukiibi",
      chairperson: "Joseph Ssewanyana",
      needyList: [
        { name: "Sarah Namutebi", need: "Clothing" },
        { name: "David Kizito", need: "Shelter" },
      ],
      churchImage:
        church,
    },
    {
      id: "kabulamuliro",
      name: "Kabulamuliro Parish",
      deanery: "Entebbe Deanery",
      priest: "Rev. Fr. Michael Ssenfuma",
      chairperson: "Grace Nansubuga",
      needyList: [
        { name: "Anna Nankya", need: "Education Support" },
      ],
      churchImage:
      church,
    },
    {
      id: "kisubi",
      name: "Kisubi Parish",
      deanery: "Entebbe Deanery",
      priest: "Rev. Fr. Anthony Kizza",
      chairperson: "Thomas Lule",
      needyList: [
        { name: "John Mugisha", need: "Food Supplies" },
        { name: "Rose Nabbale", need: "Medical Care" },
      ],
      churchImage:
      church,
    },
    {
      id: "lweza",
      name: "Lweza Parish",
      deanery: "Entebbe Deanery",
      priest: "Rev. Fr. Simon Lubega",
      chairperson: "Christine Namusoke",
      needyList: [],
      churchImage:
      church,
    },
    {
      id: "kiwamirembe",
      name: "Kiwamirembe Marian Shrine",
      deanery: "Entebbe Deanery",
      priest: "Rev. Fr. Francis Xavier",
      chairperson: "Agnes Namaganda",
      needyList: [
        { name: "Michael Ssempijja", need: "Clothing" },
      ],
      churchImage:
      church,
    },
    {
      id: "mpala",
      name: "Mpala Parish",
      deanery: "Entebbe Deanery",
      priest: "Rev. Fr. Joseph Nsubuga",
      chairperson: "Patrick Kalema",
      needyList: [
        { name: "Esther Nakimuli", need: "Food Supplies" },
      ],
      churchImage:
      church,
    },
    // Kibiri Deanery
    {
      id: "kibiri",
      name: "Kibiri Parish",
      deanery: "Kibiri Deanery",
      priest: "Rev. Fr. Charles Ssenkungu",
      chairperson: "Veronica Nansamba",
      needyList: [
        { name: "James Okot", need: "Medical Care" },
        { name: "Monica Nalubega", need: "Shelter" },
      ],
      churchImage:
      church,
    },
    {
      id: "masajja",
      name: "Masajja Parish",
      deanery: "Kibiri Deanery",
      priest: "Rev. Fr. Martin Kigozi",
      chairperson: "Andrew Muwonge",
      needyList: [],
      churchImage:
      church,
    },
    {
      id: "namasuba",
      name: "Namasuba Parish",
      deanery: "Kibiri Deanery",
      priest: "Rev. Fr. Lawrence Mukasa",
      chairperson: "Susan Nakalema",
      needyList: [
        { name: "Robert Kayanja", need: "Education Support" },
      ],
      churchImage:
      church,
    },
    {
      id: "ndejje",
      name: "Ndejje Parish",
      deanery: "Kibiri Deanery",
      priest: "Rev. Fr. Stephen Walugembe",
      chairperson: "Margaret Nanyonga",
      needyList: [
        { name: "Paul Ssemanda", need: "Food Supplies" },
      ],
      churchImage:
      church,
    },
    // Nabbingo Deanery
    {
      id: "buloba",
      name: "Buloba Parish",
      deanery: "Nabbingo Deanery",
      priest: "Rev. Fr. Vincent Katende",
      chairperson: "Francis Ssebulime",
      needyList: [
        { name: "Dorothy Nambi", need: "Clothing" },
        { name: "Samuel Kigo", need: "Medical Care" },
      ],
      churchImage:
      church,
    },
    {
      id: "bunnamwaya",
      name: "Bunnamwaya Parish",
      deanery: "Nabbingo Deanery",
      priest: "Rev. Fr. Edward Ssekandi",
      chairperson: "Theresa Namuddu",
      needyList: [],
      churchImage:
      church,
    },
    {
      id: "kyengera",
      name: "Kyengera Parish",
      deanery: "Nabbingo Deanery",
      priest: "Rev. Fr. Pius Male",
      chairperson: "Henry Ssentongo",
      needyList: [
        { name: "Lillian Nakawunde", need: "Food Supplies" },
      ],
      churchImage:
      church,
    },
    {
      id: "nabbingo",
      name: "Nabbingo Parish",
      deanery: "Nabbingo Deanery",
      priest: "Rev. Fr. Dominic Kintu",
      chairperson: "Beatrice Nakiganda",
      needyList: [
        { name: "Josephine Namusisi", need: "Shelter" },
      ],
      churchImage:
      church,
    },
    {
      id: "nakawuka",
      name: "Nakawuka Parish",
      deanery: "Nabbingo Deanery",
      priest: "Rev. Fr. George Ssemwanga",
      chairperson: "Emmanuel Mugerwa",
      needyList: [
        { name: "Agnes Nansamba", need: "Education Support" },
        { name: "Vincent Kaggwa", need: "Clothing" },
      ],
      churchImage:
      church,
    },
  ];

  const parish = parishes.find((p) => p.id === id) || {
    name: "Parish Not Found",
    deanery: "",
    priest: "",
    chairperson: "",
    needyList: [],
    churchImage: "",
  };

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{parish.name}</h1>
          <p className="text-xl max-w-2xl mx-auto">{parish.deanery}</p>
        </div>
      </section>

      {/* Parish Details Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          {parish.id ? (
            <>
              {/* Leadership Team */}
              <div className="mb-12">
                <h2 className="text-3xl font-semibold text-blue-900 mb-6 text-center">
                  Leadership Team
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                  <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                    <img
                      src={paul}
                      alt="Parish Priest"
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold text-blue-900">Parish Priest</h3>
                    <p className="text-gray-700">{parish.priest}</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                    <img
                      src={sec}
                      alt="Good Samaritans Chairperson"
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold text-blue-900">
                      Good Samaritans Chairperson
                    </h3>
                    <p className="text-gray-700">{parish.chairperson}</p>
                  </div>
                </div>
              </div>

              {/* Needy List */}
              <div className="mb-12">
                <h2 className="text-3xl font-semibold text-blue-900 mb-6 text-center">
                  Needy List
                </h2>
                {parish.needyList.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-full max-w-3xl mx-auto bg-white rounded-xl shadow-lg">
                      <thead>
                        <tr className="bg-blue-50">
                          <th className="px-6 py-3 text-left text-blue-900">Name</th>
                          <th className="px-6 py-3 text-left text-blue-900">Need</th>
                        </tr>
                      </thead>
                      <tbody>
                        {parish.needyList.map((person, index) => (
                          <tr key={index} className="border-t">
                            <td className="px-6 py-4 text-gray-700">{person.name}</td>
                            <td className="px-6 py-4 text-gray-700">{person.need}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-center text-gray-600">
                    No current needs listed.
                  </p>
                )}
              </div>

              {/* Church Image */}
              <div className="mb-12">
                <h2 className="text-3xl font-semibold text-blue-900 mb-6 text-center">
                  Our Church
                </h2>
                <img
                  src={parish.churchImage}
                  alt={`${parish.name} Church`}
                  className="w-full max-w-3xl mx-auto h-96 object-cover rounded-lg shadow-md"
                />
              </div>

              {/* Contact Info */}
              <div className="mb-12">
                <h2 className="text-3xl font-semibold text-blue-900 mb-6 text-center">
                  Contact Us
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">
                      Parish Good Samaritan Office
                    </h3>
                    <p className="text-gray-700">Phone: +256 123 456 789</p>
                    <p className="text-gray-700">Email: {parish.id}@goodsamaritans.org</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">
                      Archdiocese Good Samaritan Office
                    </h3>
                    <p className="text-gray-700">
                      Lubaga Cathedral, Kampala Archdiocese
                    </p>
                    <p className="text-gray-700">Phone: +256 987 654 321</p>
                    <p className="text-gray-700">
                      Email: goodsamaritanskampala@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Donate Button */}
              <div className="text-center">
                <Link
                  to="/donate"
                  className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500"
                >
                  Donate Now
                </Link>
              </div>
            </>
          ) : (
            <p className="text-center text-gray-600 py-12">Parish not found.</p>
          )}
        </div>
      </section>
    </main>
  );
};

export default Parish;