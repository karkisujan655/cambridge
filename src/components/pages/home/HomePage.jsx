import React from "react";
import HomeSlider from "./HomeSlider";
import Courses from "./courses/Courses";
import WhyToChoose from "./whyToChooseSection/Abouts";
import Country from "./country/Highlight";
// import Testimonials from "./teamMember/Testimonials";
import TeamMember from "./teamMember/TeamMembers";
import Footer from "../../main/footer/Footer";
import WelcomeToSection from "./welcomeToSection/AboutUs";
import Partner from "./partner/Partner";
import Blog from "./blogs/Blog";
import NewsCarousel from "./news/NewsCarousel";
import Gallery from "./gallery/Gallery";

const HomePage = () => {
  return (
    <>
      <div className="h-slider">
        <div className="home-slider">
          <HomeSlider />
        </div>
      </div>
      <WelcomeToSection />
      <Country />

      <WhyToChoose />
      <Courses />
      <Partner />

      <TeamMember />
      {/* <Blog /> */}

      <NewsCarousel />
      {/* <Gallery /> */}
    </>
  );
};

export default HomePage;
