import React from "react";
import "./nav-styles.scss";

export function NavItem({ children, subText, isActive = false }) {
  if (!isActive) return <li className="nav-item parent">{children}</li>;
  return (
    <>
      <li className={"nav-item parent active"}>{children}</li>
      {subText.map((text, i) => (
        <li key={i} className="nav-item sub">
          {text}
        </li>
      ))}
    </>
  );
}

export function NavContainer({ children }) {
  return <ul id="nav-list">{children}</ul>;
}
