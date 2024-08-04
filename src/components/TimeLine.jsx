import Image from 'next/image';
import React from 'react';

const TimeLine = () => {
  return (
    <div
      className="relative mt-20"
      style={{
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundImage:
          'linear-gradient(to right, rgba(0,0,0,.4), rgba(0,0,0,.4)), url("/timeline.png")',
      }}
    >
      <h1 className="text-center  font-medium text-[40px] py-7 text-white">
        How Can We Help You?
      </h1>
      <div className="text-white ">
        <div className="p-2 w-full md:w-4/5 mx-auto">
          {/* EXPERIENCE LIST ITEM */}
          <div className="flex justify-between h-48">
            {/* LEFT */}
            <div className="w-2/5 ">
              {/* JOB TITLE */}
              <div className="bg-slate-300 p-3 font-semibold rounded-b-lg rounded-s-lg text-gray-700">
                Free Counselling
              </div>
              {/* JOB DESC */}
              <div className="p-3 text-sm italic">
                We provide you with free counselling sessions which will allow
                you to make the best well informed choice for further studies.{' '}
              </div>
            </div>
            {/* CENTER */}
            <div className="w-1/5 flex justify-center">
              {/* LINE */}
              <div className="w-1 h-full bg-gray-600 rounded relative">
                {/* LINE CIRCLE */}
                <div className="absolute w-5 h-5 rounded-full ring-4 ring-indigo-600 bg-white -left-2"></div>
              </div>
            </div>
            {/* RIGHT */}
            <div className="w-2/5  ">
              <div className="w-[150px] h-[150px] relative hidden md:block">
                <Image
                  fill
                  className="rounded-lg"
                  objectFit="cover"
                  src={'/free-counselling.jpg'}
                  alt="free-counselling"
                />
              </div>
            </div>
          </div>
          {/* EXPERIENCE LIST ITEM */}
          <div className="flex justify-between h-48">
            {/* LEFT */}
            <div className="w-2/5">
              <div className="w-[150px] h-[150px] relative ml-auto hidden md:block">
                <Image
                  fill
                  className="rounded-lg"
                  objectFit="cover"
                  src={'/passport.jpg'}
                  alt="free-counselling"
                />
              </div>
            </div>
            {/* CENTER */}
            <div className="w-1/5 flex justify-center">
              {/* LINE */}
              <div className="w-1 h-full bg-gray-600 rounded relative">
                {/* LINE CIRCLE */}
                <div className="absolute w-5 h-5 rounded-full ring-4 ring-indigo-400 bg-white -left-2"></div>
              </div>
            </div>
            {/* RIGHT */}
            <div className="w-2/5 ">
              {/* JOB TITLE */}
              <div className="bg-slate-300  p-3 font-semibold rounded-b-lg rounded-s-lg text-gray-700">
                Visa Application
              </div>
              {/* JOB DESC */}
              <div className="p-3 text-sm italic">
                Our experts take you through the preparation for visa
                application along with the processing of required documentations
              </div>
            </div>
          </div>
          {/* EXPERIENCE LIST ITEM */}
          <div className="flex justify-between h-48">
            {/* LEFT */}
            <div className="w-2/5 ">
              {/* JOB TITLE */}
              <div className="bg-slate-300 p-3 font-semibold rounded-b-lg rounded-s-lg text-gray-700">
                University Alignment
              </div>
              {/* JOB DESC */}
              <div className="p-3 text-sm italic">
                We align your learning and academic dreams with the best
                University prospects, which meet all your academic needs.{' '}
              </div>
            </div>
            {/* CENTER */}
            <div className="w-1/5 flex justify-center">
              {/* LINE */}
              <div className="w-1 h-full bg-gray-600 rounded relative">
                {/* LINE CIRCLE */}
                <div className="absolute w-5 h-5 rounded-full ring-4 ring-indigo-500 bg-white -left-2"></div>
              </div>
            </div>
            {/* RIGHT */}
            <div className="w-2/5 ">
              <div className="w-[150px] h-[150px] relative hidden md:block">
                <Image
                  fill
                  className="rounded-lg"
                  objectFit="cover"
                  src={'/university.jpg'}
                  alt="free-counselling"
                />
              </div>
            </div>
          </div>
          {/* EXPERIENCE LIST ITEM */}
          <div className="flex justify-between h-48">
            {/* LEFT */}
            <div className="w-2/5 ">
              <div className="w-[150px] h-[150px] relative ml-auto hidden md:block">
                <Image
                  fill
                  className="rounded-lg"
                  objectFit="cover"
                  src={'/preDeparture.jpg'}
                  alt="free-counselling"
                />
              </div>
            </div>
            {/* CENTER */}
            <div className="w-1/5 flex justify-center">
              {/* LINE */}
              <div className="w-1 h-full bg-gray-600 rounded relative ">
                {/* LINE CIRCLE */}
                <div className="absolute w-5 h-5 rounded-full ring-4 ring-indigo-400 bg-white -left-2"></div>
              </div>
            </div>
            {/* RIGHT */}
            <div className="w-2/5">
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
          {/* EXPERIENCE LIST ITEM */}
          <div className="flex justify-between h-48">
            {/* LEFT */}
            <div className="w-2/5 ">
              {/* JOB TITLE */}
              <div className="bg-slate-300 p-3 font-semibold rounded-b-lg rounded-s-lg text-gray-700">
                On Arrival Assistance
              </div>
              {/* JOB DESC */}
              <div className="p-3 text-sm italic">
                Get smooth arrival assistance with local orientation and
                settling-in support.
              </div>
            </div>
            {/* CENTER */}
            <div className="w-1/5 flex justify-center">
              {/* LINE */}
              <div className="w-1 h-full bg-gray-600 rounded relative">
                {/* LINE CIRCLE */}
                <div className="absolute w-5 h-5 rounded-full ring-4 ring-indigo-500 bg-white -left-2"></div>
              </div>
            </div>
            {/* RIGHT */}
            <div className="w-2/5 ">
              <div className="w-[150px] h-[150px] relative hidden md:block">
                <Image
                  fill
                  className="rounded-lg"
                  objectFit="cover"
                  src={'/university.jpg'}
                  alt="free-counselling"
                />
              </div>
            </div>
          </div>

          {/* EXPERIENCE LIST ITEM */}
          <div className="flex justify-between h-48">
            {/* LEFT */}
            <div className="w-2/5 ">
              <div className="w-[150px] h-[150px] relative ml-auto hidden md:block">
                <Image
                  fill
                  className="rounded-lg"
                  objectFit="cover"
                  src={'/preDeparture.jpg'}
                  alt="free-counselling"
                />
              </div>
            </div>
            {/* CENTER */}
            <div className="w-1/5 flex justify-center">
              {/* LINE */}
              <div className="w-1 h-full bg-gray-600 rounded relative ">
                {/* LINE CIRCLE */}
                <div className="absolute w-5 h-5 rounded-full ring-4 ring-indigo-400 bg-white -left-2"></div>
              </div>
            </div>
            {/* RIGHT */}
            <div className="w-2/5">
              {/* JOB TITLE */}
              <div className="bg-slate-300  p-3 font-semibold rounded-b-lg rounded-s-lg text-gray-700">
                Accomodation Assistance
              </div>
              {/* JOB DESC */}
              <div className="p-3 text-sm italic">
                Our team help you to find comfortable, affordable housing near
                school with verified listings.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
