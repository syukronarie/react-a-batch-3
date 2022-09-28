import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: [], totalProduct: 0 };

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		cartAdded(state, action) {
			const { id, title, price } = action.payload;
			state.data.push({ id, title, price });
			state.totalProduct = state.data.length;
		},
		cartDeleted(state, action) {
			const { id } = action.payload;
			const filteredData = state.data.filter((val) => val.id !== id);
			state.totalProduct = state.data.length;
			state.data = [...filteredData];
		},
	},
});

export const { cartAdded } = cartSlice.actions;
export default cartSlice.reducer;
