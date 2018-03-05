import { createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers";
import { detailsPageReducer } from "components/details";
import { landingReducer } from "components/landing";
import { searchPageReducer } from "components/search";

const store = createStore(
  detailsPageReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    typeof window === "object" &&
    typeof window.devToolsExtension !== "undefined"
      ? window.devToolsExtension()
      : a => a
  )
);

export default store;
