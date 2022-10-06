import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import APIUser from "../../apis/users";

const initialState = {
	data: [],
	status: "idie",
	error: null,
};

export const fetchAllUsers = createAsyncThunk("fetch/allusers", async () => {
	try {
		const response = await APIUser.getAllUsers(10);
		console.log({ response });
		return response.data;
	} catch (error) {
		console.log(error);
	}
});

const usersSlice = createSlice({
	name: "users",
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchAllUsers.pending, (state, action) => {
				state.status = "loading";
			})
			.addCase(fetchAllUsers.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.data = action.payload;
			})
			.addCase(fetchAllUsers.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

export default usersSlice.reducer;
