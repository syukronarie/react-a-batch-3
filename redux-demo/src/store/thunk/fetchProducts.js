import { setLoader } from "../features/loaderSlice";
import { productError, productSuccess } from "../features/fetchProductsSlice";

// export const fetchProducts = () => {
// 	return async (dispatch) => {
// 		dispatch(setLoader(true));
// 		try {
// 			const response = await fetch(`https://dummyjson.com/products`);
// 			const data = await response.json();
// 			dispatch(productSuccess(data));
// 		} catch (err) {
// 			dispatch(productError(err));
// 		}
// 		dispatch(setLoader(false));
// 	};
// };
