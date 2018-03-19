import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";

import { landingReducer } from "components/landing";
import { searchPageReducer } from "components/search/reducer";
import { detailsPageReducer } from "components/details";

const rootReducer = combineReducers({
  searchPage: searchPageReducer,
  detailsPage: detailsPageReducer
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    typeof window === "object" &&
    typeof window.devToolsExtension !== "undefined"
      ? window.devToolsExtension()
      : f => f
  )
);

export default store;
