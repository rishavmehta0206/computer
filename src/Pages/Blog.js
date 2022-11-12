import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateBlog } from "../Context/Blog/BlogActions";
import BlogContext from "../Context/Blog/BlogContext";

const Blog = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState();
  const [form, setForm] = useState({});
  const { blogs, dispatch } = useContext(BlogContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    if (form === null) {
      return;
    }
    CreateBlog(dispatch, form);
  };

  const filterBlog = (e) => {
    const { name, value } = e.target;
    setFilter((filter) => ({ ...filter, [name]: value }));
  };

  useEffect(() => {
    if (filter?.type) {
      dispatch({ type: "FILTER_BLOG", payload: filter?.type });
    }
  }, [filter]);

  return (
    <div className="text-black max-w-[1240px] mx-auto p-4 min-h-screen flex md:flex-row  flex-col gap-10  md:items-start">
      <div className="md:w-1/2 p-4 shadow-xl rounded-md grid grid-cols-2 gap-6 bg-gray-200 md:top-[96px] md:sticky">
        <h1 className="text-3xl font-bold text-teal-400 underline">
          Create a blog.
        </h1>
        <input
          type="text"
          className="p-2 col-span-2"
          placeholder="enter blog title"
          name="title"
          onChange={handleChange}
        />
        <input
          type="text"
          className="p-2 col-span-2"
          placeholder="enter image address"
          name="image"
          onChange={handleChange}
        />
        <input
          name="date"
          type="date"
          className="p-2 col-span-1"
          onChange={handleChange}
        />
        <input
          name="author"
          type="text"
          className="p-2 col-span-1"
          onChange={handleChange}
          placeholder="author name"
        />
        <select name="type" onChange={handleChange} className="p-2 col-span-1">
          <option selected disabled>
            select type
          </option>
          <option>Tech</option>
          <option>Current Affairs</option>
          <option>Culture</option>
          <option>Fashion</option>
        </select>
        <textarea
          name="blog"
          className="p-2 h-40 col-span-2"
          placeholder="enter blog"
          onChange={handleChange}
        />
        <button
          onClick={handleSubmit}
          className="col-span-1 w-[60%] bg-teal-400 p-2 text-white font-semibold rounded-lg cursor-pointer"
        >
          Submit.
        </button>
      </div>
      <div className="md:w-1/2 p-4 border border-black-400 rounded-lg">
        <div className="flex justify-between items-center mb-10">
          <h1 className="my-5 text-3xl font-semibold">Latest Blogs</h1>
          <select
            name="type"
            onChange={filterBlog}
            className="p-2 border-black border w-[200px] font-light"
          >
            <option selected disabled>
              filter by type
            </option>
            <option>Tech</option>
            <option>Current Affairs</option>
            <option>Culture</option>
            <option>Fashion</option>
          </select>
        </div>
        {blogs?.map((blog) => {
          return (
            <div
              onClick={() => navigate(`/blog/${blog.id}`)}
              className="w-full p-2 truncate  mb-10 shadow-md hover:shadow-2xl cursor-pointer"
            >
              <img
                src={blog?.image}
                alt="blog"
                className="h-[180px] w-full object-cover"
              />
              <h1 className="md:text-xl text-teal-400 md:font-bold text-md font-semibold">
                {blog?.title}
              </h1>
              <span className="font-semibold">by: {blog?.author}</span>
              <div className="grid grid-cols-2 mt-5">
                <div className="col-span-1 font-light">
                  <span>Type:</span>
                  <span>{blog?.type}</span>
                </div>
                <div className="col-span-1 font-light">
                  <span>Date:</span>
                  <span>{blog?.date}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
