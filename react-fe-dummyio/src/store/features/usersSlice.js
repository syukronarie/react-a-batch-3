import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import APIUser from "../../apis/users";

const initialState = {
	data: [],
	currentUser: [],
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

export const fetchUserByID = createAsyncThunk("fetch/user/byid", async (id) => {
	try {
		const response = await APIUser.getUserById(id);
		// console.log({ response });
		return response.data;
	} catch (error) {
		console.log(error);
	}
});

export const createUser = createAsyncThunk("create/user", async ({ title, firstName, lastName, email, picture }) => {
	try {
		const response = await APIUser.createUser({ title, firstName, lastName, email, picture });
		console.log({ response });
		return response.data;
	} catch (error) {
		console.log(error.response);
	}
});
export const updateUser = createAsyncThunk("update/user", async (id, { title, firstName, lastName, picture }) => {
	try {
		const res = await APIUser.updateUser(id, {
			body: {
				title,
				firstName,
				lastName,
				picture,
			},
		});
		return res;
	} catch (err) {
		console.log(err.response);
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
			})
			.addCase(fetchUserByID.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.currentUser = action.payload;
			})
			.addCase(createUser.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.data.push(action.payload);
			})
			.addCase(createUser.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
				console.log(state.error);
			});
	},
});

export default usersSlice.reducer;
