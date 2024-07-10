"use client";
import Image from "next/image";
import {
  FaBriefcase,
  FaChalkboardTeacher,
  FaDollarSign,
  FaGlobe,
  FaGraduationCap,
  FaUniversity
} from "react-icons/fa";

const services = [
  {
    title: "Career Assessment and Counseling",
    icon: <FaChalkboardTeacher className="text-blue-500 w-8 h-8" />,
    description:
      "Personalized career assessment tests, one-on-one counseling, and guidance on choosing the right career path.",
    image: "/career.webp",
  },
  {
    title: "Educational Counseling",
    icon: <FaGraduationCap className="text-yellow-500 w-8 h-8" />,
    description:
      "Assistance with selecting the right courses and universities, and information on various educational programs and degrees.",
    image: "/education.jpg",
  },
  {
    title: "College Application Assistance",
    icon: <FaUniversity className="text-red-500 w-8 h-8" />,
    description:
      "Help with college applications and essays, guidance on preparing a strong application package, and information on deadlines and requirements.",
    image: "/collage.jpg",
  },
  {
    title: "Scholarship and Financial Aid Guidance",
    icon: <FaDollarSign className="text-green-500 w-8 h-8" />,
    description:
      "Information on available scholarships and financial aid options, and assistance with applications.",
    image: "/scholarship.jpg",
  },
  {
    title: "Interview Preparation and Resume Building",
    icon: <FaBriefcase className="text-purple-500 w-8 h-8" />,
    description:
      "Mock interviews, resume and cover letter writing services, and tips on networking and job search strategies.",
    image: "/interviewPrep.jpg",
  },
  {
    title: "Study Abroad Counseling",
    icon: <FaGlobe className="text-pink-500 w-8 h-8" />,
    description:
      "Detailed information on studying abroad, visa requirements, cultural adjustments, and support with the entire application process.",
    image: "/studyabord.jpg",
  },
];

const Services = () => {
  return (
    <div className="relative overflow-hidden" id="services">
      <Image
        alt="background"
        fill
        fetchpriority="auto"
        decoding="async"
        data-nimg="1"
        objectFit="cover"
        className="absolute top-0 -z-10 rotate-45"
        style={{ color: "transparent" }}
        src="/about-bg.svg"
      />
      <h1 className="my-4 mb-12 text-center font-medium  text-[30px] lg:text-[40px] text-black">
        Our
        <span className=" ml-2 font-bold bg-gradient-to-t from-blue-800  via-green-600 to-indigo-100 inline-block text-transparent bg-clip-text ">
          Services
        </span>
      </h1>
      <div className="container px-2 sm:px-6  my-8 ">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden"
            >
              <div className="flex items-center justify-between p-4 bg-gray-100 cursor-pointer">
                <div className="flex items-center h-[40px]">
                  <div className="w-[30px] h-[30px] mr-3">{service.icon}</div>
                  <h2 className="text-md xl:text-lg font-semibold text-gray-800">
                    {service.title}
                  </h2>
                </div>
              </div>

              <div className="p-4 flex flex-col">
                <div className="w-full h-48 mb-4 relative overflow-hidden rounded">
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded hover:scale-110 hover:brightness-110 transition-all duration-1000 cursor-pointer ease-in-out"
                  />
                </div>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
