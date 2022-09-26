import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		cartAdded(state, action) {
			const { id, title, price } = action.payload;
			state.push({
				id,
				title,
				price,
			});
		},
	},
});

export const { cartAdded } = cartSlice.actions;
export default cartSlice.reducer;
