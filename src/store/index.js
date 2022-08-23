import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import mainReducer from "./reducers/mainReducer";
import postsReducer from "./reducers/postsReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  main: mainReducer,
  blogPosts: postsReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
