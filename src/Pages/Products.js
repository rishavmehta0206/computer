import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { AiOutlineLeft } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
let url = "";
const Products = () => {
  const [filterByCat, setFilterbyCat] = useState([]);
  const { response,response2 } = useFetch("https://api.escuelajs.co/api/v1/products",filterByCat);
  const categories = [
    ...new Set(
      response2.map((item) => {
        return item.category.name;
      })
    ),
  ];
  console.log(response);

  return (
    <div className="max-w-[1240px] mx-auto p-4 bg-gray-100 font-serif">
      <Filters
        categories={categories}
        filterByCat={filterByCat}
        setFilterbyCat={setFilterbyCat}
      />
      <div className="w-full grid md:grid-cols-4 sm:grid-cols-3 gap-5">
        {response.map((item) => {
          return (
            <div className="col-span-1 bg-white">
              <ImageComponent images={item.images} />
              <div className="p-2 flex flex-col">
                <span className="text-black text-md md:text-lg sm:text-md font-semibold">
                  {item.title}
                </span>
                <p className="font-thin text-sm">{item.description}</p>
                <div className="flex justify-between items-center p-3 mt-auto">
                  <span>{`$${item.price}`}</span>
                  <BsFillCartFill className="cursor-pointer" size={20} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;

const ImageComponent = ({ images }) => {
  const [imageindex, setImageindex] = useState(0);
  const left = () => {
    setImageindex(imageindex === 0 ? 1 : imageindex - 1);
  };
  const right = () => {
    setImageindex(imageindex === 1 ? 0 : imageindex + 1);
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex duration-500 ease-linear translate-x-[-${
          imageindex * 100
        }%]`}
      >
        {images.map((imgUrl) => {
          return <img alt="image" src={imgUrl} />;
        })}
      </div>
      <div className="absolute h-full w-full top-0 left-0 bottom-0 right-0 flex justify-between items-center p-4">
        <div
          onClick={left}
          className="h-[30px] w-[30px] bg-white rounded-full flex items-center justify-center cursor-pointer"
        >
          <AiOutlineLeft size={20} />
        </div>
        <div
          onClick={right}
          className="h-[30px] w-[30px] bg-white rounded-full flex items-center justify-center cursor-pointer"
        >
          <AiOutlineLeft size={20} className="rotate-[180deg]" />
        </div>
      </div>
    </div>
  );
};

const Filters = ({ categories, filterByCat, setFilterbyCat }) => {
  const handleChange = (e) => {
    const { value, checked: isChecked } = e.target;
    setFilterbyCat(
      isChecked
        ? [...filterByCat, value]
        : filterByCat.filter((item) => item !== value)
    );
  };
  return (
    <div className="w-full p-4 bg-white mb-[30px] flex gap-2">
      {categories.map((category) => {
        return (
          <div className="flex items-center gap-[5px]">
            <input value={category} onChange={handleChange} type="checkbox" />
            <span>{category}</span>
          </div>
        );
      })}
    </div>
  );
};
