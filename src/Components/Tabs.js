import React, { useState } from "react";
import { BsChevronDoubleRight, BsFacebook, BsGithub } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";

const Tabs = ({ client }) => {
  const [index, setIndex] = useState(0);
  const [personIndex, setPersonIndex] = useState(0);
  const { id, name, image, about } = client[index];

  const handleIndexes = (personIndex) => {
    setIndex(personIndex);
    setPersonIndex(personIndex);
    // if (personIndex === index) {
    //   document.querySelector("#slide").style.transform = `translateX(0%)`;
    // }
  };

  return (
    <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 text-center p-4 gap-3 ">
      <div className="md:col-span-1 overflow-hidden">
        {client.map((person, personIndex) => {
          const { id, name } = person;
          return (
            <div
              onClick={() => {
                handleIndexes(personIndex);
              }}
              className="cursor border border-b-2 border-b-teal-500 cursor-pointer text-left shadow-xl p-4 my-[10px] rounded-md relative"
              key={id}
            >
              <h1
                className={`text-xl flex items-center w-full ${
                  index === personIndex
                    ? "text-gray-800 font-normal"
                    : "text-black font-light"
                }`}
              >
                <span>{id}- </span>
                {name}
              </h1>
              <div
                className={`absolute w-[100%] flex flex-col justify-center p-4 items-center top-0 left-0 bottom-0 right-0 bg-teal-100 -z-10 ${
                  personIndex === index
                    ? "translate-x-[0%]"
                    : "translate-x-[-100%]"
                } duration-500 ease-linear`}
              >
                <BsChevronDoubleRight className="font-bold self-end" />
              </div>
            </div>
          );
        })}
      </div>
      <div
        id="slide"
        className={`md:col-span-2 flex items-center flex-col p-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white overflow-hidden `}
      >
        <img
          className="object-cover rounded-full h-[150px] w-[150px]"
          src={image}
        />
        <h1 className={`font-semibold text-4xl my-[20px] w-full`}>{name}</h1>
        <p className="text-lg">{about}</p>
        <div className="flex gap-4 mt-[30px] w-full justify-start p-4">
          <BsFacebook size={30} className="cursor-pointer" />
          <RiInstagramFill size={30} className="cursor-pointer" />
          <AiFillTwitterCircle size={30} className="cursor-pointer" />
          <BsGithub size={30} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
