import "./App.css";
import Home from "./Pages/Home";
import Header from "./Components/header";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import Business from "./Pages/Business";
import Companies from "./Pages/Companies";
import Product from "./Pages/Product";
import Services from "./Pages/Services";
import Toys from "./Pages/Toys";
import Ventures from "./Pages/Ventures";
import Career from "./Pages/Career";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Business />
      <Companies />
      <Product />
      <Services />
      <Toys />
      <Ventures />
      <Career />
      <Footer />
    </div>
  );
};

export default App;
