import React from "react";
import Fade from "react-reveal/Fade";

import iso from "../assets/iso.jpg";
import mii from "../assets/make-in-india.png";
import msme from "../assets/msme.png";

const Companies = () => {
  return (
    <div className="my-5 py-5 ">
      <div id="companies" className="container">
        <h2 className="text-center">Our Company is</h2>
        <div className="row m-5 text-center">
          <Fade big>
            <div className="col-12 col-md-4">
              <img className="h-75 w-75 m-3" alt="iso" src={iso} />
              <div>
                With ISO 9001:2015, we reiterate our commitment to quality
              </div>
            </div>
          </Fade>
          <Fade big>
            <div className="col-12 col-md-4">
              <img className="h-75 w-75 m-3" alt="mii" src={mii} />
              <div>Since 2015 we are into Make In India product</div>
            </div>
          </Fade>
          <Fade big>
            <div className="col-12 col-md-4">
              <img className="h-75 w-75 m-3" alt="msme" src={msme} />
              <div>Since the year 2017</div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Companies;
