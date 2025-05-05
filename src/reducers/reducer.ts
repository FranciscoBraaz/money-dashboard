import { combineReducers } from "@reduxjs/toolkit";
import appReducer from "./app";

const reducers = combineReducers({
  app: appReducer,
});

export default reducers;
