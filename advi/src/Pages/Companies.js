import React from "react";
import iso from "../assets/iso.jpg";
import mii from "../assets/make-in-india.png";
import msme from "../assets/msme.png";

const Companies = () => {
  return (
    <div id="companies" className="container">
      {/* <h2 className="text-center">Our Companies</h2> */}
      <div className="row m-5 text-center">
        <div className="col-12 col-md-4">
          <img className="h-75 w-75" alt="iso" src={iso} />
          <div></div>
        </div>
        <div className="col-12 col-md-4">
          <img className="h-75 w-75" alt="mii" src={mii} />
          <div>Since 2015 we are into Make In India product</div>
        </div>
        <div className="col-12 col-md-4">
          <img className="h-75 w-75" alt="msme" src={msme} />
          <div>Since the year 2017</div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
