

const defaultState = { cars: [] };


const searchPageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_SEARCH_PAGE":
      return { ...state, cars: action.payload.cars };
    default:
      return state;
  }
};
export default searchPageReducer;
