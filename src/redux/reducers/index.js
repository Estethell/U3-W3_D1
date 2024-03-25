const initialState = {
  list: {
    favourites: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_LIST":
      return {
        ...state,
        list: {
          ...state.list,
          favourites: state.list.favourites.concat(action.payload),
        },
      };
    case "REMOVE_TO_LIST":
      return {
        ...state,
        list: {
          ...state.list,
          favourites: state.list.favourites.filter((e) => e !== action.payload),
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
