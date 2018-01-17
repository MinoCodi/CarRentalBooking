import React from "react";
import { withRouter } from "react-router-dom";
// this also works with react-router-native

/*
  const date1 = document.getElementById("date1").value;
  const date2 = document.getElementById("date2").value;

  if (!date1 || !date2) {
    return (<button
      type="button"
      onClick={() => {history.push("/")}}>Поиск! </button>
    )}
    else {
  return(<Search />);
}
*/
const SearchButton = withRouter(({ history }) => {
  const date1 = document.getElementById("date1");
  const date2 = document.getElementById("date2");

  if (date1) {
    return (
      <button
        type="button"
        onClick={() => {
          history.push("/");
        }}
      >
        Поиск!
        <h2>Введите даты</h2>
      </button>
    );
  } else {
    return (
      <button
        type="button"
        onClick={() => {
          history.push("/Search");
        }}
      >
        123!
      </button>
    );
  }
});
export default SearchButton;
