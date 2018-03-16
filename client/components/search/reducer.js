/* export default (state = { cars: [] }, action) => {
  switch (action.type) {
    case "SET_SEARCH_PAGE":
      return { ...state, cars: action.payload.cars };
    default:
      return state;
  }
};


export function setSearchPage(url) {
  return dispatch => {
    dispatch({ type: "FETCH_REQUEST" });
    fetch(url)
      .then(resp => resp.json())
      .then(data => dispatch({ type: "SET_SEARCH_PAGE", payload: data }))
      .catch(error => dispatch({ type: "FETCH_ERROR", payload: error }));
  };
} */
// ///////REDUX-ACTIONS/////////
import { createActions, handleActions, combineActions } from "redux-actions";

const defaultState = { cars: [] };

const { fetch_request, set_search_page } = createActions({
  FETCH_REQUEST: amount => ({ amount }),
  SET_SEARCH_PAGE: url =>
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        data;
      })
});

const reducer = handleActions(
  {
    [combineActions(fetch_request, set_search_page)](
      state,
      { payload: { payload } }
    ) {
      return { ...state, cars: payload };
    }
  },
  defaultState
);

export default reducer;
