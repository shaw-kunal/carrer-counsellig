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
    image: "/framce.webp",
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
    <div className="container flex gap-2 relative mt-20">
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
              className={`flex items-center justify-center gap-2 h-[80px]   border rounded-lg  transition-all ease-in-out `}
            >
              <div className="w-10 h-10   text-white relative">
                <Image
                  fill
                  className={` rounded-full  brightness-125 bg-white	 `}
                  src={item.image}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt={item.title}
                />
              </div>
              <span className={` text-md lg:text-lg  text-slate-500 `}>
                {" "}
                {item.title}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
