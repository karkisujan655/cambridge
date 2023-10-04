import React, { useState } from "react";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import logo from "../../images/logo/color-logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [state, setState] = useState({
    left: false,
  });
  const navigate = useNavigate();

  const menuItems = [
    {
      id: 0,
      title: "Home",
      path: "/",
    },
    {
      id: 1,
      title: "About Us",
      path: "/about-us",
    },
    {
      id: 2,
      title: "Study Abroad",
      path: "/study-abroad",
      sublinks: [
        {
          id: 0,
          title: "Australia",
          path: "australia",
        },
        {
          id: 1,
          title: "Canada",
          path: "canada",
        },
        {
          id: 3,
          title: "USA",
          path: "usa",
        },
      ],
    },
    {
      id: 3,
      title: "IELTS/PTE Prepration",
      path: "/preparation-ielts-pte",
      sublinks: [
        {
          id: 0,
          title: "IELTS",
          path: "ielts",
        },
        {
          id: 1,
          title: "PTE",
          path: "pte",
        },
      ],
    },

    {
      id: 4,
      title: "Resources",
      path: "/resources",
      sublinks: [
        {
          id: 0,
          title: "FAQ to Study Abroad",
          path: "faq",
        },
        {
          id: 1,
          title: "Statement of Proposes (SOP)",
          path: "sop",
        },
        {
          id: 3,
          title: "Interview Guidelines",
          path: "interview-guide",
        },
      ],
    },
  ];

  return (
    <>
      <div className="header">
        <div className="bottom-full">
          <img
            src={logo}
            alt=""
            className="logo"
            onClick={() => {
              navigate("/");
            }}
          />
          <div className="nav">
            <div className="top-bar">
              <div className="right">
                <span>info@cambridgeedu.com.np</span>
                <span>977-1-4223815 | 4256776</span>|
                <span className="cursor-download">Downloads</span>|
                <span
                  className="cursor-download"
                  onClick={() => {
                    navigate("/contact-us");
                  }}
                >
                  Contact Us
                </span>
              </div>
              <div className="left social-icons">
                <BiLogoFacebookCircle className="fb-icon icon" />
                <BiLogoTwitter className="tw-icon icon" />
                <BiLogoInstagram className="in-icon icon" />
              </div>
            </div>

            <div className="bottom-bar">
              <div className="menu">
                {menuItems.map((item) => {
                  const {
                    id = "",
                    path = "",
                    title = "",
                    sublinks = "",
                  } = item;
                  const navlinkPath = path;
                  if (!sublinks) {
                    return (
                      <NavLink
                        key={id}
                        to={path}
                        className="nav-link"
                        activeClassName="active-link"
                      >
                        {title}
                      </NavLink>
                    );
                  } else {
                    return (
                      <div className="dropdown" key={id}>
                        <button className="dropbtn">{title}</button>
                        <div className="hidden-dropdown">
                          <div className="dropdown-content">
                            {sublinks.map((item) => {
                              const { id = "", title = "", path = "" } = item;
                              return (
                                <NavLink
                                  to={`${navlinkPath}/${path}`}
                                  key={id}
                                  className="nav-link"
                                >
                                  {title}
                                </NavLink>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}

                <span>
                  <button className="btn">Apply Now</button>{" "}
                </span>
              </div>
            </div>
          </div>
          <BiMenu
            className="toggle-icon"
            onClick={() => {
              setState((prev) => ({ ...prev, left: true }));
            }}
          />
        </div>
        <div className="top-full"></div>
      </div>
      <Sidebar
        state={state && state}
        setState={setState && setState}
        menuItems={menuItems && menuItems}
      />
    </>
  );
}
