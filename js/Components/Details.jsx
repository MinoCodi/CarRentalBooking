import React from "react";
import Header from "./Header";

const Details = props => {
  const { manufacturer, model, body, poster, ID } = props.car;
  return (
    <div className="details">
      <Header />
      <section>
        <h1>{manufacturer}</h1>
        <h2>{model}</h2>
        <img
          src={`../../public/img/${poster}`}
          alt={`Poster for ${manufacturer}`}
        />
      </section>
    </div>
  );
};
//
export default Details;
