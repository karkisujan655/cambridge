import React from "react";

const BlogCard = ({ blogData = "" }) => {
  const { id = "", blogImg = "", head = "", desc = "" } = blogData;

  return (
    <div className="blog-card">
      <div className="b-img">
        <img src={blogImg} alt="" className="blog-img" />
      </div>
      <div className="content">
        <h1 className="b-heading">{head}</h1>
        <p className="b-desc">{desc}</p>
      </div>
    </div>
  );
};

export default BlogCard;
