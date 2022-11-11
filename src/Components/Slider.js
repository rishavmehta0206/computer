import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

const images = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1454916286212-0ea211dc68d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2FybXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1571353652572-0145557ba72d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2FybXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1662505010441-f052672a6ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8b3BlcmFob3VzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1621165398565-6df8162f578b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhhZ2lhJTIwc29maWF8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
  },
];

const Slider = () => {
  const [slide, setSlide] = useState(0);
  const {image } = images[slide];

  const handleSlide = (direction) => {
    let tempSlide;
    if (direction === "L") {
      tempSlide = slide > 0 ? slide - 1 : images.length - 1;
    } else {
      tempSlide = slide < images.length - 1 ? slide + 1 : 0;
    }
    setSlide(tempSlide);
  };

  return (
    <div className="text-black max-w-[1240px] mx-auto p-4 relative mt-20 mb-20">
      <img
        className="object-cover h-[450px] w-[85%] mx-auto"
        src={image}
        alt="warm"
      />
      <div className="absolute top-0 left-0 bottom-0 right-0 flex justify-between items-center">
        <AiOutlineArrowLeft onClick={()=>handleSlide("L")} size={30} />
        <AiOutlineArrowRight onClick={()=>handleSlide("R")} size={30} />
      </div>
    </div>
  );
};

export default Slider;
