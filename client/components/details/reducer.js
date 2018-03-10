import { SET_DETAILS_PAGE } from "./actions";

const DEFAULT_STATE = {
  detailsPage: {}
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_DETAILS_PAGE:
      return Object.assign({}, state, { detailsPage: action.payload });
    case "NO_URL":
      return Object.assign({}, state, { detailsPage: {} });
    default:
      return state;
  }
};
