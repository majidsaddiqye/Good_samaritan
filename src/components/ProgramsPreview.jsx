import Slider from "react-slick";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import { ChevronRight, ChevronLeft } from "lucide-react";

const ProgramsPreview = () => {
  // Custom arrow components for the slider
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#f3f1ec] p-3 rounded-full shadow-md text-[#bd0f2f] hover:text-[#a00a25] hover:shadow-lg transition-all duration-300 mr-2"
      >
        <ChevronRight size={20} />
      </button>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#f3f1ec] p-3 rounded-full shadow-md text-[#bd0f2f] hover:text-[#a00a25] hover:shadow-lg transition-all duration-300 ml-2"
      >
        <ChevronLeft size={20} />
      </button>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
    appendDots: (dots) => (
      <div>
        <ul className="mt-6"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 bg-[#f3f1ec] rounded-full hover:bg-[#bd0f2f] transition-all duration-300 mx-1"></div>
    ),
  };

  const programs = [
    {
      title: "Prison Visits",
      description: "Nourishing prisoners spiritually and supporting their families.",
      image: img5,
    },
    {
      title: "Jubilee Pilgrimage",
      description: "Organizing spiritual journeys for the community.",
      image: img6,
    },
    {
      title: "Needy Home Visits",
      description: "Providing support and care to the most vulnerable.",
      image: img7,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[#f3f1ec] to-white">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-semibold text-center mb-10 text-[#bd0f2f]">
          Our Key Programs
        </h3>
        
        <div className="relative px-8">
          <Slider {...settings}>
            {programs.map((program, index) => (
              <div key={index} className="px-3 py-2">
                <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#793f49]/50 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-[#bd0f2f] mb-3">
                      {program.title}
                    </h4>
                    <p className="text-gray-700 mb-4">{program.description}</p>
                    <button className="bg-[#bd0f2f] text-white px-4 py-2 rounded text-sm font-medium transition-colors duration-300 hover:bg-[#a00a25]">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ProgramsPreview;