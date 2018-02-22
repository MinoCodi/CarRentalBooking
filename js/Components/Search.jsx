import React from "react";
import ShowCard from "./ShowCard/ShowCard";
import Landing from "./Landing/Landing";
import Calendar from "./Calendar";
import Header from "./Header";
import { Link } from "react-router-dom";
import { browserHistory } from "react-router";
import data from "../../api/data/data.json";

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
        this.setState({ cars: JSON.stringify(data1.cars) });
        // console.log(this.vehicle);
      });
    // console.log(this.vehicle);
  }
  componentWillUpdate() {
    console.log(this.state);
  }
  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    const { cars } = this.state;
    return (
      <div className="search">
        <Header />
        {cars.length ? (
          <div>
            {data.cars.map(cars => (
              <ShowCard
                id={this.props.detailsPage}
                key={cars.ID}
                data={data.cars}
                {...cars}
              />
            ))}{" "}
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    );
  }
}

export default Search;
