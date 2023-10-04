import React from "react";
import Banner from "../../../images/contact/banner.jpg";
import { GiEarthAmerica } from "react-icons/gi";
import { BsTelephoneInbound } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="contact-us">
      <img src={Banner} alt="" className="banner" />
      <div className="content">
        <p className="p-contact">Contact Us</p>
        <h1 className="h-contact">Write a message for us !!</h1>
        <div className="head-contact">
          <div className="head-box">
            <div className="icon">
              <GiEarthAmerica className="inner-icon" />
            </div>
            <div className="address">
              <h2>Address</h2>
              <p>Bagbazar (Opp. Shrestha Tailoring), Kathmandu</p>
            </div>
          </div>
          <div className="head-box">
            <div className="icon">
              <BsTelephoneInbound className="inner-icon" />
            </div>
            <div className="address">
              <h2>Phone</h2>
              <p>977-1-4223815</p>
              <p>01-4256776</p>
            </div>
          </div>
          <div className="head-box">
            <div className="icon">
              <MdOutlineEmail className="inner-icon" />
            </div>
            <div className="address">
              <h2>Email</h2>
              <p>info@cambridgeedu.com.np</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
