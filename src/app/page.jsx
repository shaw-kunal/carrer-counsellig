import About from "@/components/About";
import CarrerPath from "@/components/CarrerPath";
import ContactForm from "@/components/Contact";
import { FlagSwipper } from "@/components/FlagSwipper";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import TimeLine from "@/components/TimeLine";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { FaLightbulb } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { RiIndentIncrease, RiMemoriesFill } from "react-icons/ri";
import "./animation.css";
import { Toaster } from "sonner";
import Link from "next/link";

export default function Home() {
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
          style={{ color: "transparent" }} // <-- corrected style usage
          src="/bg.svg"
        />
        <Navbar />
        <div className="container hero-section grid grid-rows-1 sm:grid-cols-2  p-2">
          {/* left */}
          <div className="flex  justify-center flex-col p-4 ">
            <div className="text-[30px] mb-4  xl:text-[50px]  font-bold">
              Plan Your <span className="text-animation ">International</span>{" "}
              Career with Us.
            </div>
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
                <Link href="/#services">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* right */}

          <div className="hidden sm:block m-auto ">
            <div className="relative w-[450px] h-[450px] ">
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

      {/* About Us */}
      <About />

      {/* flag swipper */}
      <FlagSwipper />

      {/* services */}
      <Services />

      {/* carrer path */}
      <CarrerPath />

      {/* why go global */}

      <WhyGlobal />

      {/* how we can help you */}
      <TimeLine />
      {/* contact form */}
      <ContactForm />
      {/* footer */}
      <Footer />
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
    icon: FaLightbulb,
    title: "Opportunities for a Global Exposure",
    desc: "Get to develop a unique exposure of the world, and learn all the latest trends in academics, career and the technological fields.",
  },
  {
    id: 3,
    icon: MdCastForEducation,
    title: "Gain A Global Perspective",
    desc: "Studying abroad will allow you to sharpen your mind, and shape your way of seeing the world with a unique ability to communicate and appreciate the world’s varieties..",
  },
  {
    id: 4,
    icon: RiIndentIncrease,
    title: "Increase Your Chances of Employment",
    desc: "Stand on a career vantage point with unique skillsets and training which puts in the sight of employers around the world.",
  },
];

const WhyGlobal = () => {
  return (
    <section className=" bg-indigo-50 py-10 ">
      <div className="container grid grid-cols-none  lg:grid-cols-[1fr_2fr]  mb-[50px] py-10 px-2 gap-4">
        <div className="">
          <h2 className="font-title mb-3 text-xs">Why Go Global-</h2>
          <p className="text-sm text-slate-700">
            The world is a global village with endless opportunities for
            students. Studying abroad is now essential in higher education.
            Here’s why you should consider it.
          </p>
          <div className=" mx-auto  mt-5 dotted-background w-[200px] h-[200px] "></div>
        </div>
        <div className="grid grid-cols-none lg:grid-cols-2 grid-rows-2 gap-2 ">
          {whyGloabalData.map((item) => (
            <Card
              key={item.id}
              className="p-2 cursor-pointer mb-4 lg:p-4 bg-transparent shadow-none border-none hover:border hover:shadow-sm hover:bg-card"
            >
              <div className="icon-box bg-indigo-500 cursor-pointer text-white shadow-white">
                <item.icon fontSize={30} />
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
