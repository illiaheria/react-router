import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
  name: "toolkitSlice",
  initialState: {
    count: 0,
    name: "",
  },
  reducers: {
    increment(state) {
      state.count = state.count + 1;
    },
    decrement(state) {
      state.count = state.count - 1;
    },
    changeName(state, payload) {
      state.name = payload;
    },
  },
});

export default toolkitSlice.reducer;
export const { increment, decrement, changeName } = toolkitSlice.actions;
