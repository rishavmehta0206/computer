import React, { useState } from "react";
import { AiFillLeftCircle } from "react-icons/ai";
import { AiFillRightCircle } from "react-icons/ai";
import { images } from "../assets/data.js";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const leftDirection = () => {
    let tempIndex = index === 0 ? 2 : index - 1;
    setIndex(tempIndex);
  };
  const rightDirection = () => {
    let tempIndex = index >= 2 ? 0 : index + 1;
    setIndex(tempIndex);
  };
  return (
    <div className="hidden max-w-[1240px] mx-auto md:flex items-center justify-between p-4 my-[100px]">
      <AiFillLeftCircle onClick={leftDirection} size={40} />
      <div className="max-w-[700px] mx-auto overflow-hidden">
        <div
          className={`flex translate-x-[-${
            100 * index
          }%] duration-500 ease-linear`}
        >
          {images.map((image) => {
            return (
                <img className="h-[100%] object-cover" src={image.image} />
            );
          })}
        </div>
      </div>
      <AiFillRightCircle onClick={rightDirection} size={40} />
    </div>
  );
};

export default Slider;
