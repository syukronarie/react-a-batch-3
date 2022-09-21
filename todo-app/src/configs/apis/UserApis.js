import axiosInstance from "../axiosInstance";

const UserApis = {
	async getUsers(limit, page) {
		const config = {
			params: {
				limit,
				page: Number(page),
			},
		};
		return await axiosInstance.get("/user", config);
	},

	async getUserById(id) {
		return await axiosInstance.get(`/user/${id}`);
	},
};

export default UserApis;
