import React from "react";
import { connect } from "react-redux";
import ShowCard from "../ShowCard";
import Landing from "../landing/Landing";

import Header from "../Header";
import { Link } from "react-router-dom";
import { browserHistory } from "react-router";

import { withRouter } from "react-router-dom";
import { setSearchPage } from "./actionCreator";

class Search extends React.Component {
  constructor(props) {
    super(props);
    //  this.state = { cars: [] };
  }

  componentWillMount() {
    // const date1 = document.getElementById("date1").value;
    // const date2 = document.getElementById("date2").value;
    //! date1 || !date2 || date1 > date2
    // console.log(date1, date2);
    const url = "/data";
    this.props.loadCars(url);

    /*  fetch("/data")
      .then(resp => resp.json())
      .then(data1 => {
        this.setState({ cars: data1.cars });
      }); */
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
