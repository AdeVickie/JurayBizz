import React from "react";
import image1 from "../src/assets/picImg.png";

function DiscoverProps({ img, projectTitle, shortDescrip, category }) {
  return (
    <>
      {/* Props declaration section */}

      <div className="rounded-xl shadow-lg ">
        <img className="w-full h-60" src={img} alt="image" />
        <div className="cards bg-white pl-5 rounded-xl p-3">
          <h1 className="text-3xl font-bold pt-5">{projectTitle}</h1>
          <h4 className="pt-5">{shortDescrip}</h4>
          <p className="pt-5">{category}</p>
        </div>
      </div>
    </>
  );
}
export default function Discover() {
  return (
    <div>
      {/* card design  */}
      <div className="text text-center pt-32 px-2">
        <h1 className="font-bold text-4xl">Discover our latest work</h1>
        <p className="mt-3">
          Explore our portfolio and see the latest and greatest projects that
          we've brought to life.
        </p>
      </div>
      {/* props calling section */}
      <div className="flex justify-center px-3 gap-7 py-16 flex-wrap">
        <DiscoverProps
          img={image1}
          projectTitle="Project Title"
          shortDescrip="Short Description"
          category="category"
        />
        <DiscoverProps
          img={image1}
          projectTitle="Project Title"
          shortDescrip="Short Description"
          category="category"
        />

        <DiscoverProps
          img={image1}
          projectTitle="Project Title"
          shortDescrip="Short Description"
          category="category"
        />
      </div>
    </div>
  );
}
