import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Layout from "../components/Layout";
import UpdateUser from "../pages/UpdateUser";

const WebRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path='/user/edit' element={<UpdateUser />}/>
				</Route>
				<Route path="*" />
			</Routes>
		</BrowserRouter>
	);
};

export default WebRoutes;
