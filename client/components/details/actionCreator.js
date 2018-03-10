// import { SET_DETAILS_PAGE } from "./actions";

export function setDetailsPage(url) {
  return dispatch => {
    dispatch({ type: "FETCH_REQUEST" });
    if (url == "") {
      dispatch({ type: "NO_URL" });
    } else {
      return fetch(url)
        .then(resp => resp.json())
        .then(data => {
          dispatch({ type: "SET_DETAILS_PAGE", payload: data });
        })
        .catch(error => dispatch({ type: "FETCH_ERROR", payload: error }));
    }
  };
}
