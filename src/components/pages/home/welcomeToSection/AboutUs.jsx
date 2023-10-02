import React from "react";
import img from "../../../../images/aboutUs/meeting.png";

const AboutUs = () => {
  return (
    <div className="main">
      <div className="img-desc-wrapper">
        <div className="icon" data-aos="zoom-in">
          <img src={img} alt="" />
        </div>
        <div className="desc" data-aos="fade-left">
          <h1 className="head">
            {" "}
            <span className="head-highlight">Welcome to</span> Cambridge
            Instutite of Technology
          </h1>
          <p className="message">
            We are the firm that has demonstrated a ceaseless commitment to the
            professional development of its personnel, resources and facilities.
            At Cambridge Institute of Technology, we assure you reliable study
            visa assistance and coaching for language ability tests IELTS, PTE,
            GRE and TOEFL. We have strong connection with top universities and
            colleges in Australia, UK, Canada, New Zealand, USA, Europe, Japan
            and India. Cambridge institute of Technology have a team of
            experienced and dedicated counselors who handle every enquiry with
            care and make everything clear before students as well their
            parents. We guide and support students from beginning (counseling)
            to the end (pre-departure assistance) of study visa process and
            warmly welcome their queries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
