import React, { Component } from "react";
import { connect } from "react-redux";
import ShowCard from "../showCard/ShowCard";

import Header from "../header/Header";
import { Link } from "react-router-dom";

import { setSearchPage } from "./actionCreator";

class Search extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const url = "/data";
    this.props.loadCars(url);
  }

  render() {
    const { cars } = this.props.searchPage;
    return (
      <React.Fragment>
        {cars.length ? (
          <div className="search">
            <Header />
            <div>{cars.map(car => <ShowCard key={car.ID} {...car} />)} </div>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ searchPage: state.searchPage });
const mapDispatchToProps = dispatch => ({
  loadCars(url) {
    dispatch(setSearchPage(url));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
