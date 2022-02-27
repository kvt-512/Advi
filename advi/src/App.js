import "./App.css";
import Home from "./Pages/Home";
import Header from "./Components/header";
import About from "./Pages/About";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
    </div>
  );
}

export default App;
