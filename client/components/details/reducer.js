import { SET_DETAILS_PAGE } from "./actions";

const DEFAULT_STATE = {
  detailsPage: {}
};

const setDetailsPage = (state, action) =>
  Object.assign({}, state, { detailsPage: action.payload });

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_DETAILS_PAGE:
      return setDetailsPage(state.detailsPage, action);
    default:
      return state;
  }
};

/*
import { createActions, handleActions, combineActions } from "redux-actions";

const defaultState = { cars: [] };

const { setDetailsPage, removeDetailsPage } = createActions({
  SET_DETAILS_PAGE: detailsPage => ({ detailsPage }),
  REMOVE_DETAILS_PAGE: detailsPage => ({ detailsPage: [] })
});

const reducer = handleActions(
  {
    [combineActions(setDetailsPage, removeDetailsPage)](
      state,
      { payload: { detailsPage } }
    ) {
      return { state, cars: (state.cars = detailsPage) };
    }
  },
  defaultState
);

export default reducer;
*/
