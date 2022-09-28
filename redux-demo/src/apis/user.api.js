import axiosInstance from "../configs/axiosInstance";

const APIUser = {
	async signup(data) {
		try {
			const response = await axiosInstance.post("/users", data);
			return response;
		} catch (err) {
			const { message } = err.response.data;
			throw new Error(message);
		}
	},
};

export default APIUser;
