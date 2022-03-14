import React from "react";
import Fade from "react-reveal/Fade";

import introImg from "../assets/nn.gif";
import "./style.css";

const Home = () => {
  return (
    <div id="home">
      <img alt="intro-img" className="h-50 w-100" src={introImg}></img>
      <Fade big>
        <h1 className="advi-intro-text">
          We Into
          <br /> The Future
        </h1>
      </Fade>
    </div>
  );
};

export default Home;
