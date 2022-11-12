import React from "react";

const Newsletter = () => {
  return (
    <div className="text-white max-w-[1240px] mt-6 mx-auto p-4 bg-black grid md:grid-cols-2 gap-5 mb-20">
      <h1 className="text-3xl mx-auto p-2 font-medium md:text-left text-center">
        Would like to{" "}
        <span className="text-teal-400">
          get latest updates on our products?
        </span>
      </h1>
      <div className="grid grid-cols-4 gap-4">
        <h1 className="text-xl col-span-4">
          <span className="text-teal-400 font-semibold">Sign up for free</span> for latest news.
        </h1>
        <div className="col-span-4">
          <div className="grid grid-cols-4 gap-4">
            <input className="text-black col-span-3 border-none outline-none p-2" placeholder="enter your email"/>
            <button className="col-span-1 p-2 bg-teal-400 rounded-md cursor-pointer">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
