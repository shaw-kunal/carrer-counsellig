// components/AboutUs.js
'use client';
import Image from 'next/image';
import { roboto } from '@/app/utils/font';
const About = () => {
  return (
    <div className="relative" id="about">
      <Image
        alt="background"
        fill
        fetchpriority="auto"
        decoding="async"
        data-nimg="1"
        objectFit="cover"
        className="absolute top-0 -z-10 "
        style={{ color: 'transparent' }}
        src="/about-bg.svg"
      />

      <div className="container py-12 px-2 sm:px-4 mt-10">
        <div className=" ">
          <h2 className="text-4xl  font-bold text-center text-black mb-10">
            About Us
          </h2>
          <div className="grid gap-4  md:grid-cols-2 ">
            <div className="mx-auto relative h-[300px] md:h-[350px] w-[300px] md:w-[350px] my-auto">
              <Image
                fetchPriority="high"
                fill
                objectFit="cover"
                src="/about_us.jpg"
                alt="About Us"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-slate-950 flex items-end justify-center rounded-lg">
                <div className=" text-white text-[20px] text-center py-2">
                  {' '}
                  Your Dream, Our Commitment
                </div>
              </div>
            </div>
            <div className="p-3">
              <h2 className="text-center text-2xl lg:text-3xl font-bold mb-4 xl:mb-6">
                Empowering Your Global Education Journey
              </h2>
              <p
                className={` ${roboto} text-lg text-gray-700 mb-4 my-auto text-center`}
              >
                <span className="font-bold text-2xl">At HIGHRISE EDUV,</span> to
                our{' '}
                <span className="font-normal">
                  {' '}
                  we believe that every student deserves the best guidance for
                  their educational aspirations. Our team of experienced
                  counsellors is dedicated to helping you find the right path to
                  your future. With our in-depth knowledge of universities
                  worldwide and personalized counselling approach, we make your
                  study abroad journey smooth and successful.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
