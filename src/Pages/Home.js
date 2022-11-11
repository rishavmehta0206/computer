import React from "react";
import Hero from "../Components/Hero";
import Product from "../Components/Product";
import Items from "../Components/Items";
import Newsletter from "../Components/Newsletter";
import Slider from "../Components/Slider";

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <Slider />
      <Product />
      <Items />
      <Newsletter />
    </div>
  );
};

export default Home;
