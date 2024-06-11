import React from "react";
import Logo from "../src/assets/Logo.png";
import RocketLaunch from "../src/assets/RocketLaunch.png";

export default function Navbar() {
  return (
    <>
      {/* Navigation */}
      <div className="flex flex-row gap-2 justify-between p-4 bg-orange">
        {/* Left col */}
        <div className="flex items-center">
          <img src={Logo} height={20} width={20} alt="Logo" />
          <p className="pl-2 xs:invisible sm:invisible md:visible">
            <span className="font-bold">Landing</span>Page
          </p>
        </div>

        {/* Right col */}
        <div
          className=" flex flex-row gap-4 items-center xs:justify-between md:justify-end text-textGreen"
          id="item2"
        >
          <a href="#" className="xs:hidden md:flex font-semibold">
            Contact
          </a>
          <button className=" py-2 px-7 text-textGreen rounded-xl font-semibold bg-lightGreen xs:hidden md:flex">
            How it works
          </button>

          <button className="py-2 px-7 bg-ButtonGreen text-white rounded-xl font-semibold">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}
