import React from "react";
import Fade from "react-reveal/Fade";

import introImg from "../assets/giphy.gif";
import "./style.css";

const Home = () => {
  return (
    <div id="home">
      <img alt="intro-img" className="h-50 w-100"  src={introImg}></img>
      <Fade big cascade>
        <div className="advi-intro-text display-1">We Into The Future</div>
      </Fade>
    </div>
  );
};

export default Home;
