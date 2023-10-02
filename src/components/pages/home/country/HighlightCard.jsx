import React from "react";
// import { AiOutlinePlayCircle } from "react-icons/ai";

const HighlightCard = ({ highlightDetails }) => {
  const { id = "", flagImg = "" } = highlightDetails;

  return (
    <div className="highlight-card">
      <img src={flagImg} alt="Image" className="flag" />
      {/* <p className="desc">{desc}</p> */}
    </div>
  );
};

export default HighlightCard;
