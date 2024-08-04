'use client';
// components/StatsCounter.js
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const StatsCounter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="container mx-auto my-10 p-6">
      {/* <h2 className="text-3xl font-semibold text-center mb-8">Why Choose Us?</h2> */}
      <div className="flex flex-col items-center">
        <div className="p-6 rounded-lg text-center mb-4">
          <h3
            className="flex flex-col md:flex-row text-2xl lg:text-5xl font-bold bg-gradient-to-t from-blue-800  via-green-600 to-indigo-100 text-transparent bg-clip-text sm:flex-row gap-2 items-center"
            ref={ref}
          >
            Trusted By{' '}
            <div className="w-[120px] lg:w-[220px] ">
              {' '}
              {inView ? (
                <CountUp start={10000} end={22000} duration={2.5} />
              ) : (
                '0'
              )}
              +
            </div>{' '}
            Students
          </h3>
          {/* <p className="text-xl font-semibold text-gray-700">Trusted by Students</p> */}
        </div>
        <div className="p-6 rounded-lg text-center">
          <p className="text-xl text-gray-700">
            Since 2020, <span className="font-semibold">HighRiseEduv</span> has
            served the dreams of many parents and students, solving their
            financial stress and saving INR 2500 Crores of Indian’s money by
            getting them the right education at the right cost.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;
