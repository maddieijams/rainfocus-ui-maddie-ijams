import React from "react";
import { Card, CardBody, CardTitle } from "./Card";
import { Row, Col } from "../Layout/Layout";
import "./card-styles.scss";
import registrationIcon from "../../assets/arrow.svg";
import portalIcon from "../../assets/laptop.svg";
import { CardAddNew } from "./Card";

const baseContent = [
  { title: "General", desc: "Define Attendee types & attributes" },
  {
    title: "Title",
    desc: "Description that explains the value goes here. Description that explains the value goes here. ",
  },
  {
    title: "Title",
    desc: "Description that explains the value goes here. Description that explains the value goes here. ",
  },
];
const registrationContent = [
  {
    title: "Attendee Registration",
    desc: "Start by creating a general registration workflow",
  },
  {
    title: "Attendee Registration",
    desc: "Start by creating a general registration workflow",
  },
  {
    title: "Attendee Registration",
    desc: "Start by creating a general registration workflow",
  },
];
const portalContent = [
  {
    title: "Attendee Portal",
    desc: "Manage the portal that attendees will see after they’ve register for your event.",
  },
];

export default function CardContainer() {
  return (
    <div className="card-container">
      <div>
        <h3>Attendee</h3>
      </div>
      <section>
        <h4>
          <span className="bold">Step 1:</span> Base settings.
        </h4>
        <Card withColumns>
          {baseContent.map(({ title, desc }, i) => (
            <Col key={i}>
              <CardTitle>{title}</CardTitle>
              <CardBody>{desc}</CardBody>
            </Col>
          ))}
        </Card>
      </section>
      <section>
        <h4>
          <span className="bold">Step 2:</span> Build registration workflows.
        </h4>
        <div>
          <Row>
            {registrationContent.map(({ title, desc }, i) => {
              return (
                <Col key={i}>
                  <Card>
                    <CardTitle icon={registrationIcon}>{title}</CardTitle>
                    <CardBody>{desc}</CardBody>
                  </Card>
                </Col>
              );
            })}
            <Col>
              <CardAddNew>Add Registration Workflow</CardAddNew>
            </Col>
          </Row>
        </div>
      </section>
      <section>
        <h4>
          <span className="bold">Step 3:</span> Design post-registration
          experiences.
        </h4>
        <Row>
          {portalContent.map(({ title, desc }, i) => (
            <Col key={i}>
              <Card>
                <CardTitle icon={portalIcon}>{title}</CardTitle>
                <CardBody>{desc}</CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </div>
  );
}
