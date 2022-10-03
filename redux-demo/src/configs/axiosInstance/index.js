import axios from "axios";
import CONST from "../../utils/contants";
import { errorHandler, requestHandler, successHandler } from "../interceptors";

const config = {
	baseURL: CONST.BASE_URL_API,
};

const axiosInstance = axios.create(config);

// Handle request process
axiosInstance.interceptors.request.use((request) => requestHandler(request));

// Handle response process
axiosInstance.interceptors.response.use(
	(response) => successHandler(response),
	(error) => errorHandler(error)
);

export default axiosInstance;
