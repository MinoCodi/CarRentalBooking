import React from "react";
import data from "../../data.json";
import ShowCard from "./ShowCard/ShowCard";
import Landing from "./Landing/Landing";
import Calendar from "./Calendar";
import Header from "./Header";
import { Link } from "react-router-dom";
import { browserHistory } from "react-router";

import { withRouter } from "react-router-dom";

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  // запускается перед отрисовкой компонента Search
  componentWillMount() {
    // const date1 = document.getElementById("date1").value;
    // const date2 = document.getElementById("date2").value;

    //! date1 || !date2 || date1 > date2

    // console.log(date1, date2);

    if (false) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div className="search">
        <Header />
        <div>
          {data.cars.map(cars => (
            <ShowCard
              history={this.props.history}
              id={this.props.detailsPage}
              key={cars.ID}
              {...cars}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Search;
