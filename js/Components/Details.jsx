import React from "react";
import Header from "./Header";
import styled from "styled-components";

const Details = props => {
  const {
    manufacturer,
    model,
    color,
    body,
    engine,
    maxSpeed,
    production,
    transmission,
    poster,
    ID
  } = props.car;

  const Wrapper = styled.ul`
    list-style-type: none;
  `;

  const Image = styled.img`
    width: 46%;
    float: left;
    margin-right: 10px;
  `;
  return (
    <div className="details">
      <Header details="true" />
      <section>
        <h1>{manufacturer}</h1>
        <h2>{model}</h2>
        <img
          src={`../../public/img/${poster}`}
          alt={`Poster for ${manufacturer}`}
        />
        <h3>{`Color: ${color}`}</h3>
        <Wrapper>
          <li>{`Color: ${color}`}</li>
          <li>{`Body: ${body}`}</li>
          <li>{`Engine: ${engine}`}</li>
          <li>{`Max speed: ${maxSpeed}`}</li>
        </Wrapper>
      </section>
      <Image
        src={`../../public/img/${poster}`}
        alt={`Poster for ${manufacturer}`}
      />
    </div>
  );
};

export default Details;

/*
"manufacturer": "bmw",
"model": "e46",
"color": "red",
"body": "coupe",
"engine": "3L",
"maxSpeed": "250km/h",
"production": "2002",
"transmission": "automatic",
*/
