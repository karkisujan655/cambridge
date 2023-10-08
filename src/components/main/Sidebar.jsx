import React from "react";

import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import logo from "../../images/logo/color-logo.png";

const Sidebar = ({ sidebarClass, setSidebarClass, menuItems }) => {
  const navigate = useNavigate();

  return (
    <div className="sidebar-comp" style={{ display: `${sidebarClass}` }}>
      <div
        className="sidebar-header-wrapper"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#064267",
          padding: "20px",
        }}
      >
        {/* <div
          className="logo"
        > */}
        <img
          style={{ width: "150px !important", maxWidth: "150px !important" }}
          src={logo}
          alt=""
          className="side-logo"
          onClick={() => {
            navigate("/");
            setSidebarClass("none");
          }}
        />
        {/* </div> */}
        <RxCross2
          className="cancel"
          onClick={() => {
            setSidebarClass("none");
          }}
        />
      </div>
      <hr />
      <div className="menu-item">
        <div
          className="menu"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            color: "#064267",
            marginTop: "0.4em",
          }}
        >
          {menuItems.map((item) => {
            const { id = "", path = "", title = "", sublinks = "" } = item;
            const navlinkPath = path;
            return (
              <div
                key={id}
                className="nav-link"
                activeClassName="active-link"
                onClick={() => {
                  setSidebarClass("none");
                  navigate(path);
                }}
              >
                {title}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
