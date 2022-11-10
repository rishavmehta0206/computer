import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="max-w-[1240px] mx-auto flex justify-center items-center">
      <div className="w-full min-h-[600px] bg-gray-200 shadow-lg flex">
        <div className="md:w-1/2 p-4 w-full">
          <h1 className="text-4xl font-bold w-full p-1 border-b-2 border-b-teal-500 text-teal-600">
            Register User.
          </h1>
          <div className="flex flex-col mt-20">
            <input
              className="mb-10 p-2 outline-none border-none text-black-300"
              placeholder="enter username"
            />
            <input
              className="mb-10 p-2 outline-none border-none text-black-300"
              placeholder="enter email"
            />
            <input
              className="mb-10 p-2 outline-none border-none text-black-300"
              placeholder="enter passward"
            />
            <button className="p-2 bg-teal-500 text-white text-xl cursor-pointer font-bold">
              Register.
            </button>
          </div>
          <div className="mt-10">
            <p>
              Already have an account? <Link className="text-teal-500 font-bold cursor-pointer hover:underline"  to="/login">Login.</Link>
            </p>
          </div>
        </div>
        <div className="md:w-1/2 md:block hidden">
          <img
            className="w-full object-cover max-h-[600px]"
            src="https://images.unsplash.com/photo-1667833966178-f98135a582f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
