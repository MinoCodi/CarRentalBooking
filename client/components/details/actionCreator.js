import { SET_DETAILS_PAGE } from "./actions";
// import data from "../../../server/data/data.json";

export function setDetailsPage(url) {
  return dispatch => {
    dispatch({ type: "FETCH_REQUEST" });
    return fetch(url)
      .then(resp => {
        dispatch({ type: SET_DETAILS_PAGE, payload: resp });
        console.log(resp);
      })
      .catch(error => dispatch({ type: "FETCH_ERROR", error }));
  };
}
