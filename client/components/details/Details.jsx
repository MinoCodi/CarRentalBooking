import React from "react";
import Header from "../Header";
import styled from "styled-components";
import Slider from "../Slider";
import data from "../../../server/data/data.json";
import { setDetailsPage } from "./actionCreator";
import { connect } from "react-redux";

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
    // this.state = { specificCar: {} };
  }

  componentWillMount() {
    // console.log(this.props.match.params.id);
    fetch(`http://localhost:3000/car/${this.props.match.params.id}`)
      .then(resp => resp.json())
      .then(data => this.props.handleSetCitySelectorChange(data));
  }

  componentDidUpdate() {
    // console.log(this.state.specificCar);
  }
  render() {
    const { detailsPage } = this.props;
    return (
      <React.Fragment>
        {Object.keys(detailsPage).length ? (
          <div className="details">
            <Header className="header" details="true" />
            <section>
              <h1>{detailsPage.manufacturer}</h1>
              <img
                src={`/public/img/${detailsPage.poster}`}
                alt={`Poster for ${detailsPage.manufacturer}`}
              />
              <h2>{detailsPage.model}</h2>
              <h3>{`Color: ${detailsPage.color}`}</h3>
              <this.Wrapper>
                <li>{`Color: ${detailsPage.color}`}</li>
                <li>{`Body: ${detailsPage.body}`}</li>
                <li>{`Engine: ${detailsPage.engine}`}</li>
                <li>{`Max speed: ${detailsPage.maxSpeed}`}</li>
              </this.Wrapper>
            </section>
            <Slider picsForSlider={detailsPage.picsForSlider} />
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ detailsPage: state.detailsPage });
const mapDispatchToProps = dispatch => ({
  handleSetCitySelectorChange(value) {
    dispatch(setDetailsPage(value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
