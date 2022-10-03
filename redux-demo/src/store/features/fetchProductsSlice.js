import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import APIProduct from "../../apis/product.api";

export const fetchProducts = createAsyncThunk("fetch/products", async () => {
	try {
		const response = await APIProduct.getAllProduct();
		return response.data;
	} catch (err) {
		console.log(err);
	}
});

const initialState = {
	data: [],
	status: "idle",
	error: null,
};

const fetchProductsSlice = createSlice({
	name: "products",
	initialState,
	extraReducers(builder) {
		builder
			.addCase(fetchProducts.pending, (state, action) => {
				state.status = "loading";
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.data = action.payload;
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

export default fetchProductsSlice.reducer;
