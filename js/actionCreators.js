import { SET_DETAILS_PAGE, SET_CITY_SELECTOR } from "./actions";

export function setDetailsPage(detailsPage) {
  return { type: SET_DETAILS_PAGE, payload: detailsPage };
}

export function setCitySelector(city) {
  return { type: SET_CITY_SELECTOR, payload: city };
}
