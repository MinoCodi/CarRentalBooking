import React from "react";
import data from "../../data.json";
import ShowCard from "./ShowCard/ShowCard";
import Landing from "./Landing/Landing";
import Calendar from "./Calendar";
import Header from "./Header";
import { Link } from "react-router-dom";

import { withRouter } from "react-router-dom";

const Search = props => {
  // const date1 = document.getElementById("date1").value;
  // const date2 = document.getElementById("date2").value;

  //  console.log(date1, date2);
  const history = props.history;
  //! date1 || !date2 || date1 > date2
  if (false) {
    props.history.push("/");
    // return <Landing />;
  }
  return (
    <div className="search">
      <Header />
      <div>
        {data.cars.map(cars => (
          <ShowCard
            history={history}
            id={props.detailsPage}
            key={cars.ID}
            {...cars}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
