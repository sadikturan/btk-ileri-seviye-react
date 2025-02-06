import { createSlice } from "@reduxjs/toolkit";
import { router } from "../../App";

const initialState = {
  user: null,
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
      router.navigate("/login");
    },
  },
});

export const { setUser, logout } = accountSlice.actions;
