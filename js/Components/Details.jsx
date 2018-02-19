import React from "react";
import Header from "./Header";
import styled from "styled-components";
import Slider from "./Slider";

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
    picsForSlider,
    sliderPicsAmount,
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
        <img
          src={`../../public/img/${poster}`}
          alt={`Poster for ${manufacturer}`}
        />
        <h2>{model}</h2>

        <h3>{`Color: ${color}`}</h3>
        <Wrapper>
          <li>{`Color: ${color}`}</li>
          <li>{`Body: ${body}`}</li>
          <li>{`Engine: ${engine}`}</li>
          <li>{`Max speed: ${maxSpeed}`}</li>
        </Wrapper>
      </section>
      <Slider picsForSlider={picsForSlider} />
    </div>
  );
};

export default Details;
