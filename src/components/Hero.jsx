import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-7xl -mt-24 w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-jade-400 font-bold p-2 text-2xl">
          Growing with data analytics
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold md:py-4">
          Grow with data
        </h1>
        <div className="flex justify-center items-center ">
          <p className="text-xl sm:text-4xl md:text-5xl font-bold">
            Fast, flexible financing for
          </p>
          <Typed
            className="text-xl sm:text-4xl md:text-5xl font-bold ps-3"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="text-xl md:text-2xl py-4 font-bold text-gray-500">
          Monitor your data analytics to increase revenue for BTB, BTC & SASS
          platforms.
        </p>
        <button className="w-fit bg-jade-500 hover:bg-jade-700 font-bold py-2 px-4 rounded mx-auto text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
