import React from "react";
import Calendar from "./Calendar";
import Header from "./Header";
import Search from "./Search";
import { Link } from "react-router-dom";
import SearchButton from "./SearchButton";
import { connect } from "react-redux";

const Landing = props => (
  <div className="landing">
    <Header />

    <h1>Car rental</h1>
    <div>
      <div>
        Выберете город:
        <select>
          <option>Минск</option>
          <option>Борисов</option>
        </select>
      </div>
      <Calendar />
      <button>
        <Link to="/search">ПОИСК</Link>
      </button>
    </div>
    {/* <input type="text" placeholder="Search" />  */}
    {/* <a> Перейти к списку </a> */}
  </div>
);

export default Landing;
