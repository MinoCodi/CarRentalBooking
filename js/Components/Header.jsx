import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
  let utilSpace;
  if (props.details) {
    utilSpace = (
      <h2>
        <Link to="/search">Назад</Link>
      </h2>
    );
  }
  return (
    <header>
      <h1>
        <Link to="/">CarRental</Link>
      </h1>
      {utilSpace}
    </header>
  );
};

export default Header;
