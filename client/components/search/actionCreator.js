export function setSearchPage(url) {
  return dispatch => {
    dispatch({ type: "FETCH_REQUEST" });
    fetch(url)
      .then(resp => resp.json())
      .then(data => dispatch({ type: "SET_SEARCH_PAGE", payload: data }))
      .catch(error => dispatch({ type: "FETCH_ERROR", payload: error }));
  };
}
