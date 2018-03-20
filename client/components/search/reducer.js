import {createAction, handleAction, combineActions} from 'redux-actions';

const defaultState = { cars: [] };

export const setSearchPage = createAction(
  "SET_SEARCH_PAGE",  () => (
    fetch("/data")
    .then(resp => resp.json())
    .then(data => ({ page: data.cars }) ) ));

export const searchPageReducer = handleAction(
  setSearchPage, {next(state, action) { return {cars: action.payload.page}}}, defaultState);
