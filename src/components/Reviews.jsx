'use client';
// pages/reviews.js
import { MapPin } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

const reviews = [
  {
    image: '/about_us.jpg',
    name: 'John Doe',
    occupation: 'Software Engineer',
    location: 'New York, USA',
    description: 'Great service and support. Highly recommended!',
  },
  {
    image: '/about_us.jpg',
    name: 'Jane Smith',
    occupation: 'Data Scientist',
    location: 'London, UK',
    description: 'Amazing experience, very professional and helpful.',
  },
  {
    image: '/about_us.jpg',
    name: 'Alice Johnson',
    occupation: 'Product Manager',
    location: 'Sydney, Australia',
    description: 'Exceptional guidance and support throughout the process.',
  },
];

const Reviews = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center mb-8 underline">
        What Our Clients Say
      </h2>
      <Swiper
        spaceBetween={30}
        pagination={{ type: 'bullets', clickable: true }}
        navigation
        loop={true}
        autoplay
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="p-6 rounded-lg flex flex-col lg:flex-row gap-5 lg:gap-10 items-center justify-center text-center">
              <div className="w-20 md:w-40 h-20 md:h-40 relative">
                <Image
                  fill
                  className="rounded-full xl:rounded-sm mb-4"
                  objectFit="cover"
                  src={review.image}
                  alt={review.name}
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">{review.name}</h3>
                <p className="text-gray-600 mb-1">{review.occupation}</p>
                <p className="text-gray-500 mb-4 flex item-center justify-center gap-2 text-sm">
                  <MapPin className="w-4 h-4" />
                  {review.location}
                </p>
                <p className="text-gray-700">{review.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
