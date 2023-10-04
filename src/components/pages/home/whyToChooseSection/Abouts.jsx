import React from "react";
import AboutCard from "./AboutCard";
// import backgroundImage from "../../../../images/background/bg1.png";

import img1 from "../../../../images/icon/icon1.svg";
import img2 from "../../../../images/icon/icon2.svg";
import img3 from "../../../../images/icon/icon3.svg";
// import img4 from "../../../../images/icon/icon4.svg";
// import img5 from "../../../../images/icon/icon5.svg";
// import img6 from "../../../../images/icon/icon6.svg";

const Abouts = () => {
  const aboutDetails = [
    {
      id: 0,
      iconImg: img1,
      subjectName: "Schlorship Facility",
      desc: " We offer students a chance for financial aid and expert guidance",
    },
    {
      id: 1,
      iconImg: img3,
      subjectName: "Career Counseling",
      desc: "Let us be your compass on the path to a fulfilling and successful career",
    },
    {
      id: 2,
      iconImg: img2,
      subjectName: "High Visa Sucess Rate",
      desc: "Impressive Visa Success Rate Achieved Here",
    },
  ];

  const cards =
    aboutDetails &&
    aboutDetails.map((item) => {
      return <AboutCard aboutDetails={item && item} key={item.id} />;
    });

  return (
    <div
      className="abouts"
      // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="contents-wrapper">
        {/* <div className="heading-wrapper"> */}
        <h1 className="heading">
          <span className="highlight-head"> Why to choose </span> Cambridge
          Institute ?
        </h1>
        {/* <div className="under-line" style={{ height: "1px" }}></div> */}
        <div className="sub-head">
          As the leading consultancy in Nepal, we boast a proficient team and
          advanced classes.
        </div>
        {/* </div> */}
        <div className="cards-wrapper" data-aos="zoom-in">
          {cards && cards}
        </div>
      </div>
    </div>
  );
};

export default Abouts;
