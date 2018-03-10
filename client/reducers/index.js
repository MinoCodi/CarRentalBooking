import { combineReducers } from "redux";

import { detailsPageReducer } from "../components/details";
import { landingReducer } from "../components/landing";
import { searchPageReducer } from "../components/search";

const rootReducer = combineReducers({
  detailsPageReducer,
  searchPageReducer
});

export default rootReducer;
