import React from "react";

const Newsletter = () => {
  return (
    <div className="text-white max-w-[1240px] mt-6 mx-auto p-4 bg-black grid md:grid-cols-2 gap-5 mb-20">
      <h1 className="text-3xl mx-auto p-2 font-medium md:text-left text-center">
        Would like to <span className="text-teal-400">get latest updates on our products?</span>
      </h1>
      <div className="">
        <h1 className="text-xl"><span className="text-teal-400">Sign up</span> for latest news.</h1>
        <div className="grid md:grid-cols-3 mt-4 p-3 md:items-center gap-3 grid-cols-2">
          <input className="border-none outline-none col-span-2 md:col-span-2 p-2 h-10 text-black focus:border-orange-600" placeholder="enter your mail"/>
          <button className="mt-4 md:mt-0 p-1 bg-teal-400 text-black cursor-pointer w-[80%] rounded-lg">Sign Up.</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
