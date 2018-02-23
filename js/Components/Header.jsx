import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setDetailsPage } from "./Details/actionCreator";

const Header = props => {
  let utilSpace;
  if (props.details) {
    utilSpace = (
      <h2>
        <Link onClick={props.handleSetDetailsPageChange} to="/search">
          Назад
        </Link>
      </h2>
    );
  }
  return (
    <header>
      <h1>
        <Link onClick={props.handleSetDetailsPageChange} to="/">
          CarRental
        </Link>
      </h1>
      {utilSpace}
    </header>
  );
};

const mapStateToProps = state => ({ detailsPage: state.detailsPage });
const mapDispatchToProps = dispatch => ({
  handleSetDetailsPageChange(event) {
    dispatch(setDetailsPage({}));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
