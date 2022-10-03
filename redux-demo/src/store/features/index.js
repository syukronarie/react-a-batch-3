import { combineReducers } from "redux";
import cart from "./cartSlice";
import loader from "./loaderSlice";
import products from "./fetchProductsSlice";
import user from "./fetchUserByIdSlice";

const rootReducers = combineReducers({
	cart,
	loader,
	products,
	user,
});

export default rootReducers;
