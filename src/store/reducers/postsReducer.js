import { SET_POSTS } from "./constants";

const initialState = {
  posts: [],
  loading: false,
};

export const setPostsAction = (payload) => ({ type: SET_POSTS, payload });

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: [...state.posts, ...action.payload],
      };
    default:
      return state;
  }
};

export default postsReducer;
