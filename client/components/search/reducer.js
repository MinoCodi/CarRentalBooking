export default (state = { cars: [] }, action) => {
  switch (action.type) {
    case "SET_SEARCH_PAGE":
      return { ...state, cars: action.payload.cars };
    default:
      return state;
  }
};
