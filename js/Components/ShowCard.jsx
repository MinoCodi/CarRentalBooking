import React from "react";
import { shape, string } from "prop-types";
import Header from "./Header";

const ShowCard = props => (
  <div className="show-card">
    <Header />
    <img
      alt={`${props.manufacturer} actual picture`}
      src={`../../public/img/${props.poster}`}
    />

    <ul>
      <li>{`Manufacturer: ${props.manufacturer}`}</li>
      <li>{props.model}</li>
      <li>{props.color}</li>
      <li>{props.body}</li>
    </ul>
  </div>
);

export default ShowCard;
