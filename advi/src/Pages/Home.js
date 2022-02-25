import React from 'react';
import introImg from '../assets/giphy.gif';
import './style.css';


const Home = () => {
  return (
    <div>
      <img alt='intro-img' className="h-50 w-100"src={introImg}></img>
      <div className="advi-intro-text display-1">We Into The Future</div>
    </div>
  )
}

export default Home;