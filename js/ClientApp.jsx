import React from "react";
import ReactDOM from "react-dom";
import Calendar from "../public/Components/Calendar";
const App = () => {
  return (
    <div className="app">
      <div className="landing">
        <h1>Car rental</h1>
        <div>
          Выберете город:
          <select>
            <option>Минск</option>
            <option>Борисов</option>
          </select>
        </div>
        <Calendar />
        {/* <input type="text" placeholder="Search" />  */}
        {/* <a> Перейти к списку </a> */}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
