import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import BlogReducer from "./Context/Blog/BlogReducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BlogReducer>
      <App />
    </BlogReducer>
  </React.StrictMode>
);
