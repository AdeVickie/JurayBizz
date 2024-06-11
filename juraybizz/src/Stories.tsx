import React from "react";

import lauren from "../src/assets/Tphoto1.png";
import david from "../src/assets/Tphoto2.png";
import stars from "../src/assets/NewStars.png";

function StoriesProps({ img, name, position, stars, writeups }) {
  return (
    <>
      <div className="flex bg-white shadow-xl rounded-xl p-4 xs:flex-wrap md:flex-nowrap xs:items-center xs:justify-center ">
        <div className="p-7 sm:basis-[300px] xs:basis-full">
          <img
            className="xs:flex xs:m-auto"
            src={img}
            alt="girl"
            height={120}
            width={120}
          />
          <h1 className="font-bold pt-2 xs:flex xs:items-start xs:justify-center">
            {name}
          </h1>
          <p className="flex xs:items-start xs:justify-center ">{position}</p>
        </div>

        <div className="flex sm:basis-[300px]">
          <p className="text-left">
            <img
              src={stars}
              alt="stars"
              height={120}
              width={120}
              className="pb-5 xs:m-auto"
            />
            {writeups}
          </p>
        </div>
      </div>
    </>
  );
}

export default function Stories() {
  return (
    <div className="bg-orange px-3 py-24">
      <div className="text text-center">
        <h1 className="font-bold text-4xl">
          Real Stories from Satisfied Customers
        </h1>
        <p className="mt-3">See how our landing page Ui is making an impact.</p>

        {/* <div className="grid grid-cols-2 gap-8 px-10 my-5 p-16"> */}
        {/* <div className="p-10 bg-white rounded-2xl"> */}
        <div className="flex justify-center mt-12 gap-14 xs:flex-col sm:flex-col md:flex-row">
          <StoriesProps
            img={lauren}
            name="Lauren M."
            position="UI Designer @Boo"
            stars={stars}
            writeups="--s Landing Page UI Kit has become a staple in my
                   design toolkit. This kit has everything I need to get
                    the job done quickly and efficiently."
          />
          <StoriesProps
            img={david}
            name="David B."
            position="Lead Designer @Creative"
            stars={stars}
            writeups="The landing page UI kit has been
                    a game changer. The pre designed
                    components and templates have has helped us
                    deliver projects faster"
          />
        </div>
      </div>
    </div>
  );
}
