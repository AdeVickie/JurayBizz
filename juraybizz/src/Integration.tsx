import React from "react";
import Logo from "../src/assets/LogoGrid.png";

export default function Integration() {
  return (
    <>
      <div className="text-center bg-lightGreen pt-10 pb-10">
        <h1 className="text-3xl font-bold">More than 50 Integrations</h1>
        <p className="mt-3 pb-5">
          We integrate with more than 50 apps you use daily.
        </p>
        <img src={Logo} alt="logo" className="p-16" />
        <button className="h-16 w-56 bg-ButtonGreen rounded-xl text-white">
          View all integration
        </button>
      </div>
    </>
  );
}
