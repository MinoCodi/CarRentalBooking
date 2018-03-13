import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";

import { landingReducer } from "components/landing";
import { detailsPageReducer } from "components/details";
import { searchPageReducer } from "components/search";

// import rootReducer from "./reducers/index";

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
