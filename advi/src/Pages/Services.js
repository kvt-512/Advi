import React from "react";
import { BsFillHouseFill, BsGraphUp } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { AiFillCar } from "react-icons/ai";

const Services = () => {
  return (
    <div id="services" className="container">
      <h1>Services</h1>
      <p>
        Our innovations build brands, shape markets and improve products. Our
        multi-skilled team combined consumer insight, technical expertise and
        precision engineering to design, develop and launch a technologically
        advanced razor that swivels with the contours of the face to deliver a
        closer and smoother shave—and a better consumer experience. Adwi teams
        work on exciting, technical projects from the beginning of their
        careers. This could involve small developments or improvements. Or it
        could mean researching, designing, building, testing, marketing, and
        launching a brand new product. We work creatively and technically from
        start to finish. From Day 1.
      </p>
      <div>
        <div className="row">
          <div className="col-12 col-md-6 d-flex">
            <BsFillHouseFill size={40} className="mx-2" />
            <div>
              <h5>VA DEVELOPERS & BUILDERS</h5>
              <p>
                Excellent experience in CAD,Investigation, Feasibility Studies,
                Design, Cost Estimation and preparation of Detailed Project
                Reports along with proof checking
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex">
            <FaHandshake size={40} className="mx-2" />
            <div>
              <h5>Project Management Consultancy</h5>
              <p>
                we provide Proof Checking,Construction Supervision and Project
                Implementation,Quantity Survey, Quality Check, Statutory
                Validation and Approvals.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex">
            <BsGraphUp size={40} className="mx-2" />
            <div>
              <h5>Structural Analysis and Design</h5>
              <p>
                we provide 2D drafting and 3D modelling for structural
                design,BIM structural models for design automation, and
                Structural design analysis and validation.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex">
            <AiFillCar size={50} className="mx-2" />
            <div>
              <h5>VS Travels</h5>
              <p>
                VS Travels, is a company that provides taxi services from
                Banglore to Mysore (Vice-Versa). As one of the premier travel
                agents, we provide comprehensive travel solutions for leisure,
                group, corporate or educational purpose.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
