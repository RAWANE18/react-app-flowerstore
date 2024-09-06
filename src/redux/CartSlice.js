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
      const { productId, price } = action.payload;
      const existingProduct = state.products.find(product => product.productId === productId);
      
      if (existingProduct) {
        existingProduct.quantity += 1;
        state.total += price;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
        state.total += price;
      }
    },
    decrementFromCart: (state, action) => {
      const { productId, price } = action.payload;
      const existingProduct = state.products.find(product => product.productId === productId);
      
      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1;
          state.total -= price;
        } else {
          state.products = state.products.filter(product => product.productId !== productId);
          state.total -= price;
        }
      }
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product.productId !== action.payload.productId
      );
      state.total = state.total - action.payload.price;
    },
    clearPaymentCart: (state) => {
      state.products=[]
      state.total=0
    },
  },
});

export const { addTocart, decrementFromCart, removeFromCart ,clearPaymentCart} = CartSlice.actions;
export default CartSlice.reducer;
