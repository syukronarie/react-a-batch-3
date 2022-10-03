import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const loaderSlice = createSlice({
	name: "loader",
	initialState,
	reducers: {
		setLoader(state, action) {
			state = action.payload;
			return state;
		},
	},
});

export const { setLoader } = loaderSlice.actions;
export default loaderSlice.reducer;
