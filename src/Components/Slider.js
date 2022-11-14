import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { images } from "../assets/data.js/slider";

const Slider = () => {
  // const [index, setIndex] = React.useState(0);
  // const [slide, setSlide] = useState(0);
  // const { image } = images[slide];

  // const handleSlide = (direction) => {
  //   let tempSlide;
  //   if (direction === "L") {
  //     tempSlide = slide > 0 ? slide - 1 : images.length - 1;
  //   } else {
  //     tempSlide = slide < images.length - 1 ? slide + 1 : 0;
  //   }
  //   setSlide(tempSlide);
  // };

  //   return (
  //     <div className="text-black max-w-[1240px] mx-auto p-4 relative mt-20 mb-20">
  //       <img
  //         className="object-cover h-[450px] w-[85%] mx-auto"
  //         src={image}
  //         alt="warm"
  //       />
  //       <div className="absolute top-0 left-0 bottom-0 right-0 flex justify-between items-center">
  //         <AiOutlineArrowLeft onClick={() => handleSlide("L")} size={30} />
  //         <AiOutlineArrowRight onClick={() => handleSlide("R")} size={30} />
  //       </div>
  //     </div>
  //   );
  // };
  const [data, setData] = useState(images);
  const [index, setIndex] = useState(0);
  const [position, setPosition] = useState(0);

  const handleIndexCountLeft = () => {
    let tempIndex = index === 0 ? data.length - 1 : index - 1;
    setIndex(tempIndex);
  };

  const handleIndexCountRight = () => {
    let tempIndex = index >= data.length - 1 ? 0 : index + 1;
    setIndex(tempIndex);
  };

  return (
    <div className="max-w-[1240px] mx-auto relative h-[500px]">
      <div className="max-w-[800px] mx-auto w-[100%] h-[100%] flex overflow-hidden">
        {data?.map((item) => {
          return (
            <div
              className={`min-w-[100%] h-[100%] translate-x-[-${
                100 * index
              }%] duration-500`}
            >
              <img className="max-w-[100%] h-[100%]" src={item.image} />
            </div>
          );
        })}
      </div>
      <div className="absolute top-0 left-0 bottom-0 right-0 flex justify-between items-center">
        <AiOutlineArrowLeft
          onClick={() => {
            handleIndexCountLeft();
          }}
          size={30}
        />
        <AiOutlineArrowRight onClick={handleIndexCountRight} size={30} />
      </div>
    </div>
  );
};

export default Slider;
