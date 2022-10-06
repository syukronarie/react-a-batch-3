import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import UpdateUser from "../pages/UpdateUser";
import UsersPage from "../pages/UsersPage";

const WebRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/user" element={<UsersPage />} />
				<Route path="/edit-user" element={<UpdateUser />} />
				<Route path="*" />
			</Routes>
		</BrowserRouter>
	);
};

export default WebRoutes;
