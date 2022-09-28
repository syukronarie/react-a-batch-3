import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";

const store = configureStore({
	reducer: {
		cart: cartReducer,
	},
});

export default store;
