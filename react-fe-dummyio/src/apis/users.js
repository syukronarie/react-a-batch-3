import axiosInstance from "../configs/axiosInstance/index";

const APIUser = {
	async getAllUsers(limit) {
		try {
			const config = {
				params: {
					limit,
				},
			};
			return await axiosInstance.get("/user", config);
		} catch (error) {
			const { message } = error.response.data;
			throw new Error(message);
		}
	},

	async getUserById(id) {
		try {
			return await axiosInstance.get(`/user/${id}`);
		} catch (error) {
			const { message } = error.response.data;
			throw new Error(message);
		}
	},
};

export default APIUser;
