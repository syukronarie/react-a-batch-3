import axiosInstance from '../configs/axiosInstance'

const APIPost = {
    async getlistbytag(tagId) {
		try {
			const response = await axiosInstance.get("/tag/"+tagId+"/post");
			return response;
		} catch (err) {
			const { message } = err.response.data;
			throw new Error(message);
		}
	},
    async createPost(data) {
		try {
			const response = await axiosInstance.post("/post/create", data);
			return response;
		} catch (err) {
			const { message } = err.response.data;
			throw new Error(message);
		}
	},
    async getPostById(postId) {
		try{
			const response = await axiosInstance.get("/post/"+postId);
            return response;
		} catch(err){
			const { message } = err.response.data;
			throw new Error(message);
		}
	},
    async getListByUser(userId) {
        try{
            const response = await axiosInstance.get("/user/"+userId+"/post");
            return response;
        } catch(err) {
            const { message } = err.response.data;
            throw new Error(message);
        }
    },
    async getList() {
        try {
          const response = await axiosInstance.get("/post");
          return response;
        } catch (err) {
          const { message } = err.response.data;
          throw new Error(message);
        }
      },
    
}

export default APIPost;