import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import table from "../assets/table.jpg";
import blood from "../assets/blood.jpg";
import water from "../assets/water.jpg";
import car from "../assets/car.jpg";
import wm from "../assets/washingmachine.jpg";
import faceDetection from "../assets/face_detection.jpg";
import alaram from "../assets/alarm.gif";
import jacket from "../assets/jacket.jpg";
import mobile from "../assets/mobile.jpg";
import smarthome from "../assets/smarthome.png";
import goldStore from "../assets/gold_store.jpg";
import chainSnatch from "../assets/chain_snatching.webp";

const Product = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const products = {
    title: [
      "A NOVEL TRACKER FOR CONTROLLING CHAIN SNATCHING-MEMS TECHNOLOGY",
      "ADVI-UHF FOR ANTI GOLD LIFTERS",
      "ADVI-HOME AUTOMATION (MAKE IN INDIA)",
      "AT-BALEEN (MOBILE THEFT TRACKER)",
      "WOMEN SAFETY JACKET (AANCHAL)",
      "TACTILE SMART SENSOR FOR SHOP LIFTERS",
      "GAIT ELECTRONIC GADGET",
      "ADVI WASHING MACHINE",
      "ELECTRONIC OFF FOR MEV",
      "MEMS (WATER QUALITY GADGET)",
      "SIRA (BLOOD GROUP GADGET)",
      "SMART INTERACTIVE TABLE",
    ],
  };

  const proImg = {
    img: [
      table,
      blood,
      water,
      car,
      wm,
      faceDetection,
      alaram,
      jacket,
      mobile,
      smarthome,
      goldStore,
      chainSnatch,
    ],
  };

  return (
    <div id="products" className="container">
      <h1>Products</h1>
      <Carousel responsive={responsive} infinite={true}>
        {products.title.map((title) => {
          return <div>{title}</div>;
        })}
        {proImg.img.map((img) => {
          return <img className="h-100 w-100" src={img}></img>;
        })}
      </Carousel>
    </div>
  );
};

export default Product;
