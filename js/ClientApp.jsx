import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Router } from "react-router-dom";
import Calendar from "./Components/Calendar";
import Landing from "./Components/Landing";

const App = () => (
  <HashRouter>
    <div className="app">
      <Route exact path="/" component={Landing} />
    </div>
  </HashRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
