import axios from "axios";

const APIProduct = {
	async getAllProduct() {
		try {
			const response = await axios.get("https://dummyjson.com/products");
			return response;
		} catch (err) {
			const { message } = err.response.data;
			throw new Error(message);
		}
	},
};

export default APIProduct;
