import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import APIUser from "../../apis/user.api";

export const fetchUserById = createAsyncThunk("fetch/userById", async () => {
	try {
		const response = await APIUser.getUserById();
		return response;
	} catch (err) {
		console.log(err);
	}
});

const initialState = {
	data: [],
	status: "idle",
	error: null,
};

const fetchUserByIdSlice = createSlice({
	name: "user",
	initialState,
	extraReducers(builder) {
		builder
			.addCase(fetchUserById.pending, (state, action) => {
				state.status = "loading";
			})
			.addCase(fetchUserById.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.data = action.payload;
			})
			.addCase(fetchUserById.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

export default fetchUserByIdSlice.reducer;
