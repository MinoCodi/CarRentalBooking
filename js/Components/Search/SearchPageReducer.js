import { SET_SEARCH_PAGE } from "./actions";

const DEFAULT_STATE = {
  searchPage: {}
};

const setSearchPage = (state, action) => {
  Object.assign({}, state, { searchPage: action.payload });
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_PAGE:
      return setSearchPage(state.SearchPage, action);
    default:
      return state;
  }
};
