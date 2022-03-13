import "./App.css";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import Business from "./Pages/Business";
import Companies from "./Pages/Companies";
import Product from "./Pages/Product";
import Services from "./Pages/Services";
import Toys from "./Pages/Toys";
import Ventures from "./Pages/Ventures";
import Career from "./Pages/Career";
import Contacts from "./Pages/Contacts";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <Companies />
      <About />
      <Toys />
      <Business />
      <Product />
      <Services />
      <Ventures />
      <Career />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
