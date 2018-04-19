import { createStore, compose, applyMiddleware, combineReducers } from "redux";

import promiseMiddleware from "redux-promise";

import { cityFilterReducer } from "components/landing";
import { searchPageReducer } from "components/search";
import { detailsPageReducer } from "components/details";

export const rootReducer = combineReducers({
	searchPage: searchPageReducer,
	detailsPage: detailsPageReducer,
	city: cityFilterReducer
});

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(promiseMiddleware),
		typeof window === "object" &&
    typeof window.devToolsExtension !== "undefined"
			? window.devToolsExtension()
			: f => f
	)
);

export default store;
