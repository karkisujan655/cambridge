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

//       <div className="carousel-slide">
//         {/* <img src={img3} className="image" /> */}
//         {/* <div className="home-overlay"></div> */}
//         <div className="texts">
//           <h1 className="caption">Everthing you need in a single place</h1>
//           <p className="desc">Lorem ipsum dolor sit amet, consectetur elit.</p>
//           <button className="c-btn">Contact Us </button>
//         </div>
//         {/* <div className="picture"> */}
//         <img
//           src="https://img.freepik.com/free-vector/internship-job-training-illustration_23-2148751280.jpg?w=996&t=st=1695796795~exp=1695797395~hmac=98ecbf5c6569b45b5fbee50186623a6ef28768323b1c1f95076eeb951161d3dc"
//           alt=""
//           className="graphic"
//           />
//         {/* </div> */}
//       </div>
//       </div>

//       <div className="carousel-main">
//       <div className="carousel-slide">
//         {/* <img src={img1} className="image" /> */}
//         {/* <div className="home-overlay"></div> */}

//         <div className="texts">
//           <h1 className="caption">Everthing you need in a single place</h1>
//           <p className="desc">Lorem ipsum dolor sit amet, consectetur elit.</p>
//           <button className="c-btn">Contact Us </button>
//         </div>
//         <div className="picture">
//         <img
//           src="https://img.freepik.com/free-vector/internship-job-training-illustration_23-2148751280.jpg?w=996&t=st=1695796795~exp=1695797395~hmac=98ecbf5c6569b45b5fbee50186623a6ef28768323b1c1f95076eeb951161d3dc"
//           alt=""
//           className="graphic"
//           />
//         </div>
//       </div>
//       </div>

//       <div className="carousel-main">
//       <div className="carousel-slide">
//         {/* <img src={img2} className="image" /> */}
//         {/* <div className="home-overlay"></div> */}

//         <div className="texts">
//           <h1 className="caption">Everthing you need in a single place</h1>
//           <p className="desc">Lorem ipsum dolor sit amet, consectetur elit.</p>
//           <button className="c-btn">Contact Us </button>
//         </div>
//         <div className="picture">
//         <img
//           src="https://img.freepik.com/free-vector/internship-job-training-illustration_23-2148751280.jpg?w=996&t=st=1695796795~exp=1695797395~hmac=98ecbf5c6569b45b5fbee50186623a6ef28768323b1c1f95076eeb951161d3dc"
//           alt=""
//           className="graphic"
//         />
//         </div>
//           </div>
//       </div>
//     </Carousel>
//   );
// };

// export default HomeSlider;

import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import sliderImg from "../../../images/homeSlider/slider-one.jpg";
import sliderImgTwo from "../../../images/homeSlider/slider-two.jpg";
import sliderImgThree from "../../../images/homeSlider/slider-three.jpg";
import bgImg from "../../../images/homeSlider/bg-four.png";

function HomeSlider(props) {
  var items = [
    {
      name: "Everthing you need in a single place",
      description:
        "Counseling, test preparation, application processing, career guidance, and much more... ",
      img: sliderImg,
    },
    {
      name: "Best in Nepal, to study Abroad",
      description: "Place your trust in the authentic touch...",
      img: sliderImgTwo,
    },
    {
      name: "Cambridge is here to guide You",
      description:
        "We are here to support and guide you in your next endeavors.",
      img: sliderImgThree,
    },
  ];

  return (
    <Carousel navButtonsAlwaysInvisible={true}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper elevation={0}>
      <div
        className="carousel-wrapper"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div className="carousel-slide">
          <div className="texts">
            <h2 className="caption">{props.item.name}</h2>
            <p className="desc">{props.item.description}</p>
            <button className="c-btn">Contact Us </button>
          </div>
          <div className="picture" data-aos="fade-left">
            <img src={props.item.img} alt="" className="graphic" />
          </div>
        </div>
      </div>
    </Paper>
  );
}
export default HomeSlider;
