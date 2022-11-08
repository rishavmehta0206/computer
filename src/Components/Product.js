import React from "react";

const Product = () => {
  return (
    <div className="text-black max-w-[1240px] mx-auto flex flex-col md:flex-row md:items-start items-center p-4 mt-9">
      <div className="md:w-1/2 w-full">
        <img className="object-cover" src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60" />
      </div>
      <div className="p-4 md:w-1/2 w-full md:text-left text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Lorem, ipsum dolor.</h1>
        <p className="mt-4">Lorem ipsum dolor sit amet consectetur <span className="text-teal-400 font-bold underline"> adipisicing elit. Molestiae ratione accusamus</span> accusantium, libero qui optio dolorem doloribus! Voluptatibus, magni eius libero qui veritatis, eum, sed reiciendis sequi itaque adipisci porro!</p>
        <button className="bg-teal-400 p-3 mt-10">Learn more.</button>
      </div>
    </div>
  );
};

export default Product;
