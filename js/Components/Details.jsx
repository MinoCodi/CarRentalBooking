import React from "react";
import Header from "./Header";
import styled from "styled-components";
import Slider from "./Slider";
import data from "../../api/data/data.json";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.Wrapper = styled.ul`
      list-style-type: none;
    `;
    this.Wrapper = styled.ul`
      list-style-type: none;
    `;

    this.Image = styled.img`
      width: 46%;
      float: left;
      margin-right: 10px;
    `;
    this.state = { specificCar: {} };
  }

  componentWillMount() {
    // console.log(this.props.match.params.id);
    fetch(`http://localhost:3000/car/${this.props.match.params.id}`)
      .then(resp => resp.json())
      .then(data => this.setState({ specificCar: data }));
  }
  render() {
    const { specificCar } = this.state;
    return (
      <React.Fragment>
        {specificCar ? (
          <div className="details">
            <Header details="true" />
            <section>
              <h1>{specificCar.manufacturer}</h1>
              <img
                src={`/public/img/${specificCar.poster}`}
                alt={`Poster for ${specificCar.manufacturer}`}
              />
              <h2>{specificCar.model}</h2>
              <h3>{`Color: ${specificCar.color}`}</h3>
              <this.Wrapper>
                <li>{`Color: ${specificCar.color}`}</li>
                <li>{`Body: ${specificCar.body}`}</li>
                <li>{`Engine: ${specificCar.engine}`}</li>
                <li>{`Max speed: ${specificCar.maxSpeed}`}</li>
              </this.Wrapper>
            </section>
            <Slider picsForSlider={specificCar.picsForSlider} />
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </React.Fragment>
    );
  }
}

export default Details;
