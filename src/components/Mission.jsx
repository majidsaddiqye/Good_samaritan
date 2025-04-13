import { Link } from "react-router-dom"
const Mission = () => {
  return (
    <section className="relative overflow-hidden">

      <div className="container mx-auto px-6 py-16 relative z-10 flex">
        {/* Left purple date column */}
        <div className="hidden md:flex flex-col items-center justify-center bg-purple-700 text-white py-8 px-6 text-center">
          <div className="font-bold text-2xl">Our</div>
          <div className="text-6xl font-bold mt-2">Mission</div>
        </div>

        {/* Main content area with gold background */}
        <div className="flex-1 bg-yellow-200 p-8 md:p-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">The Good Samaritan Society</h2>

            <p className="text-xl text-gray-800 mb-8 leading-relaxed">
              We witness Christ to the suffering as the Good Samaritan did. Giving life, dying a little, praying, and
              sharing goods, time, and money with others.
            </p>

            <div className="mt-8">
              <Link
                to="/support"
                className="inline-block bg-yellow-400 text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors duration-300 mr-4"
              >
                Join Our Team
              </Link>
              <Link
                to="/about"
                className="inline-block border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-900 hover:text-white transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission
