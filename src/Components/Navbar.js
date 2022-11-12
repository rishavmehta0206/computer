import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="text-black flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 top-0 sticky z-10 bg-white">
      <h1
        className="cursor-pointer w-full text-3xl font-bold text-teal-400"
        onClick={() => navigate("/")}
      >
        Mehta.
      </h1>
      <ul className="md:flex hidden gap-8">
        <li className="group truncate">
          <Link to="/">Home</Link>
          <div className="bg-red-500 h-1 relative left-[-101%] group-hover:left-0 duration-300 ease-linear"></div>
        </li>
        <li className="group truncate">
          Company
          <div className="bg-red-500 h-1 relative left-[-101%] group-hover:left-0 duration-300 ease-linear"></div>
        </li>
        <li className="group truncate">
          <Link to="/blog">Blog</Link>
          <div className="bg-red-500 h-1 relative left-[-101%] group-hover:left-0 duration-300 ease-linear"></div>
        </li>
        <li className="group truncate">
          About
          <div className="bg-red-500 h-1 relative left-[-101%] group-hover:left-0 duration-300 ease-linear"></div>
        </li>
        <li className="group truncate">
          Contact
          <div className="bg-red-500 h-1 relative left-[-101%] group-hover:left-0 duration-300 ease-linear"></div>
        </li>
      </ul>

      <div className="block md:hidden">
        {!nav ? (
          <AiOutlineMenu
            className="cursor-pointer"
            onClick={() => setNav(true)}
            size={20}
          />
        ) : (
          <AiOutlineClose
            className="cursor-pointer"
            onClick={() => setNav(false)}
            size={20}
          />
        )}
      </div>

      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-[50%] h-full bg-blue-500 ease-in duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="p-4 text-3xl font-bold text-white ">Mehta.</h1>
        <ul className="pt-24 p-4 uppercase text-white font-medium">
          <li className="group truncate mb-6 cursor-pointer border-black">
            Home
            <div className="bg-white h-1 relative left-[-101%] group-hover:left-0 duration-200 ease-linear"></div>
          </li>
          <li className="mb-6 border-b cursor-pointer border-black">Company</li>
          <li className="mb-6 border-b cursor-pointer border-black">Blog</li>
          <li className="mb-6 border-b cursor-pointer border-black">About</li>
          <li className="mb-6 border-b cursor-pointer border-black">Contact</li>
          <li className="mb-6 border-b cursor-pointer border-black">
            <Link to="/login">Login</Link>
          </li>
          <li className="mb-6 border-b cursor-pointer border-black">
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
