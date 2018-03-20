import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { setSearchPage } from "./";

import ShowCard from "../showCard/ShowCard";
import Header from "../header/Header";
import Spinner from "../spinner/Spinner";
import styles from "./style";

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
          <div className={styles.search}>
            <Header />
            <div>{cars.map(car => <ShowCard key={car.ID} {...car} />)} </div>
          </div>
        ) : ( <Spinner /> )}
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
