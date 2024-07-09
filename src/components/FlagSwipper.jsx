"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const topStudyAbroadCountries = [
  {
    title: "United States",
    image: "/usa.jpg",
  },
  {
    title: "United Kingdom",
    image: "/uk.jpg",
  },
  {
    title: "Canada",
    image: "/canada.jpg",
  },
  {
    title: "Australia",
    image: "/australia.jpg",
  },
  {
    title: "Germany",
    image: "/germany.webp",
  },
  {
    title: "France",
    image: "/france.webp",
  },
  {
    title: "Netherlands",
    image: "/netherlands.webp",
  },
  {
    title: "Sweden",
    image: "/sweden.webp",
  },
  ];

export const FlagSwipper = () => {
  return (
    <div className="container my-20 ">
  <h2 className="mb-10 text-center font-bold text-slate-900 text-[30px] lg:text-[40px] ">Your Next Step Toward Global Learning</h2>
    <div className="flex gap-2 relative ">
      <Swiper
        slidesPerView={5}
        autoplay={true}
        spaceBetween={8}
        loop={true}
        modules={[Autoplay, Navigation, Pagination]}
        breakpoints={{
          320: {
            slidesPerView: 3,
          },
          540: {
            slidesPerView: 5,
          },
        }}
      >
        {topStudyAbroadCountries.map((item, i) => (
          <SwiperSlide key={item.title}>
            <div
              className={`flex items-center justify-center gap-2 h-[80px]   border-0 md:border rounded-lg  transition-all ease-in-out `}
            >
              <div className="w-20 h-20 md:w-14  md:h-14  text-white relative">
                <Image
                  fill
                  className={` rounded-md  md:rounded-full  brightness-125 bg-white	 `}
                  src={item.image}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt={item.title}
                />
              </div>
              <span className={` text-md lg:text-lg  hidden md:block  text-slate-500 `}>
                {" "}
                {item.title}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
};
