import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";

const content = {
  exp: {
    heading: "Terms and Conditions for Experienced Candidates",
    body: [
      `1) Candidates must attend an Induction program for a minimum of 4 days to a maximum of 7 days without any financial commitment with the company.`,
      `2) Induction program includes a quantified test based on skills, personality and ethics.`,
      `3) Candidates eligibility will be determined on the last day of the induction program. Eligible candidates will be appointed as trainee for two months with a stipend. Offer letter will be issued only after the training program.`,
      `4) Candidates who are not eligible will be considered as a fresher to the company. If the candidate wishes to continue, the fresher’s terms and conditions will apply .`,
      `5) If required candidates must bring their own laptops.`,
    ],
    tc: [
      `1) For Freshers / Campus Selection / Pool Campus Selection/ Walkin the traning is paid .The fee is Rs 6000 per month and it is compulsory and its non refundable.`,
      `2) Candidates performance will be analyzed based on their skills, creativity, attitude and ethics.`,
      `3) A detailed quantifiable report regarding the candidates performance will be provided at the end of 30 days using which the candidate’s eligibility will be determined.`,
      `4) Candidates who are not eligible will be provided with a Certificate at the end of their Internship program.`,
      `5) Eligible candidates will be appointed as a trainee with a stipend depending upon their performance and will serve a maximum of two months before being appointed full term.`,
      `6)Candidates package will be fixed only after their training period.`,
      `7) If required candidates must bring their own laptops`
    ],
    link: `https://docs.google.com/forms/d/e/1FAIpQLSemoKeEfILsuGzaIXNIv7iIPpIn3deK9x74yeWgkQalnQA_Lg/viewform`,
  },
  fresher: {
    heading: `Internship Program`,
    body: [
      `Our company includes a wide range of options for students and freshers in various domains to improve their skills and prepare themselves for the corporate world. The program includes courses in`,
      `1) JAVA, Python with respect to computer science`,
      `2)Embedded system Product design with respect to electronics`,
      `3) Engineering design and fabrication with respect to mechanical`,
      `4) Construction, Renovation, Interior design, Planing and Estimation, Layout planning ,Elevation and Infrastructure ,Electrical Contract with respect to civil`,
      `5) Human Resource, Marketing, Finance with respect to administration`,
      `6) Digital marketing, media and entertainment.`,
      `Our program also includes personality development and corporate ethics where candidates experience the real world challenges faced by working employees. All candidates who are above 18 years are eligible to apply.`,
    ],
    link: `https://docs.google.com/forms/d/e/1FAIpQLSemoKeEfILsuGzaIXNIv7iIPpIn3deK9x74yeWgkQalnQA_Lg/viewform`,
  },
};

const Career = () => {
  const [isExp, setIsExp] = useState(false);

  const handelJob = (e) => {
    console.log(e.target.name);
    setIsExp(false);
    if (e.target.name === "exp") {
      setIsExp(true);
    } else {
      setIsExp(false);
    }
  };

  return (
    <div id="career" className="container">
      <h1>Career</h1>
      <p>
        We at ADVI GROUPS offer a variety of jobs and internships to candidates
        from various domains such as Computer Science, Electronics and
        Communication, Mechanical, Civil and Architecture,Human Resource,
        Marketing and Finance, Media and Entertainment etc
      </p>
      <h3>Work Experience</h3>
      <div className="row">
        <div className="col-12 col-md-3 row">
          <Button
            className={`col-12 col-md-12 my-2 ${!isExp ? "btn-primary" : "btn-secondary"}`}
            name="fresher"
            onClick={handelJob}
          >
            Fresher
          </Button>
          <Button
            className={`col-12 col-md-12 my-2 ${isExp ? "btn-primary" : "btn-secondary"}`}
            name="exp"
            onClick={handelJob}
          >
            Exprienced
          </Button>
        </div>
        <div className="col-12 col-md-9">
          {isExp ? (
            <div>
              <h4>{content.exp.heading}</h4>
              {content.exp.body.map((point) => {
                return <div>{point}</div>;
              })}
              <a href={content.exp.link}>Proceed</a>
            </div>
          ) : (
            <div className="my-2">
              <h4>{content.fresher.heading}</h4>
              {content.fresher.body.map((point) => {
                return <div>{point}</div>;
              })}
              <h4>Terms and Conditions for Freshers.</h4>
              {content.exp.tc.map((point) => {
                return <div>{point}</div>;
              })}
              <a href={content.fresher.link}>Proceed</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Career;
