import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="text-black flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="w-full text-3xl font-bold text-teal-400">React.</h1>
      <ul className="md:flex hidden gap-8">
        <li className="">Home</li>
        <li className="">Company</li>
        <li className="">Resources</li>
        <li className="">About</li>
        <li className="">Contact</li>
      </ul>

      <div className="block md:hidden">
        {!nav ? (
          <AiOutlineMenu onClick={() => setNav(true)} size={20} />
        ) : (
          <AiOutlineClose onClick={() => setNav(false)} size={20} />
        )}
      </div>

      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-[50%] h-full bg-blue-500 ease-in duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="p-4 text-3xl font-bold text-white ">React.</h1>
        <ul className="pt-24 p-4 uppercase text-white font-medium">
          <li className="mb-6 border-b cursor-pointer border-black">Home</li>
          <li className="mb-6 border-b cursor-pointer border-black">Company</li>
          <li className="mb-6 border-b cursor-pointer border-black">
            Resources
          </li>
          <li className="mb-6 border-b cursor-pointer border-black">About</li>
          <li className="mb-6 border-b cursor-pointer border-black">Contact</li>
          <li className="mb-6 border-b cursor-pointer border-black">Login</li>
          <li className="mb-6 border-b cursor-pointer border-black">
            Register
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
