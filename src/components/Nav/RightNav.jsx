import React, { useState } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { NavItem } from "./NavItem";

const navData = {
  Guide: [],
  Attendees: [
    "Attendees",
    "Attendee types",
    "Packages",
    "Reg codes",
    "Discounts",
  ],
  Content: [],
  Exhibitors: [],
};

export default function RightNav({ sidebarOpen }) {
  const [navList, setNavList] = useState({
    Guide: false,
    Attendees: true,
    Content: false,
    Exhibitors: false,
  });

  return (
    <div
      className={`right ${sidebarOpen && "open"}`}
      style={{ visibility: sidebarOpen ? "visible" : "hidden" }}
    >
      <h4>Sidebar Title</h4>
      <div id="subtitle-text">Lehi, UT &bull; December 15th</div>
      <SearchBar />
      {Object.keys(navData).map((key) => (
        <NavItem key={key} subText={navData[key]} isActive={navList[key]}>
          {key}
        </NavItem>
      ))}
    </div>
  );
}
