import React from "react";
import { Jumbotron } from "reactstrap";
import Logo from "../logo.svg";

export default function Headers() {
  return (
    <Jumbotron fluid>
      <h3 className="display-6">
        Expense Tracker React App
        <img src={Logo} style={{ width: 50, height: 50 }} alt="react-logo" />
      </h3>
    </Jumbotron>
  );
}
