import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HomeProducts } from "../Typescript/Home.Interface";

interface FavouriteState {
    items: HomeProducts[];
};

const initialState: FavouriteState = {
    items: (() => {
        try {
            const saveFavoutie = localStorage.getItem("saveFavourite");
            return saveFavoutie ? JSON.parse(saveFavoutie) : [];
        } catch (e) {
            console.log("Cart is stored on localStorage" + e);
            return [];
        }
      })(),
};

export const favouriteSlice = createSlice({
    name: 'favourite',
    initialState,
    reducers: {
        addItems: (state, action: PayloadAction<HomeProducts>) => {
            state.items.push(action.payload); 
            const newFavourite = JSON.stringify(state.items)
                localStorage.setItem('saveFavourite', newFavourite);
          },
        clearItems: (state) => {
            state.items = [];
            localStorage.removeItem("saveFavourite");
        },
    }
});

export const { addItems, clearItems } = favouriteSlice.actions;

export default favouriteSlice.reducer;