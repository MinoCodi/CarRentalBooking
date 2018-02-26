import React from "react";
import ShowCard from "./ShowCard";
import Landing from "./Landing/Landing";
import Calendar from "./Calendar";
import Header from "./Header";
import { Link } from "react-router-dom";
import { browserHistory } from "react-router";

import { withRouter } from "react-router-dom";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cars: [] };
  }

  componentWillMount() {
    // const date1 = document.getElementById("date1").value;
    // const date2 = document.getElementById("date2").value;
    //! date1 || !date2 || date1 > date2
    // console.log(date1, date2);
    fetch("http://localhost:3000/data.json")
      .then(resp => resp.json())
      .then(data1 => {
        this.setState({ cars: data1.cars });
        // console.log(this.vehicle);
      });
    // console.log(this.vehicle);
  }

  render() {
    const { cars } = this.state;
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

export default Search;
