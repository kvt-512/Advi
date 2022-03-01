import "./App.css";
import Home from "./Pages/Home";
import Header from "./Components/header";
import About from "./Pages/About";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Footer />
    </div>
  );
}

export default App;
