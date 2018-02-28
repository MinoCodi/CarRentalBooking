import React from "react";
import ShowCard from "../ShowCard";
import Landing from "../Landing/Landing";
import Calendar from "../Calendar";
import Header from "../Header";
import { Link } from "react-router-dom";
import { browserHistory } from "react-router";
import { setSearchPage } from "./actionCreator";
import { connect } from "react-redux";

import { withRouter } from "react-router-dom";

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
    fetch("http://localhost:3000/data.json")
      .then(resp => resp.json())
      .then(data1 => {
        this.props.handleSetSearchPageChange(data1.cars);
        // console.log(this.vehicle);
      });
    // console.log(this.vehicle);
  }

  render() {
    const { searchPage } = this.props;
    return (
      <React.Fragment>
        {searchPage.length ? (
          <div className="search">
            <Header />
            <div>
              {searchPage.map(car => <ShowCard key={car.ID} {...car} />)}{" "}
            </div>
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
  handleSetSearchPageChange(event) {
    dispatch(setSearchPage(event));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
