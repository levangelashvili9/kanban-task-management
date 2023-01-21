import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  isBarShowed: boolean;
};

const initialState: InitialState = {
  isBarShowed: false,
};

export const barSlice = createSlice({
  name: "bar",
  initialState,
  reducers: {
    toggleBar: (state) => {
      state.isBarShowed = !state.isBarShowed;
    },
    closeBar: (state) => {
      state.isBarShowed = false;
    },
  },
});

export const { toggleBar, closeBar } = barSlice.actions;

export default barSlice.reducer;
