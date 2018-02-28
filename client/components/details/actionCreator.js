import { SET_DETAILS_PAGE } from "./actions";

export function setDetailsPage(detailsPage) {
  return { type: SET_DETAILS_PAGE, payload: detailsPage };
}
