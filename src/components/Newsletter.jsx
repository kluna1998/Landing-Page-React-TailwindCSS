import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold md:py-2">
            Want tips & tricks to optimise your flow?
          </h1>
          <p>Subscribe to our newsletter!</p>
        </div>
        <div className="flex flex-col justify-center">
          <form className="grid grid-cols-1 lg:grid-cols-3 py-6">
            <input
              className=" col-span-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 block w-full md:max-w-2xl md:mx-auto rounded-md sm:text-sm"
              type="email"
              placeholder="Enter your email"
            />
            <button className="w-fit bg-jade-500 hover:bg-jade-700 font-bold py-2 px-4 mt-3 lg:mt-0  rounded mx-auto text-black">
              Notify me
            </button>
          </form>
          <p>
            We care about the protection of your data. Read our{" "}
            <span className="text-jade-500">Privacy and Policy</span> .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
