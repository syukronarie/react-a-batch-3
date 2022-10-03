import axios from "axios";
import Cookies from "js-cookie";
import store from "../../store";
import { setLoader } from "../../store/features/loaderSlice";
import Auth from "../../utils/Auth";
import CONST from "../../utils/contants";

const exceptionApiUrlforRT = (config) => {
	if (!config) return null;
	const arr = [config.url.includes("/auth/login")];
	return arr.includes(true);
};

export const isHandlerEnabled = (config) => {
	return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled
		? false
		: true;
};

export const requestHandler = async (config) => {
	store.dispatch(setLoader(true));
	if (isHandlerEnabled(config)) {
		const token = Cookies.get("token");
		if (token) {
			config.headers.token = token;
		} else if (!exceptionApiUrlforRT(config)) {
			const refreshtoken = Cookies.get("rt");
			const newToken = await axios.get(
				`${CONST.BASE_URL_API}/auth/refresh-token`,
				{
					headers: { refreshtoken },
				}
			);
			Auth.storeUserInfoToCookie(newToken.data.data);
			config.headers.token = newToken.data.data.access.token;
		}
	}
	return config;
};

export const successHandler = (response) => {
	store.dispatch(setLoader(false));
	if (isHandlerEnabled(response)) {
		if (response.status === 200) {
			return response;
		}
	}
	return response;
};

export const errorHandler = (error) => {
	store.dispatch(setLoader(false));
	return Promise.reject({ ...error });
};
