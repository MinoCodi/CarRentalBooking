import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setDetailsPage } from "../details/reducer";
import styles from "./style";

const Header = props => {
  let utilSpace;
  const url = ``;
  if (props.details) {
    utilSpace = (
      <h2>
        <Link  to="/search">
          Назад
        </Link>
      </h2>
    );
  }
  return (
    <header className={styles.header}>
      <h1>
        <Link  to="/">
          Car Finder
        </Link>
      </h1>
      {utilSpace}
    </header>
  );
};

const mapStateToProps = state => ({ detailsPage: state.detailsPage });
const mapDispatchToProps = dispatch => ({
  loadDetailsPage() {
    dispatch(setDetailsPage());
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
