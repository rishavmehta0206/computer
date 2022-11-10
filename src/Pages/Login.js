import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  // const requests = ["todos", "users", "posts"];

  // const fetchData = async (type) => {
  //   const response = await fetch(
  //     `https://jsonplaceholder.typicode.com/${type}`
  //   ).then((response) => response.json());
  //   return response;
  // };

  // const response = requests.map((item) => {
  //   return new Promise(async (resolve, reject) => {
  //     const result = await fetchData(item);
  //     resolve(result);
  //   });
  // });

  // Promise.all(response).then(async (response) => {
  //   console.log(response[0]);
  //   console.log(response[1]);
  //   console.log(response[2]);
  // });

  // const fetchData = async (type) => {
  //   return await fetch(
  //     `https://jsonplaceholder.typicode.com/${type}`
  //   ).then((response) => response.json()).then((result)=>{return result});
  // };
  // console.log(fetchData("users").then((data) => console.log(data)));

  return (
    <div className="max-w-[1240px] mx-auto flex justify-center items-center">
      <div className="w-full h-auto md:min-h-[600px] bg-gray-200 shadow-lg flex">
        <div className="md:w-1/2 p-4 w-full">
          <h1 className="text-4xl font-bold w-full p-1 border-b-2 border-b-teal-500 text-teal-600">
            Login User.
          </h1>
          <div className="flex flex-col mt-20">
            <input
              className="mb-10 p-2 outline-none border-none text-black-300"
              placeholder="enter username"
            />
            <input
              className="mb-10 p-2 outline-none border-none text-black-300"
              placeholder="enter passward"
            />
            <button className="p-2 bg-teal-500 text-white text-xl cursor-pointer font-bold">
              Login.
            </button>
          </div>
          <div className="mt-10 mb-10">
            <p>
              Don't have an account?{" "}
              <Link
                className="text-teal-500 font-bold cursor-pointer hover:underline"
                to="/register"
              >
                Register.
              </Link>
            </p>
          </div>
        </div>
        <div className="md:w-1/2 md:block hidden">
          <img
            className="w-full object-cover max-h-[600px]"
            src="https://images.unsplash.com/photo-1659535915214-e7cbac112038?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
