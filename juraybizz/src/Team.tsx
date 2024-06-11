import React from "react";
import "../src/Team.css";
import sarahK from "../src/assets/ProfileImage.png";
import michaelL from "../src/assets/ProfileImage1.png";
import laurenM from "../src/assets/profileImage2.png";

function Cards({ img, name, position, writeups }) {
  return (
    //  card props section
    <div className="flex-card bg-white w-[350px] h-[380px] shadow-xl rounded-xl p-3 xs:mx-3">
      <img
        src={img}
        alt="girl"
        height={120}
        width={120}
        className="block m-auto pt-4"
      />
      <h1 className="font-bold text-2xl pt-5">{name}</h1>
      <p className="pt-2">{position}</p>
      <p className="pt-2">{writeups}</p>
      <div className="flex flex-row justify-between font-bold text-ButtonGreen pl-5 pr-5 pt-5">
        <a href="#">Twitter</a>
        <a href="#">Dribble</a>
        <a href="#">LinkedLn</a>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <>
      {/* meet out team section */}
      <div className="text-center bg-lightGreen pt-10">
        <h1 className="text-3xl font-bold">Meet Our Team</h1>
        <p className="mt-3">
          Get to know the faces behind the scene and learn about the value that
          dives us.
        </p>
        {/* first card section */}
        <div className="flex flex-row justify-center gap-12 pt-7 flex-wrap">
          <Cards
            name="Sarah K."
            position="Lead Designer"
            img={sarahK}
            writeups="With a passion for colors and a love for clean lines, Sarah brings
              all our wildest design dreams to life."
          />
          {/* second card section */}
          <Cards
            name="Michael L."
            position="Product Designer"
            img={michaelL}
            writeups="Michael got a sharp eyes for detail and the
              ability to turn any boring interface into a
              work of art."
          />
          {/* third card section */}
          <Cards
            name="Lauren M."
            position="UX Designer"
            img={laurenM}
            writeups="Lauren is the master mind behind all the
              seamless user experience you love. She's a wizard at making
              things intutive"
          />
        </div>
      </div>
    </>
  );
}
