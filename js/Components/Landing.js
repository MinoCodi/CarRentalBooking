import React from "react";
import ReactDOM from "react-dom";
import Calendar from "./Calendar";
const Landing = () => (
  <div className="landing">
    <h1>Car rental</h1>
    <div>
      Выберете город:
      <select>
        <option>Минск</option>
        <option>Борисов</option>
      </select>
      <Calendar />
    </div>
    {/* <input type="text" placeholder="Search" />  */}
    {/* <a> Перейти к списку </a> */}
  </div>
);
export default Landing;
