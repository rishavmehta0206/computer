import React from "react";

const Hero = () => {
  return (
    <div className="text-black max-w-[1240px] mx-auto flex flex-col mt-24 text-center p-5">
      <h1 className="text-3xl font-bold">Lorem ipsum dolor sit, amet <span className="text-teal-600">consectetur adipisicing</span> elit.</h1>
      <p className="p-4 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quae
        dolor corrupti exercitationem. Vitae velit rerum quis corrupti hic
        itaque aliquid quos id a, repudiandae debitis omnis eius odio inventore!
      </p>
      <button className="rounded-md border-none font-bold cursor-pointer p-2 bg-teal-400 w-30 mx-auto">Read more.</button>
    </div>
  );
};

export default Hero;
