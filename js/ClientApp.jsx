import React from "react";
import ReactDOM from "react-dom";

const App = () => (
  <div className="app">
    <div className="landing">
      <h1>Car rental</h1>
      <div>
        Выберете город:
        <select>
          <option>Минск</option>
          <option>Гродно</option>
          <option>Гомель</option>
          <option>Могилев</option>
          <option>Витебск</option>
          <option>Брест</option>
          <option>Бобруйск</option>
          <option>Борисов</option>
        </select>
      </div>
      <input type="text" placeholder="Search" />
      <a> Перейти к списку </a>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
