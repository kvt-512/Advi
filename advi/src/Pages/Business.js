import React from "react";
import Fade from "react-reveal/Fade";
import { Badge } from "react-bootstrap";

const Business = () => {
  return (
    <div id="business" className="container">
      <h3>Agenda</h3>
      <p>
        ADVI Groups of companies provide service,technologies,capital and/or
        knowledge across national borders and global levels.It involves sharing
        of knowledge and technologies between two nations and also include
        transaction of economic resource.
      </p>
      <h1>We Complete Your Steps</h1>
      <div className="row">
        <Fade left>
          <h1 className="col-12 col-md-6">
            <Badge>50%</Badge> Research
          </h1>
        </Fade>
        <Fade right>
          <h1 className="text-end col-12 col-md-6">
            <Badge>75%</Badge> Production
          </h1>
        </Fade>
        <Fade left>
          <h1 className="col-12 col-md-6">
            <Badge>100%</Badge> Ideation
          </h1>
        </Fade>
        <Fade right>
          <h1 className="text-end col-12 col-md-6">
            <Badge>25%</Badge> Delivery
          </h1>
        </Fade>
      </div>
    </div>
  );
};

export default Business;
