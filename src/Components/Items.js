import React from "react";

const Items = () => {
  return (
    <div className="text-black max-w-[1240px] mt-6 mx-auto grid md:grid-cols-3 gap-[50px] p-4">
      <div className="">
        <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60" />
        <h1 className="text-2xl mt-2 font-bold">Lorem, ipsum dolor.</h1>
        <p className="mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum iste dolore iusto beatae architecto praesentium soluta tenetur asperiores voluptates quo!</p>
        <a className="mt-2 text-teal-400 font-medium">read more...</a>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60" />
        <h1 className="text-2xl mt-2 font-bold">Lorem, ipsum dolor.</h1>
        <p className="mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum iste dolore iusto beatae architecto praesentium soluta tenetur asperiores voluptates quo!</p>
        <a className="mt-2 text-teal-400 font-medium">read more...</a>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60" />
        <h1 className="text-2xl mt-2 font-bold">Lorem, ipsum dolor.</h1>
        <p className="mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum iste dolore iusto beatae architecto praesentium soluta tenetur asperiores voluptates quo!</p>
        <a className="mt-2 text-teal-400 font-medium">read more...</a>
      </div>
    </div>
  );
};

export default Items;
