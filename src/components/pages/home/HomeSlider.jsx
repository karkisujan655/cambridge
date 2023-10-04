// import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
// import img1 from "../../../images/img-1.jpg";
// import img2 from "../../../images/img-2.jpg";
// import img3 from "../../../images/img-3.jpg";
// import sliderImg from "../../../images/homeSlider/slider-one.jpg";

// const HomeSlider = () => {
//   return (
//     <Carousel
//       className="carousel-wrapper"
//       //
//       showThumbs={false}
//       showArrows={false}
//       showStatus={false}
//       dots={false}
//       infiniteLoop={true}
//       speed={500}
//       slidesToShow={1}
//       slidesToScroll={1}
//       autoPlay={true}
//       interval={3000}
//       stopOnHover={false}
//     >
//       <div className="carousel-main">
//         <div className="carousel-slide">
//           <img src={img3} className="image" />
//         </div>
//       </div>

//       <div className="carousel-main">
//         <div className="carousel-slide">
//           <img src={img1} className="image" />
//         </div>
//       </div>

//       <div className="carousel-main">
//         <div className="carousel-slide">
//           <img src={img2} className="image" />
//         </div>
//       </div>
//     </Carousel>
//   );
// };

// export default HomeSlider;

////-------------Another
//------------

import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import sliderImg from "../../../images/homeSlider/first-slider.jpeg";
import sliderImgTwo from "../../../images/homeSlider/second-slider.jpeg";
import sliderImgThree from "../../../images/homeSlider/slider-three.jpg";
import bgImg from "../../../images/homeSlider/bg-four.png";

function HomeSlider(props) {
  var items = [
    {
      img: sliderImgTwo,
    },
    {
      img: sliderImg,
    },
  ];

  return (
    <Carousel navButtonsAlwaysInvisible={true} className="carousel-comp">
      {items.map((item) => (
        // <div
        //   className="carousel-wrapper"
        //   // style={{
        //   //   backgroundImage: `url(${bgImg})`,
        //   // }}
        // >
        <img
          src={item.img}
          alt=""
          className="slide-img"
          // style={{ width: "100%" , maxHeight: '500px'}}
        />
        // </div>
      ))}
    </Carousel>
  );
}

// function Item(props) {
//   return (
//     <Paper elevation={0}>
//       <div
//         className="carousel-wrapper"
//         // style={{
//         //   backgroundImage: `url(${bgImg})`,
//         // }}
//       >
//         <img src={props.item.img} alt="" className="silde-img" />

//       </div>
//     </Paper>
//   );
// }
export default HomeSlider;
