import { createStore, compose } from "redux";
import reducers from "./reducers";
import DetailsPageReducer from "./Components/Details/DetailsPageReducer";
import LandingReducer from "./Components/Landing/LandingReducer";
import SearchPageReducer from "./Components/Search/SearchPageReducer";

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
