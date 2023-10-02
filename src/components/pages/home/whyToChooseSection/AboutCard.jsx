import React from "react";

const AboutCard = ({ aboutDetails = "" }) => {
  const { id = "", iconImg = "", subjectName = "", desc = "" } = aboutDetails;

  return (
    <div className="about-card">
      <img src={iconImg} alt="" />
      <h1 className="title">{subjectName}</h1>
      <p className="desc">{desc}</p>
    </div>
  );
};

export default AboutCard;
