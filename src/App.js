import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./Components/Hero";
import Items from "./Components/Items";
import Navbar from "./Components/Navbar";
import Newsletter from "./Components/Newsletter";
import Product from "./Components/Product";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import SharedLayout from "./Pages/SharedLayout";
import Test from "./Pages/Test";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path="/extra">
            <Route index element={<Test />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
