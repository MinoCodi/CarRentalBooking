import { createStore, compose } from "redux";
import reducers from "./reducers";
import DetailsPageReducer from "./components/details/reducer";
import LandingReducer from "./components/landing/reducer";
import SearchPageReducer from "./components/search/reducer";

const store = createStore(
  SearchPageReducer,
  compose(
    typeof window === "object" &&
    typeof window.devToolsExtension !== "undefined"
      ? window.devToolsExtension()
      : a => a
  )
);

export default store;
