import { INCREMENT, DECREMENT, CHANGE_NAME } from "./constants";

const initialState = {
  count: 0,
  name: "",
};

export const incrementAction = () => ({ type: INCREMENT });
export const decrementAction = () => ({ type: DECREMENT });
export const changeNameAction = (payload) => ({ type: CHANGE_NAME, payload });

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case CHANGE_NAME:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};

export default mainReducer;
