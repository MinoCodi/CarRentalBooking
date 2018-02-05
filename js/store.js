import { createStore, compose } from "redux";
import reducers from "./reducers";

const store = createStore(
  reducers,
  compose(
    typeof window === "object" &&
    typeof window.devToolsExtension !== "undefined"
      ? window.devToolsExtension()
      : a => a
  )
);

export default store;
