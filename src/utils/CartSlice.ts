import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HomeProducts } from "../Typescript/Home.Interface";

interface CartState {
  cart: HomeProducts[];
}

const initialState: CartState = {
  cart: (() => {
    try {
        const saveCart = localStorage.getItem("cartItem");
        return saveCart ? JSON.parse(saveCart) : [];
    } catch (e) {
        console.log("Cart is stored on localStorage" + e);
        return [];
    }
  })(),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<HomeProducts>) => {
      state.cart.push(action.payload);
      const userNews = JSON.stringify(state.cart);
      localStorage.setItem("cartItem", userNews);
    },
    clearCart: (state) => {
      state.cart = [];
      localStorage.removeItem("cartItem");
    },
  },
});

export const { addToCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
