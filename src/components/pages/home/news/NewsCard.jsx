import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Button from "@mui/material/Button";
const NewsCard = ({ cardData = "" }) => {
  const {
    id = "",
    image_link = "",
    title = "",
    head = "",
    date = "",
  } = cardData;

  return (
    <div className="news-card">
      <img src={image_link} alt="" className="news-img" />
      <div className="title">{title}</div>
      <h1 className="news-heading">{head}</h1>
      <div className="date-wrapper">
        <div className="news-date">{date}</div>
        <Button className="icon-btn-wrapper">
          <BsArrowRight className="card-icon" />
        </Button>
      </div>
    </div>
  );
};

export default NewsCard;
