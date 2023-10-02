import React from "react";
import BlogCard from "./BlogCard";
import img1 from "../../../../images/blog/blog1.jpg";
import img2 from "../../../../images/blog/blog2.jpg";
import img3 from "../../../../images/blog/blog3.jpg";
import img4 from "../../../../images/blog/blog4.jpg";

const Blog = ({ blogCardsData }) => {
  const cards =
    blogCardsData &&
    blogCardsData.map((item) => <BlogCard key={item.id} blogData={item} />);

  return (
    <div className="blog">
      <div className="all-card">
        <h1 className="heading">Blogs</h1>
        <p className="blog-desc">Let's see some of updates and get to know </p>
        <div className="blog-card-wrapper">{cards}</div>
      </div>
    </div>
  );
};

export default Blog;

Blog.defaultProps = {
  blogCardsData: [
    {
      id: 1,
      blogImg: img1,
      head: "Seminar at Kathmandu",
      desc: "We have sucessfully, done our seminar at the heart of Kathmandu. ",
    },
    {
      id: 2,
      blogImg: img2,
      head: "Our Location, easy way",
      desc: "We have sucessfully, done our seminar at the heart of Kathmandu. ",
    },
    {
      id: 3,
      blogImg: img3,
      head: "Refreshment Hike ",
      desc: "We have sucessfully, done our seminar at the heart of Kathmandu. ",
    },
    {
      id: 4,
      blogImg: img4,
      head: "Seminar at Kathmandu",
      desc: "We have sucessfully, done our seminar at the heart of Kathmandu. ",
    },
  ],
};
