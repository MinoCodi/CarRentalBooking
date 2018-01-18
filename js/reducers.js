import { SET_DETAILS_PAGE } from "./actions";

const DEFAULT_STATE = {
  detailsPage: ""
};

const setDetailsPage = (state, action) =>
  Object.assign({}, state, { detailsPage: action.payload });

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_DETAILS_PAGE:
      return setDetailsPage(state, action);
    default:
      return state;
  }
};

export default rootReducer;
