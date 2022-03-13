import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import teamImg from "../assets/team.jpg";

const About = () => {
  return (
    <div id="about" className="container">
      <h2 className="pt-5">About Us</h2>
      <div className="d-flex justify-content-center">
        <img
          src={teamImg}
          alt="team"
          className="h-75 w-100 position-relative my-2"
        ></img>
      </div>
      <p className="text-justify">
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
      <h4>Founder</h4>
      <div>
        <div></div>
        <p>
          The founder of ADVI GROUP of Companies is Mr.B.S.Manusudhan dynamic
          Entrepreneur in the field of designing products had worked with CIL
          R&D Division- SAP Division, Radio Frequency & Wireless Antenna Design
          Wing-R&D, Mysore, Aavishkar Research Cell, Mysore.With the vision to
          develop the employability and entrepreneurship skill in today’s young
          generation that helps to overcome the unemployment threats.
          Transferring manual functions to computerized systems is there vision
          of life, with this vision they established VS Technology in 2010 . VS
          Technology is supported by strong dynamic Team.
        </p>
        <a href="http://advigroups.com/manusudhan/index.html">Portfolio</a>
      </div>
    </div>
  );
};

export default About;
