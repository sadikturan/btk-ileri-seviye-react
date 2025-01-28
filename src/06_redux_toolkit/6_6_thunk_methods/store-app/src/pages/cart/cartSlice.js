import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requests from "../../api/apiClient";

const initialState = {
  cart: null,
  status: "idle",
};

export const addItemToCart = createAsyncThunk(
  "cart/addItemToCart",
  async ({ productId, quantity = 1 }) => {
    try {
      return await requests.cart.addItem(productId, quantity);
    } catch (error) {
      console.log(error);
    }
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addItemToCart.pending, (state, action) => {
      console.log(action);
      state.status = "pendingAddItem" + action.meta.arg.productId;
    });

    builder.addCase(addItemToCart.fulfilled, (state, action) => {
      console.log(action);
      state.cart = action.payload;
      state.status = "idle";
    });

    builder.addCase(addItemToCart.rejected, (state) => {
      state.status = "idle";
    });
  },
});

export const { setCart } = cartSlice.actions;
