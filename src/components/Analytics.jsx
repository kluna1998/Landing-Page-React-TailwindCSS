import React from "react";
import AnalyticsPhoto from "../assets/analytics.png";

const Analytics = () => {
  return (
    <section className="bg-white w-full py-16 px-4">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2">
        <img
          className="w-[500px] mx-auto my-4"
          src={AnalyticsPhoto}
          alt="Analytics"
        />
        <div className="flex flex-col justify-center">
          <p className="text-jade-500 font-bold text-base md:text-lg uppercase">
            Data analytics dashboard
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold md:py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Nulla Lorem ipsum
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla Lorem
          </p>
          <button className="w-fit bg-black hover:bg-gray-700 font-bold py-2 px-4 rounded mx-auto md:mx-0 text-jade-400 my-auto">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
