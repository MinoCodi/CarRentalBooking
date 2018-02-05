import { combineReducers } from "redux";
import LandingReducer from "./Components/Landing/LandingReducer";
import ShowCardReducer from "./Components/ShowCard/ShowCardReducer";

export default combineReducers({
  LandingReducer,
  ShowCardReducer
});
