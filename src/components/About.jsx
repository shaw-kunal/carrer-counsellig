// components/AboutUs.js

import Image from "next/image";

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
          className="absolute top-0 -z-10"
          style={{ color: 'transparent' }}
          src="/about-bg.svg"
        />
    
    <div className="container py-12 mt-10">
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
              src="/about_us.jpg" // Replace with your image path
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-slate-950 flex items-end justify-center rounded-lg">
              <div className=" text-white text-[20px] text-center py-2"> Your Dream, Our Commitment</div>
            </div>
          </div>
          <div className="p-3">
            <p className="text-lg text-gray-700 mb-4 my-auto text-center">
              <span className="font-bold text-2xl">Welcome</span> to our <span className="font-bold">career counseling</span> website! Our mission is to
              provide comprehensive guidance and support for students looking to
              study abroad. We are dedicated to helping students navigate the
              complex process of choosing the right university, preparing
              applications, securing visas, and finding scholarships.
            </p>
           
          </div>
        </div>
      </div>
    </div>
</div>
  );
};

export default About;
