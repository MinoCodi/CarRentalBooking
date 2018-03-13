/* import { SET_SEARCH_PAGE } from "./actions";

const DEFAULT_STATE = {
  searchPage: { cars: [] }
};
*/
export default (state = { cars: [] }, action) => {
  switch (action.type) {
    case "SET_SEARCH_PAGE":
      return Object.assign({}, state, { cars: action.payload.cars });
    default:
      return state;
  }
};
