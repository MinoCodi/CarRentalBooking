import { createStore, compose } from "redux";
import reducers from "./reducers";
import ShowCardReducer from "./Components/ShowCard/ShowCardReducer";
import LandingReducer from "./Components/Landing/LandingReducer";

const store = createStore(
  ShowCardReducer,
  compose(
    typeof window === "object" &&
    typeof window.devToolsExtension !== "undefined"
      ? window.devToolsExtension()
      : a => a
  )
);

export default store;
