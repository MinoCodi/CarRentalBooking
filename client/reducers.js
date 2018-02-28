import { combineReducers } from "redux";
import LandingReducer from "./components/landing/reducer";
import DetailsPageReducer from "./components/details/reducer";

export default combineReducers({
  LandingReducer,
  DetailsPageReducer
});
