import CarrerPath from "@/components/CarrerPath";
import ContactForm from "@/components/Contact";
import { FlagSwipper } from "@/components/FlagSwipper";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Image from "next/image";
import { RiMemoriesFill } from "react-icons/ri";

export default function Home() {
  return (
    <main className="">
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
          style={{ color: 'transparent' }}  // <-- corrected style usage
          src="/bg.svg"
        />
        <Navbar />
        <div className="container hero-section grid grid-rows-1 sm:grid-cols-2  p-2">
          {/* left */}
          <div className="flex  justify-center flex-col p-4 ">
            <h1 className="text-[30px] mb-4 xl:text-[50px]  font-bold">
              Plan Your{" "}
              <span className="text-indigo-600">International Career</span> with
              Us.
            </h1>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
              accusantium aspernatur doloremque ratione molestias autem
              voluptates aliquam animi, officia odit. Eos similique fugit hic a
              asperiores eligendi quis, quos nulla?
            </p>
            <div className="flex gap-4 my-2">
              <Button className="bg-indigo-600 hover:shadow-md  hover:bg-indigo-700">
                Start From Here
              </Button>
              <Button className="bg-white shadow-sm text-indigo-600 hover:bg-white">
                Learn More
              </Button>
            </div>
          </div>

          {/* right */}

          <div className="hidden sm:block m-auto ">
            <div className="relative w-[450px] h-[450px]">
              <Image
                fill
                src={"/global.png"}
                objectFit="cover"
                alt="Study-abroad"
              />
            </div>
          </div>
        </div>
      </section>


{/* flag swipper */}
       <FlagSwipper/>


      {/* carrer path */}
      <CarrerPath />

      {/* why go global */}

      <WhyGlobal />



      {/* how we can help you */}
      <div
        className="relative"
        style={{
          backgroundAttachment: "fixed",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage:
            'linear-gradient(to right, rgba(0,0,0,.4), rgba(0,0,0,.4)), url("/timelinebg.jpg")',
        }}
      >
        <h1 className="text-center  font-medium text-[40px] py-7 text-white">
          How Can We Help You?
        </h1>
        <div className="container text-white ">
          <div className="p-4 w-full md:w-2/3 mx-auto">
            {/* EXPERIENCE LIST ITEM */}
            <div className="flex justify-between h-48">
              {/* LEFT */}
              <div className="w-1/3 ">
                {/* JOB TITLE */}
                <div className="bg-slate-300 p-3 font-semibold rounded-b-lg rounded-s-lg text-gray-700">
                  Free Counselling
                </div>
                {/* JOB DESC */}
                <div className="p-3 text-sm italic">
                  We provide you with free counselling sessions which will allow
                  you to make the best well informed choice for further studies.{" "}
                </div>
              </div>
              {/* CENTER */}
              <div className="w-1/6 flex justify-center">
                {/* LINE */}
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  {/* LINE CIRCLE */}
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-indigo-600 bg-white -left-2"></div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="w-1/3 "></div>
            </div>
            {/* EXPERIENCE LIST ITEM */}
            <div className="flex justify-between h-48">
              {/* LEFT */}
              <div className="w-1/3 "></div>
              {/* CENTER */}
              <div className="w-1/6 flex justify-center">
                {/* LINE */}
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  {/* LINE CIRCLE */}
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-indigo-400 bg-white -left-2"></div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="w-1/3 ">
                {/* JOB TITLE */}
                <div className="bg-slate-300  p-3 font-semibold rounded-b-lg rounded-s-lg text-gray-700">
                  Visa Application
                </div>
                {/* JOB DESC */}
                <div className="p-3 text-sm italic">
                  Our experts take you through the preparation for visa
                  application along with the processing of required
                  documentations
                </div>
              </div>
            </div>
            {/* EXPERIENCE LIST ITEM */}
            <div className="flex justify-between h-48">
              {/* LEFT */}
              <div className="w-1/3 ">
                {/* JOB TITLE */}
                <div className="bg-slate-300 p-3 font-semibold rounded-b-lg rounded-s-lg text-gray-700">
                  University Alignment
                </div>
                {/* JOB DESC */}
                <div className="p-3 text-sm italic">
                  We align your learning and academic dreams with the best
                  University prospects, which meet all your academic needs.{" "}
                </div>
              </div>
              {/* CENTER */}
              <div className="w-1/6 flex justify-center">
                {/* LINE */}
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  {/* LINE CIRCLE */}
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-indigo-500 bg-white -left-2"></div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="w-1/3 "></div>
            </div>
            {/* EXPERIENCE LIST ITEM */}
            <div className="flex justify-between h-48">
              {/* LEFT */}
              <div className="w-1/3 "></div>
              {/* CENTER */}
              <div className="w-1/6 flex justify-center">
                {/* LINE */}
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  {/* LINE CIRCLE */}
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-indigo-400 bg-white -left-2"></div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="w-1/3 ">
                {/* JOB TITLE */}
                <div className="bg-slate-300  p-3 font-semibold rounded-b-lg rounded-s-lg text-gray-700">
                  Pre-Departure Orientation
                </div>
                {/* JOB DESC */}
                <div className="p-3 text-sm italic">
                  Before your departure, we provide you with the much needed
                  guidance regarding your next academic destination.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* contact form */}
        <ContactForm/>


        {/* footer */}
        <Footer/>
    </main>
  );
}

const whyGloabalData = [
  {
    id: 1,
    icon: RiMemoriesFill,
    title: "create a lifetime Memories",
    desc: "With new landscapes comes an opportunity for you to create new and exciting opportunities which will allow you to create a lifetime of memories",
  },
  {
    id: 2,
    icon: RiMemoriesFill,
    title: "create a lifetime Memories",
    desc: "With new landscapes comes an opportunity for you to create new and exciting opportunities which will allow you to create a lifetime of memories",
  },
  {
    id: 3,
    icon: RiMemoriesFill,
    title: "create a lifetime Memories",
    desc: "With new landscapes comes an opportunity for you to create new and exciting opportunities which will allow you to create a lifetime of memories",
  },
  {
    id: 4,
    icon: RiMemoriesFill,
    title: "create a lifetime Memories",
    desc: "With new landscapes comes an opportunity for you to create new and exciting opportunities which will allow you to create a lifetime of memories",
  },
];

const WhyGlobal = () => {
  return (
    <section className=" bg-indigo-50">
      <div className="container grid grid-cols-none  lg:grid-cols-[1fr_2fr]  mb-[50px] py-10 px-2 gap-4">
        <div className="">
          <h2 className="font-title mb-3">Why study abroad</h2>
          <p className="text-sm text-slate-700">
            The world is a global village with endless opportunities for
            students. Studying abroad is now essential in higher education.
            Here’s why you should consider it.
          </p>
          <div className=" mx-auto  mt-5 dotted-background w-[200px] h-[200px] ">
          </div>
        </div>
        <div className="grid grid-cols-none lg:grid-cols-2 grid-rows-2 gap-2 ">
          {whyGloabalData.map((item) => (
            <Card key={item.id} className="p-2 lg:p-4 bg-transparent shadow-none border-none hover:border hover:shadow-sm hover:bg-card" >
              <div className="icon-box bg-indigo-500 cursor-pointer text-white shadow-white">
                <item.icon fontSize={30} />
              </div>
              <h2 className="font-semibold capitalize my-2">{item.title}</h2>
              <span className="text-sm text-gray-600 font-medium">{item.desc}</span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};



