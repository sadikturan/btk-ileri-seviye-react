import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../pages/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
