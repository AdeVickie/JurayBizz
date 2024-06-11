import React from "react";
import Mockup from "../src/assets/Mockup.png";
export default function CTA() {
  return (
    <>
      <div className="text-center bg-orange pt-32">
        <h1 className="font-bold text-3xl">Get Landing page UI kit Today!</h1>
        <p className="pt-3 pb-7">
          Break figma limits and explore the endless possiblities with---
        </p>
        <button className="h-12 w-40 bg-ButtonGreen rounded-lg text-white">
          Get Started
        </button>

        <img className="pt-16" src={Mockup} alt="Mockup" />
      </div>
    </>
  );
}
