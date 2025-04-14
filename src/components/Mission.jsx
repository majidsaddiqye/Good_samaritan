import { Link } from "react-router-dom"
const Mission = () => {
  return (
    <section className="relative overflow-hidden">

      <div className="container mx-auto px-6 py-16 relative z-10 flex">
        {/* Left red date column */}
        <div className="hidden md:flex flex-col items-center justify-center bg-[#bd0f2f] text-white py-8 px-6 text-center">
          <div className="font-bold text-2xl">Our</div>
          <div className="text-6xl font-bold mt-2">Mission</div>
        </div>

        {/* Main content area with cream background */}
        <div className="flex-1 bg-[#f3f1ec] p-8 md:p-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-[#bd0f2f] mb-2">Good Samaritans Kampala Archdiocese and Prison Ministry</h2>

            <p className="text-xl text-[#0d1540] mb-8 leading-relaxed">
              We witness Christ to the suffering as the Good Samaritan did. Giving life, dying a little, praying, and
              sharing goods, time, and money with others.
            </p>

            <div className="mt-8">
              <Link
                to="/support"
                className="inline-block bg-[#f0c14b] text-[#0d1540] px-8 py-3 rounded-full font-semibold hover:bg-[#e3b53d] transition-colors duration-300 mr-4"
              >
                Join Our Team
              </Link>
              <Link
                to="/about"
                className="inline-block border-2 border-[#bd0f2f] text-[#bd0f2f] px-8 py-3 rounded-full font-semibold hover:bg-[#bd0f2f] hover:text-white transition-colors duration-300"
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