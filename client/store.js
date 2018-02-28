import { createStore, compose } from "redux";
import reducers from "./reducers";
import { detailsPageReducer } from "components/details";
import { landingReducer } from "components/landing";
import { searchPageReducer } from "components/search";

const store = createStore(
  detailsPageReducer,
  compose(
    typeof window === "object" &&
    typeof window.devToolsExtension !== "undefined"
      ? window.devToolsExtension()
      : a => a
  )
);

export default store;
