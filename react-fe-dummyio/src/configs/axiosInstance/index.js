import axios from "axios";
import CONST from "../../utils/contants";

const config = {
	baseURL: CONST.BASE_URL_API,
	headers: {
		"app-id": CONST.REACT_APP_KEY_ID,
	}
};

const axiosInstance = axios.create(config);


export default axiosInstance;