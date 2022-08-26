import { combineReducers, configureStore } from "@reduxjs/toolkit";
import blogSlice from "./blogSlice";
import toolkitSlice from "./toolkitSlice";
// import toolkitReducer from "./toolkitReducer";

const rootReducer = combineReducers({
  toolkit: toolkitSlice,
  blog: blogSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
