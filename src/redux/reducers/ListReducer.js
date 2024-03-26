const initialState = {
  favourites: [],
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_LIST":
      return {
        ...state,

        favourites: state.favourites.includes(action.payload)
          ? state.favourites
          : state.favourites.concat(action.payload),
      };
    case "REMOVE_TO_LIST":
      return {
        favourites: state.favourites.filter((e, i) => i !== action.payload),
      };

    default:
      return state;
  }
};

export default listReducer;
