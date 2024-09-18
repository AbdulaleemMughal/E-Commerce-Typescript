import { configureStore } from "@reduxjs/toolkit";
import FavouriteReducer from "./FavouriteSlice";
import CartReducer from "./CartSlice";

export const appStore = configureStore({
    reducer: {
        favourite: FavouriteReducer,
        cart: CartReducer,
    },
});

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;