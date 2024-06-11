import React from "react";
import "../src/HeroSection.css";
import img from "../src/assets/img.png";

export default function HeroSection() {
  return (
    <>
      <div className=" bg-orange grid xs:grid-cols-1 xs:grid-rows-2 md:grid-rows-1 md:grid-cols-2 isolate pt-20">
        {/* Header text */}
        <div className="py-10 md:pl-10 xs:text-center md:text-left xs:pl-0">
          <h1 className="font-bold text-7xl">
            Create Engaging
            <br /> Landing Pages
          </h1>
          <p className="my-5">
            Build beautiful landing pages in record time with --'s Landing{" "}
            <br /> Page UI kit for Figma. No code required!
          </p>
          <div className="flex gap-8 xs:justify-center md:justify-start xs:mx-2">
            <button className="text-white bg-ButtonGreen rounded-xl p-2 py-2 px-7 font-semibold">
              Get Started
            </button>
            <button className="border border-ButtonGreen text-ButtonGreen rounded-xl font-semibold bg-white md:text-center p-2 py-2 px-7 xs:px-4">
              How it works
            </button>
          </div>
        </div>

        {/* Header image */}
        <div className="flex justify-center relative">
          <div className="shape bg-white w-80 h-80 rounded-t-full absolute bottom-0 -z-10"></div>
          <img
            className="w-72 h-96 absolute bottom-0 m-auto"
            src={img}
            alt="phone-img"
          />
        </div>
      </div>
    </>
  );
}
