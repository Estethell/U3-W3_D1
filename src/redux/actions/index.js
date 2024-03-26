export const REMOVE_TO_LIST = "REMOVE_TO_LIST";
export const ADD_TO_LIST = "ADD_TO_LIST";

const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

export const removeToList = (i) => {
  return {
    type: REMOVE_TO_LIST,
    payload: i,
  };
};

export const addToList = (data) => {
  return {
    type: ADD_TO_LIST,
    payload: data,
  };
};

export const fetchJobsAction = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: "GET_JOBS",
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
