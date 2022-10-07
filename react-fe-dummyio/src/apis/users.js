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

	async createUser(data) {
		try {
			const response = await axiosInstance.post("/user/create", data);
			console.log(response);
			return response;
		} catch (error) {
			const { message } = error.response;
			throw new Error(message);
		}
	},
};

export default APIUser;
