import React from "react";
import Hero from "../Components/Hero";
import Product from "../Components/Product";
import Items from "../Components/Items";
import Newsletter from "../Components/Newsletter";
import Slider from "../Components/Slider";
import Review from "../Components/Review";

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <Slider />
      <Product />
      <Review />
      <Items />
      <Newsletter />
    </div>
  );
};

export default Home;
