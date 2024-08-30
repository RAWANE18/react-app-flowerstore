import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  total: 0,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      state.products.push(action.payload);
      
      state.total += action.payload.price;
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product.productId !== action.payload.productId
      );
      state.total = state.total - action.payload.price;
    },
  },
});

export const { addTocart, removeFromCart } = CartSlice.actions;

export default CartSlice.reducer;