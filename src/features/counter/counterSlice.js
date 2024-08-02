import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  count: 1,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state, action) => {
      state.count += 1;
    },
    decrease: (state, action) => {
      state.count <= 0 ? state.count = 0 :state.count -= 1;
    },
  },
});

export const { increase, decrease } = counterSlice.actions;
export default counterSlice.reducer;
