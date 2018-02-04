import { SET_DETAILS_PAGE, SET_CITY_SELECTOR } from "./actions";

const DEFAULT_STATE = {
  citySelector: "1",
  detailsPage: ""
};

const setDetailsPage = (state, action) =>
  Object.assign({}, state, { detailsPage: action.payload });

const setCitySelector = (state, action) => {
  Object.assign({}, state, { citySelector: action.payload });
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_DETAILS_PAGE:
      return setDetailsPage(state.detailsPage, action);
    case SET_CITY_SELECTOR:
      return setCitySelector(state.citySelector, action);
    default:
      return state;
  }
};

export default rootReducer;
