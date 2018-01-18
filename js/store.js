import { createStore, compose } from "redux";
import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  compose(
    typeof window === "object" &&
    typeof window.devToolsExtension !== "undefined"
      ? window.devToolsExtension()
      : a => a
  )
);

export default store;
