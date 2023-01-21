import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import barReducer from "./slices/barSlice";
import dataSlice from "./slices/dataSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    bar: barReducer,
    data: dataSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
