import React, { Component } from "react";
import ReactDOM from "react-dom";

class somestuff extends Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}

ReactDOM.render(
  React.createElement(somestuff),
  document.getElementById("root")
);

const myComponent = () => {};
