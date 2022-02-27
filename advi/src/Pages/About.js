import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import teamImg from "../assets/team.jpg";

const About = () => {
  return (
    <div id="about" className="px-5 mx-5">
      <h2 className="text-center pt-5">About Us</h2>
      <div className="d-flex justify-content-center">
        <img
          src={teamImg}
          alt="team"
          className="h-75 w-75 position-relative my-2"
        ></img>
      </div>
      <p className="px-5 text-justify">
        M/s ADVI GROUP of Companies with diversification in ventures with nearly
        one decades of experience in managing the systems and workings of global
        enterprises, we expertly steer our clients through their digital
        journey. We also empower the business with agile digital at scale to
        deliver unprecedented levels of performance and customer delight.Our
        always-on learning agenda drives their continuous improvement through
        building and transferring digital skills, expertise, and ideas from our
        innovation ecosystem with. It is about who we are. It is our character.
        It is reflected consistently in all our behaviour. The Spirit is deeply
        rooted in the unchanging essence of ADVI. But it also embraces what we
        must aspire to be. It is the indivisible synthesis of the four values
        A-ADWITEYA, D-DECISIVE, V-VIHAAN, I-IMBUE. The Spirit is a beacon. It is
        what gives us direction and a clear sense of purpose. It energizes us
        and is the touchstone for all that we do in the domain of Electronic
        Design Services (EDS) for VLSI / EMBEDDED Systems and Society Based
        Services. On IT-SERVICES solutions lend customers in the IT and
        Engineering R&D businesses, the competitive advantage to stay relevant
        in the market and achieve business objectives consistently delivering a
        wide variety of end- to -end services, including design, development, &
        testing for customers around the world. Our engineers have expertise
        across a wide range of technologies, to the engineering efforts of our
        clients.
      </p>
    </div>
  );
};

export default About;
