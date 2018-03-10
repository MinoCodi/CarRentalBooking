import { SET_SEARCH_PAGE } from "./actions";

const DEFAULT_STATE = {
  searchPage: { cars: [] }
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_PAGE:
      return Object.assign({}, state, { searchPage: action.payload });
    default:
      return state;
  }
};
