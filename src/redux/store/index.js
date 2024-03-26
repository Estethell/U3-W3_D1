import { configureStore, combineReducers } from "@reduxjs/toolkit";
import fetchJobsReducer from "../reducers/fetchJobsReducer";
import listReducer from "../reducers/ListReducer";

const reducerInsieme = combineReducers({
  list: listReducer,
  jobs: fetchJobsReducer,
});

const store = configureStore({
  reducer: reducerInsieme,
});

export default store;
