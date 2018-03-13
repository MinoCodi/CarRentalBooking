/* import { SET_DETAILS_PAGE } from "./actions";

 const DEFAULT_STATE = {
  detailsPage: {}
};
*/

export default (state = {}, action) => {
  switch (action.type) {
    case "SET_DETAILS_PAGE":
      return Object.assign({}, state, action.payload);
    case "NO_URL":
      return Object.assign({}, state, {});
    default:
      return state;
  }
};
