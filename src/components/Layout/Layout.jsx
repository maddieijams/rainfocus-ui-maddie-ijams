import React from "react";
import "./layout-styles.scss";

export function Row({ children }) {
  return <div className="row">{children}</div>;
}
export function Col({ children }) {
  return <div className="col">{children}</div>;
}
