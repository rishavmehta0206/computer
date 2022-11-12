import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogContext from "../Context/Blog/BlogContext";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiFillCalendar } from "react-icons/ai";
import { BsFillFilePersonFill } from "react-icons/bs";
const Single = () => {
  const { id } = useParams();
  const { blogs } = useContext(BlogContext);
  const [blog, setBlog] = useState({});
  useEffect(() => {
    setBlog(
      blogs.find((blog) => {
        return blog.id == id;
      })
    );
  }, [id, blogs]);
  console.log(id);
  return (
    <div className="max-w-[1240px] mx-auto p-2">
      <div className="bg-gradient-to-r hover:from-green-400 hover:to-blue-500 from-pink-500 to-yellow-500 relative h-[100px] mb-[120px] text-right p-4">
        <h1 className="text-white font-semibold text-2xl">
          Welcome Rishav Mehta
        </h1>
        <div className="p-[4px] absolute h-[120px] w-[120px] rounded-full bg-white top-[40%] left-5 overflow-hidden">
          <img
            className="object-cover h-full w-full rounded-full"
            src="https://images.unsplash.com/photo-1636966820438-3db8dc827ec9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWluaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          />
        </div>
      </div>
      <h1 className="text-4xl font-bold text-teal-400 ">{blog.title}</h1>
      <div className="mt-4 flex gap-10 items-center">
        <div className="flex items-center gap-3">
          <BsFillFilePersonFill size={20} />
          <span className="text-xl font-light">{blog?.author}</span>
        </div>
        <div className="flex items-center gap-3">
          <AiFillCalendar  size={20}/>
          <span className="text-xl font-light">{blog?.date}</span>
        </div>
        <div className="flex items-center gap-3">
          <AiOutlineUnorderedList size={20} />
          <span className="text-xl font-light">{blog?.type}</span>
        </div>
      </div>
      <img
        className="w-[100%] h-[300px] object-cover mt-10"
        src={blog?.image}
      />
      <p className="my-10 font-light first-letter:text-3xl text-xl first-letter:font-semibold">
        {blog?.blog}
      </p>
    </div>
  );
};

export default Single;
