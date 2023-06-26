import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-7xl mx-auto px-6 text-white">
      <h1 className="w-full text-3xl font-bold text-jade-400"> CB .</h1>

      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resource</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? (
          <Bars3Icon className="h-8 w-8 text-white" />
        ) : (
          <XMarkIcon className="h-8 w-8 text-white" />
        )}
      </div>
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-2/4 h-full border-r border-r-gray-800 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-jade-400 px-4 py-6">
          CB .
        </h1>
        <ul className="uppercase ps-5">
          <li className="p-4 border-b border-b-jade-100">Home</li>
          <li className="p-4 border-b border-b-jade-100">Company</li>
          <li className="p-4 border-b border-b-jade-100">Resource</li>
          <li className="p-4 border-b border-b-jade-100">About</li>
          <li className="p-4 border-b border-b-jade-100">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
