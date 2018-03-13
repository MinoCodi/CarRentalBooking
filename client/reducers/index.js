import { combineReducers } from "redux";

import { detailsPageReducer } from "../components/details";
import { landingReducer } from "../components/landing";
import { searchPageReducer } from "../components/search";

export default combineReducers({
  searchPage: searchPageReducer,
  detailsPage: detailsPageReducer
});
