import React from "react";
import data from "../../data.json";
import ShowCard from "./ShowCard";
import Landing from "./Landing";

const Search = () => {
  const date1 = document.getElementById("date1").value;
  const date2 = document.getElementById("date2").value;

  if (!date1 || !date2) {
    return <Landing />;
  } else {
    return (
      <div className="search">
        {data.cars.map(cars => <ShowCard key={cars.manufacturer} {...cars} />)}
      </div>
    );
  }
};
export default Search;
