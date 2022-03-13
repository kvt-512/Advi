import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

  return (
    <div id="products" className="container">
      <h1>Products</h1>
      <Carousel responsive={responsive} infinite={true}>
        <div>
          A NOVEL TRACKER FOR CONTROLLING CHAIN SNATCHING-MEMS TECHNOLOGY
        </div>
        <div>ADVI-UHF FOR ANTI GOLD LIFTERS</div>
        <div>ADVI-HOME AUTOMATION (MAKE IN INDIA)</div>
        <div>AT-BALEEN (MOBILE THEFT TRACKER)</div>
        <div>WOMEN SAFETY JACKET (AANCHAL)</div>
        <div>TACTILE SMART SENSOR FOR SHOP LIFTERS</div>
        <div>GAIT ELECTRONIC GADGET</div>
        <div>ADVI WASHING MACHINE</div>
        <div>ELECTRONIC OFF FOR MEV</div>
        <div>MEMS (WATER QUALITY GADGET)</div>
        <div>SIRA (BLOOD GROUP GADGET)</div>
        <div>SMART INTERACTIVE TABLE</div>
      </Carousel>
    </div>
  );
};

export default Product;
