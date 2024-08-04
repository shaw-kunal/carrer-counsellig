'use client';
import About from '@/components/About';
import Faq from '@/components/Faq';
import { FlagSwipper } from '@/components/FlagSwipper';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Reviews from '@/components/Reviews';
import ScheduleMeeting from '@/components/ScheduleMeeting';
import Services from '@/components/Services';
import StatsCounter from '@/components/StatsCounter';
import TimeLine from '@/components/TimeLine';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaLightbulb } from 'react-icons/fa';
import { MdCastForEducation } from 'react-icons/md';
import { RiIndentIncrease, RiMemoriesFill } from 'react-icons/ri';
import { Toaster } from 'sonner';
import './animation.css';
import { ceveat, roboto } from '@/app/utils/font';

export default function Home() {
  const [openSheet, setOpenSheet] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpenSheet(true);
    }, 20000);
  }, []);

  return (
    <main className="">
      <Toaster richColors />

      {/* navbar and hero section */}
      <section className="w-full h-screen relative overflow-hidden">
        <Image
          alt="background"
          fill
          fetchpriority="high"
          decoding="async"
          data-nimg="1"
          objectFit="cover"
          className=" bg-gradient-to-b from-slate-100 to-indigo-300 absolute top-0 -z-10"
          style={{ color: 'transparent' }} // <-- corrected style usage
          src="/bg.svg"
        />
        <Navbar />
        <div className="container hero-section grid grid-rows-1 sm:grid-cols-2  p-2">
          {/* left */}
          <div className="flex  justify-center flex-col p-4 ">
            <div className="text-[30px] mb-4  xl:text-[50px]  font-bold">
              Plan Your <span className="text-animation ">International</span>{' '}
              Career with Us.
            </div>
            <p className={`mb-4 text-md text-foreground`}>
              If you have dreamt about{' '}
              <span className="font-semibold">GLOBAL</span> careers but are yet
              to finalize options for your International Alma Mater, then{' '}
              <span className="font-semibold"> HIGHRISE EDUV</span> is your one
              stop counsellor for all your worries.
            </p>
            <div className="flex gap-4 my-2">
              <Button onClick={() => setOpenSheet(true)}>
                Schedule A Call
              </Button>
              <Button className="bg-white shadow-sm text-indigo-600 hover:bg-white">
                <Link href="/#services">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* right */}

          <div className="hidden sm:block m-auto ">
            <div className="relative w-[450px] h-[450px] ">
              <Image
                fill
                src={'/global.png'}
                objectFit="cover"
                alt="Study-abroad"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <About />

      {/* flag swipper */}
      <FlagSwipper />

      {/* services */}
      <Services />

      {/*student total */}
      <StatsCounter />

      {/* review  */}
      <Reviews />

      {/* why go global */}
      <WhyGlobal />

      {/* how we can help you */}
      <TimeLine />

      {/* FAQ */}
      <Faq />

      {/* contact form */}
      {/* <ContactForm /> */}

      {/* footer */}
      <Footer />
      <ScheduleMeeting
        open={openSheet}
        setClose={() => setOpenSheet(false)}
        title="Schedule A Call"
      />
    </main>
  );
}
const whyGlobalData = [
  {
    id: 1,
    icon: RiMemoriesFill,
    title: 'Create Lasting Memories',
    desc: 'Exploring new landscapes provides opportunities to create exciting experiences that result in lifelong memories.',
  },
  {
    id: 2,
    icon: FaLightbulb,
    title: 'Opportunities for Global Exposure',
    desc: 'Develop a unique perspective on the world and stay updated with the latest trends in academics, careers, and technology.',
  },
  {
    id: 3,
    icon: MdCastForEducation,
    title: 'Gain a Global Perspective',
    desc: "Studying abroad sharpens your mind and enhances your ability to understand and appreciate the world's diversity.",
  },
  {
    id: 4,
    icon: RiIndentIncrease,
    title: 'Boost Your Employment Prospects',
    desc: 'Gain unique skills and training that make you more attractive to employers worldwide.',
  },
];

const WhyGlobal = () => {
  return (
    <section className=" bg-indigo-50 py-10 ">
      <div className="container grid grid-cols-none  lg:grid-cols-[1fr_2fr]  mb-[50px] py-10 px-2 gap-4">
        <div className="">
          <h2 className={`font-title mb-3 text-xs ${ceveat}`}>
            Why Go Global-
          </h2>
          <p className="text-sm text-slate-700">
            In today&apos;s interconnected world, endless opportunities await
            students. Studying abroad has become a vital component of higher
            education. Here’s why you should consider it.
          </p>
          <div className=" mx-auto  mt-5 dotted-background w-[200px] h-[200px] "></div>
        </div>
        <div className="grid grid-cols-none lg:grid-cols-2 grid-rows-2 gap-2 ">
          {whyGlobalData.map((item) => (
            <Card
              key={item.id}
              className="p-2 cursor-pointer mb-4 lg:p-4 bg-transparent shadow-none border-none hover:border hover:shadow-sm hover:bg-card"
            >
              <div className="icon-box bg-indigo-500 cursor-pointer text-white shadow-white">
                <item.icon
                  fontSize={30}
                  className="hover:rotate-90 transition-all duration-100 ease-in-out"
                />
              </div>
              <h2 className="font-semibold capitalize my-2">{item.title}</h2>
              <span className="text-sm text-gray-600 font-medium">
                {item.desc}
              </span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
