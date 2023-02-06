import "./header-styles.scss";
import React from "react";
import headerLogo from "../../assets/header-summit.svg";
import { Row, Col } from "../Layout/Layout";
import { Button } from "../Button/Button";

export default function Header() {
  return (
    <div className="header">
      <header>
        <Row>
          <Row>
            <Col>
              <img alt="header logo" id="logo" src={headerLogo} />
            </Col>
            <Col>
              <h1>RainFocus Summit</h1>
              <div className="subtitle-text">December 15th</div>
              <div className="subtitle-text">Lehi, Utah</div>
            </Col>
          </Row>
          <Button />
        </Row>
      </header>
      <div id="event-setup">
        <h2>Event setup guide</h2>
        <div className="subtitle-text">
          See the available list of modules below. We suggest that you start
          with the attendee module.
        </div>
      </div>
    </div>
  );
}
