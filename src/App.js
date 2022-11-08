import Hero from "./Components/Hero";
import Items from "./Components/Items";
import Navbar from "./Components/Navbar";
import Newsletter from "./Components/Newsletter";
import Product from "./Components/Product";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Product />
      <Items />
      <Newsletter />
    </div>
  );
}

export default App;
