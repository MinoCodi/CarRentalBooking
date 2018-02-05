import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Search from "./Components/Search";
import Details from "./Components/Details";
import data from "../data.json";
import { Provider } from "react-redux";
import store from "./store";

const four0four = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/search" component={Search} />

          <Route
            path="/details/:id"
            component={props => {
              const SelectedCar = data.cars.find(
                car => props.match.params.id === car.ID
              );
              return <Details car={SelectedCar} {...props} />;
            }}
          />
          <Route component={four0four} />
        </Switch>
      </div>
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
