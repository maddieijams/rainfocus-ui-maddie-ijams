import React from "react";
import plusIcon from "../../assets/plus.svg";
import { Row } from "../Layout/Layout";

export function Card({ withColumns, children }) {
  if (withColumns)
    return (
      <div className="card with-columns">
        <Row>{children}</Row>
      </div>
    );
  return (
    <div className="card">
      <div>{children}</div>
    </div>
  );
}

export function CardTitle({ children, icon }) {
  if (icon)
    return (
      <div className="card-title">
        <img src={icon} alt="card title icon" /> <h5>{children}</h5>
      </div>
    );
  return <h5>{children}</h5>;
}

export function CardBody({ children }) {
  return <div className="card-body">{children}</div>;
}

export function CardAddNew({ children }) {
  return (
    <div className="card add-new">
      <div>
        <img alt="plus icon" src={plusIcon} />
      </div>
      <CardBody>{children}</CardBody>
    </div>
  );
}
