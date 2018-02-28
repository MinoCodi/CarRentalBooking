import { SET_CITY_SELECTOR } from "./actions";

export function setCitySelector(city) {
  return { type: SET_CITY_SELECTOR, payload: city };
}
