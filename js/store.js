import { createStore, compose } from "redux";
import reducers from "./reducers";
import DetailsPageReducer from "./Components/Details/DetailsPageReducer";
import LandingReducer from "./Components/Landing/LandingReducer";

const store = createStore(
  DetailsPageReducer,
  compose(
    typeof window === "object" &&
    typeof window.devToolsExtension !== "undefined"
      ? window.devToolsExtension()
      : a => a
  )
);

export default store;
