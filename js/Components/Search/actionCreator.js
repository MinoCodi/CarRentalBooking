import { SET_SEARCH_PAGE } from "./actions";

export function setSearchPage(searchPage) {
  return { type: SET_SEARCH_PAGE, payload: searchPage };
}
