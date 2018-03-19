import {createActions, handleActions, combineActions} from 'redux-actions';
//import data from "../../../server/data/data";

const defaultState = { cars: [] };

export const {setSearchPage, fetchRequest} = createActions({
  "SET_SEARCH_PAGE": page => (fetch("/data")
.then(resp => resp.json())
.then(data => page: data.cars)),

"FETCH_REQUEST": page => ({page})
                                                          });

//export const setSearchPage = createAction("SET_SEARCH_PAGE", page => ({page: data.cars}));

export const searchPageReducer = handleActions({
  [combineActions(setSearchPage, fetchRequest)](state, { payload: { page } }) {
    return { ...state, cars: page };
  }}, defaultState);


//{cars: action.payload.page}

// const searchPageReducer = (state = defaultState, action) => {
//   switch (action.type) {
//     case "SET_SEARCH_PAGE":
//       return { ...state, cars: action.payload.cars };
//     default:
//       return state;
//   }
// };

//
// (({"SET_SEARCH_PAGE": page => (fetch("/data")
// .then(resp => resp.json())
// .then(data => page: data.cars))),
// "FETCH_REQUEST": [f => ({f})] });
//
// "SET_SEARCH_PAGE", page => (fetch("/data")
// .then(resp => resp.json())
// .then(data => page: data.cars))
