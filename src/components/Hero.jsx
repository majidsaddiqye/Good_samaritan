import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/img1.jpg";
import img6 from "../assets/img6.jpg";
import img3 from "../assets/img3.jpg";
import charity from "../assets/charity.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    customPaging: () => (
      <div className="w-3 h-3 bg-white bg-opacity-50 rounded-full hover:bg-opacity-80 transition-all duration-300 mx-1"></div>
    ),
  };

  const slides = [
    {
      image: charity,
      alt: "Community Impact 1",
      heading: "Resident and Family-Centred Care",
      description:
        "Our care is responsive to individual needs, values, beliefs, and preferences.",
      buttonText: "Learn More",
      buttonLink: "/donate",
    },
    {
      image: img6,
      alt: "Community Impact 2",
      heading: "Serving with Compassion",
      description:
        "We believe in treating every person with dignity and love, no matter the circumstance.",
      buttonText: "Learn More",
      buttonLink: "/donate",
    },
    {
      image: img3,
      alt: "Community Impact 3",
      heading: "Building Meaningful Relationships",
      description:
        "We foster deep connections that enrich the lives of those we care for.",
      buttonText: "Learn More",
      buttonLink: "/donate",
    },
  ];

  return (
    <section className="relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#f07d92] via-[#793f49] to-[#0d1540] opacity-90"></div>
            
            {/* Background image */}
            <div className="absolute inset-0 z-0">
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover opacity-40"
              />
            </div>
            <div className="container mx-auto px-4 py-16 md:py-20">
              <div className="flex flex-col md:flex-row items-center justify-between">
                {/* Text Box */}
                <div className="w-full md:w-2/5 z-10 mb-8 md:mb-0">
                  <div className="bg-[#f3f1ec] p-8 md:p-10 rounded-lg shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#bd0f2f] mb-4">
                      {slide.heading}
                    </h2>
                    <p className="text-[#0d1540] mb-6">
                      {slide.description}
                    </p>
                    <Link 
                      to={slide.buttonLink}
                      className="inline-block border-2 border-[#bd0f2f] text-[#bd0f2f] font-semibold py-2 px-6 rounded-full hover:bg-[#bd0f2f] hover:text-white transition-all duration-300"
                    >
                      {slide.buttonText}
                    </Link>
                  </div>
                </div>

                {/* Image */}
                <div className="w-full md:w-1/2 z-10">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-auto rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <style jsx>{`
        .slick-dots {
          bottom: 20px;
          z-index: 20;
        }
        .slick-dots li.slick-active div {
          background-color: white;
        }
      `}</style>
    </section>
  );
};

export default Hero;