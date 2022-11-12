import React, { useReducer } from "react";
import BlogContext from "./BlogContext";

const reducerFun = (state, { type, payload }) => {
  switch (type) {
    case "START": {
      return { ...state, loading: true, error: false };
    }
    case "ADD_BLOG": {
      return {
        ...state,
        loading: false,
        newBlogs: [
          { id: new Date().getTime().toString(), ...payload },
          ...state.blogs,
        ],
        blogs: [
          { id: new Date().getTime().toString(), ...payload },
          ...state.blogs,
        ],
      };
    }
    case "FILTER_BLOG": {
      return {
        ...state,
        blogs: state.newBlogs.filter((blog) => {
          return blog?.type === payload;
        }),
      };
    }
    case "ERROR": {
      return { ...state, loading: false, blogs: [], err: payload, error: true };
    }
  }
};

const initialValue = {
  blogs: [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      date: "2022-11-18",
      author: "Magni",
      image:
        "https://images.unsplash.com/photo-1668104365801-07d269fda1dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      type: "Fashion",
      blog: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam atque, commodi eum vero, itaque mollitia maxime, unde aut sed dolore fugit odio harum minus? Facilis officiis dolorum corrupti repellendus. Consectetur voluptatem libero sunt nisi iste maiores beatae debitis odio tenetur.",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      date: "2022-11-18",
      author: "Atreus",
      image:
        "https://images.unsplash.com/photo-1664575601786-b00156752b61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60",
      type: "Tech",
      blog: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam atque, commodi eum vero, itaque mollitia maxime, unde aut sed dolore fugit odio harum minus? Facilis officiis dolorum corrupti repellendus. Consectetur voluptatem libero sunt nisi iste maiores beatae debitis odio tenetur.",
    },
  ],
  newBlogs: [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      date: "2022-11-18",
      author: "Magni",
      image:
        "https://images.unsplash.com/photo-1668104365801-07d269fda1dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      type: "Fashion",
      blog: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam atque, commodi eum vero, itaque mollitia maxime, unde aut sed dolore fugit odio harum minus? Facilis officiis dolorum corrupti repellendus. Consectetur voluptatem libero sunt nisi iste maiores beatae debitis odio tenetur.",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      date: "2022-11-18",
      author: "Atreus",
      image:
        "https://images.unsplash.com/photo-1664575601786-b00156752b61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60",
      type: "Tech",
      blog: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam atque, commodi eum vero, itaque mollitia maxime, unde aut sed dolore fugit odio harum minus? Facilis officiis dolorum corrupti repellendus. Consectetur voluptatem libero sunt nisi iste maiores beatae debitis odio tenetur.",
    },
  ],
  loading: false,
  error: false,
  err: "",
};

const BlogReducer = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFun, initialValue);
  return (
    <BlogContext.Provider
      value={{
        blogs: state.blogs,
        dispatch,
        loading: state.loading,
        error: state.error,
        err: state.err,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogReducer;
