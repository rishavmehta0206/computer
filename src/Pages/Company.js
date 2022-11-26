import React, { useEffect, useState } from "react";
import Slider from "../Components/Slider";
import Tabs from "../Components/Tabs";
import { people } from "../assets/data";
let sideNav = [
  {
    id: 1,
    name: "EC2",
    more: [
      { id: 1, name: "A" },
      { id: 2, name: "B" },
      {
        id: 3,
        name: "C",
        more: [
          { id: 1, name: "F" },
          { id: 2, name: "G" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Lamda",
    more: [
      { id: 1, name: "D" },
      { id: 2, name: "E" },
      { id: 2, name: "F" },
    ],
  },
  {
    id: 3,
    name: "Steam",
  },
];
const Company = () => {
  const [client, setClients] = useState(people);
  return (
    <div className="w-full">
      <Tabs client={client} />
      <div className="max-w-[1240px] mx-auto mt-[50px] max-h-[600px] h-[100%] bg-gray-100 p-4 grid grid-cols-4 mb-[70px]">
        <div className="col-span-1 relative bg-[#1b227d]">
          {sideNav?.map((item) => {
            return <Nested key={item.id} {...item} />;
          })}
        </div>
        <div className="col-span-2 p-4">Content</div>
      </div>
    </div>
  );
};

export default Company;

const Nested = ({ id, name, more }) => {
  const [popup, setPopup] = useState(false);
  const setPopupvalue = (Id) => {
    setPopup(!popup);
  };
  return (
    <div>
      <div
        onClick={() => setPopupvalue(id)}
        className="p-3 relative w-full flex items-center justify-between cursor-pointer hover:bg-[#1b4f7d]"
      >
        <span className="text-lg text-white font-semibold">{id}</span>
        <span className="text-lg text-white font-semibold">{name}</span>
      </div>
      {popup && more?.length > 0 && (
        <div className="absolute bg-[#1b227d] w-[100%] top-0 right-[-100%]">
          {more.map((item) => {
            return <Nested {...item} />;
          })}
        </div>
      )}
    </div>
  );
};
