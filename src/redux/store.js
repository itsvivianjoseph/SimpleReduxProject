import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = configureStore({
  reducer: rootReducer
});

export default store;