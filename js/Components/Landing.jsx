import React from "react";
import Calendar from "./Calendar";
import Header from "./Header";
import Search from "./Search";
import { Link } from "react-router-dom";

const Landing = () => (
  <div className="landing">
    <Header />
    <h1>Car rental</h1>
    <div>
      Выберете город:
      <select>
        <option>Минск</option>
        <option>Борисов</option>
      </select>
      <Calendar />
      <button>
        <Link to="/search">Поиск</Link>
      </button>
    </div>
    {/* <input type="text" placeholder="Search" />  */}
    {/* <a> Перейти к списку </a> */}
  </div>
);
export default Landing;
