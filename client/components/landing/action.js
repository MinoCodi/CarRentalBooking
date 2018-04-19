import { createActions, handleActions } from "redux-actions";

const defaultState = {cityFilter: ""};

export const {setCityFilter, removeCityFilter} = createActions({
	"SET_CITY_FILTER": (city) => ({city: city}),
	"REMOVE_CITY_FILTER": () => ({city: ""})
});

export const cityFilterReducer = handleActions({
	[setCityFilter] (state, {payload: {city}}) {
		return {cityFilter: city};
	},
	[removeCityFilter] (state, {payload: {city}}) {
		return {cityFilter: city};
	}
}, defaultState);
