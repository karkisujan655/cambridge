import React from "react";
import HomeSlider from "./HomeSlider";
import Courses from "./courses/Courses";
import WhyToChoose from "./whyToChooseSection/Abouts";
import Country from "./country/Highlight";
// import Testimonials from "./teamMember/Testimonials";
import TeamMember from "./teamMember/TeamMembers";
// import Footer from "../../main/footer/Footer";
import WelcomeToSection from "./welcomeToSection/AboutUs";
import Partner from "./partner/Partner";
// import Blog from "./blogs/Blog";
import NewsCarousel from "./news/NewsCarousel";
// import Gallery from "./gallery/Gallery";
import Popup from "../../forAll/Popup";

const HomePage = () => {
  return (
    <>
      {/* <Popup /> */}
      <div className="home-page">
        <div className="h-slider">
          <HomeSlider />
        </div>
        <WelcomeToSection />
        <Country />
        <WhyToChoose />
        <Courses />
        {/* <Partner /> */}
        <TeamMember />
        <NewsCarousel />
      </div>
    </>
  );
};

export default HomePage;
