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
    this.vehicle;
  }

  // запускается перед отрисовкой компонента Search
  componentWillMount() {
    // const date1 = document.getElementById("date1").value;
    // const date2 = document.getElementById("date2").value;
    //! date1 || !date2 || date1 > date2
    // console.log(date1, date2);
    fetch("http://localhost:3000/data.json")
      .then(resp => resp.json())
      .then(data1 => {
        this.vehicle = data1.cars[0].manufacturer;

        //  console.log(this.vehicle);
      });

    console.log(this.vehicle);
  }

  componentDidMount() {
    console.log(this.vehicle);
  }

  render() {
    return (
      <div className="search">
        <Header />
        <div>
          {data.cars.map(cars => (
            <ShowCard
              id={this.props.detailsPage}
              key={cars.ID}
              data={data.cars}
              {...cars}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Search;
