import {createAction, handleAction, combineActions} from 'redux-actions';

const defaultState = {};

export const setDetailsPage = createAction(
  "SET_DETAILS_PAGE", (url) => (
  fetch(url)
.then(resp => resp.json())
.then(car => ({detailsPage: car}) ) ));

export const detailsPageReducer = handleAction(
  setDetailsPage, {next(state, action) {return  action.payload.detailsPage}},defaultState )
  
