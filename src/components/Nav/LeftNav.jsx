import React from "react";
import "./nav-styles.scss";
import logo from "../../assets/nav-rf-logo.svg";
import summit from "../../assets/nav-summit.svg";
import user from "../../assets/nav-user.svg";
import arrowIcon from "../../assets/nav-expand-collapse.svg";

export default function LeftNav({ setSidebarOpen, sidebarOpen }) {
  return (
    <div id="left">
      <div id="logos">
        <div>
          <img src={logo} alt="rainfocus logo" />
        </div>
        <img src={summit} alt="summit logo" />
      </div>
      <div id="user">
        <div
          onClick={() => setSidebarOpen(!sidebarOpen)}
          id="collapse-arrow"
          className={sidebarOpen ? "rotate" : ""}
        >
          <img src={arrowIcon} alt="toggle sidebar" />
        </div>
        <img src={user} alt="user icon" />
      </div>
    </div>
  );
}
