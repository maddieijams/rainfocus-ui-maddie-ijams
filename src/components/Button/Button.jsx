import React from "react";
import "./button-styles.scss";

export function Button({ text = "Edit event" }) {
  return (
    <div id="button">
      <button type="button">{text}</button>
    </div>
  );
}
