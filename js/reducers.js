import { combineReducers } from "redux";
import LandingReducer from "./Components/Landing/LandingReducer";
import DetailsPageReducer from "./Components/Details/DetailsPageReducer";

export default combineReducers({
  LandingReducer,
  DetailsPageReducer
});
