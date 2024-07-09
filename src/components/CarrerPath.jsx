import React from "react";
import { Card, CardFooter } from "./ui/card";
import { CiGlobe } from "react-icons/ci";
import { FaGlobe, FaGlobeAmericas, FaXbox } from "react-icons/fa";

const CareerPaths = [
  {
    text: "Job Opportunity",
    backIcon: FaGlobe,
    frontIcon: FaGlobeAmericas,
  },
  {
    text: "Job Opportunity",
    backIcon: CiGlobe,
    frontIcon: FaGlobeAmericas,
  },
  {
    text: "Job Opportunity",
    backIcon: CiGlobe,
    frontIcon: FaXbox,
  },
  {
    text: "Job Opportunity",
    backIcon: CiGlobe,
    frontIcon: FaXbox,
  },
  {
    text: "Job Opportunity",
    backIcon: CiGlobe,
    frontIcon: FaXbox,
  },
  {
    text: "Job Opportunity",
    backIcon: CiGlobe,
    frontIcon: FaXbox,
  },
];

const CareerPath = () => {
  return (
    <div className="container my-24">
      <h1 className="my-4 mb-12 text-center font-medium  text-[30px] lg:text-[40px] text-black">
        {" "}
        Choose Your{" "}
        <span className="font-bold bg-gradient-to-t from-blue-800  via-green-600 to-indigo-100 inline-block text-transparent bg-clip-text ">
          Career Path
        </span>
      </h1>
      <div className=" grid grid-cols-2 sm:grid-cols-3 gap-3 xl:gap-4 ">
        {CareerPaths.map((item, i) => (
          <Card
            key={i}
            className={`group max-w-[350px] min-h-50  ${
              i === 4
                ? "bg-slate-300 sm:bg-indigo-600 text-indigo-600 sm:text-white"
                : "bg-slate-300 text-indigo-600 hover:bg-indigo-500 hover:text-white"
            } rounded-xl p-4 flex items-center flex-col justify-center gap-10 lg:gap-14 cursor-pointer hover:shadow-lg hover:scale-110 transition-all ease-in-out duration-150`}
          >
            <div className="relative">
              <item.frontIcon className="text-[50px]" />
              <div className="absolute top-5 z-40 left-1">
                <item.backIcon
                  className={`text-[40px] ${
                    i === 4
                      ? "text-white sm:text-indigo-700"
                      : "text-white group-hover:text-indigo-600"
                  }`}
                />
              </div>
            </div>
            <CardFooter>
              <h2 className="font-medium xl:text-xl">{item.text}</h2>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CareerPath;
