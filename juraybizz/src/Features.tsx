import React from "react";
import "../src/Features.css";
import img2 from "../src/assets/img2.png";
import icon1 from "../src/assets/Icon1.png";
import icon2 from "../src/assets/Icon2.png";
import icon3 from "../src/assets/Icon3.png";
import icon4 from "../src/assets/Icon4.png";

export default function Features() {
  return (
    <>
      <div className="grid xs:grid-cols md:grid-cols-2 xs:text-center sm:w-[100vw] md:text-left gap-8 bg-lightGreen p-5 py-20">
        <div className="flex items-center justify-center xs:row-start-2 md:row-start-1">
          <div className="circle xs:h-[250px] xs:w-[250px] sm:w-[370px] sm:h-[370px] bg-orange rounded-full relative col-span-1 xs:rounded-full">
            <img
              className="m-auto xs:max-w-[150px] xs:max-h-[300px] sm:max-w-[250px] sm:max-h-[400px] md:max-w-[350px] md:max-h-[500px]  "
              id="img"
              src={img2}
              alt="phone"
            />
          </div>
        </div>

        {/* Left col */}
        <div className="grid-text col-span-1 sm:justify-center items-center">
          {/* Heading */}
          <h1 className="text-[38px] font-bold">Our Features</h1>
          {/* Caption */}
          <p className="mt-5">
            Few good reasons why you should use-- landing page Ui <br /> Kits to
            make your own pages
          </p>

          {/* Features */}
          <div className="mt-5 grid sm:grid-cols-2 xs:grid-cols-1 gap-8 ">
            {/* Feature Item */}
            <div className=" bg-white rounded-3xl flex items-center shadow-md px-[10px]">
              {/* Feature icon */}
              <div className="flex flex-wrap justify-center py-4 items-center gap-4">
                <img className="w-[50px] h-[50px] " src={icon1} alt="icons" />
                <h1 className="font-semibold"> Fast Building</h1>
              </div>
            </div>

            {/* Feature Item */}
            <div className=" bg-white rounded-3xl flex shadow-md items-center px-[10px]">
              {/* Feature icon */}
              <div className="flex flex-wrap items-center justify-center py-4 gap-4">
                <img className="w-[50px] h-[50px] " src={icon2} alt="icons" />
                <h1 className="font-semibold">Easy to edit</h1>
              </div>
            </div>

            {/* Feature Item */}
            <div className=" bg-white rounded-3xl shadow-md flex items-center px-[10px]">
              {/* Feature icon */}
              <div className="flex flex-wrap justify-center py-4 items-center gap-4">
                <img className="w-[50px] h-[50px] " src={icon3} alt="icons" />
                <h1 className="font-semibold">Responsiveness</h1>
              </div>
            </div>

            {/* Feature Item */}
            <div className=" bg-white rounded-3xl shadow-md flex items-center px-[10px]">
              {/* Feature icon */}
              <div className="flex flex-wrap justify-center py-4 items-center gap-4">
                <img className="w-[50px] h-[50px] " src={icon4} alt="icons" />
                <h1 className="font-semibold">No code needed</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
